export const MAX_IMPORT_BYTES = 2 * 1024 * 1024;

export const COOK_LIMITS = Object.freeze({
  cooks: 250,
  probesPerCook: 16,
  readingsPerCook: 5_000,
  eventsPerCook: 1_000,
  id: 80,
  temperatureAbsMax: 2_000,
  weightMax: 10_000,
  text: Object.freeze({
    name: 120,
    protein: 80,
    cooker: 80,
    wood: 120,
    prep: 2_000,
    outcome: 4_000,
    improve: 2_000,
    probeName: 80,
    event: 500,
  }),
});

const ALLOWED_STATUSES = new Set(["planning", "cooking", "done"]);
const ALLOWED_UNITS = new Set(["lb", "kg"]);
const MAX_TIMESTAMP = 8_640_000_000_000_000;
const ID_PATTERN = /^[A-Za-z0-9][A-Za-z0-9._:-]*$/;
const COLOR_PATTERN = /^#[0-9a-f]{6}$/i;

export class CookDataError extends Error {
  constructor(message) {
    super(message);
    this.name = "CookDataError";
  }
}

function fail(message) {
  throw new CookDataError(message);
}

function isRecord(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

function normalizeId(value, label) {
  if (typeof value !== "string") fail(`${label} must be a string.`);
  const id = value.trim();
  if (!id || id.length > COOK_LIMITS.id || !ID_PATTERN.test(id)) {
    fail(`${label} is invalid.`);
  }
  return id;
}

function normalizeText(value, label, maxLength, fallback = "") {
  if (value === undefined) return fallback;
  if (typeof value !== "string") fail(`${label} must be text.`);
  const normalized = value.normalize("NFC");
  if (normalized.includes("\0")) fail(`${label} contains an invalid character.`);
  if (normalized.length > maxLength) fail(`${label} is too long.`);
  return normalized;
}

function normalizeTimestamp(value, label, { nullable = false } = {}) {
  if (nullable && (value === null || value === undefined)) return null;
  if (
    typeof value !== "number" ||
    !Number.isFinite(value) ||
    !Number.isInteger(value) ||
    value < 0 ||
    value > MAX_TIMESTAMP
  ) {
    fail(`${label} must be a valid timestamp.`);
  }
  return value;
}

function normalizeFiniteNumber(value, label, { min, max }) {
  if (typeof value !== "number" || !Number.isFinite(value) || value < min || value > max) {
    fail(`${label} must be a finite number between ${min} and ${max}.`);
  }
  return value;
}

function normalizeNumericInput(value, label, { min, max }) {
  if (value === undefined || value === null || value === "") return "";
  if (typeof value !== "string" && typeof value !== "number") {
    fail(`${label} must be numeric.`);
  }
  if (typeof value === "string" && value.trim() === "") return "";
  const number = Number(value);
  if (!Number.isFinite(number) || number < min || number > max) {
    fail(`${label} must be a finite number between ${min} and ${max}.`);
  }
  return String(number);
}

function normalizeProbes(value, stats) {
  if (!Array.isArray(value)) fail("Each cook must contain a probes array.");
  if (value.length === 0 || value.length > COOK_LIMITS.probesPerCook) {
    fail(`Each cook must contain 1-${COOK_LIMITS.probesPerCook} probes.`);
  }

  const seen = new Set();
  const probes = [];
  for (const rawProbe of value) {
    if (!isRecord(rawProbe)) fail("Each probe must be an object.");
    const id = normalizeId(rawProbe.id, "Probe ID");
    if (seen.has(id)) {
      stats.skippedDuplicates += 1;
      continue;
    }
    const color = normalizeText(rawProbe.color, "Probe color", 7);
    if (!COLOR_PATTERN.test(color)) fail("Probe color must be a six-digit hex color.");
    seen.add(id);
    probes.push({
      id,
      name: normalizeText(rawProbe.name, "Probe name", COOK_LIMITS.text.probeName),
      color: color.toLowerCase(),
    });
  }

  if (probes.length === 0) fail("Each cook must contain at least one unique probe.");
  return probes;
}

function normalizeReadings(value, probeIds, stats) {
  if (value === undefined) return [];
  if (!Array.isArray(value)) fail("Cook readings must be an array.");
  if (value.length > COOK_LIMITS.readingsPerCook) {
    fail(`A cook cannot contain more than ${COOK_LIMITS.readingsPerCook} readings.`);
  }

  const seen = new Set();
  const readings = [];
  for (const rawReading of value) {
    if (!isRecord(rawReading)) fail("Each reading must be an object.");
    const id = normalizeId(rawReading.id, "Reading ID");
    if (seen.has(id)) {
      stats.skippedDuplicates += 1;
      continue;
    }
    if (!isRecord(rawReading.values)) fail("Reading values must be an object.");

    const values = {};
    for (const [probeId, rawValue] of Object.entries(rawReading.values)) {
      if (!probeIds.has(probeId)) continue;
      values[probeId] = normalizeFiniteNumber(rawValue, "Probe temperature", {
        min: -COOK_LIMITS.temperatureAbsMax,
        max: COOK_LIMITS.temperatureAbsMax,
      });
    }
    if (Object.keys(values).length === 0) continue;

    seen.add(id);
    readings.push({
      id,
      t: normalizeTimestamp(rawReading.t, "Reading time"),
      values,
    });
  }
  return readings.sort((a, b) => a.t - b.t);
}

function normalizeEvents(value, stats) {
  if (value === undefined) return [];
  if (!Array.isArray(value)) fail("Cook events must be an array.");
  if (value.length > COOK_LIMITS.eventsPerCook) {
    fail(`A cook cannot contain more than ${COOK_LIMITS.eventsPerCook} timeline events.`);
  }

  const seen = new Set();
  const events = [];
  for (const rawEvent of value) {
    if (!isRecord(rawEvent)) fail("Each timeline event must be an object.");
    const id = normalizeId(rawEvent.id, "Timeline event ID");
    if (seen.has(id)) {
      stats.skippedDuplicates += 1;
      continue;
    }
    const text = normalizeText(rawEvent.text, "Timeline event", COOK_LIMITS.text.event).trim();
    if (!text) continue;
    seen.add(id);
    events.push({
      id,
      t: normalizeTimestamp(rawEvent.t, "Timeline event time"),
      text,
    });
  }
  return events.sort((a, b) => a.t - b.t);
}

function normalizeCook(rawCook, stats) {
  if (!isRecord(rawCook)) fail("Each cook must be an object.");
  const id = normalizeId(rawCook.id, "Cook ID");
  const probes = normalizeProbes(rawCook.probes, stats);
  const probeIds = new Set(probes.map((probe) => probe.id));

  const status = rawCook.status === undefined ? "planning" : rawCook.status;
  if (typeof status !== "string" || !ALLOWED_STATUSES.has(status)) {
    fail("Cook status must be planning, cooking, or done.");
  }
  const unit = rawCook.unit === undefined ? "lb" : rawCook.unit;
  if (typeof unit !== "string" || !ALLOWED_UNITS.has(unit)) {
    fail("Cook weight unit must be lb or kg.");
  }
  const rating = rawCook.rating === undefined ? 0 : rawCook.rating;
  if (!Number.isInteger(rating) || rating < 0 || rating > 5) {
    fail("Cook rating must be an integer from 0 to 5.");
  }

  return {
    id,
    name: normalizeText(rawCook.name, "Cook name", COOK_LIMITS.text.name),
    protein: normalizeText(rawCook.protein, "Protein", COOK_LIMITS.text.protein, "Other"),
    weight: normalizeNumericInput(rawCook.weight, "Weight", { min: 0, max: COOK_LIMITS.weightMax }),
    unit,
    cooker: normalizeText(rawCook.cooker, "Cooker", COOK_LIMITS.text.cooker, "Other"),
    wood: normalizeText(rawCook.wood, "Wood", COOK_LIMITS.text.wood),
    targetTemp: normalizeNumericInput(rawCook.targetTemp, "Pit target", {
      min: -COOK_LIMITS.temperatureAbsMax,
      max: COOK_LIMITS.temperatureAbsMax,
    }),
    prep: normalizeText(rawCook.prep, "Prep notes", COOK_LIMITS.text.prep),
    createdAt: normalizeTimestamp(rawCook.createdAt, "Cook creation time"),
    startedAt: normalizeTimestamp(rawCook.startedAt, "Cook start time", { nullable: true }),
    status,
    probes,
    readings: normalizeReadings(rawCook.readings, probeIds, stats),
    events: normalizeEvents(rawCook.events, stats),
    rating,
    outcome: normalizeText(rawCook.outcome, "Outcome notes", COOK_LIMITS.text.outcome),
    improve: normalizeText(rawCook.improve, "Improvement notes", COOK_LIMITS.text.improve),
  };
}

export function normalizeCookImport(payload, { existingCookIds = [] } = {}) {
  const incoming = Array.isArray(payload)
    ? payload
    : isRecord(payload) && Array.isArray(payload.cooks)
      ? payload.cooks
      : null;
  if (!incoming) fail("Backup must be an array of cooks or an object containing a cooks array.");
  if (incoming.length > COOK_LIMITS.cooks) {
    fail(`A backup cannot contain more than ${COOK_LIMITS.cooks} cooks.`);
  }

  const seenCookIds = new Set(
    Array.from(existingCookIds, (id) => normalizeId(id, "Existing cook ID")),
  );
  if (seenCookIds.size > COOK_LIMITS.cooks) {
    fail(`Stored data cannot contain more than ${COOK_LIMITS.cooks} cooks.`);
  }
  const stats = { skippedDuplicates: 0 };
  const cooks = [];

  for (const rawCook of incoming) {
    if (!isRecord(rawCook)) fail("Each cook must be an object.");
    const id = normalizeId(rawCook.id, "Cook ID");
    if (seenCookIds.has(id)) {
      stats.skippedDuplicates += 1;
      continue;
    }
    if (seenCookIds.size >= COOK_LIMITS.cooks) {
      fail(`Importing this backup would exceed the ${COOK_LIMITS.cooks}-cook limit.`);
    }
    const cook = normalizeCook(rawCook, stats);
    seenCookIds.add(cook.id);
    cooks.push(cook);
  }

  return { cooks, skippedDuplicates: stats.skippedDuplicates };
}

export function recoverCookStorage(raw) {
  if (raw === null || raw === "") {
    return { cooks: [], recoveryRaw: null, error: null };
  }
  if (typeof raw !== "string") {
    return {
      cooks: [],
      recoveryRaw: String(raw),
      error: "Saved cook data is not in a readable format.",
    };
  }

  try {
    return {
      cooks: normalizeCookImport(JSON.parse(raw)).cooks,
      recoveryRaw: null,
      error: null,
    };
  } catch {
    return {
      cooks: [],
      recoveryRaw: raw,
      error: "Saved cook data could not be opened safely. The original browser data has not been changed.",
    };
  }
}

export function removeProbeData(cook, probeId) {
  const readings = cook.readings
    .map((reading) => {
      const values = { ...reading.values };
      delete values[probeId];
      return { ...reading, values };
    })
    .filter((reading) => Object.keys(reading.values).length > 0);

  return {
    probes: cook.probes.filter((probe) => probe.id !== probeId),
    readings,
  };
}

export function csvCell(value) {
  const source = value ?? "";
  const raw = String(source);
  const safe = typeof source === "string" && /^\s*[=+\-@]/u.test(raw) ? `'${raw}` : raw;
  return /[",\r\n]/u.test(safe) ? `"${safe.replace(/"/g, '""')}"` : safe;
}

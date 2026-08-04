import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

import {
  COOK_LIMITS,
  CookDataError,
  MAX_IMPORT_BYTES,
  csvCell,
  normalizeCookImport,
  recoverCookStorage,
  removeProbeData,
} from "../lib/cookData.js";

function cook(overrides = {}) {
  return {
    id: "cook-1",
    name: "Sunday brisket",
    protein: "Brisket",
    weight: "12.5",
    unit: "lb",
    cooker: "Offset",
    wood: "Oak",
    targetTemp: "250",
    prep: "Salt and pepper",
    createdAt: 1_700_000_000_000,
    startedAt: null,
    status: "planning",
    probes: [
      { id: "probe-1", name: "Pit", color: "#D6450F" },
      { id: "probe-2", name: "Meat", color: "#2563eb" },
    ],
    readings: [
      { id: "reading-1", t: 1_700_000_000_100, values: { "probe-1": 250, "probe-2": 145 } },
    ],
    events: [
      { id: "event-1", t: 1_700_000_000_200, text: " Wrapped " },
    ],
    rating: 0,
    outcome: "",
    improve: "",
    ...overrides,
  };
}

test("CSV cells neutralize formulas even after leading whitespace", () => {
  assert.equal(csvCell("=2+2"), "'=2+2");
  assert.equal(csvCell("  +cmd"), "'  +cmd");
  assert.equal(csvCell("\t-10"), "'\t-10");
  assert.equal(csvCell("\u00a0@SUM(A1)"), "'\u00a0@SUM(A1)");
  assert.equal(csvCell("plain text"), "plain text");
  assert.equal(csvCell("=SUM(1,2)"), '"\'=SUM(1,2)"');
  assert.equal(csvCell('safe "quoted", value'), '"safe ""quoted"", value"');
});

test("normalizes a valid current backup and skips duplicate IDs", () => {
  const source = cook({
    probes: [
      { id: "probe-1", name: "Pit", color: "#D6450F" },
      { id: "probe-1", name: "Duplicate", color: "#2563eb" },
      { id: "probe-2", name: "Meat", color: "#2563eb" },
    ],
    readings: [
      { id: "reading-1", t: 1_700_000_000_100, values: { "probe-1": 250, "probe-2": 145 } },
      { id: "reading-1", t: 1_700_000_000_200, values: { "probe-1": 255 } },
    ],
    events: [
      { id: "event-1", t: 1_700_000_000_200, text: " Wrapped " },
      { id: "event-1", t: 1_700_000_000_300, text: "Duplicate" },
    ],
  });

  const result = normalizeCookImport({ cooks: [source, { ...source }] });
  assert.equal(result.cooks.length, 1);
  assert.equal(result.cooks[0].probes.length, 2);
  assert.equal(result.cooks[0].readings.length, 1);
  assert.equal(result.cooks[0].events.length, 1);
  assert.equal(result.cooks[0].events[0].text, "Wrapped");
  assert.equal(result.cooks[0].probes[0].color, "#d6450f");
  assert.equal(result.cooks[0].weight, "12.5");
  assert.equal(result.skippedDuplicates, 4);
});

test("skips cook IDs that already exist on the device", () => {
  const result = normalizeCookImport([cook()], { existingCookIds: ["cook-1"] });
  assert.deepEqual(result.cooks, []);
  assert.equal(result.skippedDuplicates, 1);
});

test("rejects invalid statuses, units, timestamps, and numbers", () => {
  assert.throws(() => normalizeCookImport([cook({ status: "archived" })]), CookDataError);
  assert.throws(() => normalizeCookImport([cook({ unit: "stone" })]), CookDataError);
  assert.throws(() => normalizeCookImport([cook({ createdAt: Number.NaN })]), CookDataError);
  assert.throws(() => normalizeCookImport([cook({ targetTemp: "Infinity" })]), CookDataError);
  assert.throws(
    () => normalizeCookImport([cook({ readings: [{ id: "reading-1", t: 100, values: { "probe-1": Infinity } }] })]),
    CookDataError,
  );
});

test("rejects malformed objects and data beyond text or collection caps", () => {
  assert.throws(() => normalizeCookImport({ cooks: "not-an-array" }), CookDataError);
  assert.throws(() => normalizeCookImport([cook({ name: "x".repeat(COOK_LIMITS.text.name + 1) })]), CookDataError);
  assert.throws(
    () => normalizeCookImport([cook({ probes: Array.from({ length: COOK_LIMITS.probesPerCook + 1 }, (_, index) => ({ id: `probe-${index}`, name: "Probe", color: "#d6450f" })) })]),
    CookDataError,
  );
  assert.throws(
    () => normalizeCookImport(Array.from({ length: COOK_LIMITS.cooks + 1 }, (_, index) => cook({ id: `cook-${index}` }))),
    CookDataError,
  );
  assert.throws(
    () => normalizeCookImport([cook({ id: "new-cook" })], {
      existingCookIds: Array.from({ length: COOK_LIMITS.cooks }, (_, index) => `stored-${index}`),
    }),
    CookDataError,
  );
});

test("drops values for unknown probes without retaining untrusted keys", () => {
  const result = normalizeCookImport([
    cook({ readings: [{ id: "reading-1", t: 1_700_000_000_100, values: { "probe-1": 250, unknown: 999 } }] }),
  ]);
  assert.deepEqual(result.cooks[0].readings[0].values, { "probe-1": 250 });
});

test("the JSON upload boundary is exactly two mebibytes", () => {
  assert.equal(MAX_IMPORT_BYTES, 2_097_152);
});

test("unreadable stored data is preserved for explicit recovery", () => {
  const malformed = '{"cooks":[not-json';
  const recovered = recoverCookStorage(malformed);
  assert.deepEqual(recovered.cooks, []);
  assert.equal(recovered.recoveryRaw, malformed);
  assert.match(recovered.error, /not been changed/i);

  const valid = recoverCookStorage(JSON.stringify([cook()]));
  assert.equal(valid.cooks.length, 1);
  assert.equal(valid.recoveryRaw, null);
});

test("CookLog enforces the upload boundary and cleans up download anchors", async () => {
  const component = await readFile(new URL("../components/CookLog.jsx", import.meta.url), "utf8");
  assert.match(component, /file\.size > MAX_IMPORT_BYTES/);
  assert.match(component, /a\.remove\(\)/);
  assert.match(component, /URL\.revokeObjectURL\(url\)/);
  assert.match(component, /aria-live=/);
  assert.match(component, /role=\{importStatus\.type === "error" \? "alert" : "status"\}/);
  assert.match(component, /if \(!loaded \|\| !canPersist\) return/);
  assert.match(component, /Download original data/);
  assert.match(component, /window\.confirm/);
  assert.match(component, /permanently delete its values from/);
  assert.match(component, /Readings left with no values will also be removed/);
  assert.match(component, /const probeIds = new Set/);
  assert.match(component, /pts\.length < 2 \|\| allTemps\.length === 0/);
});

test("removing a probe drops its values and readings left empty without mutating the source", () => {
  const source = cook({
    readings: [
      { id: "reading-1", t: 1_700_000_000_100, values: { "probe-1": 250 } },
      { id: "reading-2", t: 1_700_000_000_200, values: { "probe-1": 255, "probe-2": 150 } },
    ],
  });

  const result = removeProbeData(source, "probe-1");

  assert.deepEqual(result.probes.map((probe) => probe.id), ["probe-2"]);
  assert.deepEqual(result.readings, [
    { id: "reading-2", t: 1_700_000_000_200, values: { "probe-2": 150 } },
  ]);
  assert.deepEqual(source.readings[0].values, { "probe-1": 250 });
});

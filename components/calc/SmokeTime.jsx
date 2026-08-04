"use client";

import { useMemo, useState } from "react";
import { Clock, AlertTriangle, Printer } from "lucide-react";
import { SMOKE_TIMES } from "@/lib/woods";
import GearForCook from "@/components/GearForCook";

const hm = (minutes) => {
  if (!Number.isFinite(minutes)) return "Enter a valid weight";
  const hours = Math.floor(minutes / 60);
  const mins = Math.round(minutes % 60);
  return hours > 0 ? `${hours} hr ${mins ? `${mins} min` : ""}`.trim() : `${mins} min`;
};

export default function SmokeTime({ defaultProtein, defaultWeight } = {}) {
  const initialIdx = defaultProtein
    ? Math.max(0, SMOKE_TIMES.findIndex((item) => item.protein === defaultProtein))
    : 0;
  const [idx, setIdx] = useState(initialIdx);
  const [weight, setWeight] = useState(defaultWeight ?? 13);
  const [serveDate, setServeDate] = useState("");
  const [serve, setServe] = useState("18:00");
  const [rest, setRest] = useState(1);
  const selected = SMOKE_TIMES[idx];
  const minWeight = selected.minWeight ?? 0.25;
  const maxWeight = selected.maxWeight ?? 100;
  const numericWeight = Number(weight);
  const weightError = selected.fixedMin
    ? null
    : weight === "" || !Number.isFinite(numericWeight)
      ? "Enter a valid weight."
      : numericWeight < minWeight
        ? selected.minWeight
          ? `${selected.protein} is supported only from ${selected.minWeight} to ${selected.maxWeight} lb under the cited USDA smoking guidance.`
          : "Enter a weight of at least 0.25 lb."
      : selected.maxWeight && numericWeight > selected.maxWeight
        ? `${selected.protein} is supported only from ${selected.minWeight} to ${selected.maxWeight} lb under the cited USDA smoking guidance.`
        : null;
  const numericRest = Number(rest);
  const restError = rest === "" || !Number.isFinite(numericRest) || numericRest < 0 || numericRest > 24
    ? "Enter a rest or hold buffer from 0 to 24 hours."
    : null;

  const { minMin, maxMin } = useMemo(() => {
    if (selected.fixedMin) return { minMin: selected.fixedMin, maxMin: selected.fixedMax };
    if (weightError) return { minMin: null, maxMin: null };
    return {
      minMin: numericWeight * selected.minPerLb,
      maxMin: numericWeight * selected.maxPerLb,
    };
  }, [selected, numericWeight, weightError]);

  const { startBy, scheduleError } = useMemo(() => {
    if (!serveDate || !serve || !Number.isFinite(maxMin) || restError) {
      return { startBy: null, scheduleError: null };
    }
    const servingTime = new Date(`${serveDate}T${serve}:00`);
    if (!Number.isFinite(servingTime.getTime())) {
      return { startBy: null, scheduleError: "Choose a valid serving date and time." };
    }
    const currentTime = new Date();
    if (servingTime <= currentTime) {
      return { startBy: null, scheduleError: "Choose a serving date and time in the future." };
    }
    const startDate = new Date(servingTime.getTime() - (numericRest * 60 + maxMin) * 60_000);
    if (startDate <= currentTime) {
      return { startBy: null, scheduleError: "That serving time does not leave enough time for the longer estimate and buffer. Choose a later date or time." };
    }
    return { startBy: startDate.toLocaleString([], {
      weekday: "short",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
    }), scheduleError: null };
  }, [serveDate, serve, numericRest, maxMin, restError]);

  const changeProtein = (event) => {
    const nextIdx = Number(event.target.value);
    setIdx(nextIdx);
  };

  return (
    <div className="space-y-5" data-printable-results>
      <div className="grid gap-4 sm:grid-cols-3">
        <label className="block">
          <span className="mb-1 block text-sm font-medium">Protein</span>
          <select value={idx} onChange={changeProtein} className="inp">
            {SMOKE_TIMES.map((item, index) => <option key={item.protein} value={index}>{item.protein}</option>)}
          </select>
        </label>
        <label className="block">
          <span className="mb-1 block text-sm font-medium">{selected.fixedMin ? "Weight (n/a for ribs)" : "Weight (lb)"}</span>
          <input type="number" min={minWeight} max={maxWeight} step="0.25" value={weight} onChange={(event) => setWeight(event.target.value)} disabled={!!selected.fixedMin} aria-invalid={weightError ? "true" : undefined} aria-describedby={weightError ? "smoke-weight-error" : selected.minWeight || selected.maxWeight ? "smoke-weight-note" : undefined} className="inp disabled:bg-stone-100 disabled:text-muted" />
          {weightError && <span id="smoke-weight-error" role="alert" className="mt-1 block text-xs font-medium text-rose-700">{weightError}</span>}
          {selected.minWeight && selected.maxWeight && !weightError && <span id="smoke-weight-note" className="mt-1 block text-xs text-muted">USDA smoking guidance: {selected.minWeight}-{selected.maxWeight} lb only.</span>}
        </label>
        <label className="block">
          <span className="mb-1 block text-sm font-medium">Typical pit temp</span>
          <input value={`${selected.pit}°F`} readOnly className="inp bg-stone-50 text-muted" />
        </label>
      </div>

      <div className="rounded-xl border border-line bg-white p-5 shadow-card" aria-live="polite" aria-atomic="true">
        <div className="text-sm font-medium text-muted">Estimated cook time</div>
        <div className="mt-1 font-display text-3xl font-bold text-ember">{minMin === null ? "Enter a supported weight" : `${hm(minMin)} – ${hm(maxMin)}`}</div>
        <div className="mt-1 text-sm text-muted">Finish target: {selected.done}</div>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <label className="block">
          <span className="mb-1 block text-sm font-medium">Serve date</span>
          <input type="date" value={serveDate} onChange={(event) => setServeDate(event.target.value)} className="inp" />
        </label>
        <label className="block">
          <span className="mb-1 block text-sm font-medium">I want to serve at</span>
          <input type="time" value={serve} onChange={(event) => setServe(event.target.value)} className="inp" />
        </label>
        <label className="block">
          <span className="mb-1 block text-sm font-medium">Rest or hold buffer (hours)</span>
          <input type="number" min="0" max="24" step="0.5" value={rest} onChange={(event) => setRest(event.target.value)} aria-invalid={restError ? "true" : undefined} aria-describedby={restError ? "smoke-rest-error" : undefined} className="inp" />
          {restError && <span id="smoke-rest-error" role="alert" className="mt-1 block text-xs font-medium text-rose-700">{restError}</span>}
        </label>
      </div>

      {scheduleError && <p role="alert" className="rounded-lg border border-rose-200 bg-rose-50 p-3 text-sm font-medium text-rose-800">{scheduleError}</p>}

      {startBy && (
        <div className="rounded-xl border border-ink bg-smoke p-5 text-paper" aria-live="polite" aria-atomic="true">
          <div className="flex items-center gap-2 text-sm font-medium text-paper/70"><Clock className="h-4 w-4" aria-hidden="true" /> Planning start time</div>
          <div className="mt-1 font-display text-3xl font-bold">{startBy}</div>
          <div className="mt-1 text-sm text-paper/70">Uses the longer estimate plus your buffer. If food finishes well ahead, use equipment designed for hot holding, keep it at or above 140°F, and verify the temperature with a food thermometer.</div>
        </div>
      )}

      <div className="flex gap-3 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
        <AlertTriangle className="h-5 w-5 shrink-0 text-amber-600" aria-hidden="true" />
        <p><strong>Cook to temperature, not the clock.</strong> {selected.note} These are planning estimates only; weather, your cooker, fat content, and wrapping all change the real time. Confirm doneness on the <a href="/tools/doneness-temps/" className="font-semibold underline">doneness chart</a>. Follow your smoker manufacturer’s fire-safety, placement, and supervision instructions. For longer holds, follow <a href="https://ask.fsis.usda.gov/article/What-is-the-Danger-Zone" target="_blank" rel="noopener noreferrer" className="font-semibold underline">current USDA hot-holding guidance</a>.</p>
      </div>

      <button
        type="button"
        onClick={() => window.print()}
        className="no-print inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-ember-600 bg-white px-4 py-2 text-sm font-semibold text-ember-700 hover:bg-ember-50 focus:outline-none focus:ring-2 focus:ring-ember-600 focus:ring-offset-2"
        aria-label="Print results"
      >
        <Printer className="h-4 w-4" aria-hidden="true" />
        Print results
      </button>

      <GearForCook protein={selected.protein} />
    </div>
  );
}

"use client";
import { useState, useMemo } from "react";
import { SMOKE_TIMES } from "@/lib/woods";
import { Clock, AlertTriangle, Printer } from "lucide-react";
import GearForCook from "@/components/GearForCook";

const hm = (min) => { const h = Math.floor(min / 60), m = Math.round(min % 60); return h > 0 ? `${h} hr ${m ? m + " min" : ""}`.trim() : `${m} min`; };

export default function SmokeTime({ defaultProtein, defaultWeight } = {}) {
  const initialIdx = defaultProtein
    ? Math.max(0, SMOKE_TIMES.findIndex((s) => s.protein === defaultProtein))
    : 0;
  const [idx, setIdx] = useState(initialIdx);
  const [weight, setWeight] = useState(defaultWeight ?? 13);
  const [serve, setServe] = useState("18:00");
  const [rest, setRest] = useState(1);
  const p = SMOKE_TIMES[idx];

  const { minMin, maxMin } = useMemo(() => {
    if (p.fixedMin) return { minMin: p.fixedMin, maxMin: p.fixedMax };
    const w = Number(weight) || 0;
    return { minMin: w * p.minPerLb, maxMin: w * p.maxPerLb };
  }, [p, weight]);

  const startBy = useMemo(() => {
    if (!serve) return null;
    const [hh, mm] = serve.split(":").map(Number);
    const serveDate = new Date();
    serveDate.setHours(hh, mm, 0, 0);
    const startMs = serveDate.getTime() - (rest * 60 + maxMin) * 60000;
    const d = new Date(startMs);
    const sameDay = d.getDate() === serveDate.getDate();
    return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) + (sameDay ? "" : " (day before)");
  }, [serve, rest, maxMin]);

  return (
    <div className="space-y-5" data-printable-results>
      <div className="grid gap-4 sm:grid-cols-3">
        <label className="block">
          <span className="mb-1 block text-sm font-medium">Protein</span>
          <select value={idx} onChange={(e) => setIdx(Number(e.target.value))} className="inp">
            {SMOKE_TIMES.map((s, i) => <option key={s.protein} value={i}>{s.protein}</option>)}
          </select>
        </label>
        <label className="block">
          <span className="mb-1 block text-sm font-medium">{p.fixedMin ? "Weight (n/a for ribs)" : "Weight (lb)"}</span>
          <input type="number" min="0" step="0.5" value={weight} onChange={(e) => setWeight(e.target.value)} disabled={!!p.fixedMin} className="inp disabled:bg-stone-100 disabled:text-muted" />
        </label>
        <label className="block">
          <span className="mb-1 block text-sm font-medium">Typical pit temp</span>
          <input value={`${p.pit}°F`} readOnly className="inp bg-stone-50 text-muted" />
        </label>
      </div>

      <div className="rounded-xl border border-line bg-white p-5 shadow-card">
        <div className="text-sm font-medium text-muted">Estimated cook time</div>
        <div className="mt-1 font-display text-3xl font-bold text-ember">{hm(minMin)} – {hm(maxMin)}</div>
        <div className="mt-1 text-sm text-muted">Pull at: {p.done}</div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1 block text-sm font-medium">I want to serve at</span>
          <input type="time" value={serve} onChange={(e) => setServe(e.target.value)} className="inp" />
        </label>
        <label className="block">
          <span className="mb-1 block text-sm font-medium">Rest time (hours)</span>
          <input type="number" min="0" step="0.5" value={rest} onChange={(e) => setRest(Number(e.target.value))} className="inp" />
        </label>
      </div>

      {startBy && (
        <div className="rounded-xl border border-ink bg-smoke p-5 text-paper">
          <div className="flex items-center gap-2 text-sm font-medium text-paper/70"><Clock className="h-4 w-4" /> To be safe, start cooking by</div>
          <div className="mt-1 font-display text-3xl font-bold">{startBy}</div>
          <div className="mt-1 text-sm text-paper/70">Uses the longer time estimate plus your rest, so you have a buffer. Finishing early is fine, just hold it wrapped in a cooler.</div>
        </div>
      )}

      <div className="flex gap-3 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
        <AlertTriangle className="h-5 w-5 shrink-0 text-amber-600" />
        <p><strong>Cook to temperature, not the clock.</strong> {p.note} These are planning estimates only; weather, your cooker, fat content, and wrapping all change the real time. Confirm doneness on the <a href="/tools/doneness-temps/" className="font-semibold underline">doneness chart</a>.</p>
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

      <GearForCook protein={p.protein} />
    </div>
  );
}

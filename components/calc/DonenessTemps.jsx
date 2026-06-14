"use client";
import { useState, useMemo } from "react";
import { TEMPS } from "@/lib/temps";
import { Thermometer, Check, X } from "lucide-react";

// Flat list for the checker (label + safeMin).
const FLAT = TEMPS.flatMap((g) => g.items.map((i) => ({ ...i, group: g.group })));

export default function DonenessTemps() {
  const [reading, setReading] = useState("");
  const [sel, setSel] = useState(FLAT[0].name);
  const item = FLAT.find((i) => i.name === sel);

  const verdict = useMemo(() => {
    if (reading === "" || !item) return null;
    const r = Number(reading);
    if (Number.isNaN(r)) return null;
    return r >= item.safeMin;
  }, [reading, item]);

  return (
    <div className="space-y-6">
      {/* Checker */}
      <div className="rounded-xl border border-line bg-white p-5 shadow-card">
        <h2 className="font-display text-lg font-bold">Check a thermometer reading</h2>
        <div className="mt-3 grid gap-3 sm:grid-cols-3">
          <label className="block"><span className="mb-1 block text-sm font-medium">Food</span>
            <select value={sel} onChange={(e) => setSel(e.target.value)} className="inp">{FLAT.map((i) => <option key={i.name}>{i.name}</option>)}</select>
          </label>
          <label className="block"><span className="mb-1 block text-sm font-medium">Your reading (°F)</span>
            <input type="number" value={reading} onChange={(e) => setReading(e.target.value)} className="inp" placeholder="e.g. 165" />
          </label>
          <div className="flex items-end">
            {verdict === null ? (
              <div className="text-sm text-muted">Safe minimum: <strong>{item.safeMin}°F</strong>{item.rest ? ` + ${item.rest} min rest` : ""}</div>
            ) : verdict ? (
              <div className="flex items-center gap-2 rounded-lg bg-emerald-50 px-3 py-2 text-sm font-semibold text-emerald-700"><Check className="h-4 w-4" /> At or above the {item.safeMin}°F safe minimum</div>
            ) : (
              <div className="flex items-center gap-2 rounded-lg bg-rose-50 px-3 py-2 text-sm font-semibold text-rose-700"><X className="h-4 w-4" /> Below the {item.safeMin}°F safe minimum, keep cooking</div>
            )}
          </div>
        </div>
        {item.bbqTarget && <p className="mt-3 text-sm text-muted"><strong className="text-ink">BBQ target:</strong> {item.bbqTarget}</p>}
      </div>

      {/* Full chart */}
      {TEMPS.map((g) => (
        <div key={g.group} className="overflow-hidden rounded-xl border border-line bg-white">
          <div className="border-b border-line bg-[#f6f1e8] px-4 py-2 font-display font-bold">{g.group}</div>
          <table className="w-full text-sm">
            <thead><tr className="text-left text-xs uppercase tracking-wide text-muted">
              <th className="px-4 py-2 font-semibold">Item</th>
              <th className="px-4 py-2 font-semibold">USDA safe min</th>
              <th className="px-4 py-2 font-semibold">BBQ target / notes</th>
            </tr></thead>
            <tbody>
              {g.items.map((i) => (
                <tr key={i.name} className="border-t border-line/70">
                  <td className="px-4 py-2 font-medium">{i.name}</td>
                  <td className="px-4 py-2 font-mono">{i.safeMin}°F{i.rest ? ` +${i.rest}m` : ""}</td>
                  <td className="px-4 py-2 text-muted">{i.bbqTarget}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}

      <p className="rounded-lg border border-line bg-paper p-4 text-xs leading-relaxed text-muted">
        Safe minimum internal temperatures are from the USDA Food Safety and Inspection Service (FSIS). BBQ target temperatures are texture goals from common practice, not food-safety numbers. This is general information, not professional food-safety advice; always follow current USDA guidance and confirm the safe minimum with a thermometer before serving.
      </p>
    </div>
  );
}

"use client";

import { useMemo, useState } from "react";
import { Check, X } from "lucide-react";
import { TEMPS } from "@/lib/temps";
import AmazonCategoryLink from "@/components/AmazonCategoryLink";

const FLAT = TEMPS
  .flatMap((group) => group.items.map((item) => ({ ...item, group: group.group })))
  .filter((item) => Number.isFinite(item.safeMin));

export default function DonenessTemps() {
  const [reading, setReading] = useState("");
  const [sel, setSel] = useState(FLAT[0].name);
  const item = FLAT.find((entry) => entry.name === sel);
  const numericReading = Number(reading);
  const readingError = reading === ""
    ? null
    : !Number.isFinite(numericReading) || numericReading < 0 || numericReading > 500
      ? "Enter a thermometer reading from 0°F to 500°F."
      : null;

  const verdict = useMemo(() => {
    if (reading === "" || readingError || !item) return null;
    return numericReading >= item.safeMin;
  }, [reading, readingError, numericReading, item]);

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-line bg-white p-5 shadow-card">
        <h2 className="font-display text-lg font-bold">Check a thermometer reading</h2>
        <div className="mt-3 grid gap-3 sm:grid-cols-3">
          <label className="block">
            <span className="mb-1 block text-sm font-medium">Food</span>
            <select value={sel} onChange={(event) => setSel(event.target.value)} className="inp">
              {FLAT.map((entry) => <option key={entry.name}>{entry.name}</option>)}
            </select>
          </label>
          <label className="block">
            <span className="mb-1 block text-sm font-medium">Your reading (°F)</span>
            <input type="number" min="0" max="500" step="0.1" inputMode="decimal" value={reading} onChange={(event) => setReading(event.target.value)} aria-invalid={readingError ? "true" : undefined} aria-describedby={readingError ? "thermometer-reading-error" : undefined} className="inp" placeholder="e.g. 165" />
          </label>
          <div className="flex items-end" aria-live="polite" aria-atomic="true">
            {readingError ? (
              <div id="thermometer-reading-error" role="alert" className="rounded-lg bg-rose-50 px-3 py-2 text-sm font-semibold text-rose-700">{readingError}</div>
            ) : verdict === null ? (
              <div className="text-sm text-muted">Minimum: <strong>{item.safeMin}°F</strong>{item.rest ? ` + ${item.rest} min rest` : ""}</div>
            ) : verdict ? (
              <div className="flex items-center gap-2 rounded-lg bg-emerald-50 px-3 py-2 text-sm font-semibold text-emerald-700">
                <Check className="h-4 w-4" aria-hidden="true" />
                {item.rest ? `Temperature reached; rest at least ${item.rest} minutes before serving` : `At or above the ${item.safeMin}°F minimum`}
              </div>
            ) : (
              <div className="flex items-center gap-2 rounded-lg bg-rose-50 px-3 py-2 text-sm font-semibold text-rose-700">
                <X className="h-4 w-4" aria-hidden="true" /> Below the {item.safeMin}°F minimum; keep cooking
              </div>
            )}
          </div>
        </div>
        {item.bbqTarget && <p className="mt-3 text-sm text-muted"><strong className="text-ink">Guidance:</strong> {item.bbqTarget}</p>}
      </div>

      {TEMPS.map((group) => (
        <div key={group.group} className="rounded-xl border border-line bg-white">
          <div className="border-b border-line bg-[#f6f1e8] px-4 py-2 font-display font-bold">{group.group}</div>
          <div role="region" aria-label={`${group.group} temperature table`} tabIndex="0" className="overflow-x-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember-600 focus-visible:ring-offset-2">
            <table className="w-full min-w-[42rem] text-sm">
              <thead>
                <tr className="text-left text-xs uppercase tracking-wide text-muted">
                  <th className="px-4 py-2 font-semibold">Item</th>
                  <th className="px-4 py-2 font-semibold">USDA minimum</th>
                  <th className="px-4 py-2 font-semibold">Texture target or notes</th>
                </tr>
              </thead>
              <tbody>
                {group.items.map((entry) => (
                  <tr key={entry.name} className="border-t border-line/70">
                    <td className="px-4 py-2 font-medium">{entry.name}</td>
                    <td className="px-4 py-2 font-mono">{entry.safeLabel || `${entry.safeMin}°F${entry.rest ? ` +${entry.rest}m` : ""}`}</td>
                    <td className="px-4 py-2 text-muted">{entry.bbqTarget}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}

      <p className="rounded-lg border border-line bg-paper p-4 text-xs leading-relaxed text-muted">
        Safe minimum internal temperatures are from the USDA Food Safety and Inspection Service (FSIS). BBQ texture targets are common-practice goals, not food-safety numbers. This is general information, not professional food-safety advice; always follow <a href="https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart" target="_blank" rel="noopener noreferrer" className="font-semibold underline">current USDA guidance</a> and confirm the minimum with a food thermometer before serving.
      </p>

      <AmazonCategoryLink label="instant-read meat thermometers" query="instant read meat thermometer" />
    </div>
  );
}

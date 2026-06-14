"use client";
import { useState, useMemo } from "react";
import { Soup, AlertTriangle } from "lucide-react";

// Approximate grams of salt per teaspoon by brand.
const SALT = { "Diamond Crystal kosher": 2.8, "Morton kosher": 4.8, "Table / fine sea": 6.0 };

export default function DryBrine() {
  const [weight, setWeight] = useState(12);
  const [unit, setUnit] = useState("lb");
  const [pct, setPct] = useState(0.5);
  const [brand, setBrand] = useState("Diamond Crystal kosher");

  const { grams, tsp } = useMemo(() => {
    const g = unit === "lb" ? Number(weight) * 453.592 : Number(weight) * 1000;
    const salt = (g * pct) / 100;
    return { grams: salt, tsp: salt / SALT[brand] };
  }, [weight, unit, pct, brand]);

  return (
    <div className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block"><span className="mb-1 block text-sm font-medium">Meat weight</span>
          <div className="flex gap-2">
            <input type="number" min="0" step="0.1" value={weight} onChange={(e) => setWeight(e.target.value)} className="inp" />
            <select value={unit} onChange={(e) => setUnit(e.target.value)} className="inp w-24"><option value="lb">lb</option><option value="kg">kg</option></select>
          </div>
        </label>
        <label className="block"><span className="mb-1 block text-sm font-medium">Salt strength</span>
          <select value={pct} onChange={(e) => setPct(Number(e.target.value))} className="inp">
            <option value={0.25}>0.25% – light</option>
            <option value={0.5}>0.5% – balanced (recommended)</option>
            <option value={0.75}>0.75% – well seasoned</option>
            <option value={1}>1% – bold</option>
          </select>
        </label>
        <label className="block sm:col-span-2"><span className="mb-1 block text-sm font-medium">Your salt</span>
          <select value={brand} onChange={(e) => setBrand(e.target.value)} className="inp">{Object.keys(SALT).map((b) => <option key={b}>{b}</option>)}</select>
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-line bg-white p-5 shadow-card">
          <div className="flex items-center gap-2 text-sm font-medium text-muted"><Soup className="h-4 w-4" /> Salt by weight (most accurate)</div>
          <div className="mt-1 font-display text-3xl font-bold text-ember">{grams.toFixed(1)} g</div>
        </div>
        <div className="rounded-xl border border-line bg-white p-5 shadow-card">
          <div className="text-sm font-medium text-muted">≈ by volume ({brand})</div>
          <div className="mt-1 font-display text-3xl font-bold text-ink">{tsp.toFixed(1)} tsp</div>
          <div className="mt-1 text-xs text-muted">Volume is approximate. Weighing is more reliable.</div>
        </div>
      </div>

      <div className="rounded-lg border border-line bg-paper p-4 text-sm text-muted">
        <p className="font-medium text-ink">Timing</p>
        <p className="mt-1">Apply, then rest uncovered in the fridge: 1-12 hr for chops and chicken pieces, 12-24 hr for a whole chicken or roast, 24-48 hr for turkey. More detail in the <a href="/guides/dry-brine-guide/" className="font-semibold text-ember-600 underline">dry brine guide</a>.</p>
      </div>

      <div className="flex gap-3 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
        <AlertTriangle className="h-5 w-5 shrink-0 text-amber-600" />
        <p>Salt amounts are for flavor. Always cook meat to its <a href="/tools/doneness-temps/" className="font-semibold underline">USDA safe minimum temperature</a> regardless of brining.</p>
      </div>
    </div>
  );
}

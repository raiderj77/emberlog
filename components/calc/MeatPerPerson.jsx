"use client";
import { useState, useMemo } from "react";
import { Users, AlertTriangle } from "lucide-react";

const CUTS = [
  { name: "Pulled pork (shoulder/butt)", yield: 0.5 },
  { name: "Brisket (packer, trimmed)", yield: 0.5 },
  { name: "Beef short ribs (bone-in)", yield: 0.45 },
  { name: "Whole chicken (bone-in)", yield: 0.55 },
  { name: "Ribs (per rack)", yield: 1, perRack: true },
  { name: "Steak / boneless", yield: 0.75 },
  { name: "Sausage", yield: 0.85 },
];
const APPETITE = { Light: 0.33, Average: 0.5, "Big eaters": 0.67 };

export default function MeatPerPerson() {
  const [adults, setAdults] = useState(8);
  const [kids, setKids] = useState(2);
  const [appetite, setAppetite] = useState("Average");
  const [isMain, setIsMain] = useState(true);
  const [cutIdx, setCutIdx] = useState(0);
  const cut = CUTS[cutIdx];

  const { cookedLbs, rawLbs, racks } = useMemo(() => {
    const perAdult = APPETITE[appetite];
    let cooked = (Number(adults) * perAdult) + (Number(kids) * perAdult * 0.5);
    if (!isMain) cooked *= 0.6;
    if (cut.perRack) {
      const racks = Math.ceil((Number(adults) + Number(kids) * 0.5) * (isMain ? 0.75 : 0.5));
      return { cookedLbs: cooked, rawLbs: null, racks };
    }
    const raw = cooked / cut.yield;
    return { cookedLbs: cooked, rawLbs: raw, racks: null };
  }, [adults, kids, appetite, isMain, cut]);

  return (
    <div className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block"><span className="mb-1 block text-sm font-medium">Adults</span><input type="number" min="0" value={adults} onChange={(e) => setAdults(e.target.value)} className="inp" /></label>
        <label className="block"><span className="mb-1 block text-sm font-medium">Kids</span><input type="number" min="0" value={kids} onChange={(e) => setKids(e.target.value)} className="inp" /></label>
        <label className="block"><span className="mb-1 block text-sm font-medium">Appetite</span><select value={appetite} onChange={(e) => setAppetite(e.target.value)} className="inp">{Object.keys(APPETITE).map((a) => <option key={a}>{a}</option>)}</select></label>
        <label className="block"><span className="mb-1 block text-sm font-medium">Cut</span><select value={cutIdx} onChange={(e) => setCutIdx(Number(e.target.value))} className="inp">{CUTS.map((c, i) => <option key={c.name} value={i}>{c.name}</option>)}</select></label>
      </div>

      <label className="flex items-center gap-3 rounded-lg border border-line bg-white p-3">
        <input type="checkbox" checked={isMain} onChange={(e) => setIsMain(e.target.checked)} className="h-4 w-4 accent-ember" />
        <span className="text-sm">This meat is the <strong>main event</strong> (uncheck if it is one of several proteins or there are heavy sides)</span>
      </label>

      <div className="rounded-xl border border-line bg-white p-5 shadow-card">
        <div className="flex items-center gap-2 text-sm font-medium text-muted"><Users className="h-4 w-4" /> You'll need about</div>
        {cut.perRack ? (
          <div className="mt-1 font-display text-3xl font-bold text-ember">{racks} rack{racks === 1 ? "" : "s"}</div>
        ) : (
          <>
            <div className="mt-1 font-display text-3xl font-bold text-ember">{rawLbs.toFixed(1)} lb raw</div>
            <div className="mt-1 text-sm text-muted">≈ {cookedLbs.toFixed(1)} lb cooked · this cut yields about {Math.round(cut.yield * 100)}% after cooking, so buy extra to cover the loss.</div>
          </>
        )}
      </div>

      <div className="flex gap-3 rounded-lg border border-line bg-paper p-4 text-sm text-muted">
        <AlertTriangle className="h-5 w-5 shrink-0 text-ember" />
        <p>Round up on cheaper proteins; leftovers freeze and reheat well. Read the full method in <a href="/guides/how-much-meat-per-person/" className="font-semibold text-ember-600 underline">How Much Meat Per Person</a>.</p>
      </div>
    </div>
  );
}

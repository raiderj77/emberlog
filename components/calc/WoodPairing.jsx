"use client";
import { useState } from "react";
import { WOODS, MEATS_FOR_WOOD } from "@/lib/woods";
import { Trees } from "lucide-react";
import Link from "next/link";

const STRENGTH_COLOR = {
  "Mild": "bg-emerald-100 text-emerald-800",
  "Medium": "bg-amber-100 text-amber-800",
  "Medium-Strong": "bg-orange-100 text-orange-800",
  "Strong": "bg-rose-100 text-rose-800",
  "Very Strong": "bg-rose-200 text-rose-900",
};

export default function WoodPairing() {
  const [mode, setMode] = useState("meat");
  const [meat, setMeat] = useState("Brisket");
  const [woodName, setWoodName] = useState(WOODS[0].name);

  const matches = WOODS.filter((w) => w.pairs.some((m) => m.toLowerCase() === meat.toLowerCase() || (meat === "Beef" && (m === "Brisket" || m === "Game")) ));
  const wood = WOODS.find((w) => w.name === woodName);

  return (
    <div className="space-y-6">
      <div className="inline-flex rounded-lg border border-line bg-white p-1 text-sm">
        <button onClick={() => setMode("meat")} className={`rounded-md px-4 py-1.5 font-medium ${mode === "meat" ? "bg-ember text-white" : "text-muted"}`}>By meat</button>
        <button onClick={() => setMode("wood")} className={`rounded-md px-4 py-1.5 font-medium ${mode === "wood" ? "bg-ember text-white" : "text-muted"}`}>By wood</button>
      </div>

      {mode === "meat" ? (
        <>
          <label className="block max-w-xs"><span className="mb-1 block text-sm font-medium">I'm cooking…</span>
            <select value={meat} onChange={(e) => setMeat(e.target.value)} className="inp">{MEATS_FOR_WOOD.map((m) => <option key={m}>{m}</option>)}</select>
          </label>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {matches.length ? matches.map((w) => (
              <div key={w.name} className="rounded-xl border border-line bg-white p-4 shadow-card">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-lg font-bold">{w.name}</h3>
                  <span className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${STRENGTH_COLOR[w.strength]}`}>{w.strength}</span>
                </div>
                <p className="mt-1.5 text-sm text-muted">{w.flavor}</p>
              </div>
            )) : <p className="text-muted">Oak is a safe all-rounder for almost anything.</p>}
          </div>
        </>
      ) : (
        <>
          <label className="block max-w-xs"><span className="mb-1 block text-sm font-medium">Wood</span>
            <select value={woodName} onChange={(e) => setWoodName(e.target.value)} className="inp">{WOODS.map((w) => <option key={w.name}>{w.name}</option>)}</select>
          </label>
          <div className="rounded-xl border border-line bg-white p-5 shadow-card">
            <div className="flex items-center justify-between">
              <h3 className="font-display text-2xl font-bold">{wood.name}</h3>
              <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${STRENGTH_COLOR[wood.strength]}`}>{wood.strength}</span>
            </div>
            <p className="mt-2 text-muted">{wood.flavor}</p>
            <div className="mt-4">
              <div className="mb-1.5 text-sm font-medium">Pairs well with</div>
              <div className="flex flex-wrap gap-2">{wood.pairs.map((m) => <span key={m} className="rounded-full bg-paper px-3 py-1 text-sm font-medium text-ink">{m}</span>)}</div>
            </div>
          </div>
        </>
      )}

      <div className="flex gap-3 rounded-lg border border-line bg-paper p-4 text-sm text-muted">
        <Trees className="h-5 w-5 shrink-0 text-ember" />
        <p>Wood is a seasoning, aim for thin blue smoke, not billowing white. Blend strong woods with neutral oak to tame them. Full guide: <Link href="/guides/best-wood-for-smoking/" className="font-semibold text-ember-600 underline">Best Wood for Smoking</Link>.</p>
      </div>
    </div>
  );
}

"use client";
import { useState, useEffect, useRef } from "react";
import {
  Flame, Plus, Trash2, X, ChevronLeft, Clock, Play, Download, Upload,
  Share2, Star, Thermometer, Check,
} from "lucide-react";

const KEY = "emberlog:cooks";
const PALETTE = ["#d6450f", "#2563eb", "#16a34a", "#9333ea", "#dca423", "#0891b2", "#db2777", "#65a30d"];
const PROTEINS = ["Brisket", "Pork shoulder / butt", "Spare ribs", "Baby back ribs", "Beef short ribs", "Whole chicken", "Turkey", "Pork loin", "Pork belly", "Sausage", "Steak", "Other"];
const COOKERS = ["Offset", "Pellet grill", "Kamado", "Weber kettle", "Drum (UDS)", "Electric", "Gas", "Other"];

const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
const now = () => Date.now();
const csvCell = (v) => { const s = (v ?? "") + ""; return /[",\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s; };
function downloadBlob(blob, name) {
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob); a.download = name; a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 1000);
}
function load() { try { const r = localStorage.getItem(KEY); return r ? JSON.parse(r) : []; } catch { return []; } }
const fmtTime = (ms) => new Date(ms).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

export default function CookLog() {
  const [cooks, setCooks] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [view, setView] = useState({ mode: "list" });
  const fileRef = useRef(null);

  useEffect(() => { setCooks(load()); setLoaded(true); }, []);
  useEffect(() => { if (loaded) { try { localStorage.setItem(KEY, JSON.stringify(cooks)); } catch {} } }, [cooks, loaded]);

  const update = (id, patch) => setCooks((cs) => cs.map((c) => (c.id === id ? { ...c, ...patch } : c)));
  const current = view.mode === "detail" ? cooks.find((c) => c.id === view.id) : null;

  function newCook() {
    const c = {
      id: uid(), name: "", protein: "Brisket", weight: "", unit: "lb",
      cooker: "Offset", wood: "", targetTemp: "", prep: "",
      createdAt: now(), startedAt: null, status: "planning",
      probes: [{ id: uid(), name: "Pit", color: PALETTE[0] }, { id: uid(), name: "Meat 1", color: PALETTE[1] }],
      readings: [], events: [], rating: 0, outcome: "", improve: "",
    };
    setCooks((cs) => [c, ...cs]);
    setView({ mode: "detail", id: c.id });
  }
  function removeCook(id) { setCooks((cs) => cs.filter((c) => c.id !== id)); setView({ mode: "list" }); }

  function exportJSON() {
    downloadBlob(new Blob([JSON.stringify({ app: "Pitmaster Log", version: 1, cooks }, null, 2)], { type: "application/json" }), "emberlog-backup.json");
  }
  function exportCSV() {
    const head = ["cook", "protein", "weight", "unit", "cooker", "wood", "target_temp", "reading_time", "elapsed_min", "probe", "temp"];
    const rows = [];
    cooks.forEach((c) => {
      const t0 = c.startedAt || (c.readings[0] && c.readings[0].t) || c.createdAt;
      if (!c.readings.length) rows.push([c.name, c.protein, c.weight, c.unit, c.cooker, c.wood, c.targetTemp, "", "", "", ""]);
      c.readings.forEach((r) => c.probes.forEach((p) => {
        const v = r.values[p.id];
        if (v !== undefined && v !== "" && v !== null) rows.push([c.name, c.protein, c.weight, c.unit, c.cooker, c.wood, c.targetTemp, new Date(r.t).toISOString(), Math.round((r.t - t0) / 60000), p.name, v]);
      }));
    });
    downloadBlob(new Blob([[head, ...rows].map((r) => r.map(csvCell).join(",")).join("\n")], { type: "text/csv" }), "emberlog-cooks.csv");
  }
  function importJSON(file) {
    const r = new FileReader();
    r.onload = () => {
      try {
        const data = JSON.parse(r.result);
        const incoming = Array.isArray(data) ? data : data.cooks;
        if (!Array.isArray(incoming)) return;
        const have = new Set(cooks.map((c) => c.id));
        setCooks([...incoming.filter((c) => c && c.id && !have.has(c.id)), ...cooks]);
      } catch {}
    };
    r.readAsText(file);
  }

  if (!loaded) return (
    <div>
      <h1 className="font-display text-3xl font-bold tracking-tight">Your cook log</h1>
      <p className="mt-3 text-muted">Loading your cooks…</p>
    </div>
  );
  if (current) return <CookDetail cook={current} onBack={() => setView({ mode: "list" })} update={update} removeCook={removeCook} />;

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="font-display text-3xl font-bold tracking-tight">Your cook log</h1>
          <p className="mt-1 text-muted">{cooks.length > 0 ? `${cooks.length} cook${cooks.length > 1 ? "s" : ""} logged on this device.` : "Saved on this device. No account needed."}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button onClick={exportCSV} className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-white px-3 py-2 text-sm font-medium hover:border-ember/40" title="Export readings to CSV"><Download className="h-4 w-4" /> CSV</button>
          <button onClick={exportJSON} className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-white px-3 py-2 text-sm font-medium hover:border-ember/40" title="Download a full backup"><Download className="h-4 w-4" /> Backup</button>
          <button onClick={() => fileRef.current?.click()} className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-white px-3 py-2 text-sm font-medium hover:border-ember/40" title="Restore from a backup"><Upload className="h-4 w-4" /> Import</button>
          <input ref={fileRef} type="file" accept=".json,application/json" className="hidden" onChange={(e) => { if (e.target.files?.[0]) importJSON(e.target.files[0]); e.target.value = ""; }} />
          <button onClick={newCook} className="inline-flex items-center gap-1.5 rounded-lg bg-ember px-4 py-2 text-sm font-semibold text-white hover:bg-ember-600"><Plus className="h-4 w-4" /> New cook</button>
        </div>
      </div>

      {cooks.length === 0 ? (
        <div className="mt-10 rounded-2xl border border-dashed border-line bg-white p-12 text-center">
          <Flame className="mx-auto h-10 w-10 text-ember/60" />
          <h2 className="mt-4 font-display text-xl font-bold">Start your first cook</h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-muted">Log the cut, your pit temp, the wood, and probe readings as you go. Next time you will know exactly what to repeat.</p>
          <button onClick={newCook} className="mt-5 inline-flex items-center gap-1.5 rounded-lg bg-ember px-5 py-2.5 font-semibold text-white hover:bg-ember-600"><Plus className="h-4 w-4" /> New cook</button>
        </div>
      ) : (
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {cooks.map((c) => {
            const last = c.readings[c.readings.length - 1];
            return (
              <button key={c.id} onClick={() => setView({ mode: "detail", id: c.id })} className="group rounded-xl border border-line bg-white p-4 text-left shadow-card transition hover:border-ember/40">
                <div className="flex items-center justify-between">
                  <span className={`rounded-full px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide ${c.status === "done" ? "bg-emerald-50 text-emerald-700" : c.status === "cooking" ? "bg-ember/10 text-ember-700" : "bg-stone-100 text-stone-600"}`}>{c.status}</span>
                  {c.rating > 0 && <span className="flex items-center gap-0.5 text-xs text-gold"><Star className="h-3.5 w-3.5 fill-current" />{c.rating}</span>}
                </div>
                <h3 className="mt-2 font-display text-lg font-bold leading-snug group-hover:text-ember-600">{c.name || c.protein || "Untitled cook"}</h3>
                <p className="mt-0.5 text-sm text-muted">{c.protein}{c.weight ? ` · ${c.weight} ${c.unit}` : ""}{c.cooker ? ` · ${c.cooker}` : ""}</p>
                <p className="mt-3 font-mono text-xs text-muted">{c.readings.length} reading{c.readings.length === 1 ? "" : "s"}{last ? ` · last ${fmtTime(last.t)}` : ""}</p>
              </button>
            );
          })}
        </div>
      )}

      <p className="mt-10 text-center text-xs text-muted">Your data never leaves this device. Use Backup regularly; clearing your browser data will erase your cooks.</p>
    </div>
  );
}

function CookDetail({ cook, onBack, update, removeCook }) {
  const [tab, setTab] = useState("track");
  const [copied, setCopied] = useState(false);
  const t0 = cook.startedAt || (cook.readings[0] && cook.readings[0].t) || cook.createdAt;
  const setField = (k, v) => update(cook.id, { [k]: v });

  function addProbe() {
    const color = PALETTE[cook.probes.length % PALETTE.length];
    update(cook.id, { probes: [...cook.probes, { id: uid(), name: `Meat ${cook.probes.length}`, color }] });
  }
  function renameProbe(id, name) { update(cook.id, { probes: cook.probes.map((p) => (p.id === id ? { ...p, name } : p)) }); }
  function removeProbe(id) {
    update(cook.id, {
      probes: cook.probes.filter((p) => p.id !== id),
      readings: cook.readings.map((r) => { const v = { ...r.values }; delete v[id]; return { ...r, values: v }; }),
    });
  }
  function addReading(values) {
    const clean = {};
    Object.entries(values).forEach(([k, v]) => { if (v !== "" && v != null && !Number.isNaN(Number(v))) clean[k] = Number(v); });
    if (!Object.keys(clean).length) return;
    const reading = { id: uid(), t: now(), values: clean };
    const patch = { readings: [...cook.readings, reading].sort((a, b) => a.t - b.t) };
    if (!cook.startedAt) { patch.startedAt = reading.t; patch.status = "cooking"; }
    update(cook.id, patch);
  }
  function removeReading(id) { update(cook.id, { readings: cook.readings.filter((r) => r.id !== id) }); }
  function addEvent(text) { if (text.trim()) update(cook.id, { events: [...cook.events, { id: uid(), t: now(), text: text.trim() }].sort((a, b) => a.t - b.t) }); }
  function removeEvent(id) { update(cook.id, { events: cook.events.filter((e) => e.id !== id) }); }

  function copyCard() {
    const L = [];
    L.push(`🔥 ${cook.name || cook.protein || "Cook"}, logged with Pitmaster Log`);
    L.push(`${cook.protein}${cook.weight ? ` · ${cook.weight} ${cook.unit}` : ""}${cook.cooker ? ` · ${cook.cooker}` : ""}${cook.wood ? ` · ${cook.wood} wood` : ""}`);
    if (cook.targetTemp) L.push(`Pit: ${cook.targetTemp}°`);
    if (cook.prep) L.push(`Prep: ${cook.prep}`);
    const lasts = cook.probes.map((p) => { for (let i = cook.readings.length - 1; i >= 0; i--) if (cook.readings[i].values[p.id] != null) return `${p.name} ${cook.readings[i].values[p.id]}°`; return null; }).filter(Boolean);
    if (lasts.length) L.push(`Temps: ${lasts.join(" · ")}`);
    if (cook.events.length) L.push(`Timeline: ${cook.events.map((e) => `${fmtTime(e.t)} ${e.text}`).join(" → ")}`);
    if (cook.rating) L.push(`Result: ${"★".repeat(cook.rating)}${"☆".repeat(5 - cook.rating)}`);
    if (cook.improve) L.push(`Next time: ${cook.improve}`);
    navigator.clipboard?.writeText(L.join("\n")).then(() => { setCopied(true); setTimeout(() => setCopied(false), 1800); }).catch(() => {});
  }

  return (
    <div>
      <button onClick={onBack} className="mb-4 inline-flex items-center gap-1 text-sm font-medium text-muted hover:text-ink"><ChevronLeft className="h-4 w-4" /> All cooks</button>

      <div className="rounded-2xl border border-line bg-white p-5 shadow-card">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <input value={cook.name} onChange={(e) => setField("name", e.target.value)} placeholder="Name this cook (e.g. Sunday Brisket)" className="min-w-0 flex-1 border-0 bg-transparent p-0 font-display text-2xl font-bold tracking-tight placeholder:text-stone-300 focus:outline-none focus:ring-0" />
          <div className="flex items-center gap-2">
            <button onClick={copyCard} className="inline-flex items-center gap-1.5 rounded-lg border border-line px-3 py-1.5 text-sm font-medium hover:border-ember/40">{copied ? <><Check className="h-4 w-4 text-emerald-600" /> Copied</> : <><Share2 className="h-4 w-4" /> Cook card</>}</button>
            <button onClick={() => { if (confirm("Delete this cook? This cannot be undone.")) removeCook(cook.id); }} className="rounded-lg border border-line p-1.5 text-muted hover:border-rose-300 hover:text-rose-500"><Trash2 className="h-4 w-4" /></button>
          </div>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <Field label="Protein / cut"><select value={cook.protein} onChange={(e) => setField("protein", e.target.value)} className="inp">{PROTEINS.map((p) => <option key={p}>{p}</option>)}</select></Field>
          <Field label="Weight"><div className="flex gap-2"><input type="number" min="0" step="0.1" value={cook.weight} onChange={(e) => setField("weight", e.target.value)} className="inp" placeholder="0" /><select value={cook.unit} onChange={(e) => setField("unit", e.target.value)} className="inp w-20"><option value="lb">lb</option><option value="kg">kg</option></select></div></Field>
          <Field label="Cooker"><select value={cook.cooker} onChange={(e) => setField("cooker", e.target.value)} className="inp">{COOKERS.map((c) => <option key={c}>{c}</option>)}</select></Field>
          <Field label="Wood"><input value={cook.wood} onChange={(e) => setField("wood", e.target.value)} className="inp" placeholder="Oak, hickory…" /></Field>
          <Field label="Pit target (°)"><input type="number" value={cook.targetTemp} onChange={(e) => setField("targetTemp", e.target.value)} className="inp" placeholder="250" /></Field>
          <Field label="Prep / rub / brine"><input value={cook.prep} onChange={(e) => setField("prep", e.target.value)} className="inp" placeholder="0.5% dry brine, SPG…" /></Field>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-3 border-t border-line pt-4">
          {cook.startedAt ? (
            <span className="inline-flex items-center gap-1.5 text-sm text-muted"><Clock className="h-4 w-4" /> Started {fmtTime(cook.startedAt)}</span>
          ) : (
            <button onClick={() => update(cook.id, { startedAt: now(), status: "cooking" })} className="inline-flex items-center gap-1.5 rounded-lg bg-ink px-3 py-1.5 text-sm font-semibold text-white hover:bg-smoke"><Play className="h-4 w-4" /> Start cook</button>
          )}
          <select value={cook.status} onChange={(e) => setField("status", e.target.value)} className="inp w-auto text-sm"><option value="planning">Planning</option><option value="cooking">Cooking</option><option value="done">Done</option></select>
        </div>
      </div>

      <div className="mt-6 flex gap-1 border-b border-line">
        {[["track", "Track"], ["timeline", "Timeline"], ["result", "Result"]].map(([k, l]) => (
          <button key={k} onClick={() => setTab(k)} className={`-mb-px border-b-2 px-4 py-2 text-sm font-semibold ${tab === k ? "border-ember text-ember-700" : "border-transparent text-muted hover:text-ink"}`}>{l}</button>
        ))}
      </div>

      {tab === "track" && (
        <div className="mt-6 space-y-6">
          <TempChart cook={cook} t0={t0} />
          <ProbeManager cook={cook} addProbe={addProbe} renameProbe={renameProbe} removeProbe={removeProbe} />
          <AddReading cook={cook} onAdd={addReading} />
          <ReadingsTable cook={cook} t0={t0} onRemove={removeReading} />
        </div>
      )}
      {tab === "timeline" && <Timeline cook={cook} onAdd={addEvent} onRemove={removeEvent} />}
      {tab === "result" && <ResultPanel cook={cook} setField={setField} />}
    </div>
  );
}

function Field({ label, children }) {
  return <label className="block"><span className="mb-1 block text-xs font-medium text-muted">{label}</span>{children}</label>;
}

function ProbeManager({ cook, addProbe, renameProbe, removeProbe }) {
  return (
    <div className="rounded-xl border border-line bg-white p-4">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="font-display text-lg font-bold">Probes</h3>
        <button onClick={addProbe} className="inline-flex items-center gap-1 rounded-lg border border-line px-2.5 py-1.5 text-sm font-medium hover:border-ember/40"><Plus className="h-4 w-4" /> Add probe</button>
      </div>
      <div className="flex flex-wrap gap-2">
        {cook.probes.map((p) => (
          <div key={p.id} className="flex items-center gap-2 rounded-lg border border-line bg-paper px-2.5 py-1.5">
            <span className="h-3 w-3 rounded-full" style={{ background: p.color }} />
            <input value={p.name} onChange={(e) => renameProbe(p.id, e.target.value)} className="w-24 border-0 bg-transparent p-0 text-sm font-medium focus:outline-none focus:ring-0" />
            {cook.probes.length > 1 && <button onClick={() => removeProbe(p.id)} className="text-muted hover:text-rose-500"><X className="h-3.5 w-3.5" /></button>}
          </div>
        ))}
      </div>
    </div>
  );
}

function AddReading({ cook, onAdd }) {
  const [vals, setVals] = useState({});
  const submit = () => { onAdd(vals); setVals({}); };
  return (
    <div className="rounded-xl border border-line bg-white p-4">
      <h3 className="mb-3 font-display text-lg font-bold">Log a reading <span className="text-sm font-normal text-muted">, stamped now</span></h3>
      <div className="flex flex-wrap items-end gap-3">
        {cook.probes.map((p) => (
          <label key={p.id} className="block">
            <span className="mb-1 flex items-center gap-1.5 text-xs font-medium text-muted"><span className="h-2.5 w-2.5 rounded-full" style={{ background: p.color }} />{p.name} °</span>
            <input type="number" inputMode="numeric" value={vals[p.id] ?? ""} onChange={(e) => setVals((v) => ({ ...v, [p.id]: e.target.value }))} onKeyDown={(e) => e.key === "Enter" && submit()} className="inp w-24" placeholder=", " />
          </label>
        ))}
        <button onClick={submit} className="inline-flex items-center gap-1.5 rounded-lg bg-ember px-4 py-2 text-sm font-semibold text-white hover:bg-ember-600"><Thermometer className="h-4 w-4" /> Log</button>
      </div>
    </div>
  );
}

function ReadingsTable({ cook, t0, onRemove }) {
  if (!cook.readings.length) return <p className="rounded-xl border border-dashed border-line bg-white p-6 text-center text-sm text-muted">No readings yet. Log your first temperature above.</p>;
  return (
    <div className="overflow-x-auto rounded-xl border border-line bg-white">
      <table className="w-full text-sm">
        <thead><tr className="border-b border-line bg-[#f6f1e8] text-left text-xs uppercase tracking-wide text-muted">
          <th className="px-3 py-2 font-semibold">Time</th>
          <th className="px-3 py-2 font-semibold">Elapsed</th>
          {cook.probes.map((p) => <th key={p.id} className="px-3 py-2 font-semibold"><span className="inline-flex items-center gap-1"><span className="h-2.5 w-2.5 rounded-full" style={{ background: p.color }} />{p.name}</span></th>)}
          <th className="px-2 py-2" />
        </tr></thead>
        <tbody>
          {[...cook.readings].reverse().map((r) => {
            const min = Math.round((r.t - t0) / 60000);
            const h = Math.floor(min / 60), m = min % 60;
            return (
              <tr key={r.id} className="border-b border-line/70 last:border-0">
                <td className="px-3 py-2 font-mono text-xs">{fmtTime(r.t)}</td>
                <td className="px-3 py-2 font-mono text-xs text-muted">{h > 0 ? `${h}h ${m}m` : `${m}m`}</td>
                {cook.probes.map((p) => <td key={p.id} className="px-3 py-2 font-mono">{r.values[p.id] != null ? `${r.values[p.id]}°` : ", "}</td>)}
                <td className="px-2 py-2 text-right"><button onClick={() => onRemove(r.id)} className="text-muted hover:text-rose-500"><Trash2 className="h-4 w-4" /></button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function TempChart({ cook, t0 }) {
  const W = 720, H = 260, PADL = 38, PADR = 12, PADT = 14, PADB = 26;
  const pts = cook.readings;
  if (pts.length < 2) {
    return <div className="flex h-[180px] items-center justify-center rounded-xl border border-dashed border-line bg-white text-sm text-muted">Log at least two readings to see the temperature curve.</div>;
  }
  const times = pts.map((r) => (r.t - t0) / 60000);
  const maxT = Math.max(...times, 1);
  const allTemps = pts.flatMap((r) => Object.values(r.values)).filter((v) => typeof v === "number");
  let lo = Math.min(...allTemps), hi = Math.max(...allTemps);
  lo = Math.floor((lo - 10) / 10) * 10; hi = Math.ceil((hi + 10) / 10) * 10;
  if (hi - lo < 40) hi = lo + 40;
  const x = (min) => PADL + (min / maxT) * (W - PADL - PADR);
  const y = (t) => PADT + (1 - (t - lo) / (hi - lo)) * (H - PADT - PADB);
  const yticks = []; for (let v = lo; v <= hi; v += Math.ceil((hi - lo) / 4 / 10) * 10) yticks.push(v);

  return (
    <div className="rounded-xl border border-line bg-white p-4">
      <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
        <h3 className="font-display text-lg font-bold">Temperature curve</h3>
        <div className="flex flex-wrap gap-3 text-xs">
          {cook.probes.map((p) => <span key={p.id} className="inline-flex items-center gap-1.5 text-muted"><span className="h-2.5 w-2.5 rounded-full" style={{ background: p.color }} />{p.name}</span>)}
        </div>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full" role="img" aria-label="Temperature over time">
        {yticks.map((v) => (
          <g key={v}>
            <line x1={PADL} x2={W - PADR} y1={y(v)} y2={y(v)} stroke="#eee5d6" />
            <text x={PADL - 6} y={y(v) + 3} textAnchor="end" fontSize="10" fill="#9b9183" fontFamily="monospace">{v}°</text>
          </g>
        ))}
        <text x={PADL} y={H - 6} fontSize="10" fill="#9b9183" fontFamily="monospace">0h</text>
        <text x={W - PADR} y={H - 6} textAnchor="end" fontSize="10" fill="#9b9183" fontFamily="monospace">{(maxT / 60).toFixed(1)}h</text>
        {cook.probes.map((p) => {
          const series = pts.filter((r) => typeof r.values[p.id] === "number").map((r) => `${x((r.t - t0) / 60000)},${y(r.values[p.id])}`);
          if (series.length < 2) return null;
          return <polyline key={p.id} points={series.join(" ")} fill="none" stroke={p.color} strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />;
        })}
        {cook.probes.map((p) => pts.filter((r) => typeof r.values[p.id] === "number").map((r) => <circle key={p.id + r.id} cx={x((r.t - t0) / 60000)} cy={y(r.values[p.id])} r="2.5" fill={p.color} />))}
      </svg>
    </div>
  );
}

function Timeline({ cook, onAdd, onRemove }) {
  const [text, setText] = useState("");
  const quick = ["Wrapped", "Spritzed", "Hit the stall", "Added wood", "Rested", "Pulled off"];
  const submit = () => { onAdd(text); setText(""); };
  return (
    <div className="mt-6 space-y-4">
      <div className="rounded-xl border border-line bg-white p-4">
        <h3 className="mb-3 font-display text-lg font-bold">Add a timeline note</h3>
        <div className="flex gap-2">
          <input value={text} onChange={(e) => setText(e.target.value)} onKeyDown={(e) => e.key === "Enter" && submit()} className="inp" placeholder="What just happened?" />
          <button onClick={submit} className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-ember px-4 py-2 text-sm font-semibold text-white hover:bg-ember-600"><Plus className="h-4 w-4" /> Add</button>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {quick.map((q) => <button key={q} onClick={() => onAdd(q)} className="rounded-full border border-line px-3 py-1 text-xs font-medium text-muted hover:border-ember/40 hover:text-ink">+ {q}</button>)}
        </div>
      </div>
      {cook.events.length === 0 ? (
        <p className="rounded-xl border border-dashed border-line bg-white p-6 text-center text-sm text-muted">No timeline notes yet. Log wraps, spritzes, the stall, and when you pulled it.</p>
      ) : (
        <ol className="relative ml-3 border-l-2 border-line">
          {cook.events.map((e) => (
            <li key={e.id} className="group relative py-2 pl-5">
              <span className="absolute -left-[7px] top-3.5 h-3 w-3 rounded-full border-2 border-white bg-ember" />
              <div className="flex items-center justify-between">
                <div><span className="font-mono text-xs text-muted">{fmtTime(e.t)}</span> <span className="font-medium">{e.text}</span></div>
                <button onClick={() => onRemove(e.id)} className="opacity-0 transition group-hover:opacity-100 text-muted hover:text-rose-500"><Trash2 className="h-4 w-4" /></button>
              </div>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}

function ResultPanel({ cook, setField }) {
  return (
    <div className="mt-6 space-y-4">
      <div className="rounded-xl border border-line bg-white p-5">
        <h3 className="font-display text-lg font-bold">How did it turn out?</h3>
        <div className="mt-3 flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((n) => (
            <button key={n} onClick={() => setField("rating", n === cook.rating ? 0 : n)} aria-label={`${n} stars`}>
              <Star className={`h-7 w-7 ${n <= cook.rating ? "fill-gold text-gold" : "text-stone-300"}`} />
            </button>
          ))}
        </div>
        <div className="mt-4 grid gap-4">
          <Field label="Tasting notes / what worked">
            <textarea value={cook.outcome} onChange={(e) => setField("outcome", e.target.value)} className="inp min-h-[80px]" placeholder="Bark, smoke ring, tenderness, moisture…" />
          </Field>
          <Field label="One thing to change next time">
            <textarea value={cook.improve} onChange={(e) => setField("improve", e.target.value)} className="inp min-h-[60px]" placeholder="e.g. wrap a touch earlier; run the pit 15° hotter" />
          </Field>
        </div>
        <p className="mt-3 text-xs text-muted">Tip: hit <strong>Cook card</strong> up top to copy a shareable summary for forums or your group chat.</p>
      </div>
    </div>
  );
}

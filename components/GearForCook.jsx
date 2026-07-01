"use client";
import { ShoppingCart } from "lucide-react";
import { GEAR, AMAZON_TAG } from "@/lib/gear";

function amazonUrl(q) {
  return `https://www.amazon.com/s?k=${encodeURIComponent(q)}&tag=${AMAZON_TAG}`;
}

function track(label) {
  if (typeof window === "undefined") return;
  const w = window;
  if (typeof w.gtag === "function") {
    w.gtag("event", "gear_click", { item: label });
  }
}

export default function GearForCook({ protein }) {
  const items = GEAR[protein];
  if (!items || items.length === 0) return null;

  return (
    <div className="rounded-xl border border-line bg-white p-5 shadow-card">
      <div className="flex items-center gap-2 font-display font-bold text-ink">
        <ShoppingCart className="h-4 w-4 text-ember" />
        Gear for this cook
      </div>
      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        {items.map((it) => (
          <a
            key={it.label}
            href={amazonUrl(it.q)}
            target="_blank"
            rel="sponsored nofollow noopener"
            onClick={() => track(it.label)}
            className="flex items-center gap-3 rounded-lg border border-line px-3 py-2 text-sm transition hover:border-ember/40"
          >
            <span className="text-lg" aria-hidden="true">{it.icon}</span>
            <span className="flex-1 text-ink">{it.label}</span>
            <span className="shrink-0 text-xs font-semibold text-ember-600">Shop&nbsp;→</span>
          </a>
        ))}
      </div>
      <p className="mt-3 text-xs text-muted">
        As an Amazon Associate, Pitmaster Log earns from qualifying purchases.
      </p>
    </div>
  );
}

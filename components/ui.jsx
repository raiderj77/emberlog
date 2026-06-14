import Link from "next/link";
import {
  Clock,
  Users,
  Soup,
  Thermometer,
  Trees,
  Flame,
  ChevronRight,
} from "lucide-react";

export const ICONS = { Clock, Users, Soup, Thermometer, Trees, Flame };

export function Container({ className = "", children }) {
  return (
    <div className={`mx-auto w-full max-w-content px-5 sm:px-6 ${className}`}>
      {children}
    </div>
  );
}

export function SectionLabel({ children }) {
  return (
    <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-ember-600">
      <Flame className="h-3.5 w-3.5" />
      {children}
    </div>
  );
}

export function AnswerBox({ children }) {
  return (
    <div className="my-6 rounded-xl border border-line bg-white p-5 shadow-card">
      <div className="mb-1.5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-ember-600">
        <Flame className="h-3.5 w-3.5" /> Quick answer
      </div>
      <p className="text-[1.02rem] leading-relaxed text-ink">{children}</p>
    </div>
  );
}

export function FaqList({ faqs }) {
  if (!faqs?.length) return null;
  return (
    <section className="mt-10">
      <h2 className="mb-4 font-display text-2xl font-bold tracking-tight">
        Frequently asked questions
      </h2>
      <div className="divide-y divide-line rounded-xl border border-line bg-white">
        {faqs.map((f, i) => (
          <details key={i} className="group p-4 sm:p-5" {...(i === 0 ? { open: true } : {})}>
            <summary className="flex cursor-pointer list-none items-center justify-between gap-3 font-semibold text-ink">
              {f.q}
              <ChevronRight className="h-4 w-4 shrink-0 text-muted transition-transform group-open:rotate-90" />
            </summary>
            <p className="mt-2 leading-relaxed text-[#2c2824]">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

// Lightweight ad placeholder. Wire up real AdSense after approval (see README).
export function AdSlot({ label = "Advertisement", className = "" }) {
  return (
    <div
      className={`flex min-h-[90px] items-center justify-center rounded-lg border border-dashed border-line bg-[#f6f1e8] text-xs uppercase tracking-widest text-muted ${className}`}
      aria-hidden="true"
    >
      {label}
    </div>
  );
}

export function Breadcrumb({ items }) {
  return (
    <nav className="mb-5 flex flex-wrap items-center gap-1.5 text-sm text-muted" aria-label="Breadcrumb">
      {items.map((it, i) => (
        <span key={i} className="flex items-center gap-1.5">
          {i > 0 && <ChevronRight className="h-3.5 w-3.5" />}
          {it.href ? (
            <Link href={it.href} className="hover:text-ember-600">
              {it.label}
            </Link>
          ) : (
            <span className="text-ink">{it.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}

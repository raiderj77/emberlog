import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ToolShell from "@/components/ToolShell";
import SmokeTime from "@/components/calc/SmokeTime";
import { SMOKE_PRESETS, getSmokePreset } from "@/lib/smokePresets";

export function generateStaticParams() {
  return SMOKE_PRESETS.map((p) => ({ preset: p.slug }));
}

export async function generateMetadata({ params }) {
  const { preset } = await params;
  const p = getSmokePreset(preset);
  if (!p) return {};
  const canonical = `/tools/smoke-time/${p.slug}/`;
  return {
    title: p.title,
    description: p.desc,
    keywords: p.keywords,
    alternates: { canonical },
    openGraph: { images: ["/og.png"], title: p.title, description: p.desc, url: canonical },
  };
}

export default async function Page({ params }) {
  const { preset } = await params;
  const p = getSmokePreset(preset);
  if (!p) return null;

  return (
    <ToolShell
      slug="smoke-time"
      title={p.h1}
      desc={p.intro}
      extraCrumb={p.h1.replace(" Smoke Time Calculator", "").replace(" Time Calculator", "")}
      canonicalPath={`/tools/smoke-time/${p.slug}/`}
      faqs={p.faqs}
    >
      <SmokeTime defaultProtein={p.protein} defaultWeight={p.weight} />

      <div className="mt-10 max-w-2xl">
        <h2 className="font-display text-2xl font-bold tracking-tight">How long does it take?</h2>
        <p className="mt-3 text-muted">{p.howLong}</p>

        <h2 className="mt-8 font-display text-2xl font-bold tracking-tight">Tips for this cook</h2>
        <ul className="mt-3 space-y-2 text-muted">
          {p.tips.map((tip, i) => (
            <li key={i} className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-ember" />
              <span>{tip}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8 rounded-xl border border-line bg-white p-5 shadow-card">
          <p className="text-sm text-muted">Want the full method, step by step?</p>
          <Link href={p.guide.href} className="mt-1 inline-flex items-center gap-1.5 font-semibold text-ember-600 hover:text-ember-700">
            Read: {p.guide.label} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <p className="mt-8 text-sm text-muted">
          Smoking something else? Try the{" "}
          <Link href="/tools/smoke-time/" className="font-semibold text-ember-600 hover:text-ember-700">full Smoke Time Calculator</Link>{" "}
          for every protein, or browse all{" "}
          <Link href="/tools/" className="font-semibold text-ember-600 hover:text-ember-700">pitmaster tools</Link>.
        </p>
      </div>
    </ToolShell>
  );
}

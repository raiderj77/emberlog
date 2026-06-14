import Link from "next/link";
import { ArrowRight, Flame } from "lucide-react";
import { SITE, absUrl } from "@/lib/site";
import { TOOLS } from "@/lib/tools";
import { Container, Breadcrumb, SectionLabel, ICONS } from "@/components/ui";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  title: "BBQ & Smoking Calculators",
  description:
    "Free BBQ calculators and references: smoke time estimator, meat per person, dry brine salt, doneness temperatures, and wood pairing. Fast, accurate, no sign-up.",
  alternates: { canonical: "/tools/" },
  openGraph: { images: ["/og.png"], title: `BBQ & Smoking Calculators · ${SITE.name}`, description: "Smoke time, meat per person, dry brine, doneness temps, and wood pairing. Free and fast.", url: "/tools/" },
};

export default function ToolsPage() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "BBQ & Smoking Tools",
    itemListElement: TOOLS.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: absUrl(`/tools/${t.slug}/`),
      name: t.title,
    })),
  };
  return (
    <>
      <JsonLd data={ld} />
      <Container className="py-10">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Tools" }]} />
        <SectionLabel>Pitmaster tools</SectionLabel>
        <h1 className="max-w-2xl font-display text-4xl font-bold tracking-tight">BBQ calculators that answer the real questions</h1>
        <p className="mt-3 max-w-2xl text-muted">
          Free, fast, and accurate. No sign-up, no fluff, just the numbers you need before and during a cook. Pair them with the free <Link href="/log/" className="font-medium text-ember-600 hover:text-ember-700">cook log</Link> to track how it actually went.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TOOLS.map((t) => {
            const Icon = ICONS[t.icon] || Flame;
            return (
              <Link key={t.slug} href={`/tools/${t.slug}/`} className="group flex flex-col rounded-xl border border-line bg-white p-5 shadow-card transition hover:border-ember/40">
                <Icon className="h-7 w-7 text-ember" />
                <h2 className="mt-3 font-display text-xl font-bold group-hover:text-ember-600">{t.title}</h2>
                <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted">{t.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-ember-600">Open tool <ArrowRight className="h-4 w-4" /></span>
              </Link>
            );
          })}
        </div>
      </Container>
    </>
  );
}

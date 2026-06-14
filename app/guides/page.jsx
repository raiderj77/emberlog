import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SITE, absUrl } from "@/lib/site";
import { ARTICLES } from "@/lib/articles";
import { Container, Breadcrumb, SectionLabel } from "@/components/ui";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  title: "BBQ & Smoking Guides",
  description:
    "Practical, no-fluff BBQ guides: brisket timing, smoker temperatures, doneness temps, wood pairing, dry brining, the stall, and a beginner's first smoke. Straight answers backed by USDA food-safety guidance.",
  alternates: { canonical: "/guides/" },
  openGraph: { title: `BBQ & Smoking Guides · ${SITE.name}`, description: "Straight-answer guides to smoking meat, from brisket timing to wood pairing.", url: "/guides/" },
};

export default function GuidesPage() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "BBQ & Smoking Guides",
    itemListElement: ARTICLES.map((a, i) => ({ "@type": "ListItem", position: i + 1, url: absUrl(`/guides/${a.slug}/`), name: a.title })),
  };
  return (
    <>
      <JsonLd data={ld} />
      <Container className="py-10">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Guides" }]} />
        <SectionLabel>Guides</SectionLabel>
        <h1 className="font-display text-4xl font-bold tracking-tight">BBQ guides, minus the life story</h1>
        <p className="mt-3 max-w-2xl text-muted">Every guide leads with a straight answer, then the detail if you want it. Food-safety numbers come from USDA FSIS.</p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {ARTICLES.map((a) => (
            <Link key={a.slug} href={`/guides/${a.slug}/`} className="group flex flex-col rounded-xl border border-line bg-white p-5 shadow-card transition hover:border-ember/40">
              <div className="text-xs font-semibold uppercase tracking-widest text-muted">Guide · {a.readMins} min read</div>
              <h2 className="mt-2 font-display text-xl font-bold leading-snug group-hover:text-ember-600">{a.title}</h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{a.excerpt}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-ember-600">Read <ArrowRight className="h-4 w-4" /></span>
            </Link>
          ))}
        </div>
      </Container>
    </>
  );
}

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SITE, absUrl } from "@/lib/site";
import { ARTICLES } from "@/lib/articles";
import { getAllPosts } from "@/lib/posts";
import { uniqueBySlug } from "@/lib/collections";
import { Container, Breadcrumb, SectionLabel } from "@/components/ui";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  title: "BBQ & Smoking Guides",
  description:
    "Practical BBQ guides covering brisket, ribs, pork butt, chicken, turkey, salmon, beef ribs, wood pairing, smoker temperatures, and more. Straight answers backed by USDA food-safety guidance.",
  alternates: { canonical: "/guides/" },
  openGraph: {
    images: ["/og.png"],
    title: `BBQ & Smoking Guides · ${SITE.name}`,
    description: "Straight-answer guides to smoking meat, from brisket to salmon.",
    url: "/guides/",
  },
};

const CATEGORIES = [
  { key: "brisket", label: "Brisket" },
  { key: "pork", label: "Pork" },
  { key: "poultry", label: "Poultry" },
  { key: "beef", label: "Beef" },
  { key: "seafood", label: "Seafood" },
  { key: "technique", label: "Techniques & Tools" },
  { key: "reference", label: "Reference Guides" },
  { key: "sides", label: "Sides" },
];

export default function GuidesPage() {
  const ALL = uniqueBySlug(ARTICLES, getAllPosts());

  const ld = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "BBQ & Smoking Guides",
    itemListElement: ALL.map((a, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: absUrl(`/guides/${a.slug}/`),
      name: a.title,
    })),
  };

  return (
    <>
      <JsonLd data={ld} />
      <Container className="py-10">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Guides" }]} />
        <SectionLabel>Guides</SectionLabel>
        <h1 className="font-display text-4xl font-bold tracking-tight">BBQ guides, minus the life story</h1>
        <p className="mt-3 max-w-2xl text-muted">
          Every guide leads with a straight answer, then the detail if you want it. Food-safety
          numbers come from USDA FSIS.
        </p>

        <div className="mt-12 space-y-14">
          {CATEGORIES.map((cat) => {
            const articles = ALL.filter((a) => a.category === cat.key);
            if (articles.length === 0) return null;
            return (
              <section key={cat.key}>
                <h2 className="font-display text-2xl font-bold tracking-tight border-b border-line pb-3">
                  {cat.label}
                </h2>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {articles.map((a) => (
                    <Link
                      key={a.slug}
                      href={`/guides/${a.slug}/`}
                      className="group flex flex-col rounded-xl border border-line bg-white p-5 shadow-card transition hover:border-ember/40"
                    >
                      <div className="text-xs font-semibold uppercase tracking-widest text-muted">
                        Guide · {a.readMins} min read
                      </div>
                      <h3 className="mt-2 font-display text-xl font-bold leading-snug group-hover:text-ember-600">
                        {a.title}
                      </h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{a.excerpt}</p>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-ember-600">
                        Read <ArrowRight className="h-4 w-4" />
                      </span>
                    </Link>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </Container>
    </>
  );
}

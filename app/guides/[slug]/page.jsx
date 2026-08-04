import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SITE, absUrl } from "@/lib/site";
import { getArticle } from "@/lib/articles";
import { getPost } from "@/lib/posts";
import { getAllGuides } from "@/lib/guides";
import { compactDescription, compactTitle } from "@/lib/seo";
import { getTool } from "@/lib/tools";
import { Container, Breadcrumb, AnswerBox, FaqList } from "@/components/ui";
import JsonLd from "@/components/JsonLd";

export function generateStaticParams() {
  return getAllGuides().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const a = getArticle(slug) ?? getPost(slug);
  if (!a) return {};
  return {
    title: compactTitle(a.title),
    description: compactDescription(a.description),
    alternates: { canonical: `/guides/${a.slug}/` },
    openGraph: {
      images: ["/og.png"],
      type: "article",
      title: compactTitle(a.title, 65),
      description: compactDescription(a.description),
      url: `/guides/${a.slug}/`,
      ...(a.published && { publishedTime: a.published }),
      modifiedTime: a.updated,
      authors: [SITE.author],
    },
    twitter: {
      card: "summary_large_image",
      title: compactTitle(`${a.title} | ${SITE.name}`, 65),
      description: compactDescription(a.description),
      images: ["/og.png"],
    },
  };
}

const CAT_LABELS = {
  brisket: "Brisket",
  pork: "Pork",
  poultry: "Poultry",
  beef: "Beef",
  seafood: "Seafood",
  technique: "Technique",
  reference: "Reference",
  sides: "Sides",
};

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const a = getArticle(slug) ?? getPost(slug);
  if (!a) notFound();

  const ALL = getAllGuides();
  const idx = ALL.findIndex((x) => x.slug === a.slug);
  const next = ALL[(idx + 1) % ALL.length];

  const tool = a.tool ? getTool(a.tool) : null;
  const related = ALL.filter((x) => x.category === a.category && x.slug !== a.slug).slice(0, 3);
  const catLabel = CAT_LABELS[a.category] || "";
  const safetySources = [
    {
      label: "USDA FSIS safe temperature chart",
      href: "https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart",
    },
    {
      label: "USDA FSIS food thermometer guidance",
      href: "https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/food-thermometers",
    },
    ...(a.slug === "how-to-smoke-a-turkey" ? [{
      label: "USDA turkey smoking table",
      href: "https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/poultry/turkey-alternate-routes-table",
    }] : []),
  ];

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title,
    description: a.description,
    dateModified: a.updated,
    ...(a.published && { datePublished: a.published }),
    author: { "@type": "Person", name: SITE.author, url: absUrl("/about/") },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      logo: { "@type": "ImageObject", url: absUrl("/icons/icon-512.png") },
    },
    mainEntityOfPage: absUrl(`/guides/${a.slug}/`),
    image: absUrl("/og.png"),
    citation: safetySources.map((source) => source.href),
  };
  const faqLd =
    a.faqs && a.faqs.length
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: a.faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }
      : null;
  const howToLd = a.steps && a.steps.length
    ? {
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: a.title,
        description: a.description,
        ...(a.howToTime && { totalTime: a.howToTime }),
        step: a.steps.map((s, i) => ({
          "@type": "HowToStep",
          position: i + 1,
          name: s.name,
          text: s.text,
        })),
      }
    : null;
  const crumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Guides", item: absUrl("/guides/") },
      { "@type": "ListItem", position: 3, name: a.title, item: absUrl(`/guides/${a.slug}/`) },
    ],
  };

  return (
    <>
      <JsonLd data={articleLd} />
      {faqLd && <JsonLd data={faqLd} />}
      {howToLd && <JsonLd data={howToLd} />}
      <JsonLd data={crumbLd} />
      <Container className="py-10">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Guides", href: "/guides/" },
            { label: a.title.replace(/:.*$/, "") },
          ]}
        />

        <article className="mx-auto max-w-prose">
          <div className="text-xs font-semibold uppercase tracking-widest text-muted">
            Guide · {a.readMins} min read
          </div>
          <h1 className="mt-2 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            {a.title}
          </h1>
          <div className="mt-3 flex items-center gap-2 text-sm text-muted">
            <span>By <Link href="/about/" className="underline hover:text-ember-600">{SITE.author}</Link></span>
            <span>·</span>
            <span>
              Updated{" "}
              {new Date(a.updated).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
                timeZone: "UTC",
              })}
            </span>
          </div>

          <div className="mt-5 rounded-lg border border-line bg-white p-4 text-sm leading-relaxed text-muted">
            Safety claims are checked against primary USDA FSIS guidance. Time and texture targets are planning estimates, not safety endpoints. See our <Link href="/editorial-standards/" className="font-semibold text-ember-700 underline">editorial standards and correction process</Link>.
          </div>

          <AnswerBox>{a.answer}</AnswerBox>

          <div className="prose-em" dangerouslySetInnerHTML={{ __html: a.body }} />

          <section aria-labelledby="guide-sources" className="my-8 rounded-xl border border-line bg-white p-5">
            <h2 id="guide-sources" className="font-display text-xl font-bold">Primary safety references</h2>
            <ul className="mt-3 space-y-2 text-sm">
              {safetySources.map((source) => (
                <li key={source.href}>
                  <a href={source.href} target="_blank" rel="noopener noreferrer" className="font-semibold text-ember-700 underline">
                    {source.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-xs text-muted">Safety source set checked {SITE.contentReviewed}. Equipment operation and supervision defer to the manufacturer’s current instructions.</p>
          </section>

          {tool && (
            <div className="my-8 rounded-xl border border-ember/30 bg-ember/5 p-5">
              <div className="text-sm font-semibold text-ember-700">Try the tool</div>
              <Link
                href={`/tools/${tool.slug}/`}
                className="mt-1 inline-flex items-center gap-1.5 font-display text-lg font-bold text-ink hover:text-ember-600"
              >
                {tool.title} <ArrowRight className="h-4 w-4" />
              </Link>
              <p className="mt-1 text-sm text-muted">{tool.short}</p>
            </div>
          )}

          <FaqList faqs={a.faqs} />

          {related.length > 0 && (
            <div className="mt-12 border-t border-line pt-8">
              <h2 className="font-display text-xl font-bold">More {catLabel} guides</h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/guides/${r.slug}/`}
                    className="group rounded-xl border border-line bg-white p-4 shadow-card transition hover:border-ember/40"
                  >
                    <div className="text-xs font-semibold uppercase tracking-widest text-muted">
                      {r.readMins} min
                    </div>
                    <h3 className="mt-1 font-display text-base font-bold leading-snug group-hover:text-ember-600">
                      {r.title.replace(/:.*$/, "")}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted line-clamp-2">
                      {r.excerpt}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>

        <div className="mx-auto mt-12 flex max-w-prose items-center justify-between border-t border-line pt-6">
          <Link
            href="/guides/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-ink"
          >
            <ArrowLeft className="h-4 w-4" /> All guides
          </Link>
          <Link
            href={`/guides/${next.slug}/`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-ember-600 hover:text-ember-700"
          >
            {next.title.replace(/:.*$/, "")} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </>
  );
}

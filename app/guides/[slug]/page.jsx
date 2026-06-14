import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SITE, absUrl } from "@/lib/site";
import { ARTICLES, getArticle } from "@/lib/articles";
import { getTool } from "@/lib/tools";
import { Container, Breadcrumb, AnswerBox, FaqList } from "@/components/ui";
import JsonLd from "@/components/JsonLd";

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }) {
  const a = getArticle(params.slug);
  if (!a) return {};
  return {
    title: a.title,
    description: a.description,
    alternates: { canonical: `/guides/${a.slug}/` },
    openGraph: {
      type: "article",
      title: a.title,
      description: a.description,
      url: `/guides/${a.slug}/`,
      publishedTime: a.updated,
      modifiedTime: a.updated,
      authors: [SITE.author],
    },
  };
}

export default function ArticlePage({ params }) {
  const a = getArticle(params.slug);
  if (!a) notFound();
  const idx = ARTICLES.findIndex((x) => x.slug === a.slug);
  const next = ARTICLES[(idx + 1) % ARTICLES.length];
  const tool = a.tool ? getTool(a.tool) : null;

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title,
    description: a.description,
    datePublished: a.updated,
    dateModified: a.updated,
    author: { "@type": "Person", name: SITE.author },
    publisher: { "@type": "Organization", name: SITE.name, logo: { "@type": "ImageObject", url: absUrl("/icons/icon-512.png") } },
    mainEntityOfPage: absUrl(`/guides/${a.slug}/`),
    image: absUrl("/og.png"),
  };
  const faqLd = a.faqs?.length
    ? { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: a.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }
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
      <JsonLd data={crumbLd} />
      <Container className="py-10">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Guides", href: "/guides/" }, { label: a.title.replace(/:.*$/, "") }]} />

        <article className="mx-auto max-w-prose">
          <div className="text-xs font-semibold uppercase tracking-widest text-muted">Guide · {a.readMins} min read</div>
          <h1 className="mt-2 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">{a.title}</h1>
          <div className="mt-3 flex items-center gap-2 text-sm text-muted">
            <span>By {SITE.author}</span><span>·</span>
            <span>Updated {new Date(a.updated).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
          </div>

          <AnswerBox>{a.answer}</AnswerBox>

          <div className="prose-em" dangerouslySetInnerHTML={{ __html: a.body }} />

          {tool && (
            <div className="my-8 rounded-xl border border-ember/30 bg-ember/5 p-5">
              <div className="text-sm font-semibold text-ember-700">Try the tool</div>
              <Link href={`/tools/${tool.slug}/`} className="mt-1 inline-flex items-center gap-1.5 font-display text-lg font-bold text-ink hover:text-ember-600">
                {tool.title} <ArrowRight className="h-4 w-4" />
              </Link>
              <p className="mt-1 text-sm text-muted">{tool.short}</p>
            </div>
          )}

          <FaqList faqs={a.faqs} />
        </article>

        <div className="mx-auto mt-12 flex max-w-prose items-center justify-between border-t border-line pt-6">
          <Link href="/guides/" className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-ink"><ArrowLeft className="h-4 w-4" /> All guides</Link>
          <Link href={`/guides/${next.slug}/`} className="inline-flex items-center gap-1.5 text-sm font-semibold text-ember-600 hover:text-ember-700">{next.title.replace(/:.*$/, "")} <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </Container>
    </>
  );
}

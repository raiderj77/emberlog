import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SITE, absUrl } from "@/lib/site";
import { TOOLS, getTool } from "@/lib/tools";
import { Container, Breadcrumb, FaqList } from "@/components/ui";
import JsonLd from "@/components/JsonLd";

export default function ToolShell({ slug, faqs = [], children }) {
  const tool = getTool(slug);
  const others = TOOLS.filter((t) => t.slug !== slug).slice(0, 3);

  const appLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: tool.title,
    url: absUrl(`/tools/${slug}/`),
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Any (web browser)",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    description: tool.desc,
  };
  const faqLd = faqs.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      }
    : null;

  return (
    <>
      <JsonLd data={appLd} />
      {faqLd && <JsonLd data={faqLd} />}
      <Container className="py-10">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Tools", href: "/tools/" }, { label: tool.title }]} />
        <h1 className="max-w-3xl font-display text-3xl font-bold tracking-tight sm:text-4xl">{tool.title}</h1>
        <p className="mt-3 max-w-2xl text-muted">{tool.desc}</p>

        <div className="mt-8 max-w-3xl">{children}</div>

        <div className="mt-10 max-w-3xl"><FaqList faqs={faqs} /></div>

        <div className="mt-12 border-t border-line pt-8">
          <h2 className="mb-4 font-display text-xl font-bold">More tools</h2>
          <div className="grid gap-3 sm:grid-cols-3">
            {others.map((t) => (
              <Link key={t.slug} href={`/tools/${t.slug}/`} className="group rounded-xl border border-line bg-white p-4 transition hover:border-ember/40">
                <h3 className="font-display font-bold group-hover:text-ember-600">{t.title}</h3>
                <p className="mt-1 text-sm text-muted">{t.short}</p>
              </Link>
            ))}
          </div>
          <Link href="/log/" className="mt-6 inline-flex items-center gap-1.5 font-semibold text-ember-600 hover:text-ember-700">Track your cook in the free log <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </Container>
    </>
  );
}

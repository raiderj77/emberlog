import Link from "next/link";
import {
  Flame,
  CheckCircle2,
  Smartphone,
  Download,
  WifiOff,
  ShieldCheck,
  LineChart,
  ArrowRight,
} from "lucide-react";
import { SITE, absUrl } from "@/lib/site";
import { TOOLS } from "@/lib/tools";
import { ARTICLES } from "@/lib/articles";
import { Container, SectionLabel, FaqList, ICONS } from "@/components/ui";
import JsonLd from "@/components/JsonLd";

const HOME_FAQS = [
  { q: "Is the Pitmaster Log cook log free?", a: "Yes. The cook log and all of the calculators are free to use. There is no account to create and nothing to install, though you can install it as an app on your phone if you like." },
  { q: "Do I need a special thermometer or hardware?", a: "No. Pitmaster Log is hardware-agnostic. You can enter readings from any thermometer or controller by hand and name multiple probe channels for a cook. It is not tied to any brand of device." },
  { q: "Where is my cook data stored?", a: "Cook records you enter stay in browser storage and are not sent to Pitmaster Log servers. Export a full JSON backup or a CSV of temperature readings at any time." },
  { q: "Does it work on iPhone and Android?", a: "Yes. Pitmaster Log runs in modern mobile and desktop browsers and can be added to a home screen. Core pages may remain available offline after a successful online load, depending on browser cache state." },
];

export const metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const appLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: SITE.name,
    url: SITE.url,
    applicationCategory: "LifestyleApplication",
    operatingSystem: "Any (web browser)",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    description: SITE.description,
    featureList: [
      "BBQ cook log with multiple named probe channels",
      "Temperature curve charts",
      "Smoke time calculator",
      "Meat per person calculator",
      "Dry brine salt calculator",
      "Doneness temperature chart",
      "Wood pairing finder",
      "Full JSON backup and probe-reading CSV export",
      "Progressive web app installation with a core-route cache",
    ],
  };
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: HOME_FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <JsonLd data={appLd} />
      <JsonLd data={faqLd} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-smoke text-paper">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.5]"
          style={{
            background:
              "radial-gradient(60% 80% at 80% 10%, rgba(214,69,15,.35), transparent 60%), radial-gradient(50% 60% at 10% 90%, rgba(220,164,35,.18), transparent 60%)",
          }}
        />
        <Container className="relative py-16 sm:py-24">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-paper/80">
              <Flame className="h-3.5 w-3.5 text-ember" /> Free · No account · Modern browsers
            </div>
            <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
              Log every smoke. <span className="text-ember">Nail it</span> next time.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-paper/80">
              A free BBQ cook log and a full set of pitmaster calculators, smoke times, meat per
              person, dry brine, doneness temps, and wood pairing. Works in modern mobile and desktop browsers,
              no hardware required, and your data stays on your device.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/log/"
                className="inline-flex items-center gap-2 rounded-xl bg-ember px-6 py-3 font-semibold text-white transition hover:bg-ember-600"
              >
                Start a cook log <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/tools/"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold text-paper transition hover:bg-white/10"
              >
                Browse the tools
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-paper/70">
              <span className="inline-flex items-center gap-1.5"><Smartphone className="h-4 w-4" /> Installable PWA</span>
              <span className="inline-flex items-center gap-1.5"><WifiOff className="h-4 w-4" /> Core pages may work offline after loading</span>
              <span className="inline-flex items-center gap-1.5"><Download className="h-4 w-4" /> JSON backup + readings CSV</span>
              <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-4 w-4" /> Private by default</span>
            </div>
          </div>
        </Container>
      </section>

      {/* Why it's different */}
      <section className="py-16">
        <Container>
          <SectionLabel>Why Pitmaster Log</SectionLabel>
          <h2 className="max-w-2xl font-display text-3xl font-bold tracking-tight">
            Log cooks without being tied to one thermometer brand.
          </h2>
          <p className="mt-3 max-w-2xl text-muted">
            Pitmaster Log accepts manual readings from any thermometer, runs in the browser, and keeps
            the cook record on your device.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: LineChart, title: "Multiple probe channels", body: "Name a pit probe and probes for multiple pieces of meat, then see their temperature curves together." },
              { icon: Smartphone, title: "Browser-based, no app store", body: "Runs in modern mobile and desktop browsers. On supported devices, add it to your home screen for app-like access." },
              { icon: ShieldCheck, title: "Your cook records stay local", body: "Cook records you enter remain in browser storage and are not sent to Pitmaster Log servers. Export JSON backups or CSV readings whenever you want." },
              { icon: Flame, title: "Hardware-agnostic", body: "Use any thermometer or controller. Type readings in by hand or paste them. You are never tied to one brand." },
              { icon: WifiOff, title: "Works after loading", body: "After a successful online load, the app can keep core pages available when the connection drops. Export important records as a backup." },
              { icon: CheckCircle2, title: "Free, genuinely", body: "The log and every calculator are free. No paywall on the core tools, no trial countdown." },
            ].map((f) => (
              <div key={f.title} className="rounded-xl border border-line bg-white p-5 shadow-card">
                <f.icon className="h-6 w-6 text-ember" />
                <h3 className="mt-3 font-display text-lg font-bold">{f.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{f.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Tools */}
      <section className="border-y border-line bg-white py-16">
        <Container>
          <SectionLabel>Pitmaster tools</SectionLabel>
          <h2 className="font-display text-3xl font-bold tracking-tight">Free calculators that answer the real questions</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {TOOLS.map((t) => {
              const Icon = ICONS[t.icon] || Flame;
              return (
                <Link
                  key={t.slug}
                  href={`/tools/${t.slug}/`}
                  className="group rounded-xl border border-line bg-paper p-5 transition hover:border-ember/40 hover:shadow-card"
                >
                  <Icon className="h-6 w-6 text-ember" />
                  <h3 className="mt-3 font-display text-lg font-bold group-hover:text-ember-600">{t.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{t.short}</p>
                </Link>
              );
            })}
            <Link
              href="/log/"
              className="group flex flex-col justify-between rounded-xl border border-ember/30 bg-ember/5 p-5 transition hover:bg-ember/10"
            >
              <div>
                <Flame className="h-6 w-6 text-ember" />
                <h3 className="mt-3 font-display text-lg font-bold text-ember-700">The Cook Log</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/70">The free, hardware-agnostic journal at the center of it all.</p>
              </div>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-ember-600">Open it <ArrowRight className="h-4 w-4" /></span>
            </Link>
          </div>
        </Container>
      </section>

      {/* Guides */}
      <section className="py-16">
        <Container>
          <SectionLabel>Guides</SectionLabel>
          <h2 className="font-display text-3xl font-bold tracking-tight">Straight answers, no 2,000-word life stories</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "how-to-smoke-a-brisket",
              "how-to-smoke-ribs",
              "how-to-smoke-a-pork-butt",
              "smoked-chicken-wings",
              "how-to-smoke-salmon",
              "how-to-smoke-beef-ribs",
            ].map((slug) => ARTICLES.find((a) => a.slug === slug)).filter(Boolean).map((a) => (
              <Link
                key={a.slug}
                href={`/guides/${a.slug}/`}
                className="group rounded-xl border border-line bg-white p-5 shadow-card transition hover:border-ember/40"
              >
                <div className="text-xs font-semibold uppercase tracking-widest text-muted">Guide · {a.readMins} min</div>
                <h3 className="mt-2 font-display text-lg font-bold leading-snug group-hover:text-ember-600">
                  {a.title.replace(/:.*$/, "")}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{a.excerpt}</p>
              </Link>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/guides/" className="inline-flex items-center gap-1.5 font-semibold text-ember-600 hover:text-ember-700">
              All guides <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="border-t border-line bg-white py-16">
        <Container className="max-w-3xl">
          <SectionLabel>FAQ</SectionLabel>
          <FaqList faqs={HOME_FAQS} />
        </Container>
      </section>
    </>
  );
}

import Link from "next/link";
import { Flame } from "lucide-react";
import { SITE } from "@/lib/site";
import { TOOLS } from "@/lib/tools";
import { ARTICLES } from "@/lib/articles";

export default function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-20 border-t border-line bg-white">
      <div className="mx-auto grid max-w-content gap-10 px-5 py-12 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-1">
          <Link href="/" className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-ember text-white">
              <Flame className="h-4 w-4" strokeWidth={2.4} />
            </span>
            <span className="font-display text-lg font-bold">{SITE.name}</span>
          </Link>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">{SITE.tagline}.</p>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold text-ink">Tools</h3>
          <ul className="space-y-2 text-sm text-muted">
            <li><Link href="/log/" className="hover:text-ember-600">Cook Log</Link></li>
            {TOOLS.map((t) => (
              <li key={t.slug}>
                <Link href={`/tools/${t.slug}/`} className="hover:text-ember-600">{t.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold text-ink">Guides</h3>
          <ul className="space-y-2 text-sm text-muted">
            {[
              "how-to-smoke-a-brisket",
              "how-to-smoke-ribs",
              "how-to-smoke-a-pork-butt",
              "how-to-smoke-a-whole-chicken",
              "how-to-smoke-beef-ribs",
              "meat-internal-temperature-chart",
            ].map((slug) => {
              const a = ARTICLES.find((x) => x.slug === slug);
              if (!a) return null;
              return (
                <li key={a.slug}>
                  <Link href={`/guides/${a.slug}/`} className="hover:text-ember-600">
                    {a.title.replace(/:.*$/, "")}
                  </Link>
                </li>
              );
            })}
            <li>
              <Link href="/guides/" className="font-medium hover:text-ember-600">All guides &rarr;</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold text-ink">Site</h3>
          <ul className="space-y-2 text-sm text-muted">
            <li><Link href="/about/" className="hover:text-ember-600">About</Link></li>
            <li><Link href="/contact/" className="hover:text-ember-600">Contact</Link></li>
            <li><Link href="/privacy/" className="hover:text-ember-600">Privacy Policy</Link></li>
            <li><Link href="/terms/" className="hover:text-ember-600">Terms of Use</Link></li>
            <li><Link href="/disclaimer/" className="hover:text-ember-600">Disclaimer</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto max-w-content px-5 py-6 sm:px-6">
          <p className="text-xs leading-relaxed text-muted">
            Created by {SITE.author}. Cook data you enter is stored only in your browser, not on our
            servers. Food-safety temperatures referenced on this site come from USDA FSIS and are
            general information, not professional advice; always follow current USDA guidance. As an
            Amazon Associate, this site may earn from qualifying purchases.
          </p>
          <p className="mt-3 text-xs text-muted">
            © {year} {SITE.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

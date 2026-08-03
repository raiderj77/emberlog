import { ExternalLink } from "lucide-react";
import { SITE } from "@/lib/site";

function amazonSearchUrl(query) {
  const params = new URLSearchParams({ k: query, tag: SITE.amazonTag });
  return `https://www.amazon.com/s?${params.toString()}`;
}

export default function AmazonCategoryLink({ label, query }) {
  return (
    <aside className="rounded-xl border border-line bg-white p-4 shadow-card" aria-label={`${label} paid link`}>
      <p className="text-sm leading-relaxed text-muted">
        <strong className="text-ink">Paid-link disclosure:</strong>{" "}
        As an Amazon Associate I earn from qualifying purchases. If you purchase through this link,
        I may earn a commission at no additional cost to you.
      </p>
      <a
        href={amazonSearchUrl(query)}
        target="_blank"
        rel="sponsored nofollow noopener"
        className="mt-3 inline-flex min-h-11 items-center gap-2 rounded-lg bg-ink px-4 py-2 text-sm font-semibold text-white hover:bg-ember-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
      >
        Compare {label} on Amazon
        <ExternalLink className="h-4 w-4" aria-hidden="true" />
      </a>
    </aside>
  );
}

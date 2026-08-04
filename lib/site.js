// Single source of truth for site-wide constants.
// Change SITE.name / SITE.url / SITE.domain here to rebrand everywhere.

export const SITE = {
  name: "Pitmaster Log",
  domain: "pitmasterlog.com",
  url: "https://pitmasterlog.com",
  tagline: "The free BBQ cook log and pitmaster's toolkit",
  description:
    "Free, private BBQ cook log with smoke-time, meat-planning, dry-brine, doneness-temperature, and wood-pairing tools for modern browsers.",
  author: "Jason Ramirez",
  contactEmail: "hello@pitmasterlog.com",
  // Public-facing operating entity line for legal pages. Replace with your entity if desired.
  legalEntity: "Pitmaster Log",
  // Jurisdiction used in Terms (set to your state/country).
  jurisdiction: "the State of California, USA",
  locale: "en_US",
  // Amazon Associates tag used by every qualifying Amazon link.
  amazonTag: "pitmasterlog-20",
  // Publisher metadata and ads.txt may be present without loading ads.
  adsensePublisherId: "ca-pub-7171402107622932",
  founded: "2026",
  contentReviewed: "2026-08-03",
};

export const NAV = [
  { href: "/log/", label: "Cook Log" },
  { href: "/tools/", label: "Tools" },
  { href: "/guides/", label: "Guides" },
  { href: "/about/", label: "About" },
];

export function absUrl(path = "/") {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${SITE.url}${p}`;
}

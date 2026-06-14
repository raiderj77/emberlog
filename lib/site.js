// Single source of truth for site-wide constants.
// Change SITE.name / SITE.url / SITE.domain here to rebrand everywhere.

export const SITE = {
  name: "EmberLog",
  // Working name. Verify domain + trademark availability before committing.
  domain: "emberlog.app",
  url: "https://emberlog.app",
  tagline: "The free BBQ cook log and pitmaster's toolkit",
  description:
    "Log every smoke, plan every cook, and nail it next time. A free, hardware-agnostic BBQ cook log plus pitmaster calculators for smoke times, meat per person, dry brine, doneness temps, and wood pairing. Works on any device, your data stays on yours.",
  author: "Jason Ramirez",
  // Fill these in before launch:
  contactEmail: "hello@emberlog.app",
  // Public-facing operating entity line for legal pages. Replace with your entity if desired.
  legalEntity: "EmberLog",
  // Jurisdiction used in Terms (set to your state/country).
  jurisdiction: "the State of California, USA",
  locale: "en_US",
  // Amazon Associates tag placeholder (for affiliate links / disclosure).
  amazonTag: "YOURTAG-20",
  // Google AdSense publisher id placeholder (ca-pub-XXXXXXXXXXXXXXXX). Leave blank until approved.
  adsensePublisherId: "",
  founded: "2026",
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

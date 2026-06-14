// Single source of truth for site-wide constants.
// Change SITE.name / SITE.url / SITE.domain here to rebrand everywhere.

export const SITE = {
  name: "Pitmaster Log",
  // Live Vercel URL. Swap to your custom domain here once you buy one.
  domain: "pitmasterlog.com",
  url: "https://pitmasterlog.com",
  tagline: "The free BBQ cook log and pitmaster's toolkit",
  description:
    "Log every smoke, plan every cook, and nail it next time. A free, hardware-agnostic BBQ cook log plus pitmaster calculators for smoke times, meat per person, dry brine, doneness temps, and wood pairing. Works on any device, your data stays on yours.",
  author: "Jason Ramirez",
  // TODO: set a real inbox once you have a domain (e.g. contact@yourdomain).
  contactEmail: "hello@pitmasterlog.com",
  // Public-facing operating entity line for legal pages. Replace with your entity if desired.
  legalEntity: "Pitmaster Log",
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

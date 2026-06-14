// Single source of truth for site-wide constants.
export const SITE = {
  name: "EmberLog",
  domain: "emberlog-tau.vercel.app",
  url: "https://emberlog-tau.vercel.app",
  tagline: "The free BBQ cook log and pitmaster's toolkit",
  description:
    "Log every smoke, plan every cook, and nail it next time. A free, hardware-agnostic BBQ cook log plus pitmaster calculators for smoke times, meat per person, dry brine, doneness temps, and wood pairing. Works on any device, your data stays on yours.",
  author: "Jason Ramirez",
  contactEmail: "hello@emberlog-tau.vercel.app",
  legalEntity: "EmberLog",
  jurisdiction: "the State of California, USA",
  locale: "en_US",
  amazonTag: "YOURTAG-20",
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
  return SITE.url + p;
}

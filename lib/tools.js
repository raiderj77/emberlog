export const TOOLS = [
  {
    slug: "smoke-time",
    title: "Smoke Time Calculator",
    short: "Estimate cook time and a start time to eat on schedule.",
    desc: "Estimate how long a smoke will take by protein, weight, and pit temperature, then work backward from your serving time so the food is ready (and rested) when guests arrive.",
    icon: "Clock",
    keywords: ["how long to smoke a brisket", "smoke time calculator", "bbq cook time", "when to start brisket"],
  },
  {
    slug: "meat-per-person",
    title: "Meat Per Person Calculator",
    short: "How much raw meat to buy so nobody leaves hungry.",
    desc: "Figure out how much raw meat to buy for a crowd, adjusted for appetite, kids, sides, bone-in cuts, and cooking yield (pulled pork and brisket lose ~40-50% of their raw weight).",
    icon: "Users",
    keywords: ["how much meat per person", "bbq for a crowd calculator", "pulled pork per person", "brisket per person"],
  },
  {
    slug: "dry-brine",
    title: "Dry Brine Salt Calculator",
    short: "Estimate salt by weight and approximate volume by brand.",
    desc: "Estimate dry-brine salt from the meat weight, then show an approximate volume for the selected salt brand because crystal size changes volume measurements.",
    icon: "Soup",
    keywords: ["dry brine calculator", "how much salt to dry brine", "salt per pound brine", "dry brine turkey"],
  },
  {
    slug: "doneness-temps",
    title: "Doneness Temperature Chart",
    short: "USDA safe minimums plus BBQ probe-tender targets.",
    desc: "Look up USDA safe minimums and common texture checkpoints for the supported foods, then compare a thermometer reading with the applicable safety endpoint.",
    icon: "Thermometer",
    keywords: ["meat doneness temperature chart", "safe internal temp", "brisket done temp", "chicken safe temp"],
  },
  {
    slug: "wood-pairing",
    title: "Wood Pairing Finder",
    short: "Match smoking wood to meat (and vice versa).",
    desc: "Find which smoking woods pair with each meat and how strong each wood is, so you season the smoke instead of overpowering it.",
    icon: "Trees",
    keywords: ["best wood for smoking brisket", "wood pairing chart", "what wood for pork", "smoking wood guide"],
  },
];

export function getTool(slug) {
  return TOOLS.find((t) => t.slug === slug);
}

import ToolShell from "@/components/ToolShell";
import DryBrine from "@/components/calc/DryBrine";
import { getTool } from "@/lib/tools";

const t = getTool("dry-brine");
export const metadata = {
  title: t.title,
  description: t.desc,
  alternates: { canonical: "/tools/dry-brine/" },
  keywords: t.keywords,
  openGraph: { images: ["/og.png"], title: t.title, description: t.desc, url: "/tools/dry-brine/" },
};

const faqs = [
  { q: "How much salt do I use to dry brine?", a: "About 0.5% of the meat's weight in salt is a reliable starting point, roughly 2-2.5 grams of kosher salt per pound. Weigh it, since salt brands differ a lot by volume." },
  { q: "Why does salt brand matter?", a: "Crystal size varies: a teaspoon of Diamond Crystal kosher weighs far less than a teaspoon of Morton kosher or table salt. Measuring by weight avoids over- or under-salting." },
  { q: "How long should I dry brine?", a: "Rest uncovered in the fridge: 1-12 hours for chops and chicken pieces, 12-24 hours for a whole chicken or roast, and 24-48 hours for a turkey." },
];

export default function Page() {
  return <ToolShell slug="dry-brine" faqs={faqs}><DryBrine /></ToolShell>;
}

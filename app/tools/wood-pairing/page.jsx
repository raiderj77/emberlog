import ToolShell from "@/components/ToolShell";
import WoodPairing from "@/components/calc/WoodPairing";
import { getTool } from "@/lib/tools";

const t = getTool("wood-pairing");
export const metadata = {
  title: t.title,
  description: t.desc,
  alternates: { canonical: "/tools/wood-pairing/" },
  keywords: t.keywords,
  openGraph: { title: t.title, description: t.desc, url: "/tools/wood-pairing/" },
};

const faqs = [
  { q: "What is the best wood for smoking brisket?", a: "Oak is the classic balanced choice, with hickory for more punch. Mesquite works but is strong and best blended with oak to avoid bitterness." },
  { q: "What wood is best for pork and ribs?", a: "Hickory is traditional, and fruit woods like apple and cherry add sweetness and color. Pecan is a milder, nutty alternative to hickory." },
  { q: "Can you use too much smoking wood?", a: "Yes. Too much heavy smoke turns food bitter. Aim for thin blue smoke rather than billowing white smoke, and match wood strength to the meat." },
];

export default function Page() {
  return <ToolShell slug="wood-pairing" faqs={faqs}><WoodPairing /></ToolShell>;
}

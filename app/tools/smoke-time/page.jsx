import ToolShell from "@/components/ToolShell";
import SmokeTime from "@/components/calc/SmokeTime";
import { getTool } from "@/lib/tools";

const t = getTool("smoke-time");
export const metadata = {
  title: t.title,
  description: t.desc,
  alternates: { canonical: "/tools/smoke-time/" },
  keywords: t.keywords,
  openGraph: { images: ["/og.png"], title: t.title, description: t.desc, url: "/tools/smoke-time/" },
};

const faqs = [
  { q: "How long does it take to smoke a brisket?", a: "At a 250°F pit, plan on roughly 75-90 minutes per pound, so a 13 lb brisket often runs 12-16 hours. Cook to probe-tender (around 203°F), not to the clock, and start early." },
  { q: "How long to smoke a pork butt per pound?", a: "About 75-105 minutes per pound at 225-250°F. A stall around 150-170°F can add hours, so build in buffer and pull when probe-tender near 203°F." },
  { q: "What time should I start my smoke to eat on time?", a: "Work backward from your serving time: subtract your rest (1+ hour for big cuts) and the longer end of the cook estimate. This calculator does that for you and gives a start time with a built-in buffer." },
];

export default function Page() {
  return <ToolShell slug="smoke-time" faqs={faqs}><SmokeTime /></ToolShell>;
}

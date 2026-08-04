import ToolShell from "@/components/ToolShell";
import SmokeTime from "@/components/calc/SmokeTime";
import { getTool } from "@/lib/tools";
import { BRISKET_PLANNING } from "@/lib/brisketTiming";
import { pageMetadata } from "@/lib/metadata";

const t = getTool("smoke-time");
export const metadata = pageMetadata({
  title: t.title,
  description: t.desc,
  canonical: "/tools/smoke-time/",
  keywords: t.keywords,
});

const faqs = [
  { q: "How long does it take to smoke a brisket?", a: `At ${BRISKET_PLANNING.pitLabel}, use ${BRISKET_PLANNING.minMinutesPerPound}-${BRISKET_PLANNING.maxMinutesPerPound} minutes per pound only for planning, or roughly 13-20 hours for a 13 lb brisket. Verify 145°F followed by a 3-minute rest, then use probe feel in the flat for texture.` },
  { q: "How long to smoke a pork butt per pound?", a: "About 75-105 minutes per pound at 225-250°F. A stall around 150-170°F can add hours, so build in buffer and pull when probe-tender near 203°F." },
  { q: "What time should I start my smoke to eat on time?", a: "Work backward from your serving time: subtract your rest (1+ hour for big cuts) and the longer end of the cook estimate. This calculator does that for you and gives a start time with a built-in buffer." },
];

export default function Page() {
  return <ToolShell slug="smoke-time" faqs={faqs}><SmokeTime /></ToolShell>;
}

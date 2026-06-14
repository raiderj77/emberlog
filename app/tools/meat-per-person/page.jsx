import ToolShell from "@/components/ToolShell";
import MeatPerPerson from "@/components/calc/MeatPerPerson";
import { getTool } from "@/lib/tools";

const t = getTool("meat-per-person");
export const metadata = {
  title: t.title,
  description: t.desc,
  alternates: { canonical: "/tools/meat-per-person/" },
  keywords: t.keywords,
  openGraph: { images: ["/og.png"], title: t.title, description: t.desc, url: "/tools/meat-per-person/" },
};

const faqs = [
  { q: "How much pulled pork per person?", a: "About 1/3 to 1/2 pound cooked per adult. Pork shoulder yields roughly 50% after cooking, so buy about 1 pound of raw shoulder per person." },
  { q: "How much brisket per person?", a: "Around 1/2 pound cooked per adult as the main. A trimmed packer loses about half its weight, so buy roughly 1 pound of raw brisket per person." },
  { q: "How do I adjust for kids and sides?", a: "Count kids as about half an adult portion, and if the meat is one of several proteins or you have heavy sides, reduce the per-person amount by roughly 40%. This calculator handles both." },
];

export default function Page() {
  return <ToolShell slug="meat-per-person" faqs={faqs}><MeatPerPerson /></ToolShell>;
}

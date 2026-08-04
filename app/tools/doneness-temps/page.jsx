import ToolShell from "@/components/ToolShell";
import DonenessTemps from "@/components/calc/DonenessTemps";
import { getTool } from "@/lib/tools";
import { pageMetadata } from "@/lib/metadata";

const t = getTool("doneness-temps");
export const metadata = pageMetadata({
  title: t.title,
  description: t.desc,
  canonical: "/tools/doneness-temps/",
  keywords: t.keywords,
});

const faqs = [
  { q: "What is the safe internal temperature for chicken?", a: "USDA lists 165°F for all poultry. For a whole bird, check the thickest breast and the innermost thigh and wing without touching bone." },
  { q: "What temperature is brisket done?", a: "The USDA minimum for whole beef cuts is 145°F followed by a 3-minute rest. Brisket is commonly cooked farther for texture; use 200-205°F only as a checkpoint and remove it when a probe slides into the flat with little resistance." },
  { q: "Do I need to rest meat after cooking?", a: "USDA recommends a 3-minute rest for whole cuts of beef, pork, lamb, and veal at 145°F. Large BBQ cuts benefit from much longer rests." },
];

export default function Page() {
  return <ToolShell slug="doneness-temps" faqs={faqs}><DonenessTemps /></ToolShell>;
}

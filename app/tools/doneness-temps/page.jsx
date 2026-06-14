import ToolShell from "@/components/ToolShell";
import DonenessTemps from "@/components/calc/DonenessTemps";
import { getTool } from "@/lib/tools";

const t = getTool("doneness-temps");
export const metadata = {
  title: t.title,
  description: t.desc,
  alternates: { canonical: "/tools/doneness-temps/" },
  keywords: t.keywords,
  openGraph: { images: ["/og.png"], title: t.title, description: t.desc, url: "/tools/doneness-temps/" },
};

const faqs = [
  { q: "What is the safe internal temperature for chicken?", a: "All poultry, whole or ground, is safe at 165°F internal, measured in the thickest part away from bone (USDA FSIS)." },
  { q: "What temperature is brisket done?", a: "For tenderness, brisket is cooked to about 200-205°F internal, well above the 145°F safe minimum for beef. Pull it when a probe slides in with little resistance." },
  { q: "Do I need to rest meat after cooking?", a: "USDA recommends a 3-minute rest for whole cuts of beef, pork, lamb, and veal at 145°F. Large BBQ cuts benefit from much longer rests." },
];

export default function Page() {
  return <ToolShell slug="doneness-temps" faqs={faqs}><DonenessTemps /></ToolShell>;
}

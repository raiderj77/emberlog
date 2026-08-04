import { SITE } from "@/lib/site";
import { Container, Breadcrumb } from "@/components/ui";
import JsonLd from "@/components/JsonLd";
import CookLog from "@/components/CookLog";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Free BBQ Cook Log",
  description:
    "A free, hardware-agnostic BBQ cook log. Track meats and probes, chart readings, log a timeline, and export backups. No account; core pages may work offline after loading.",
  canonical: "/log/",
});

export default function LogPage() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: `${SITE.name} Cook Log`,
    url: `${SITE.url}/log/`,
    applicationCategory: "LifestyleApplication",
    operatingSystem: "Any (web browser)",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    description:
      "A free, hardware-agnostic BBQ cook log with multiple named probe channels, temperature charts, full JSON backup, and probe-reading CSV export.",
  };
  return (
    <>
      <JsonLd data={ld} />
      <Container className="py-10">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Cook Log" }]} />
        <CookLog />
      </Container>
    </>
  );
}

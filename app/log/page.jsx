import { SITE } from "@/lib/site";
import { Container, Breadcrumb } from "@/components/ui";
import JsonLd from "@/components/JsonLd";
import CookLog from "@/components/CookLog";

export const metadata = {
  title: "Free BBQ Cook Log",
  description:
    "A free, hardware-agnostic BBQ cook log. Track multiple meats and probes, chart the temperature curve, log your timeline, and export to CSV. No account, works offline, data stays on your device.",
  alternates: { canonical: "/log/" },
  openGraph: {
    title: `Free BBQ Cook Log · ${SITE.name}`,
    description:
      "Track multiple meats and probes, chart the temperature curve, and export your data. Free, no account, works on any device.",
    url: "/log/",
  },
};

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
      "A free, hardware-agnostic BBQ cook log with multi-meat and multi-probe tracking, temperature charts, and CSV export.",
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

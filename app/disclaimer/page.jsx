import Link from "next/link";
import { SITE } from "@/lib/site";
import { Container, Breadcrumb } from "@/components/ui";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Disclaimer",
  description: `Read ${SITE.name}'s food-safety, accuracy, risk, professional-advice, and Amazon affiliate disclosures before using the guides and tools.`,
  canonical: "/disclaimer/",
});

export default function DisclaimerPage() {
  return (
    <Container className="py-10">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Disclaimer" }]} />
      <div className="mx-auto max-w-prose">
        <h1 className="font-display text-3xl font-bold tracking-tight">Disclaimer</h1>
        <p className="mt-2 text-sm text-muted">Last updated: August 3, 2026</p>
        <div className="prose-em mt-6">
          <h2>Food-safety information</h2>
          <p>The content, calculators, and tools on {SITE.name} are for general informational and educational purposes only and are not professional food-safety, nutritional, or medical advice. Safety endpoints are checked against the USDA Food Safety and Inspection Service (FSIS); always consult the current <a href="https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart">official USDA chart</a> and verify temperatures with a food thermometer. Cooking times and quantities are estimates that vary with equipment, conditions, and ingredients.</p>
          <p>You assume all risk associated with preparing, cooking, and consuming food based on information from this Site, including the risk of foodborne illness, fire, and injury.</p>

          <h2>Accuracy</h2>
          <p>We work to keep information accurate and current but make no guarantee of completeness or accuracy. Use your own judgment, and when in doubt, follow official guidance.</p>

          <h2>Affiliate disclosure</h2>
          <p>{SITE.name} may contain affiliate links, including links used as a participant in the Amazon Services LLC Associates Program. As an Amazon Associate I earn from qualifying purchases. A qualifying purchase does not change the price you pay. See our <Link href="/editorial-standards/">editorial standards</Link> for the commercial-independence policy.</p>

          <h2>No professional relationship</h2>
          <p>Reading this Site does not create any professional or advisory relationship. For specific health, dietary, or safety concerns, consult a qualified professional.</p>

          <h2>Contact</h2>
          <p>Questions can be sent to {SITE.contactEmail}.</p>
        </div>
      </div>
    </Container>
  );
}

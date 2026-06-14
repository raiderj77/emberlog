import { SITE } from "@/lib/site";
import { Container, Breadcrumb } from "@/components/ui";

export const metadata = {
  title: "Disclaimer",
  description: `Food-safety and affiliate disclaimer for ${SITE.name}.`,
  alternates: { canonical: "/disclaimer/" },
};

export default function DisclaimerPage() {
  return (
    <Container className="py-10">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Disclaimer" }]} />
      <div className="mx-auto max-w-prose">
        <h1 className="font-display text-3xl font-bold tracking-tight">Disclaimer</h1>
        <p className="mt-2 text-sm text-muted">Last updated: June 2026</p>
        <div className="prose-em mt-6">
          <h2>Food-safety information</h2>
          <p>The content, calculators, and tools on {SITE.name} are for general informational and educational purposes only and are not professional food-safety, nutritional, or medical advice. Safe minimum internal temperatures referenced on this Site are drawn from the USDA Food Safety and Inspection Service (FSIS); however, you should always consult current official USDA guidance and verify doneness with a calibrated thermometer. Cooking times and quantities are estimates that vary with equipment, conditions, and ingredients.</p>
          <p>You assume all risk associated with preparing, cooking, and consuming food based on information from this Site, including the risk of foodborne illness, fire, and injury.</p>

          <h2>Accuracy</h2>
          <p>We work to keep information accurate and current but make no guarantee of completeness or accuracy. Use your own judgment, and when in doubt, follow official guidance.</p>

          <h2>Affiliate disclosure</h2>
          <p>{SITE.name} may contain affiliate links, including as a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com. As an Amazon Associate we may earn from qualifying purchases. This comes at no additional cost to you and does not influence our recommendations.</p>

          <h2>No professional relationship</h2>
          <p>Reading this Site does not create any professional or advisory relationship. For specific health, dietary, or safety concerns, consult a qualified professional.</p>

          <h2>Contact</h2>
          <p>Questions can be sent to {SITE.contactEmail}.</p>
        </div>
      </div>
    </Container>
  );
}

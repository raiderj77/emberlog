import { SITE } from "@/lib/site";
import { Container, Breadcrumb } from "@/components/ui";

export const metadata = {
  title: "Terms of Use",
  description: `Terms of Use for ${SITE.name}.`,
  alternates: { canonical: "/terms/" },
};

export default function TermsPage() {
  return (
    <Container className="py-10">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Terms of Use" }]} />
      <div className="mx-auto max-w-prose">
        <h1 className="font-display text-3xl font-bold tracking-tight">Terms of Use</h1>
        <p className="mt-2 text-sm text-muted">Last updated: June 2026</p>
        <div className="prose-em mt-6">
          <p>By accessing or using {SITE.domain} (the "Site"), you agree to these Terms of Use. If you do not agree, please do not use the Site.</p>

          <h2>Use of the Site</h2>
          <p>{SITE.name} provides a cook log and informational tools and content for personal, non-commercial use. You agree not to misuse the Site, interfere with its operation, or attempt to access it in any unauthorized manner.</p>

          <h2>No warranties</h2>
          <p>The Site and all tools, calculators, and content are provided "as is" and "as available" without warranties of any kind, express or implied, including accuracy, fitness for a particular purpose, or non-infringement. Cooking times, temperatures, quantities, and other outputs are estimates and general guidance only.</p>

          <h2>Food safety and assumption of risk</h2>
          <p>Cooking involves inherent risks, including foodborne illness, fire, and burns. Information on this Site is not a substitute for professional advice or official guidance such as the USDA Food Safety and Inspection Service. You are solely responsible for safely preparing and cooking food, including verifying safe internal temperatures. See our Disclaimer for more.</p>

          <h2>Limitation of liability</h2>
          <p>To the fullest extent permitted by law, {SITE.name} and its creator will not be liable for any indirect, incidental, or consequential damages, or any damages arising from your use of, or inability to use, the Site, its tools, or its content.</p>

          <h2>Your data</h2>
          <p>Cook data you enter is stored in your own browser, not on our servers. You are responsible for backing up your data (the log includes an export feature). We are not responsible for data lost due to clearing your browser, device failure, or other causes.</p>

          <h2>Intellectual property</h2>
          <p>The Site's design, text, and original content are owned by {SITE.name} unless otherwise noted. You may not reproduce or redistribute substantial portions without permission. Product and brand names referenced are the property of their respective owners and are used for identification only; {SITE.name} is not affiliated with or endorsed by them.</p>

          <h2>Third-party links</h2>
          <p>The Site may link to third-party sites and may contain affiliate links. We are not responsible for the content or practices of third-party sites.</p>

          <h2>Governing law</h2>
          <p>These Terms are governed by the laws of {SITE.jurisdiction}, without regard to conflict-of-law principles.</p>

          <h2>Changes</h2>
          <p>We may update these Terms at any time. Continued use of the Site after changes constitutes acceptance.</p>

          <h2>Contact</h2>
          <p>Questions can be sent to {SITE.contactEmail}.</p>
        </div>
      </div>
    </Container>
  );
}

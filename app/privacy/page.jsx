import { SITE } from "@/lib/site";
import { Container, Breadcrumb } from "@/components/ui";

export const metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${SITE.name}.`,
  alternates: { canonical: "/privacy/" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <Container className="py-10">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]} />
      <div className="mx-auto max-w-prose">
        <h1 className="font-display text-3xl font-bold tracking-tight">Privacy Policy</h1>
        <p className="mt-2 text-sm text-muted">Last updated: July 16, 2026</p>
        <div className="prose-em mt-6">
          <p>This Privacy Policy explains how {SITE.name} ("we", "us") handles information when you use {SITE.domain} (the "Site"). We have tried to keep both the Site and this policy simple.</p>

          <h2>The short version</h2>
          <p>The cook data you enter into our cook log is stored locally in your own browser (using your browser's local storage). It is <strong>not</strong> transmitted to or stored on our servers. We cannot see your cooks. If you clear your browser data, that information is erased.</p>

          <h2>Information we do not collect</h2>
          <p>We do not require an account, and we do not ask for your name, email, or payment information to use the tools. We do not sell personal information.</p>

          <h2>Information collected automatically</h2>
          <p>Our hosting provider, Vercel, receives standard technical request data such as IP address, browser type, requested page, and request time to deliver and protect the Site. Google Analytics does not load unless you choose "Allow analytics" in the privacy choices banner.</p>

          <h2>Cookies and advertising</h2>
          <p>The Site stores your cook log and your privacy choice in your browser's local storage. The Site does not currently display third-party advertising.</p>
          <p>Some pages contain clearly disclosed Amazon affiliate links. If you choose one, Amazon receives the normal request information associated with visiting its site and applies its own privacy policy. We do not send your cook-log entries to Amazon.</p>

          <h2>Analytics</h2>
          <p>If you choose "Allow analytics," Google Analytics loads and may process the page visited, referral source, browser and device information, approximate location derived from IP address, and interaction events such as a disclosed gear-link click. Analytics events never include cook-log entries, meat weights, temperatures, notes, photos, or other values you enter into the tools. If you choose "Essential only," Google Analytics stays disabled.</p>

          <h2>Your choices and rights</h2>
          <p>You can reopen "Privacy choices" from the footer at any time. You can also clear locally stored cook data and privacy choices through your browser settings. Depending on where you live (for example, under the GDPR or CCPA/CPRA), you may have rights to access, correct, or delete personal information that a data controller holds about you. Because we do not maintain accounts or store your cook data on our servers, most such requests will relate only to standard hosting or consented analytics data held by our service providers.</p>

          <h2>Children</h2>
          <p>The Site is intended for a general audience and is not directed to children under 13, and we do not knowingly collect personal information from them.</p>

          <h2>Changes</h2>
          <p>We may update this policy from time to time. Material changes will be reflected by the "Last updated" date above.</p>

          <h2>Contact</h2>
          <p>Questions about this policy can be sent to {SITE.contactEmail}.</p>
        </div>
      </div>
    </Container>
  );
}

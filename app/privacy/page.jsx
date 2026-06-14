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
        <p className="mt-2 text-sm text-muted">Last updated: June 2026</p>
        <div className="prose-em mt-6">
          <p>This Privacy Policy explains how {SITE.name} ("we", "us") handles information when you use {SITE.domain} (the "Site"). We have tried to keep both the Site and this policy simple.</p>

          <h2>The short version</h2>
          <p>The cook data you enter into our cook log is stored locally in your own browser (using your browser's local storage). It is <strong>not</strong> transmitted to or stored on our servers. We cannot see your cooks. If you clear your browser data, that information is erased.</p>

          <h2>Information we do not collect</h2>
          <p>We do not require an account, and we do not ask for your name, email, or payment information to use the tools. We do not sell personal information.</p>

          <h2>Information collected automatically</h2>
          <p>Like most websites, our hosting provider and analytics may automatically receive standard technical data such as your IP address, browser type, device type, referring pages, and pages visited. This is used to understand aggregate usage and keep the Site running and secure.</p>

          <h2>Cookies and advertising</h2>
          <p>We may use cookies and similar technologies for basic functionality and analytics. If we display advertising, third-party vendors, including Google, may use cookies to serve ads based on your prior visits to this and other websites. Google's use of advertising cookies enables it and its partners to serve ads to you based on your visit to this Site and/or other sites on the Internet.</p>
          <p>You may opt out of personalized advertising by visiting Google's Ads Settings (google.com/settings/ads), and you can learn about additional opt-out options at aboutads.info and youronlinechoices.eu. Third-party vendors and ad networks may also place cookies; please review their policies for details.</p>

          <h2>Analytics</h2>
          <p>We may use a privacy-respecting analytics service to measure traffic in aggregate. Analytics providers process data according to their own privacy policies.</p>

          <h2>Your choices and rights</h2>
          <p>You can clear locally stored cook data at any time by clearing your browser storage, and you can disable cookies in your browser settings. Depending on where you live (for example, under the GDPR or CCPA/CPRA), you may have rights to access, correct, or delete personal information that a data controller holds about you. Because we do not maintain accounts or store your cook data on our servers, most such requests will relate only to standard technical/analytics data held by our service providers.</p>

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

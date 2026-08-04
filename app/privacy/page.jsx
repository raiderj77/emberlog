import Link from "next/link";
import { SITE } from "@/lib/site";
import { Container, Breadcrumb } from "@/components/ui";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: `How ${SITE.name} handles local cook data, hosting logs, optional analytics, and affiliate-link visits.`,
  canonical: "/privacy/",
  robots: { index: true, follow: true },
});

export default function PrivacyPage() {
  return (
    <Container className="py-10">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]} />
      <div className="mx-auto max-w-prose">
        <h1 className="font-display text-3xl font-bold tracking-tight">Privacy Policy</h1>
        <p className="mt-2 text-sm text-muted">Last updated: August 3, 2026</p>

        <div className="prose-em mt-6">
          <p>This policy explains how {SITE.name} (the “Site”) handles information. The independent site operator and data controller is {SITE.author}. Questions and privacy requests can be sent to <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>.</p>

          <h2>The short version</h2>
          <p>Cook-log entries and values you type into calculators stay in your browser and are not intentionally sent to us. No account is required. The Site does not sell personal information or use it for cross-context behavioral advertising. Google Analytics does not load unless you allow it, and a browser Global Privacy Control signal keeps it off.</p>

          <h2>Information and purposes</h2>
          <ul>
            <li><strong>Local cook data.</strong> Cook names, notes, temperatures, weights, ratings, and other log values are stored in your browser’s local storage so the log works on your device. We cannot retrieve that data. You control its retention by deleting cooks, clearing browser storage, or exporting and then removing it.</li>
            <li><strong>Essential technical data.</strong> Vercel, our hosting and security provider, may process an IP address, user agent, requested URL, timestamps, and related request or security data to deliver the Site, prevent abuse, and diagnose failures.</li>
            <li><strong>Optional analytics.</strong> If you select “Allow analytics,” Google Analytics may process a random browser identifier, the page path and title, device/browser details, approximate location derived from an IP address, referrer information, and interaction events enabled in the analytics account. Our analytics events never include cook-log entries or calculator values, and our page-view integration removes URL query strings. Google signals and ad-personalization signals are disabled in the Site’s tag configuration.</li>
            <li><strong>Messages.</strong> If you email us, we process your address and message to answer you and maintain an appropriate record of the request.</li>
            <li><strong>Affiliate visits.</strong> If you choose a clearly disclosed Amazon link, your browser visits Amazon directly. Amazon receives the usual request information and applies its own privacy policy. We receive aggregate commission reporting, not your cook-log entries.</li>
          </ul>

          <h2>Legal bases</h2>
          <p>Where European or UK data-protection law applies, essential hosting and security processing is based on our legitimate interests in operating a safe, reliable Site; optional analytics is based on consent; responding to requests is based on our legitimate interests or steps you request; and legal recordkeeping is based on applicable obligations. You can withdraw analytics consent at any time without affecting earlier lawful processing.</p>

          <h2>Providers, disclosures, and transfers</h2>
          <p>We use Vercel for hosting, Google only for consented analytics, and Amazon for qualifying affiliate destinations. Those companies may process information in the United States and other countries where they operate, under their own contractual and legal transfer safeguards. We may also disclose information when required by law or necessary to protect the Site and its users. We do not permit these providers to receive the cook-log values stored locally in your browser.</p>

          <h2>Retention</h2>
          <p>Local cook data remains until you delete it or clear browser storage. Hosting security records, consented analytics, and correspondence are retained only as reasonably needed for delivery, security, measurement, support, legal compliance, or dispute resolution. Provider and account-level retention settings can change; email us if you need the current setting for a specific request.</p>

          <h2>Cookies, browser storage, and advertising</h2>
          <p>Essential local storage keeps your cook log, privacy choice, and optional install-prompt preference. If analytics is allowed, Google Analytics may set identifiers such as <code>_ga</code>; selecting “Essential only” disables analytics and attempts to remove those first-party analytics cookies. The Site does not currently display third-party advertising. Its public AdSense publisher metadata and <code>ads.txt</code> entry identify the publisher but do not themselves place cookies or show ads.</p>

          <h2>Your choices and rights</h2>
          <p>Use <strong>Privacy choices</strong> in the footer to allow or withdraw optional analytics. We honor the browser Global Privacy Control signal by keeping optional analytics off. Browser settings can delete local cook data and cookies. Depending on where you live, you may have rights to access, correct, delete, restrict, object to, or receive a copy of personal data, and to withdraw consent. Because cook data never leaves your browser, we cannot access or restore it. Email {SITE.contactEmail} for other requests. You may also complain to your local data-protection authority.</p>

          <h2>Children</h2>
          <p>The Site is a general-audience BBQ utility and is not directed to children under 13. We do not knowingly request personal information from children.</p>

          <h2>Security and policy changes</h2>
          <p>We use reasonable technical and organizational safeguards, but no Internet service is risk-free. Export files may contain information you entered, so store them safely. We may update this policy when the Site or providers change and will revise the date above. Material changes will be presented appropriately on the Site.</p>

          <p>For food-safety scope and limitations, see the <Link href="/disclaimer/">disclaimer</Link>. For content practices, see our <Link href="/editorial-standards/">editorial standards</Link>.</p>
        </div>
      </div>
    </Container>
  );
}

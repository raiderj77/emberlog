import Link from "next/link";
import { Breadcrumb, Container, SectionLabel } from "@/components/ui";
import { SITE } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Editorial Standards",
  description: "How Pitmaster Log researches food-safety claims, labels estimates, uses AI assistance, handles affiliate links, and corrects content.",
  canonical: "/editorial-standards/",
});

export default function EditorialStandardsPage() {
  return (
    <Container className="py-10">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Editorial Standards" }]} />
      <div className="mx-auto max-w-prose">
        <SectionLabel>Trust and transparency</SectionLabel>
        <h1 className="font-display text-4xl font-bold tracking-tight">Editorial standards</h1>
        <p className="mt-2 text-sm text-muted">Safety sources last checked: August 3, 2026</p>

        <div className="prose-em mt-6">
          <h2>Who is responsible</h2>
          <p>{SITE.name} is created and operated by <Link href="/about/">{SITE.author}</Link>, an independent software developer. The public author identity stays attached to guides and corrections. Jason does not claim to be a registered dietitian, food scientist, health professional, or certified food-safety instructor. The Site provides general information and planning tools, not professional advice.</p>

          <h2>Source hierarchy</h2>
          <p>Food-safety endpoints, rest requirements, holding temperatures, and turkey-smoking limits are checked against current primary guidance from the U.S. Department of Agriculture Food Safety and Inspection Service. Key references include the <a href="https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart">safe-temperature chart</a>, <a href="https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/food-thermometers">food-thermometer guidance</a>, <a href="https://ask.fsis.usda.gov/article/What-is-the-Danger-Zone">danger-zone and holding guidance</a>, and the <a href="https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/poultry/turkey-alternate-routes-table">turkey smoking table</a>. Equipment operation and fire safety defer to the applicable manufacturer manual.</p>
          <p>Cook times, yield ranges, smoke flavor, bark, and probe-tender temperatures vary by cooker and food. We label those as planning estimates or common-practice texture goals and keep them separate from food-safety minimums.</p>

          <h2>Review and updates</h2>
          <p>Material changes are checked for internal consistency across guides, calculators, structured data, and FAQs. Automated tests scan for known unsafe claims, and production checks cover links, metadata, mobile layout, and calculator behavior. A displayed “Updated” date should reflect a substantive content review, not merely a new build.</p>
          <p>We do not claim that a guide was reviewed by a chef, dietitian, attorney, medical professional, or other specialist unless that review actually occurred and the reviewer is identified.</p>

          <h2>How AI is used</h2>
          <p>AI tools may assist with drafting, code, consistency checks, and audits. AI output is not treated as a source or authority. The named operator remains responsible for what is published, and safety claims are checked against the primary sources above.</p>

          <h2>Corrections</h2>
          <p>If you find an error, email <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a> with the page and the claim. Safety issues are prioritized. Confirmed material errors are corrected in the guide and its related tool or structured data, and the review date is updated.</p>

          <h2>Commercial independence</h2>
          <p>The Site may earn from clearly disclosed Amazon Associate links. A qualifying purchase does not change your price. Affiliate availability does not override safety guidance, and we do not accept payment to alter a food-safety endpoint. The Site does not currently load display ads; public AdSense publisher metadata and <code>ads.txt</code> do not themselves show ads.</p>

          <p>Also read the <Link href="/privacy/">privacy policy</Link>, <Link href="/disclaimer/">disclaimer</Link>, and <Link href="/terms/">terms</Link>.</p>
        </div>
      </div>
    </Container>
  );
}

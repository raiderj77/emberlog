import Link from "next/link";
import { SITE } from "@/lib/site";
import { Container, Breadcrumb, SectionLabel } from "@/components/ui";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "About",
  description: `About ${SITE.name}: a free, hardware-agnostic BBQ cook log and pitmaster toolkit built to be fast, private, and genuinely useful. Created by ${SITE.author}.`,
  canonical: "/about/",
});

export default function AboutPage() {
  return (
    <Container className="py-10">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "About" }]} />
      <div className="mx-auto max-w-prose">
        <SectionLabel>About</SectionLabel>
        <h1 className="font-display text-4xl font-bold tracking-tight">Why {SITE.name} exists</h1>

        <div className="prose-em mt-6">
          <p>{SITE.name} is a browser-based option for manually recording readings from hardware you already own and keeping a portable cook history.</p>
          <p>{SITE.name} is a free, hardware-agnostic <Link href="/log/">cook log</Link> that runs in a browser and keeps cook data on your device. Its <Link href="/tools/">calculators</Link> provide planning estimates for smoke times, meat quantities, dry-brine salt, doneness temperatures, and wood pairing.</p>

          <h2>What we believe</h2>
          <ul>
            <li><strong>Your cook records stay local.</strong> Records you enter remain in browser storage and are not sent to Pitmaster Log servers. Export a full JSON backup or a CSV of temperature readings anytime.</li>
            <li><strong>Free should mean free.</strong> The log and every calculator are free to use, with no trial countdown on the core tools.</li>
            <li><strong>Accuracy matters.</strong> Food-safety temperatures on this site come from the USDA Food Safety and Inspection Service, and we draw a clear line between safe-minimum temperatures and the higher texture targets BBQ cooks use.</li>
            <li><strong>No hardware lock-in.</strong> Use any thermometer or controller you already own.</li>
          </ul>

          <h2>Who made it</h2>
          <p>{SITE.name} was created by {SITE.author}, an independent software developer who builds focused web tools. Jason does not claim to be a dietitian, food scientist, health professional, or certified food-safety instructor. The project is not affiliated with or endorsed by a thermometer, smoker, or grill manufacturer.</p>

          <h2>A note on food safety</h2>
          <p>Content here is general information based on USDA guidance and clearly labeled BBQ planning estimates, not professional food-safety or medical advice. Always confirm the current USDA minimum with a food thermometer before serving. See our <Link href="/editorial-standards/">editorial standards</Link> and <Link href="/disclaimer/">disclaimer</Link>.</p>

          <p>Questions or suggestions? <Link href="/contact/">Get in touch</Link>, and fire up the <Link href="/log/">cook log</Link> on your next smoke.</p>
        </div>
      </div>
    </Container>
  );
}

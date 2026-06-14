import Link from "next/link";
import { SITE } from "@/lib/site";
import { Container, Breadcrumb, SectionLabel } from "@/components/ui";

export const metadata = {
  title: "About",
  description: `About ${SITE.name}: a free, hardware-agnostic BBQ cook log and pitmaster toolkit built to be fast, private, and genuinely useful. Created by ${SITE.author}.`,
  alternates: { canonical: "/about/" },
};

export default function AboutPage() {
  return (
    <Container className="py-10">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "About" }]} />
      <div className="mx-auto max-w-prose">
        <SectionLabel>About</SectionLabel>
        <h1 className="font-display text-4xl font-bold tracking-tight">Why {SITE.name} exists</h1>

        <div className="prose-em mt-6">
          <p>Almost every good BBQ logging tool is locked behind a hundred-dollar piece of hardware or stuck on a single app store. Meanwhile, the people who actually want to track their cooks, dial in their cooker, and repeat their best brisket are left with a spreadsheet or a paper notebook.</p>
          <p>{SITE.name} is the fix: a genuinely free, hardware-agnostic <Link href="/log/">cook log</Link> that runs in any browser, works on any phone or computer, and keeps your data on your own device. Alongside it is a set of fast, accurate <Link href="/tools/">calculators</Link> for the questions that come up every cook, smoke times, how much meat to buy, dry brine ratios, doneness temperatures, and wood pairing.</p>

          <h2>What we believe</h2>
          <ul>
            <li><strong>Your data is yours.</strong> Cook logs are stored only in your browser, never uploaded to a server, and you can export everything to CSV anytime.</li>
            <li><strong>Free should mean free.</strong> The log and every calculator are free to use, with no trial countdown on the core tools.</li>
            <li><strong>Accuracy matters.</strong> Food-safety temperatures on this site come from the USDA Food Safety and Inspection Service, and we draw a clear line between safe-minimum temperatures and the higher texture targets BBQ cooks use.</li>
            <li><strong>No hardware lock-in.</strong> Use any thermometer or controller you already own.</li>
          </ul>

          <h2>Who made it</h2>
          <p>{SITE.name} was created by {SITE.author}, an independent developer who builds focused, no-nonsense web tools. It is an independent project, not affiliated with or endorsed by any thermometer, smoker, or grill manufacturer.</p>

          <h2>A note on food safety</h2>
          <p>Content here is general information based on USDA guidance and common BBQ practice, not professional food-safety or medical advice. Always confirm the USDA safe minimum internal temperature with a thermometer before serving. See our <Link href="/disclaimer/">disclaimer</Link> for details.</p>

          <p>Questions or suggestions? <Link href="/contact/">Get in touch</Link>, and fire up the <Link href="/log/">cook log</Link> on your next smoke.</p>
        </div>
      </div>
    </Container>
  );
}

import { SITE } from "@/lib/site";
import { Container, Breadcrumb } from "@/components/ui";
import { Mail } from "lucide-react";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Contact",
  description: `Contact ${SITE.name} to report a bug or food-safety concern, ask a question, share feedback, or suggest an improvement to a guide or tool.`,
  canonical: "/contact/",
});

export default function ContactPage() {
  return (
    <Container className="py-10">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
      <div className="mx-auto max-w-prose">
        <h1 className="font-display text-3xl font-bold tracking-tight">Contact</h1>
        <div className="prose-em mt-6">
          <p>Have a question, found a bug, or spotted a content or food-safety issue? Send the page address and the specific claim so it can be reviewed. Safety corrections are prioritized under the editorial policy.</p>
        </div>
        <a href={`mailto:${SITE.contactEmail}`} className="mt-4 inline-flex items-center gap-2 rounded-lg bg-ember px-5 py-3 font-semibold text-white hover:bg-ember-600">
          <Mail className="h-4 w-4" aria-hidden="true" /> {SITE.contactEmail}
        </a>
        <p className="mt-6 text-sm text-muted">{SITE.name} is an independent project and is not affiliated with any thermometer, smoker, or grill manufacturer.</p>
      </div>
    </Container>
  );
}

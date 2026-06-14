import { SITE } from "@/lib/site";
import { Container, Breadcrumb } from "@/components/ui";
import { Mail } from "lucide-react";

export const metadata = {
  title: "Contact",
  description: `Contact ${SITE.name} with questions, feedback, or suggestions.`,
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return (
    <Container className="py-10">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
      <div className="mx-auto max-w-prose">
        <h1 className="font-display text-3xl font-bold tracking-tight">Contact</h1>
        <div className="prose-em mt-6">
          <p>Have a question, found a bug, or want to suggest a feature or a guide? We'd like to hear from you.</p>
        </div>
        <a href={`mailto:${SITE.contactEmail}`} className="mt-4 inline-flex items-center gap-2 rounded-lg bg-ember px-5 py-3 font-semibold text-white hover:bg-ember-600">
          <Mail className="h-4 w-4" /> {SITE.contactEmail}
        </a>
        <p className="mt-6 text-sm text-muted">{SITE.name} is an independent project and is not affiliated with any thermometer, smoker, or grill manufacturer.</p>
      </div>
    </Container>
  );
}

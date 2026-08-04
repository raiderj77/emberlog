import Link from "next/link";
import { Container } from "@/components/ui";

export const metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <Container className="py-20 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-ember-700">404</p>
      <h1 className="mt-2 font-display text-4xl font-bold tracking-tight">That page is not on the pit</h1>
      <p className="mx-auto mt-3 max-w-xl text-muted">The address may have changed. Open the cook log, browse the calculators, or find a BBQ guide.</p>
      <div className="mt-7 flex flex-wrap justify-center gap-3">
        <Link href="/log/" className="inline-flex min-h-11 items-center rounded-lg bg-ink px-5 py-2 font-semibold text-white">Open cook log</Link>
        <Link href="/tools/" className="inline-flex min-h-11 items-center rounded-lg border border-line bg-white px-5 py-2 font-semibold text-ink">Browse tools</Link>
        <Link href="/guides/" className="inline-flex min-h-11 items-center rounded-lg border border-line bg-white px-5 py-2 font-semibold text-ink">Browse guides</Link>
      </div>
    </Container>
  );
}

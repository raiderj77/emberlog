"use client";
import { useState } from "react";
import Link from "next/link";
import { Flame, Menu, X } from "lucide-react";
import { NAV, SITE } from "@/lib/site";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-content items-center justify-between px-5 sm:px-6">
        <Link href="/" className="flex items-center gap-2" aria-label={`${SITE.name} home`}>
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-ember text-white shadow-sm">
            <Flame className="h-5 w-5" strokeWidth={2.4} />
          </span>
          <span className="font-display text-xl font-bold tracking-tight">{SITE.name}</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-ink/80 transition hover:bg-white hover:text-ink"
            >
              {n.label}
            </Link>
          ))}
          <Link
            href="/log/"
            className="ml-2 rounded-lg bg-ink px-4 py-2 text-sm font-semibold text-white transition hover:bg-smoke"
          >
            Open the log
          </Link>
        </nav>

        <button
          className="rounded-lg p-2 text-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-paper md:hidden">
          <div className="mx-auto flex max-w-content flex-col px-5 py-2 sm:px-6">
            {NAV.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-ink/90 hover:bg-white"
              >
                {n.label}
              </Link>
            ))}
            <Link
              href="/log/"
              onClick={() => setOpen(false)}
              className="my-2 rounded-lg bg-ink px-4 py-3 text-center text-base font-semibold text-white"
            >
              Open the log
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

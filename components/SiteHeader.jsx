"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Flame, Menu, X, Download, Share, SquarePlus } from "lucide-react";
import { NAV, SITE } from "@/lib/site";

const DISMISS_KEY = "emberlog:install-dismissed";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [deferred, setDeferred] = useState(null);
  const [isIOS, setIsIOS] = useState(false);
  const [standalone, setStandalone] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [iosModal, setIosModal] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const isStandalone =
      window.matchMedia?.("(display-mode: standalone)")?.matches || window.navigator.standalone === true;
    setStandalone(!!isStandalone);

    const ua = window.navigator.userAgent.toLowerCase();
    const ios = /iphone|ipad|ipod/.test(ua);
    setIsIOS(ios);

    let dismissed = false;
    try { dismissed = localStorage.getItem(DISMISS_KEY) === "1"; } catch {}

    const onBIP = (e) => { e.preventDefault(); setDeferred(e); };
    window.addEventListener("beforeinstallprompt", onBIP);

    const onInstalled = () => { setDeferred(null); setShowBanner(false); setStandalone(true); };
    window.addEventListener("appinstalled", onInstalled);

    // Show the banner after a short delay if eligible and not dismissed.
    let timer;
    if (!isStandalone && !dismissed) {
      timer = setTimeout(() => {
        // Android/desktop: only if we captured a prompt. iOS: always (no prompt event exists).
        setShowBanner((prev) => prev || ios || false);
      }, 3500);
    }
    return () => {
      window.removeEventListener("beforeinstallprompt", onBIP);
      window.removeEventListener("appinstalled", onInstalled);
      if (timer) clearTimeout(timer);
    };
  }, []);

  // When the install prompt becomes available on Android/desktop, reveal the banner (unless dismissed).
  useEffect(() => {
    if (!deferred || standalone) return;
    let dismissed = false;
    try { dismissed = localStorage.getItem(DISMISS_KEY) === "1"; } catch {}
    if (!dismissed) setShowBanner(true);
  }, [deferred, standalone]);

  const canInstall = !standalone && (deferred || isIOS);

  async function install() {
    if (deferred) {
      deferred.prompt();
      try { await deferred.userChoice; } catch {}
      setDeferred(null);
      setShowBanner(false);
    } else if (isIOS) {
      setIosModal(true);
    }
  }
  function dismiss() {
    setShowBanner(false);
    try { localStorage.setItem(DISMISS_KEY, "1"); } catch {}
  }

  return (
    <>
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
              <Link key={n.href} href={n.href} className="rounded-lg px-3 py-2 text-sm font-medium text-ink/80 transition hover:bg-white hover:text-ink">
                {n.label}
              </Link>
            ))}
            {canInstall && (
              <button onClick={install} className="ml-1 inline-flex items-center gap-1.5 rounded-lg border border-ember/40 px-3 py-2 text-sm font-semibold text-ember-700 transition hover:bg-ember/5">
                <Download className="h-4 w-4" /> Install app
              </button>
            )}
            <Link href="/log/" className="ml-2 rounded-lg bg-ink px-4 py-2 text-sm font-semibold text-white transition hover:bg-smoke">
              Open the log
            </Link>
          </nav>

          <button className="rounded-lg p-2 text-ink md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu" aria-expanded={open}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="border-t border-line bg-paper md:hidden">
            <div className="mx-auto flex max-w-content flex-col px-5 py-2 sm:px-6">
              {NAV.map((n) => (
                <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 text-base font-medium text-ink/90 hover:bg-white">
                  {n.label}
                </Link>
              ))}
              {canInstall && (
                <button onClick={() => { setOpen(false); install(); }} className="mt-1 inline-flex items-center justify-center gap-1.5 rounded-lg border border-ember/40 px-4 py-3 text-base font-semibold text-ember-700">
                  <Download className="h-4 w-4" /> Install app
                </button>
              )}
              <Link href="/log/" onClick={() => setOpen(false)} className="my-2 rounded-lg bg-ink px-4 py-3 text-center text-base font-semibold text-white">
                Open the log
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* First-visit install banner */}
      {showBanner && canInstall && (
        <div className="fixed inset-x-0 bottom-0 z-50 px-3 pb-3 sm:px-4 sm:pb-4">
          <div className="mx-auto flex max-w-2xl items-center gap-3 rounded-xl border border-line bg-white p-3 shadow-card sm:p-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-ember text-white">
              <Flame className="h-6 w-6" strokeWidth={2.4} />
            </span>
            <div className="min-w-0 flex-1">
              <p className="font-display text-sm font-bold leading-tight sm:text-base">Install Pitmaster Log</p>
              <p className="mt-0.5 text-xs leading-snug text-muted sm:text-sm">Add it to your home screen for one-tap access and offline cook logging. No app store.</p>
            </div>
            <div className="flex shrink-0 items-center gap-2">
              <button onClick={install} className="rounded-lg bg-ember px-3 py-2 text-sm font-semibold text-white hover:bg-ember-600">Install</button>
              <button onClick={dismiss} aria-label="Dismiss" className="rounded-lg p-2 text-muted hover:text-ink"><X className="h-4 w-4" /></button>
            </div>
          </div>
        </div>
      )}

      {/* iOS instructions modal */}
      {iosModal && (
        <div className="fixed inset-0 z-[60] flex items-end justify-center bg-black/40 p-3 sm:items-center" onClick={() => setIosModal(false)}>
          <div className="w-full max-w-sm rounded-2xl bg-white p-5 shadow-card" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between">
              <h2 className="font-display text-lg font-bold">Add to your home screen</h2>
              <button onClick={() => setIosModal(false)} aria-label="Close" className="rounded-lg p-1.5 text-muted hover:text-ink"><X className="h-5 w-5" /></button>
            </div>
            <p className="mt-2 text-sm text-muted">On iPhone or iPad, install Pitmaster Log from Safari in two taps:</p>
            <ol className="mt-4 space-y-3">
              <li className="flex items-center gap-3 text-sm">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-paper font-bold text-ember">1</span>
                <span className="flex items-center gap-1.5">Tap the <Share className="inline h-4 w-4 text-ember" /> <strong>Share</strong> button in Safari's toolbar.</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-paper font-bold text-ember">2</span>
                <span className="flex items-center gap-1.5">Choose <SquarePlus className="inline h-4 w-4 text-ember" /> <strong>Add to Home Screen</strong>, then tap Add.</span>
              </li>
            </ol>
            <button onClick={() => { setIosModal(false); dismiss(); }} className="mt-5 w-full rounded-lg bg-ink py-2.5 text-sm font-semibold text-white hover:bg-smoke">Got it</button>
          </div>
        </div>
      )}
    </>
  );
}

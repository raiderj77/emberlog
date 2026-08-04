"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const STORAGE_KEY = "pitmasterlog_analytics_consent";
const MEASUREMENT_ID = "G-E5KQPM46PP";
const SCRIPT_ID = "pitmaster-google-analytics";

function hasGlobalPrivacyControl() {
  return typeof navigator !== "undefined" && navigator.globalPrivacyControl === true;
}

function readSavedChoice() {
  try {
    return window.localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

function saveChoice(choice) {
  try {
    window.localStorage.setItem(STORAGE_KEY, choice);
  } catch {
    // Consent still applies for this page view when storage is unavailable.
  }
}

function setAnalyticsDisabled(disabled) {
  window[`ga-disable-${MEASUREMENT_ID}`] = disabled;
}

function ensureGtag() {
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag() { window.dataLayer.push(arguments); };
  return window.gtag;
}

function denyAnalytics() {
  setAnalyticsDisabled(true);
  if (window.gtag) {
    window.gtag("consent", "update", {
      analytics_storage: "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });
  }

  for (const cookie of document.cookie.split(";")) {
    const name = cookie.split("=")[0]?.trim();
    if (name === "_ga" || name?.startsWith("_ga_")) {
      document.cookie = `${name}=; Max-Age=0; path=/; SameSite=Lax`;
      if (
        window.location.hostname === "pitmasterlog.com" ||
        window.location.hostname.endsWith(".pitmasterlog.com")
      ) {
        document.cookie = `${name}=; Max-Age=0; path=/; domain=pitmasterlog.com; SameSite=Lax`;
        document.cookie = `${name}=; Max-Age=0; path=/; domain=.pitmasterlog.com; SameSite=Lax`;
      }
    }
  }
}

function loadAnalytics(pathname) {
  setAnalyticsDisabled(false);
  const gtag = ensureGtag();
  const cleanLocation = `${window.location.origin}${pathname}`;

  gtag("consent", "default", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    wait_for_update: 500,
  });
  gtag("consent", "update", { analytics_storage: "granted" });
  gtag("set", {
    page_location: cleanLocation,
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
  });

  if (!document.getElementById(SCRIPT_ID)) {
    gtag("js", new Date());
    gtag("config", MEASUREMENT_ID, {
      send_page_view: false,
      anonymize_ip: true,
      page_location: cleanLocation,
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
    });

    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
    document.head.appendChild(script);
  }
}

function sendPageView(pathname) {
  if (!window.gtag) return;
  const title = document.title.replace(/[\u0000-\u001F\u007F]/g, "").slice(0, 150);
  const cleanLocation = `${window.location.origin}${pathname}`;
  window.gtag("set", { page_location: cleanLocation });
  window.gtag("event", "page_view", {
    page_path: pathname,
    page_location: cleanLocation,
    page_title: title,
  });
}

function announceResolved(choice) {
  window.dispatchEvent(new CustomEvent("pitmaster:privacy-resolved", { detail: { choice } }));
}

export default function ConsentManager() {
  const pathname = usePathname();
  const [choice, setChoice] = useState("loading");
  const [gpcEnabled, setGpcEnabled] = useState(false);

  useEffect(() => {
    const gpc = hasGlobalPrivacyControl();
    const saved = readSavedChoice();
    setGpcEnabled(gpc);

    let resolved;
    if (gpc) {
      resolved = "gpc";
      denyAnalytics();
    } else if (saved === "granted") {
      resolved = "granted";
      loadAnalytics(window.location.pathname);
    } else if (saved === "denied") {
      resolved = "denied";
      denyAnalytics();
    } else {
      resolved = "undecided";
      denyAnalytics();
    }

    setChoice(resolved);
    announceResolved(resolved);

    const reopen = () => {
      setGpcEnabled(hasGlobalPrivacyControl());
      setChoice("undecided");
    };
    window.addEventListener("pitmaster:privacy-choices", reopen);
    return () => window.removeEventListener("pitmaster:privacy-choices", reopen);
  }, []);

  useEffect(() => {
    if (choice !== "granted") return;
    loadAnalytics(pathname);
    sendPageView(pathname);
  }, [choice, pathname]);

  const decide = (nextChoice) => {
    const resolved = gpcEnabled ? "gpc" : nextChoice;
    if (nextChoice === "granted" && !gpcEnabled) {
      saveChoice("granted");
      loadAnalytics(pathname);
    } else {
      saveChoice("denied");
      denyAnalytics();
    }
    setChoice(resolved);
    announceResolved(resolved);
  };

  if (choice !== "undecided") return null;

  return (
    <section
      aria-label="Privacy choices"
      aria-live="polite"
      className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-xl rounded-xl border border-line bg-white p-4 shadow-card"
    >
      <h2 className="font-display text-base font-bold text-ink">Your privacy choice</h2>
      <p className="mt-1 text-sm leading-relaxed text-muted">
        Essential browser storage keeps your cook log on this device. Optional Google Analytics loads only if you allow it and never receives your cook details or values you enter into calculators. Read the <Link className="font-semibold text-ember-700 underline" href="/privacy/">privacy policy</Link>.
      </p>
      {gpcEnabled && (
        <p className="mt-2 text-sm font-medium text-ink">
          Your browser is sending Global Privacy Control, so optional analytics will remain off.
        </p>
      )}
      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        <button
          type="button"
          onClick={() => decide("denied")}
          className="min-h-11 rounded-lg border border-line bg-white px-4 py-2 text-sm font-semibold text-ink hover:bg-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember-600 focus-visible:ring-offset-2"
        >
          Essential only
        </button>
        {!gpcEnabled && (
          <button
            type="button"
            onClick={() => decide("granted")}
            className="min-h-11 rounded-lg border border-line bg-white px-4 py-2 text-sm font-semibold text-ink hover:bg-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember-600 focus-visible:ring-offset-2"
          >
            Allow analytics
          </button>
        )}
      </div>
    </section>
  );
}

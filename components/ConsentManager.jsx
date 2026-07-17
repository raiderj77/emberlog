"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "pitmasterlog_analytics_consent";
const MEASUREMENT_ID = "G-E5KQPM46PP";

function setAnalyticsDisabled(disabled) {
  window[`ga-disable-${MEASUREMENT_ID}`] = disabled;
}

function loadAnalytics() {
  setAnalyticsDisabled(false);
  if (document.getElementById("pitmaster-google-analytics")) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag() { window.dataLayer.push(arguments); };
  window.gtag("js", new Date());
  window.gtag("config", MEASUREMENT_ID, { anonymize_ip: true });

  const script = document.createElement("script");
  script.id = "pitmaster-google-analytics";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
  document.head.appendChild(script);
}

export default function ConsentManager() {
  const [choice, setChoice] = useState("loading");

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "granted") loadAnalytics();
    else setAnalyticsDisabled(true);
    setChoice(saved === "granted" || saved === "denied" ? saved : "undecided");

    const reopen = () => setChoice("undecided");
    window.addEventListener("pitmaster:privacy-choices", reopen);
    return () => window.removeEventListener("pitmaster:privacy-choices", reopen);
  }, []);

  const decide = (nextChoice) => {
    window.localStorage.setItem(STORAGE_KEY, nextChoice);
    setChoice(nextChoice);
    if (nextChoice === "granted") loadAnalytics();
    else setAnalyticsDisabled(true);
  };

  if (choice !== "undecided") return null;

  return (
    <section
      aria-label="Privacy choices"
      className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-xl rounded-xl border border-line bg-white p-4 shadow-card"
    >
      <h2 className="font-display text-base font-bold text-ink">Your privacy choice</h2>
      <p className="mt-1 text-sm leading-relaxed text-muted">
        Essential browser storage keeps your cook log on this device. Optional Google Analytics loads only if you allow it, and never receives your cook details. Read the <Link className="font-semibold text-ember-700 underline" href="/privacy/">privacy policy</Link>.
      </p>
      <div className="mt-3 flex flex-col gap-2 sm:flex-row">
        <button
          type="button"
          onClick={() => decide("granted")}
          className="min-h-11 rounded-lg bg-ember-700 px-4 py-2 text-sm font-semibold text-white hover:bg-ember-600"
        >
          Allow analytics
        </button>
        <button
          type="button"
          onClick={() => decide("denied")}
          className="min-h-11 rounded-lg border border-line bg-white px-4 py-2 text-sm font-semibold text-ink hover:bg-paper"
        >
          Essential only
        </button>
      </div>
    </section>
  );
}

"use client";

export default function PrivacyChoicesButton() {
  return (
    <button
      type="button"
      className="text-left hover:text-ember-600"
      onClick={() => window.dispatchEvent(new Event("pitmaster:privacy-choices"))}
    >
      Privacy choices
    </button>
  );
}

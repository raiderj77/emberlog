/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#faf7f2",
        surface: "#ffffff",
        ink: "#1c1917",
        muted: "#6f6863",
        line: "#e9e3d8",
        ember: {
          DEFAULT: "#d6450f",
          600: "#bd3b09",
          700: "#9a3007",
        },
        smoke: "#2a2622",
        gold: "#dca423",
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        content: "1120px",
        prose: "720px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(28,25,23,.04), 0 8px 24px rgba(28,25,23,.06)",
      },
    },
  },
  plugins: [],
};

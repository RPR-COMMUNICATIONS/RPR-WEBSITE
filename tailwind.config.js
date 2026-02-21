/** @type {import('tailwindcss').Config} */

/**
 * TS-Λ3 // TAILWIND CONFIGURATION [v4.1.0]
 * Path: tailwind.config.js
 * Mission: Codify Visual Tokens & Aesthetic Standards.
 * Authority: THE OVERWATCH // SG-CANONICAL-2026
 * Status: LATCHED // v13.5.0_ALIGNED
 */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // 🧬 Sovereign Cyan: The primary interactive accent
        primary: "#00E0FF",

        // 🏛️ Infrastructure Substrate
        "background-light": "#F8FAFC",
        "background-dark": "#050505",
        "card-dark": "#0A0A0A",
        "border-dark": "#1A1A1A",

        // ⚖️ Governance Purple: Sentinel & RAM markers
        "governance": "#8B5CFF",
      },
      fontFamily: {
        // 📐 Clinical Typography Latch
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
        display: ["Space Grotesk", "sans-serif"],
      },
      backgroundImage: {
        'cyan-gradient': 'linear-gradient(to right, #00E0FF, #FFFFFF)',
      }
    },
  },
  plugins: [],
};
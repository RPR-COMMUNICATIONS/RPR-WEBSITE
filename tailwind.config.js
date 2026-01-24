/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
      extend: {
        colors: {
          primary: "#00E0FF",
          "background-light": "#F8FAFC",
          "background-dark": "#050505",
          "card-dark": "#0A0A0A",
          "border-dark": "#1A1A1A",
          "governance": "#8B5CFF",
        },
        fontFamily: {
          sans: ["Inter", "sans-serif"],
          mono: ["JetBrains Mono", "monospace"],
        },
      },
    },
    plugins: [],
  }
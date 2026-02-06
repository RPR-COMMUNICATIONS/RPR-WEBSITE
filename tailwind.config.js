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
          elders: {
            primary: "#e6b319",
            bg: "#181611",
            charcoal: "#121212",
            sand: "#dcd7c9",
            slate: "#708090",
          },
          background: "var(--background)",
          foreground: "var(--foreground)",
          card: {
            DEFAULT: "var(--card)",
            foreground: "var(--card-foreground)",
          },
          popover: {
            DEFAULT: "var(--popover)",
            foreground: "var(--popover-foreground)",
          },
          muted: {
            DEFAULT: "var(--muted)",
            foreground: "var(--muted-foreground)",
          },
          accent: {
            DEFAULT: "var(--accent)",
            foreground: "var(--accent-foreground)",
          },
          destructive: {
            DEFAULT: "var(--destructive)",
            foreground: "var(--destructive-foreground)",
          },
          border: "var(--border)",
          input: "var(--input)",
          ring: "var(--ring)",
          sovereign: {
            founder: "var(--sovereign-founder)",
            elders: "var(--sovereign-elders)",
            executive: "var(--sovereign-executive)",
            sovereignty: "var(--sovereign-sovereignty)",
            gold: "var(--sovereign-gold)",
            "deep-purple": "var(--sovereign-deep-purple)",
            "bg-primary": "var(--sovereign-bg-primary)",
            "bg-secondary": "var(--sovereign-bg-secondary)",
            border: "var(--sovereign-border)",
            "system-cyan": "var(--sovereign-system-cyan)",
            "system-purple": "var(--sovereign-system-purple)",
            "system-orange": "var(--sovereign-system-orange)",
            "system-red": "var(--sovereign-system-red)",
          }
        },
        fontFamily: {
          sans: ["Inter", "sans-serif"],
          mono: ["JetBrains Mono", "monospace"],
        },
        borderRadius: {
          lg: "var(--radius)",
          md: "calc(var(--radius) - 2px)",
          sm: "calc(var(--radius) - 4px)",
        },
      },
    },
    plugins: [],
  }
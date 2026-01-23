/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    // Ensure all component-level styles and templates are scanned
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00E0FF",
        "background-dark": "#050505",
        "card-dark": "#0A0A0A",
        "border-dark": "#1A1A1A",
        'rpr-bg': '#050608',
        'rpr-cyan': '#00D9FF',
        'rpr-silver': '#C0C0C0',
      },
      height: {
        'header-clinical': '108px',
        'footer-clinical': '70px',
      },
      boxShadow: {
        'glow-white-subtle': '0 8px 16px rgba(255, 255, 255, 0.15)',
        'glow-white-soft': '0 4px 12px rgba(255, 255, 255, 0.1)',
      },
    },
  },
  // Hard-lock clinical classes against purging
  safelist: [
    'h-[108px]',
    'h-[70px]',
    'px-[20px]',
    'shadow-[0_8px_16px_rgba(255,255,255,0.15)]',
    'shadow-[0_4px_12px_rgba(255,255,255,0.1)]',
    'shadow-glow-white-subtle',
    'shadow-glow-white-soft',
  ],
  plugins: [],
}
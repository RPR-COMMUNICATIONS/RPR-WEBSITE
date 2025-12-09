/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  safelist: [
    'shadow-[0_8px_16px_rgba(255,255,255,0.15)]',
    'shadow-[0_4px_12px_rgba(255,255,255,0.1)]',
    'shadow-glow-white-subtle',
    'shadow-glow-white-soft',
  ],
  theme: {
    extend: {
      colors: {
        'rpr-bg': '#050608',
        'rpr-cyan': '#00D9FF',
        'rpr-silver': '#C0C0C0',
      },
      boxShadow: {
        'glow-white-subtle': '0 8px 16px rgba(255, 255, 255, 0.15)',
        'glow-white-soft': '0 4px 12px rgba(255, 255, 255, 0.1)',
      },
    },
  },
  plugins: [],
}

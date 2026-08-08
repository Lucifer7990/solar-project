/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0a1128',
          'navy-light': '#152140',
          gold: '#d4af37',
          'gold-light': '#e6c86a',
        }
      }
    },
  },
  plugins: [],
}

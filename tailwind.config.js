/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        eco: {
          green: '#10b981', // emerald-500
          dark: '#064e3b',  // emerald-900
          blue: '#2563eb',  // blue-600
        }
      }
    },
  },
  plugins: [],
}

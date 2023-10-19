/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-gold': '#b2892e',
        'brand-red': '#d22026',
        'brand-midblue': '#005a9c',
        'brand-darkblue': '#102535',
      }
    },
  },
  plugins: [],
}


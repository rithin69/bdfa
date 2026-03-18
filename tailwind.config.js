/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: '#C9A84C',
        'gold-light': '#E8D5A3',
        'bdf-black': '#080808',
        'bdf-dark': '#0F0F0F',
        'bdf-dark2': '#161616',
        'bdf-white': '#F5F0E8',
      },
      fontFamily: {
        montserrat: ['ErasMedium', 'sans-serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
        sans: ['ErasMedium', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
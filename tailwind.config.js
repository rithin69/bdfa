/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: '#0ABAB5',
        'gold-light': '#7DD8D6',
        'bdf-black': '#F7F4F0',
        'bdf-dark': '#EDF8F8',
        'bdf-dark2': '#E4F2F2',
        'bdf-white': '#1C2B2B',
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
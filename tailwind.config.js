/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [".src/**/*.{html, js}", "./public/*.{html, js}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif']
      },
      dropShadow: {
        "3xl": "0px 5px 1px #B7B3B3",
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [".src/**/*.{html, js}", "./public/*.{html, js}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif']
      },
      dropShadow: {
        "3xl": "0px 5px 1px #B7B3B3",
      },
      backgroundImage: {
        sanFrancisco: "url('../img/sanFranciscoDesktop.jpg')",
      },
      colors: {
        primary: "#164e63"
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar")({ nocompatible: true }),
    require("tailwind-scrollbar-hide"),
  ],
}

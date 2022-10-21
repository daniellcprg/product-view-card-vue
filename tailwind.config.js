/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,ts}"],
  theme: {
    extend: {
      colors: {
        cream: "#F2EAE2",
        aurometal: "#6C7289",
        aquamarine: "#3D8168",
        aquamarineHover: "#1A4032",
        gunmetal: "#1C232B",
      },
      fontFamily: {
        montserrat: "Montserrat, sans-serif",
        fraunces: "Fraunces, serif",
      },
    },
  },
  plugins: [],
};

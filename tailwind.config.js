/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#141448',
        'main-yellow': '#FFD700',
        'main-gray': '#C0C0C0',
        ...colors,
      },
      screens: {
        xs: "280px",
        sm: "320px",
        msm: "380px",
        phone: "450px",
        five: "500px",
        tab: "960px",
        ltab: "780px",
        xtab: "960px",
        desktop: "1280px",
      },
      fontFamily: {
        luckyGuy: ["Luckiest Guy", "cursive"],
      },
    },
  },
  plugins: [],
};

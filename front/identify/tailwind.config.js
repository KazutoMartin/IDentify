/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    // colors: {
    //   background: "#26272F",
    //   purple: "#F473B9",
    //   pink: "#FFBDE6",
    //   white: "#FFFFFF",
    //   lighpink: "#FFDDEE",
    //   blue: "#0E3EDA",
    //   green: "#13ce66",
    //   yellow: "#ffc82c",
    //   "gray-dark": "#273444",
    //   gray: "#8492a6",
    //   "gray-light": "#d3dce6",
    // },
    fontFamily: {
      logo: ["Inter", "sans-serif"],
      font1: ["Open Sans", "sans-serif"],

      // serif: ["Merriweather", "serif"],
    },
    extend: {
      colors: { background: "#26272F", sea: "#0E3EDA", hoverbutton: "#26E0ED" },
    },
  },
  plugins: [],
};

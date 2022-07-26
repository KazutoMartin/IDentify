/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      logo: ["Inter", "sans-serif"],
      font1: ["Open Sans", "sans-serif"],
      title: ["Rajdhani", "sans-serif"],


      // serif: ["Merriweather", "serif"],
    },

    screens: {
      sml: { max: "639px" },
      // => @media (max-width: 639px) { ... }
      lgl: {max: "1200px"},
      // => @media (max-width: 1200px) { ... }
      mdl : {max: "920px"},
      // => @media (max-width: 900px) { ... }

    },

    extend: {
      colors: { background: "#26272F", sea: "#0E3EDA", hoverbutton: "#26E0ED" },
      backgroundImage: {
        wave: "url('assets/landingbg3.svg')",
      },
    },
  },
  plugins: [],
};

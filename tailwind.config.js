/** @type {import('tailwindcss').Config} **/
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        myPrimary: "#5d117e",
        mySecondary: "#9b0e81",
        myGrey: "#EFEFEF",
      },

      backgroundImage: {
        "hero-img": "url('../public/images/hero-img.jpg')",
      },
    },
  },
  plugins: [],
};

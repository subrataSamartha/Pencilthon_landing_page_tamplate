/** @type {import('tailwindcss').Config} **/
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        myPrimary: "#5d117e",
        mySecondary: "#9b0e81",
        myGrey: "#EFEFEF",
        'black-shadow': '#232323',
        'red-primary': '#ff014f',
        'body-color':'#F0F2F5',
        'gray-box':'#e2e8ec'
      },

      backgroundImage: {
        "hero-img": "url('../public/images/hero-img.jpg')",
      },
      dropShadow: {
        'white-3': '5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff',
       
      },
      boxShadow: {
        'white-3': '5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff',
        'inner-1':'10px 10px 19px #1c1e22, -10px -10px 19px #262a2e',
      }
    },
  },
  plugins: [],
};

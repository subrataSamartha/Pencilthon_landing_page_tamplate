/** @type {import('tailwindcss').Config} **/
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        myPrimary: "#5d117e",
        mySecondary: "#9b0e81",
        myGrey: "#EFEFEF",
        iceblue: "#d1d5db",
        "black-shadow": "#232323",
        "red-primary": "#ff014f",
        "body-color": "#F0F2F5",
        "gray-box": "#e2e8ec",
        "red-solid": "#d11414",
        "metal-black": "#3c3e41",
        "para-black": "#404245",
      },

      backgroundImage: {
        "hero-img": "url('../public/images/boy.jpg')",
      },
      dropShadow: {
        "white-3": "5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff",
      },
      boxShadow: {
        "white-3": "5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff",
        "inner-1": "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
      },
    },
  },
  plugins: [],
};

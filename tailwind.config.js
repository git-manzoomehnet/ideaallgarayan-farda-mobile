/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["./**/*.{html,js}", "./css/**/*.css", "./js/**/*.js"],
  darkMode: "class",

  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    transitionTimingFunction: {
      "in-expo": "cubic-bezier(0.25, 0.1, 0.25, 1)",
    },
    colors: {
      main_light: "#F4C7D6",
      main: "#FC578C",
      dark_gray: "#434343",
      light_gray: "#E8E1E3",
      medium_gray: "#7E7E7E",
      text_black: "#181818",
      lightPink: "#F9F2EA",
      white: "#FFFFFF",
      black: "#000000",
     
    },
    fontFamily: {
   
      YekanBakh400: ["YekanBakh400"],
      YekanBakh500: ["YekanBakh500"],
      YekanBakh700: ["YekanBakh700"],
      IRANSans400: ["IRANSans400"],
      IRANSans500: ["IRANSans500"],
      IRANSans700: ["IRANSans700"],
     
    },
    extend: {
      borderRadius: {
        "rounded-md": "5px",
      },
      content: {
        content1: " ",
      },
      lineHeight: {
        18.78: "18.78px",
        64: "64px",
        23: "23px",
        25.4: "25.04px",
        57.97: "57.97px",
        17.96: "17.96px",
        21.91: "21.91px",
        32.03: "32.03px",
        56.35: "56.35px",
        25.04: "25.04px",
        37.97: "37.97px",
        37.57: "37.57px",
        31.03: "31.03px",
        28.17: "28.17px",
        18.78: "18.78px",
        20.25: "20.25px",
        24: "24px",
        46.96: "46.96px",
        16.41: "16.41px",
        14.06: "14.06px",
        18.75: "18.75px",
        31: "31px",
        43.4: "43.4px",
        17.05: "17.05px",
        21: "21px",
        24.18: "24.18px",
        27.09: "27.09px",
        20.15: "20.15px",
      },

      width: {
        "85p": "85%",
        "90p": "90%",
      },
      maxWidth: {
        x100: "100%",
      },
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
      },
    },
    translate: {
      100: "-100%",
    },
  },
};

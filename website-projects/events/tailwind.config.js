/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./node_modules/flowbite/**/*.js", "./js/script.js"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        cyanP: "#91ded6",
        grayP: "#8e949c",
        blackP: "#25353d",
        grayL: "#d0e3e1",
      },
      fontFamily: {
        sans: ["Josefin Sans", "sans-serif"],
        alata: ["Alata"],
      },
      backgroundImage: {
        "logo-light": "url('../images/logo.png')",
        "logo-dark": "url('../images/logo1.png')",
      },
    },
    plugins: [require("flowbite/plugin.js")],
  },
  variants: {
    extend: {
      backgroundImage: ["dark"],
    },
  },
};

/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        lg: "1072px",
      },
    },
    extend: {
      colors: {
        primary: "#6016FC",
        green: "#16FCD2",
        "card-dark": "#161629",
        highlight: "#221048",
        dark: "#0B0B22",
        red: "#FC165B",
        "primary-light": "#6016FC1A",
        "button-light": "#FFFFFF1A",
        muted: "#FFFFFF99",
        light: "#FFFFFF0D",
        "border-light": "#FFFFFF1A",
      },
      fontFamily: {
        sans: ["Noto Sans", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};

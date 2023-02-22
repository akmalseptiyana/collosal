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
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        "2xl": "13rem",
      },
      screens: {
        "2xl": "1440px",
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
      },
      fontFamily: {
        sans: ["Noto Sans", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};

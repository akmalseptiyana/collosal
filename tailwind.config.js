/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
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
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
        JejuHallasan: ["JejuHallasan", "cursive"],
        JosefinSans: ["JosefinSans", "cursive"],
        Kalam: ["Kalam", "cursive"],
        LexendPeta: ["LexendPeta", "sans-serif"],
      },
      screens: {
        max800: { max: "800px" },
        min800: { min: "800px" },
        max500: { max: "500px" },
      },
    },
  },
  plugins: [],
};

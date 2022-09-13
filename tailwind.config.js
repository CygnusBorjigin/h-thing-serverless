/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        aboreto: ["Aboreto", "cursive"],
        quicksand: ["Quicksand", "sans serif"],
        silkscreen: ["Silkscreen", "cursive"]
      }
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3CA2A2",
        dark: "#333333",
        accent: "#F78B00",
      },
    },
  },
  plugins: [],
}

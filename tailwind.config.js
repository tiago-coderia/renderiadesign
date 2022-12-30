/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        JetBrains: "JetBrains Mono",
      },
      colors: {
        lightning: "#eeeeee",
        darken: "#212121",
        backgroundone: "rgb(28, 28, 28)",
        backgroundtwo: "rgb(38, 38, 38)",
      },
    },
  },
  plugins: [],
};

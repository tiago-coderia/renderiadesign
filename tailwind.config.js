/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      darkness: "#161616",
      lightning: "#fff",
      default: "#8a8a8a",
      gradientStart: "#e9e9e9",
      gradientEnd: "#494949",
      bgbutton: "#1a1a1a",
      borderButton: "#9a9a9a33",
    },
    screens: {
      sm: "576px",
      // => @media (min-width: 576px) { ... }

      md: "960px",
      // => @media (min-width: 960px) { ... }

      lg: "1140px",
      // => @media (min-width: 1440px) { ... }
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      outfit: ["Outfit", "sans-serif"],
    },
  },
  plugins: [],
};

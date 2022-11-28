/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#A97E00",
        secondary: "#CEB64C",
        background: "#212121",
        background_2: "#2F2F2F",
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "992px" },
      md: { max: "768px" },
      sm: { max: "576px" },
      min2xl: { min: "1535px" },
    },
  },
  plugins: [],
};

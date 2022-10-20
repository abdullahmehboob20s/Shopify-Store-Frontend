/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      black: "black",
      white: "white",
      yellow: "#D1F224",
      transparent: "transparent",
    },

    extend: {
      borderWidth: {
        "1px": "1px",
      },
      spacing: {
        "10px": "10px",
      },
    },
    fontFamily: {
      JetBrainsMono: "JetBrainsMono",
      "open-sans": "'Open Sans', sans-serif",
    },
  },
  plugins: [],
};

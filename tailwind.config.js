/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: "#22232b",
        background: "#080812",
        accent: "#101116",
        primary: "#0066ff",
      },

      textColor: {
        primary: "white",
        secondary: "#656770",
        blue: "#0066ff",
      },
    },
  },
  plugins: [],
};

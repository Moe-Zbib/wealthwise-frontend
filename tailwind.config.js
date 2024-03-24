/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: "#ffffff",
        background: "#f3f2f0",
        accent: "#808080",
        primary: "#2d53da",
      },
    },
  },
  plugins: [],
};

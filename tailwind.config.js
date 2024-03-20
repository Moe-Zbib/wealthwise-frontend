/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: "#1e2027",
        background: "#131419",
        accent: "#2e3038",
        primary: "white",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: "#ffffff",
        background: "#f0f3fa",
        accent: "#808080",
        primary: "black",
      },
    },
  },
  plugins: [],
};

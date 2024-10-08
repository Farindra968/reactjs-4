/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "420px", // Custom breakpoint for screens smaller than 480px
      },
    },
  },
  plugins: [],
};

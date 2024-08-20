/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "375px",

      md: "800px",

      lg: "1024px",

      xl: "1280px",

      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        main: ["Inter"],
      },
      width: {
        '100': "25rem",
      },
    },
    fontSize: {
      sm: "0.625rem",
      base: "0.875rem",
      xl: "1rem",
      "2xl": "1.375rem",
      "4xl": "2rem",
    },
  },
  plugins: [],
};

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
      colors: {
        primary: "#3E97FF",
        "primary-active": "#2884EF",
        "primary-light": "#EEF6FF",
        "text-secondary": "#7E8299",
        "bg-secondary": "#F9F9F9 ",
        "plain": "#A1A5B7",
      },
      fontFamily: {
        main: ["Inter"],
      },
      width: {
        100: "25rem",
      },
      height: {
        60: "15.625rem",
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

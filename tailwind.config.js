/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],

  theme: {
    fontFamily: {
      matter: ["Matter", "system-ui"],
    },
    container: {
      padding: {
        DEFAULT: "1.5rem",
        sm: "3rem",
        lg: "5rem",
        xl: "7rem",
        "2xl": "9rem",
      },
    },
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
      "100%": "200%",
      16: "4rem",
    },
  },
};

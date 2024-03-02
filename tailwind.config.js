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
  safelist: [
    "bg-[url('/img/norris-mclaughlin.png')]",
    "bg-[url('/img/home-space.png')]",
    "bg-[url('/img/platforme-6610.png')]",
    "bg-[url('/img/big-game-golf.png')]",
    "bg-[url('/img/big-game-golf-branding.png')]",
    "bg-[url('/img/rojorganic.jpg')]",
  ],
};

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFb93d",
        secondary: "#FFe247",
        tertiary: "#FFf9c2",
        quaternary: "#927646",
      },
      animation: {
        fadeOutBottom: "fadeOutBottom 1s ease-out",
        fadeInRight: "fadeInRight 1s ease-out",
        fadeInBottom: "fadeInBottom 1s ease-out",
        fadeInUp: "fadeInUp 0.5s ease-out",
      },
      keyframes: {
        fadeOutBottom: {
          "0%": {
            opacity: 1,
            transform: "translateY(0)",
          },
          "100%": {
            opacity: 0,
            transform: "translateY(100%)",
          },
        },
        fadeInRight: {
          "0%": {
            opacity: 0,
            transform: "translateX(100%)",
          },
          "100%": {
            opacity: 1,
            transform: "translateX(0)",
          },
        },
        fadeInBottom: {
          "0%": {
            opacity: 0,
            transform: "translateY(100%)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        fadeInUp: {
          "0%": {
            opacity: 0,
            transform: "translateY(-50%)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
      },
    },
  },
  plugins: [],
};

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
      },
      animation: {
        fadeOutBottom: "fadeOutBottom 0.5s ease-out",
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
      },
    },
  },
  plugins: [],
};

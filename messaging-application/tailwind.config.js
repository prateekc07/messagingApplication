/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gradientPurple: "#C22ED0",
        gradientBlue: "#5FFAE0",
        logoBlue: "#00ffcc",
      },
    },
  },
  plugins: [],
};


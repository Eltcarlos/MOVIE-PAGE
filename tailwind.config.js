/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // we start to customize colors and fonts
  ],
  theme: {
    extend: {
      colors: {
        main: "#080A1A",
        alert: "#F20000",
      },
      backgroundImage: {
        default: "url('../public/images/principal.jpg')",
      },
    },
  },
  plugins: [],
};

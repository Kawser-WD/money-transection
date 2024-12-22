const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4CAF50",
        secondary: "#090914",
        ash: "#F6F8FA",
        pash: "#48484D",
      },
      fontFamily: {
        sans: ["Outfit", "serif"],
      },
    },
  },
  plugins: [],
});

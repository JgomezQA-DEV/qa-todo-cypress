module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "instrument-sans": ['"Instrument Sans"', "sans-serif"],
      },
      colors: {
        primary: "#5D0397",
        primary2: "#31084b",
        secondary: "#C9B6FF",
        tertiary: "#FBF9FE",
      },
    },
  },
  plugins: [],
};

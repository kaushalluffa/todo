/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      darkBg: "#1E0059",
      primary: "#754BE5",
      primaryLight: "#F1ECFF",
      secondary: "#F07D13",
      secondaryLight: "#FFEFE1",
      tertiary: "#1563FF",
      tertiaryLight: "#ECF2FF",
      quaternary: "#F93EFF",
      quaternaryLight: "#FEEDFF",
      title: "#09001A",
      green: "#10C65E",
      backgroundColor: "#F2F6FE",
      currentColor:'#ffffff'
    },
  },
  plugins: [],
};

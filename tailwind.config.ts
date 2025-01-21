/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blueDark: "#0F3058",
        blueLight: "#006ADC",
        blackish: "#11181C",
      },
      backgroundImage: {
        "gradient-title":
          "linear-gradient(90deg, #0F3058 0%, #006ADC 33%, #11181C 50%, #11181C 100%)",
        "gradient-card": "linear-gradient(to right, #0F3058, #006ADC, #11181C)",
      },
      animation: {
        move: "move 5s linear infinite",
      },
      keyframes: {
        move: {
          "0%": { transform: "translateX(-200px)" },
          "100%": { transform: "translateX(200px)" },
        },
      },
    },
  },
  plugins: [],
};

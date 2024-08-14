/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "prtf-main-light": "#E8E4E2",
        "prtf-main-dark": "#260E00",
      },
      fontFamily: {
        nohemi: ["Nohemi", "sans-serif"],
      },
    },
  },
  plugins: [],
};

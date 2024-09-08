/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {      
      fontFamily: {
        roboto: ["Roboto", 'sans-serif'],
        kanit: ["Kanit", 'sans-serif']
      },
      spacing: {
        22 : '7.5rem',
      },
    },
  },
  plugins: [],
}
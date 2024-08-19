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
        31 : '8.5rem',
      },
    },
  },
  plugins: [],
}
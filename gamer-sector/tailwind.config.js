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
        21 : '6.5rem',
      },
      color: {
        redi: ['#34344']
      }
    },
  },
  plugins: [],
}
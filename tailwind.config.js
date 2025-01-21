/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {    
    extend: {
      colors: {
        'm-blue': '#467692',
        's-blue': '#97adc0',
        'm-purple': '#c5c1de',
        's-purple': '#dadaed',
        't-purple': '#f6eef7',
      },
      dropShadow: {
        'profile': '0px 10px 8px #97adc0'
      }
    },
  },
  plugins: [],
}
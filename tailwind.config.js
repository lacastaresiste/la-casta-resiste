/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": '#A90000',
        "secondary": 'rgb(35 35 35)',
        "third": 'rgb(25 25 25);',
        "background": '#111',
        "white": '#CCC'
      }
    },
  },
  plugins: [],
}
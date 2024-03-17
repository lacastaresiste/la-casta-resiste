/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": 'rgb(255 52 52)',
        "secondary": 'rgb(35 35 35)',
        "third": 'rgb(25 25 25);',
        "background": '#111',
        "navbar": '#222',
        "white": '#CCC',
        "title": '#EEE'
      }
    },
  },
  plugins: [],
}
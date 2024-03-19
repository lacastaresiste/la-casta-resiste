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
        "title": '#EEE',
        "card-header": "#222",
        "dark-border": "#555",

        "background-light": '#d58376',
        "navbar-light": '#eee0e0',
        "title-light": '#EEE',
        "card-header-light": "#eee0e0",
        "light-border": '#CCC'
      }
    },
  },
  plugins: [],
}
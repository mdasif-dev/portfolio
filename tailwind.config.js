/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        dosis: ["dosis", "sans-serif"],
      },
      colors: {
      'secondary':'#34353A',
      'secondary-dark':'#262830',
      'yellow-light':'#FFC86B',
      'dark-mate':'#31333B',
      'dark-light':'#9a9b9c',
      },
    },
  },
  plugins: [],
}


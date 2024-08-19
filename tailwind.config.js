/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        dosis: ["dosis", "sans-serif"],
      },
      colors: {
      'secondary':'#3D3E42',
      'secondary-dark':'#31333B',
      'yellow-light':'#FFD070',
      'dark-mate':'#31333B',
      'dark-light':'#9a9b9c',
      },
    },
  },
  plugins: [],
}


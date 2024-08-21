/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        dosis: ["dosis", "sans-serif"],
      },
      colors:{
      'secondary':'#3D3E42',
      'secondary-dark':'#31333B',
      'yellow-light':'#FFC86B',
      'dark-mate':'#34353A',
      'dark-light':'#9a9b9c',
      },
    },
  },
  plugins: [],
}

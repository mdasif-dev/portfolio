/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        dosis: ["dosis", "sans-serif"],
      },
      colors: {
      'primary': '#fcd34d',
    },
    },
  },
  plugins: [],
}


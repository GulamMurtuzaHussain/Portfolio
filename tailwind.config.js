/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html',
    './src/**/*.{html,js}',],
  theme: {
    extend: {
      screens: {
      'xs': {'max': '450px'}, // 👈 custom breakpoint for <= 450px
      'xxs': {'max': '384px'}, // 👈 custom breakpoint for <= 450px
    },
    },
     
  },
  plugins: [],
}


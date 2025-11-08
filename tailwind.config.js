/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html',
    './src/**/*.{html,js}',],
  theme: {
    extend: {
      screens: {
       // 👈 custom breakpoint for <= 450px
      'xs': {'max': '450px'}, // 👈 custom breakpoint for <= 450px
      xxs: { raw: '(max-width: 384px)' },
    },
    },
     
  }, 
  plugins: [],
}


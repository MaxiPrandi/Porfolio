/** @type {import('tailwindcss').Config} */
// Sino encuentra la fuente roboto en este caso usa la fuente default
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['./dist/**/*.{html,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#0f172a',
      },
      fontFamily: {
        roboto: ['Roboto', ...defaultTheme.fontFamily.sans],
        rubik: ['Rubik', ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        'slide-down': {
          '0%': { top: '-5rem' },
          '100%': { top: '0rem' },
        },
        'fade-in':{
          '0%':{opacity :'0%'},
          '100%': {opacity: '100%'}
        }
      },
      animation: {
        'slide-down': 'slide-down 2s',
        'fade-in': 'fade-in 4s'
      },
    },
  },
  plugins: [],
};

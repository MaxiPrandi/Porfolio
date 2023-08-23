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
    },
  },
  plugins: [],
};

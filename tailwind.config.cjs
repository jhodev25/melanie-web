/** @type {import('tailwindcss').Config} */
const colors = require('@mui/material/colors');

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  important: '#root',
  theme: {
    extend: {
      palette: {
        white: '#FFFFF',
      },
      fontSize: {
        title: 'text-7xl',
        subheading: 'text-2xl',
        body: 'text-base',
      },
      colors: {
        ...colors,
        olive: '#606C38',
        'dark-green': '#283618',
        beige: '#FEFAE0',
        'pale-orange': '#DDA15E',
        'burnt-orange': '#BC6C25',
        white: '#FFFFFF',
        title: '#FFFFF',
        secondary: '#FFFFF',
        body: '#FFFFFF',
      },
      fontFamily: {
        title: ['Imbue', 'serif'],
        subheading: ['Tangerine', 'cursive'],
        body: ['Old Standard TT', 'serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

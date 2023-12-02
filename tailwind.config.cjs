/** @type {import('tailwindcss').Config} */
const colors = require('@mui/material/colors');

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  important: '#root',
  theme: {
    extend: {
      colors: {
        ...colors,
        olive: '#606C38',
        'dark-green': '#283618',
        beige: '#FEFAE0',
        'pale-orange': '#DDA15E',
        'burnt-orange': '#BC6C25',
        white: '#FFFFFF',
        secondary: '#FFFFF',
      },
      fontFamily: {
        title: ['Imbue'],
        body: 'Old Standard TT',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

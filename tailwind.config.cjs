/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        olive: '#606C38',
        'dark-green': '#283618',
        beige: '#FEFAE0',
        'pale-orange': '#DDA15E',
        'burnt-orange': '#BC6C25',
      },
      fontFamily: {
        title: ['Imbue'],
        body: 'Old Standard TT',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'light-green': '#606C38',
        'dark-green': '#283618',
        'off-white': '#FEFAE0',
        'light-orange': '#DDA15E',
        'dark-orange': '#BC6C25',
      },
    },
  },
  plugins: [],
};

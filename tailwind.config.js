/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        ptSans: ['PT Sans', 'sans-serif'],
      },
      invert: {
        25: '.25',
        50: '.5',
        75: '.75',
      },
    },
  },
  plugins: [],
};

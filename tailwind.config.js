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
      colors: {
        primary: '#6828B0',
        // secondary: '#28B068',
        // customBlue: '#2868B0',
      },
      invert: {
        25: '.25',
        50: '.5',
        75: '.75',
      },
    },
  },
  plugins: [require('daisyui')],
};

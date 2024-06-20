/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eafff5',
          100: '#cdfee6',
          200: '#a0fad3',
          300: '#63f2bc',
          400: '#25e2a0',
          500: '#00c688',
          600: '#00a471',
          700: '#00835e',
          800: '#00674c',
          900: '#005540',
          950: '#003025',
        },
      },
    },
  },
  plugins: [require('tailwindcss-animated')],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#612550',
        error: '#9A0B11',
        errorBg: '#E8D0D1',
      },
    },
  },
  plugins: [require('daisyui')],
};

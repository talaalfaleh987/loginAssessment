/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      backgroundImage: {
        'tahakom-navbar': 'linear-gradient(to right, #35142C, #612550, #497283)',
        'tahakom-auth': 'linear-gradient(to bottom, #35142C, #612550, #497283, #31BFB7)',
      },
      colors: {
        primary: '#612550',
        error: '#9A0B11',
        errorBg: '#E8D0D1',
      },
    },
  },
  plugins: [require('daisyui')],
};

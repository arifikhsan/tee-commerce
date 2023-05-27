/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        akira: ['Akira Expanded'],
        work: ['Work Sans'],
      },
      colors: {
        primary: '#323232',
      },
    },
  },
  plugins: [],
};

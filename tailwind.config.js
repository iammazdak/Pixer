/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {},
    colors: {
      primary: '#67754B',
      secondary: '#DDE8BB',
      gray: '#939393',
      lightgray: '#F6F6F3',
      balck: '#040406',
      white: '#ffffff',
    },
    boxShadow: {
      headerShadow: '0 5px 100px rgba(138, 138, 138, 18%)',
    }
  },
  plugins: [],
};

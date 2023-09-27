/** @type {import('tailwindcss').Config}*/
const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      colors: {
        primary: '#075099',
        secondary: '#e0e0d0',
        accent: '#f4c242',
        text: '#333333',
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Roboto', 'sans-serif'],
      },
      minHeight: {
        '50vh': '50vh',
      },
    },
  },
  plugins: [],
};

module.exports = config;

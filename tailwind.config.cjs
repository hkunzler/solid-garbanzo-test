/** @type {import('tailwindcss').Config}*/
const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      minHeight: {
        '50vh': '50vh',
      },
    },
  },
  plugins: [],
};

module.exports = config;

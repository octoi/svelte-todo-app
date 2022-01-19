const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./index.html', './src/**/*.{svelte,js,ts}'],
  theme: {
    extend: {
      colors: {
        green: colors.teal,
        green: colors.teal,
        red: colors.rose,
        app: {
          raisenBlack: '#262730',
          primaryDark: '#1f1d2b',
          secondaryDark: '#272636',
          lightSeaGreen: '#00A6A6',
          lemonMeringue: '#FAF0CA',
          wisteria: '#BEA7E5',
          orangeSoda: '#F95738',
        },
      },
    },
  },
  plugins: [],
};

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
          lightSeaGreen: '#00A6A6',
          lemonMeringue: '#00A6A6',
          wisteria: '#BEA7E5',
          orangeSoda: '#F95738',
        },
      },
    },
  },
  plugins: [],
};

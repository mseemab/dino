// tailwind.config.js

module.exports = {
  content: [
    "./*.html",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/aos/dist/aos.js",
    "./script.js",
  ],
  theme: {
    extend: {
      colors: {
        'deep-emerald-green': '#046A38',
        'gold-accent': '#C19A6B',
        'slate-gray': '#4A4A4A',
        'soft-white': '#FFFFFF',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
};

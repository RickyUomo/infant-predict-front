module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'bg-img': "url('/src/img/bg-img.svg')",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

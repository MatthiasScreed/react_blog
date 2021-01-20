module.exports = {
  purge: [
      './resources/**/*.blade.php',
      './resources/**/*.{js, jsx, ts, tsx}',

  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
        center: true,
      },
    extend: {},
  },
  variants: {
    extend: {
        backgroundColor: ['active'],
    },
  },
  plugins: [],
}

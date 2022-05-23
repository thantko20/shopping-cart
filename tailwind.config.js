module.exports = {
  content: ['./src/**/*.{js, jsx, ts, tsx}'],
  theme: {
    extend: {
      fontFamily: {
        lobster: ['Lobster Two', 'cursive'],
        raleway: ['Raleway', 'serif'],
      },
      gridTemplateColumns: {
        productsLg: 'repeat(4, auto)',
        productsSm: 'repeat(2, auto)',
        productsXs: 'repeat(1, auto)',
      },
    },
  },
  plugins: [],
};

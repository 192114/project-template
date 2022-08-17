module.exports = {
  plugins: [
    require('stylelint')({
      fix: true,
    }),
    require('postcss-preset-env')(),
    // require('cssnano')({
    //   preset: 'default',
    // }),
  ],
}

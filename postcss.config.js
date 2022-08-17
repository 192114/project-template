module.exports = {
  plugins: [
    require('autoprefixer'),
    require('cssnano')({
      preset: 'default',
    }),
    require('stylelint')({
      fix: true,
    }),
  ],
}

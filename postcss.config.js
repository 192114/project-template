module.exports = {
  plugins: [
    [
      'stylelint',
      {
        fix: true,
      }
    ],
    // [
    //   'cssnano',
    //   {
    //     preset: 'default',
    //   }
    // ],
    [
      'postcss-preset-env', {
        stage: 1,
        features: {
          'custom-media-queries': true,
          'custom-selectors': true,
          'nesting-rules': true,
          'media-query-ranges': true
        }
      }
    ],
    // [
    //   'postcss-normalize', {}
    // ],
  ],
}

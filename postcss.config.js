module.exports = {
  plugins: [
    [
      'stylelint',
      {
        fix: true,
      }
    ],
    [
      'cssnano',
      {
        preset: 'default',
      }
    ],
    [
      'postcss-normalize'
    ],
    [
      'postcss-preset-env', {
        stage: 3,
        // 文档 https://preset-env.cssdb.org/features/#stage-3
        features: {
          'nesting-rules': true, // 嵌套语法 stage 0 语法
        },
      }
    ],
  ],
}

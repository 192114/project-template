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
          // discussions: https://github.com/csstools/postcss-plugins/discussions/192
          // "importFrom" and "exportTo" will be removed in a future version of postcss-custom-properties.
          // 关闭废弃警告
          'custom-properties': {
            "disableDeprecationNotice": true
          },
        },
        importFrom: './src/assets/styles/vars.css',
      }
    ],
  ],
}

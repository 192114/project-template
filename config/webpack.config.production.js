const { mergeWithRules } = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const webpackBaseConfig = require('./webpack.config.base')

const productionConfig = mergeWithRules({
  module: {
    rules: {
      test: 'match',
      use: 'prepend'
    }
  }
})(webpackBaseConfig, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [MiniCssExtractPlugin.loader]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './styles/[name][contenthash:8].css'
    })
  ],
  optimization: {
    minimize: false
  }
})

module.exports = productionConfig
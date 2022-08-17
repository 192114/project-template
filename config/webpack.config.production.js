const { mergeWithRules } = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')

const webpackBaseConfig = require('./webpack.config.base')

const productionConfig = mergeWithRules({
  module: {
    rules: {
      test: 'match',
      use: 'prepend',
    },
  },
})(webpackBaseConfig, {
  mode: 'production',
  output: {
    publicPath: './',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles/[name][contenthash:8].css',
    }),
  ],
  optimization: {
    moduleIds: 'deterministic',
    runtimeChunk: {
      name: entrypoint => `runtimechunk~${entrypoint.name}`,
    },
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: false,
          },
        },
        extractComments: false,
      }),
    ],
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'node_vendors',
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
        },
      },
    },
  },
})

module.exports = productionConfig

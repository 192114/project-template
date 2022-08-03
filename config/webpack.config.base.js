const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '',
    clean: true, // 5.20 + 清空output
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '',
      filename: 'index.html',
      meta: {
        viewport: 'width=device-width, initial-scale=1.0, shrink-to-fit=no, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no',
        renderer: 'webkit', // qq uc  360 等强制 chromium内核
        'force-renderer': 'webkit', // 其他内核强制 chromium内核
        'screen-orientation': 'portrait', // uc 强制竖屏
        'x5-orientation': 'portrait', // qq 强制竖屏
      }
    }),
    new Dotenv()
  ]
}
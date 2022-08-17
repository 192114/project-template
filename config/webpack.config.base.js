const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const ESLintPlugin = require('eslint-webpack-plugin')

module.exports = {
  entry: './src/index',
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    filename: 'js/[name][contenthash:8].js', // https://www.cnblogs.com/cxyqts/p/14374898.html 关于hash解释
    clean: true, // 5.20 + 清空output
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          'postcss-loader',
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        type: 'asset',
        exclude: /node_modules/,
        generator: {
          // 输出文件位置以及文件名
          // [ext] 自带 "." 这个与 url-loader 配置不同
          filename: 'images/[contenthash:8][ext]',
        },
        parser: {
          dataUrlCondition: {
            maxSize: 50 * 1024, // 超过50kb不转 base64
          },
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        type: 'asset',
        exclude: /node_modules/,
        generator: {
          // 输出文件位置以及文件名
          filename: 'fonts/[contenthash:8][ext]',
        },
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 超过100kb不转 base64
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '',
      filename: 'app.html',
      favicon: path.resolve(process.cwd(), 'src/assets/favicon.ico'),
      meta: {
        viewport:
          'width=device-width, initial-scale=1.0, shrink-to-fit=no, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no',
        'content-type': {'http-equiv': 'content-type', content: 'text/html; charset=UTF-8'},
        renderer: 'webkit', // qq uc  360 等强制 chromium内核
        'force-renderer': 'webkit', // 其他内核强制 chromium内核
        'screen-orientation': 'portrait', // uc 强制竖屏
        'x5-orientation': 'portrait', // qq 强制竖屏
      },
      inject: 'body',
    }),
    new Dotenv({
      path: path.resolve(process.cwd(), '.env'),
      prefix: 'import.meta.env',
    }),
    new ESLintPlugin({ extensions: ['js', 'jsx', 'ts', 'tsx'] }),
  ],
  resolve: {
    alias: {},
    extensions: ['.tsx', '.ts', '.json', '.js', '.css'],
  },
}

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    filename: './js/[name][contenthash:8].js',
    clean: true, // 5.20 + 清空output
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          }
        ]
      },
      {
        test: /\.(s[ac]|c)ss$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: 'css-loader',
            options: {
              importLoaders: 3,
            }
          },
          'postcss-loader',
          {
            loader: 'resolve-url-loader', // https://juejin.cn/post/7011128931533193230#heading-32
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ]
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        type: 'asset',
        exclude: /node_modules/,
        generator: {
          // 输出文件位置以及文件名
          // [ext] 自带 "." 这个与 url-loader 配置不同
          filename: "./images/[contenthash:8][ext]"
        },
        parser: {
          dataUrlCondition: {
            maxSize: 50 * 1024 //超过50kb不转 base64
          }
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        type: 'asset',
        exclude: /node_modules/,
        generator: {
          // 输出文件位置以及文件名
          filename: "./fonts/[contenthash:8][ext]"
        },
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024 // 超过100kb不转 base64
          }
        }
      },
    ]
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
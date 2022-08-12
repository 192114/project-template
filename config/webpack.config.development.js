const portfinder = require('portfinder')
const { mergeWithRules } = require('webpack-merge')
const path = require('path')
const webpackBaseConfig = require('./webpack.config.base')

const developmentConfig = mergeWithRules({
  module: {
    rules: {
      test: 'match',
      use: 'prepend'
    }
  }
})(webpackBaseConfig, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map', // https://juejin.cn/post/7023242274876162084#heading-19
  module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss$/i,
        use: ['style-loader']
      }
    ]
  },
  devServer: {
    static: {
      directroy: path.resolve(process.cwd(), 'dist')
    },
    compress: true,
    hot: true,
    open: true,
    historyApiFallback: true,
    port: process.env.PORT || 8000,
    proxy: {
      '/api': {
        target: 'http://domain.com',
        changeOrigin: true,
      }
    }
  }
})

// 端口占用动态端口号
module.exports = new Promise((resolve, reject) => {
  // 查找端口号
  portfinder.getPort((err, port) => {

    if(err){
      reject(err)
      return
    }

    // 端口被占用时就重新设置evn和devServer的端口
    developmentConfig.devServer.port = process.env.PORT = port

    resolve(developmentConfig)

  })
})

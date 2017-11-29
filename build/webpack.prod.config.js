const baseConfig = require('./webpack.base.config')
const merge = require('webpack-merge')
const webpack = require('webpack')

module.exports = merge(baseConfig, {
  plugins: [
    new webpack.DefinePlugin({
      'process.env': '"production"'
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true
      }
    })
  ]
})

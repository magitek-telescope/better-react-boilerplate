const baseConfig = require('./webpack.base.config')
const merge = require('webpack-merge')
const webpack = require('webpack')
const path = require('path')

module.exports = merge(baseConfig, {
  output: {
    path: path.resolve(__dirname, '../static/'),
    filename: 'bundle.js'
  },
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

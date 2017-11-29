const baseConfig = require('./webpack.base.config')
const merge = require('webpack-merge')
const webpack = require('webpack')
const path = require('path')

module.exports = merge(baseConfig, {
  devServer: {
    contentBase: path.resolve(__dirname, '../static/'),
    publicPath: '/',
    historyApiFallback: true,
    open: true
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': '"development"'
    })
  ]
})

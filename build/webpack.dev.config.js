const baseConfig = require('./webpack.base.config')
const merge = require('webpack-merge')
const webpack = require('webpack')
const path = require('path')
const Dotenv = require('dotenv-webpack');

module.exports = merge(baseConfig, {
  devServer: {
    contentBase: path.resolve(__dirname, '../static/'),
    publicPath: '/',
    historyApiFallback: true,
    open: true
  },
  plugins: [
    new Dotenv({
      path: './.env',
      safe: true
    })
  ]
})

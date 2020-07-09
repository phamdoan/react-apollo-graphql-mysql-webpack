const webpack = require('webpack')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    open: true,
    compress: true,
    port: 3000,
    historyApiFallback: true,
    host: 'localhost',
    hot: true,
    watchOptions: {
      poll: true,
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
        API_BASE: JSON.stringify('http://localhost:4000/graphql')
      },
    }),
  ],
})

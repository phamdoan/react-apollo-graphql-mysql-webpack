const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: {
    client: ['@babel/polyfill', './src/index.js'],
  },
  output: {
    path: `${__dirname}/dist`,
    filename: '[name].bundle.js',
    publicPath: '/',
    crossOriginLoading: 'anonymous',
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          name: 'vendor',
          chunks: 'initial',
          enforce: true,
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', "@babel/preset-react"],
              plugins: [
                "@babel/plugin-proposal-class-properties"
              ]
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { url: false } },
        ],
      },
      {
        test: /\.(gif|png|jpg|eot|wof|woff|woff2|ttf|svg|ico)$/,
        use: {
          loader: 'file-loader?name=[name].[ext]',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      template: './public/index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'static', to: 'dist' },
      ],
    }),
  ],
  resolve: {
    modules: ['node_modules'],
    extensions: ['.jsx', '.js', '.json'],
  },
}

const path = require('path');
const webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    index: ['webpack-hot-middleware/client?reload=true', './client/index.js'],
  },
  output: {
    path: path.resolve(__dirname, 'server', 'public'),
    filename: 'app.js',
    publicPath: '/',
  },
  mode: ['staging', 'review', 'production'].includes(process.env.NODE_ENV)
    ? 'production'
    : 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /.(css|scss)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /.(jpg|jpeg|png|gif|mp3|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name]-[hash:8].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   filename: 'index.html',
    //   template: path.join(__dirname, 'src', 'index.html'),
    // }),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: 'app.css',
      chunkFilename: '[id].css',
    }),
  ],
};

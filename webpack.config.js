const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    './src/js/index.js',
    './src/scss/style.scss',
  ],
  output: {
    filename: './assets/js/main.js',
  },
  devServer: {
    port: 3000,
    compress: true,
    overlay: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src/js'),
        exclude: '/node_modules',
        loader: 'babel-loader',
      },
      {
        test: /\.(sass|scss)$/,
        include: path.resolve(__dirname, 'src/scss'),
        use: ExtractTextPlugin.extract({
          use: [{
            loader: 'css-loader',
            options: {
              sourceMap: true,
              minimize: true,
              url: false,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
          ],
        }),
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [{
          loader: 'file-loader',
          options: {
            name: 'images/[name][hash].[ext]',
          },
        }, {
          loader: 'image-webpack-loader',
          options: {
            mozjpeg: {
              progressive: true,
              quality: 70,
            },
          },
        },
        ],
      }, {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'fonts/[name][hash].[ext]',
          },
        },
      }],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: './assets/css/style.css',
      allChunks: true,
    }),
    new HtmlWebpackPlugin({
      template: './src/template/pages/index.pug',
      chunks: ['global', 'index'],
    }),
  ],
};

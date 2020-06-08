const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
  mode: 'development',
  entry: [
    './src/app.ts',
    './src/scss/main.scss'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        'test': /\.tsx?$/,
        'exclude': /node_modules/,
        'use': {
          'loader': 'ts-loader',
          'options': {
            'transpileOnly': true
          }
        }
      },
      {
        test: /\.(scss|css)$/,
        use: [MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }]
      }
    ]

  },
  plugins: [
    new MiniCssExtractPlugin('main.css')
  ],
  resolve: {
    extensions: [
      '.scss',
      '.tsx',
      '.ts',
      '.js'
    ]
  }
};

module.exports = config;

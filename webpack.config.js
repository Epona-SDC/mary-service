const path = require('path');

module.exports = {
  entry: path.join(__dirname,'/client/index.js'),
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.module\.css/,
        loaders: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]--[hash:base64:5]',
              },
              importLoaders: 1
            }
          },
        ]
      }
    ]
  }
};
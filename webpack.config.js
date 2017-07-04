const path = require('path');

const BUILD_DIR = path.resolve(__dirname + '/build');
const APP_DIR = path.resolve(__dirname + '/app');

const config = {
  entry: APP_DIR + '/app.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: BUILD_DIR,
    port: 3333
  },
  module: {
    loaders: [
      {
        test: /\.js/,
        include: APP_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-0', 'react']
        }
      }
    ]
  }
}

module.exports = config;


var path = require('path');

module.exports = {
  module: {
    output: {
      filename: path.join(__dirname, 'index.js')
    },
    loaders: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react']
      }
    }]
  }
}
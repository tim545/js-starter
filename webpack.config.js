var path = require('path');

module.exports = {
  entry: {},
  output: {
    path: path.join( __dirname, 'dist' )
  },
  module: {
    loaders: [
      {
        test: /src\/\.js$/,
        loader: "eslint-loader",
        exclude: /node_modules/
      },
      {
        test: /src\/assets\/templates\/\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /.*\/app\/.*\.js$/,
        exclude: /.spec.js/,
        loader: "uglify"
      }
    ]
  }
}

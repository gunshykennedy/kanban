

module.exports = {
  entry: [
    './source/App.js'
  ],
  devServer: {
    static: './dist',
  },
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel'
    }]
  }
};
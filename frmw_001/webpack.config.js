module.exports = {
  module: {
    rules: [
      {
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [ 'es2015', 'react' ]
        }
      }
    ]
  },
  devServer: {
    port: 1234,
    host: '0.0.0.0'
  },
  output: {
    filename: 'main.js'
  }
};

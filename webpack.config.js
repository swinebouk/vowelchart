const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: require.resolve('snapsvg'),
        use: 'imports-loader?this=>window,fix=>module.exports=0',
      },
    ],
  },
}

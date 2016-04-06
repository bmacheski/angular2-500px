require('es6-shim');

const webpack = require('webpack');
const prod = process.argv.indexOf('-p') > -1;

module.exports = {
  devtool: prod ? 'source-map' : 'eval',
  entry: './src/main.ts',
  output: {
    filename: 'bundle.js'
  },
  module: {
    preLoaders: [{
      test: /\.ts$/, loader: 'tslint?emitErrors=false&failOnHint=false', exclude: /node_modules/
    }],
    loaders: [{
      test: /\.ts$/, loader: 'ts', exclude: /node_modules/
    }, {
      test: /\.scss$/, loader: 'style!css!sass'
    }],
    noParse: [/zone\.js\/dist\/.+/]
  },
  resolve: {
    extensions: ['', '.ts', '.js']
  },
  devServer: {
    port: 3000,
    inline: true,
    hot: true,
    historyApiFallback: true,
    contentBase: 'src/public'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.DedupePlugin()
  ]
};

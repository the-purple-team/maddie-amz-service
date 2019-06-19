var path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  entry: `${SRC_DIR}/index.js`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ],
    resolve: {
      extensions: ['', '.js', '.jsx', '.css']
    }
  }
};

// rules: [
//   {
//     test: /\.jsx?/,
//     exclude: /node_modules/,
//     loader: 'babel-loader',
//     query: {
//       presets: ['env', 'react', 'es2015']
//     }
//   },
//   {
//     test: /\.css$/,
//     use: [
//       // style-loader
//       { loader: 'style-loader' },
//       // css-loader
//       {
//         loader: 'css-loader',
//         options: {
//           modules: true
//         }
//       }
//     ]
//   }
// ]
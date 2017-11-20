const path = require('path');

module.exports = {
  entry : './js/entry.js',
  output : {
      path : path.resolve(__dirname,'js'),
      filename : 'bundle.js'
  },
  module : {
      rules : [
          {
              test : /\.js$/,
              use : ['babel-loader']
          },
          {
              test : /\.css$/,
              use : ['style-loader','css-loader']
          },
          {
              test : /\.scss$/,
              use : [
                  {
                      loader: 'style-loader'
                  },
                  {
                      loader: 'css-loader'
                  },
                  {
                      loader: 'sass-loader'
                  }
              ]
          }
      ]
  }
};
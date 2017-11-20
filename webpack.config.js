module.exports = {
  entry : './js/entry.js',
  output : {
      path : __dirname,
      filename : './js/bundle.js'
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
          }
      ]
  }
};
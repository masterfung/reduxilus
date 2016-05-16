module.exports = {
  entry: [
    './src/index.js'
  ],

  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
      exclude: /node_modules/,
      loader: 'babel'
    },
    {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
    },
    {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
            'url?limit=8192',
            'img'
        ]
    }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};

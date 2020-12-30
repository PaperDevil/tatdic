// webpack.config.js
module.exports = {
    module: {
      rules: [
        {
          test: /\.csv$/i,
          use: 'raw-loader',
        },
      ],
    },
  };
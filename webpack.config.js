const path = require(`path`);
const MiniCssExtractPlugin = require(`mini-css-extract-plugin`);
const { ProvidePlugin } = require(`webpack`);

module.exports = {
  mode: `production`, // set to `production` for minified/uglified code, `development` for not
  entry: {
    scripts: `./src/index.js`,
  },
  devServer: {
    contentBase: `./dist`,
  },
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: `file-loader`,
            options: {
              name: `[name].[ext]`,
              outputPath: `assets`,
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: `babel-loader`
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          `css-loader`,
          `sass-loader`,
        ],
      },
    ]
  },
  output: {
    path: path.join(__dirname, `dist`),
    filename: `[name].js`,
    publicPath: `dist/`
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `style.css`,
      chunkFilename: `[id].css`
    }),
    new ProvidePlugin({
      $: `jquery`,
      jQuery: `jquery`
    })
  ],
  performance: { hints: false }
};
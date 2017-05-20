const path = require("path");
const webpack = require("webpack");

const srcDir = __dirname;

module.exports = {
  devtool: false,
  bail: true,
  entry: path.join(srcDir, 'src', 'index.js'),
  output: {
    path: path.join(srcDir, 'dist'),
    filename: 'light-form.min.js',
    libraryTarget: "umd",
    library: "light-form",
  },

  externals: {
    "react": "React",
    "react-dom": "ReactDOM",
    "react-redux": "ReactRedux",
    "redux": "Redux",
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: path.join(srcDir, 'src'),
        loader: 'babel-loader',
        options: {
          presets: [["es2015", {modules: false}], ["react"]],
          plugins: [
            [
              "transform-react-remove-prop-types",
              {
                removeImport: true,
              }
            ],
          ]
        }
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({'process.env.NODE_ENV': '"production"'}),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.LoaderOptionsPlugin({minimize: true, debug: false}),
    new webpack.optimize.UglifyJsPlugin(),
  ],
};
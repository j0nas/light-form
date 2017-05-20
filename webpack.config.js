const path = require("path");
const webpack = require("webpack");

const srcDir = __dirname;

const uglifyJsPluginConfig = {
    compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
    },
    mangle: {
        screw_ie8: true
    },
    output: {
        comments: false,
        screw_ie8: true,
    },
    sourceMap: false,
};

module.exports = {
    devtool: false,
    bail: true,
    entry: path.join(srcDir, 'src', 'index.js'),
    output: {
        path: path.join(srcDir, 'dist'),
        filename: 'light-form.min.js',
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
            },
        ],
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({'process.env.NODE_ENV': '"production"'}),
        new webpack.LoaderOptionsPlugin({minimize: true, debug: false}),
        new webpack.optimize.UglifyJsPlugin(uglifyJsPluginConfig),
    ],
};
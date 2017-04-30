const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'eval',
    entry: [
        'babel-polyfill',
        'webpack-hot-middleware/client',
        './src/index',
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist/',
    },
    plugins: [
        new HtmlWebpackPlugin({
            favicon: false,
            inject: true,
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    resolve: {
        modules: ['src', 'node_modules'],
        extensions: ['.json', '.js', '.jsx'],
    },
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                loader: 'babel-loader',
                include: path.join(__dirname, 'src'),
            },
        ],
    },
};
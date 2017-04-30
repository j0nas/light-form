const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const paths = require('./paths');

const htmlPluginConfig = {
    inject: true,
    template: paths.htmlPluginTemplate,
    favicon: false,
};

module.exports = {
    devtool: 'eval-cheap-module-source-map',
    entry: [
        'webpack-hot-middleware/client',
        'react-hot-loader/patch',
        paths.entry,
    ],
    output: {
        path: paths.buildPath,
        publicPath: '/',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'eslint-loader',
                include: paths.src,
                enforce: 'pre',
                options: {
                    fix: true,
                },
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    cacheDirectory: true,
                },
            },
            {
                test: /\.scss$/,
                include: paths.src,
                use: [
                    'style-loader',
                    'css-loader?sourceMap',
                    'resolve-url-loader',
                    'sass-loader?sourceMap',
                    'postcss-loader',
                ],
            },
            {
                test: /\.(jpg|png|gif|eot|svg|ttf|woff|woff2)(\?.*)?$/,
                include: paths.src,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                }
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin(htmlPluginConfig),
        new webpack.DefinePlugin({'process.env.NODE_ENV': '"development"'}),
        new webpack.HotModuleReplacementPlugin(),
    ],
};
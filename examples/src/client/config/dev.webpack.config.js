const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const paths = require('./paths');

const htmlPluginConfig = {
    inject: true,
    template: paths.htmlPluginTemplate,
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
                loader: 'babel-loader?cacheDirectory',
                options: {
                    babelrc: false,
                    presets: ['es2015', 'react'],
                    plugins: [require('babel-plugin-transform-object-rest-spread'), require('react-hot-loader/babel')],
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
                test: /\.scss$/,
                exclude: paths.src,
                use: [
                    'style-loader',
                    'css-loader?sourceMap',
                    'resolve-url-loader',
                    'sass-loader?sourceMap',
                ],
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader?sourceMap',
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
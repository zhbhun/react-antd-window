/**
 * Created by zhbhun on 2015/9/8.
 */
var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        index: path.join(__dirname, './test/index.js')
    },
    output: {
        filename: '[name].js',
        publicPath: 'http://localhost:3000/'
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        alias: {
            'react-antd-window': path.join(__dirname, './src')//,
            // react: path.join(__dirname, './node_modules/react/dist/react')
        }
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                include: /src|test/,
                loader: 'babel?stage=0'
            }, {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('css')
            }, {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&minetype=application/font-woff'
            }, {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&minetype=application/font-woff'
            }, {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&minetype=application/octet-stream'
            }, {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file'
            }, {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&minetype=image/svg+xml'
            }
        ]
    },
    plugins: [
        new webpack.optimize.DedupePlugin(),
        new ExtractTextPlugin('[name].css')
    ],
    debug: true,
    devtool: 'source-map',
    devServer: {
        contentBase: './test',
        inline: true,
        port: 3000
    }
}
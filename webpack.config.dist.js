/**
 * Created by zhbhun on 2015/9/8.
 */
var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        'react-antd-window': path.join(__dirname, './src/index.js')
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].min.js',
        library: 'ReactWindow',
        libraryTarget: 'umd'
    },
    externals: {
        antd: true,
        'object-assign': true,
        react: true,
        'react-window-kit': true
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                include: /src/,
                loader: 'babel?stage=0'
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,
            output: {
                ascii_only: true
            }
        })
    ]
}
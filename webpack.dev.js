'use strict';

// Modules
const webpack = require('webpack');
const glob = require('glob');
const autoprefixer = require('autoprefixer');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

const __dist = __dirname + '/dist';

module.exports = function (env) {
    return {
        entry: {
            'js/app' : __dirname + '/src/app/main.js',
            // 'js/vendor' : [], //uncomment when vendor libraries are available
            'css/style': __dirname + '/src/sass/main.scss',
            'css/vendor-style': [
                //this is just an example of how to include vendoers css files, replace with real files
                __dirname + '/node_modules/node-sass/test/fixtures/indent/expected.css',
            ],
        },
        output: {
            path: __dist,
            filename: '[name].bundle.js',
            chunkFilename: '[name].bundle.js',
            sourceMapFilename: '[name].map'
        },
        devtool: 'cheap-module-source-map',
        watch: true,
        watchOptions: {
            poll: 500 //decrese the value if the watcher is slowly (value is in milliseconds)
        },
        module: {
            rules: [{
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'postcss-loader', 'sass-loader']
                }),
                exclude: __dirname + '/node_modules'
            }, {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader']
                }),
                exclude: __dirname + '/src'
            }]
        },
        plugins: [
            new CopyWebpackPlugin([{
                from: __dirname + '/src/img',
                to: __dist + '/img'
            }]),
            //uncomment when vendor libraries are available
            // new webpack.optimize.CommonsChunkPlugin({
            //     name: 'vendor',
            //     filename: '[name].bundle.js'
            // }),
            new webpack.LoaderOptionsPlugin({
                options: {
                    postcss: [
                        autoprefixer(),
                    ]
                }
            }),
            new ExtractTextPlugin('[name].bundle.css'),
            new ManifestPlugin({
                basePath: 'build/'
            })
        ],
        devServer: {
            contentBase: __dist,
            compress: true,
            port: 9000
        }
    }
};

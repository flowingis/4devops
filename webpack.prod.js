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
            filename: '[name].[chunkhash].js',
            chunkFilename: '[name].[chunkhash].js',
            sourceMapFilename: '[name].[chunkhash].map'
        },
        devtool: 'source-map',
        watch: false,
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
            //     filename: '[name].[chunkhash].js'
            // }),
            new webpack.LoaderOptionsPlugin({
                minimize: true,
                debug: false,
                options: {
                    postcss: [
                        autoprefixer(),
                    ]
                }
            }),
            new ExtractTextPlugin('[name].[chunkhash].css'),
            new webpack.optimize.UglifyJsPlugin({
                beautify: false,
                mangle: {
                    screw_ie8: true,
                    keep_fnames: true
                },
                compress: {
                    screw_ie8: true
                },
                comments: false
            }),
            new ManifestPlugin({
                basePath: 'build/'
            })
        ]
    }
};

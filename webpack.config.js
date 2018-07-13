var path = require('path')
var webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  
    plugins: [
        new VueLoaderPlugin()
    ],
    
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'build.js'
    },

    module: {
        rules: [
        {
            test: /\.vue$/,
            loader: 'vue-loader',
        },
        {
            test: /\.scss$/,
            exclude: /node_modules/,
            use: [
                'vue-style-loader',
                'css-loader',
                'sass-loader'
            ]
        },
        {
            test: /\.tsx?$/,
            loader: 'ts-loader',
            exclude: /node_modules/,
            options: {
            appendTsSuffixTo: [/\.vue$/],
            }
        },
        {
            test: /\.(png|jpg|gif|svg)$/,
            loader: 'file-loader',
            options: {
            name: '[name].[ext]?[hash]'
            }
        }
        ]
    }, //END module

    resolve: {
        extensions: ['.ts', '.js', '.vue', '.json'],
        alias: {
        'vue$': 'vue/dist/vue.esm.js',
        'vuex$': 'vuex/dist/vuex.esm.js',
        'vue-class-component$': 'vue-class-component/dist/vue-class-component.common.js'
        }
    },

    devServer: {
        historyApiFallback: true,
        noInfo: true
    },

    performance: {
        hints: false
    },

    devtool: '#eval-source-map'
    }

    if (process.env.NODE_ENV === 'production') {
        module.exports.devtool = '#source-map'
        // http://vue-loader.vuejs.org/en/workflow/production.html
        module.exports.plugins = (module.exports.plugins || []).concat([
            new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
            }),
            new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
            }),
            new webpack.LoaderOptionsPlugin({
            minimize: true
            })
        ])
    }

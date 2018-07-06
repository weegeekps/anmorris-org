const AssetsPlugin = require('assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

const cssRules = [
    {
        loader: 'css-loader',
    }
];

const sassRules = [
    {
        loader: 'css-loader',
    },
    {
        loader: 'postcss-loader',
        options: {
            plugins: () => [
                require('autoprefixer')({
                    browsers: ['last 2 versions', 'ie >= 9', 'and_chr >= 2.3'],
                }),
            ],
        },
    },
    {
        loader: 'sass-loader',
        options: {
            includePaths: ['node_modules/foundation-sites/scss'],
        },
    },
];

// TODO: Swap extract-text-webpack-plugin for mini-css-extract-plugin
module.exports = ({ production } = {}) => ({
    entry: {
        app: './index.js',
    },
    mode: production ? 'production' : 'development',
    output: {
        path: path.join(__dirname, './../static/dist'),
        filename: '[name].[chunkhash].bundle.js',
        sourceMapFilename: '[name].[chunkhash].bundle.map',
        chunkFilename: '[name].[chunkhash].chunk.js',
    },
    devtool: production ? 'nosources-source-map' : 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.js$/i,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env'],
                    },
                },
            },
            {
                test: /\.css$/i,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: cssRules,
                }),
            },
            {
                test: /\.scss$/i,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: sassRules,
                }),
                issuer: /\.[tj]s$/i,
            },
            {
                test: /\.scss$/i,
                use: sassRules,
                issuer: /\.html?$/i,
            },
            {
                test: /\.(png|gif|jpg|cur)$/i,
                loader: 'url-loader',
                options: { limit: 8192 }
            },
            {
                test: /\.woff2(\?v=[0-9]\.[0-9]\.[0-9])?$/i,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    mimetype: 'application/font-woff2'
                }
            },
            {
                test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/i,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    mimetype: 'application/font-woff'
                }
            },
            {
                test: /\.(ttf|eot|svg|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/i,
                loader: 'file-loader'
            },
        ]
    },
    resolve: {
        modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
    plugins: [
        new AssetsPlugin({
            filename: 'webpack_assets.json',
            path: path.join(__dirname, '../data'),
            prettyPrint: true,
        }),
        new ExtractTextPlugin({
            filename: '[name].[contenthash].css',
        }),
        new CleanWebpackPlugin([
            path.join(__dirname, './../static/dist'),
        ]),
    ],
});

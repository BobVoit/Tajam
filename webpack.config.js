const webpack = require('webpack');

module.exports = {
    output: {
        filename: 'script.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/preset-env'],
                },
            },
        ],
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
    ],
}
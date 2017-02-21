module.exports = {
    entry: './public/javascripts/index.js',
    output: {
        filename: './public/bin/bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                    'less-loader'
                ]
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.min.js'
        }
    },
    devtool: 'source-map'
}

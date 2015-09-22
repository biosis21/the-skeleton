var path = require("path"),
    webpack = require("webpack");

module.exports = [
    {
        context: path.join(__dirname, "server-src/client-src"),
        entry: {
            app: "./js/app.js"
        },
        output: {
            filename: "[name].js",
            path: path.join(__dirname, "client-build")
        },
        module: {
            loaders: [
                {
                    test: /\.js?$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader'
                },
                {
                    test: /\.scss$/,
                    loader: "style!css!sass"
                }
            ]
        },
        resolve: {
            modulesDirectories: ['node_modules'],
            extensions: ['', '.js']
        },
        plugins: [
            new webpack.DefinePlugin({
                "process.env": {
                    BROWSER: JSON.stringify(true)
                }
            })
        ]
    }
];



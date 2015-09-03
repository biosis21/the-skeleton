var path = require("path"),
    webpack = require("webpack"),
    fs = require('fs'),
    nodeModules = {};

fs.readdirSync('node_modules')
    .filter(function(x) {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function(mod) {
        nodeModules[mod] = 'commonjs ' + mod;
    });

module.exports = [
    {
        context: path.join(__dirname, "server-src"),
        entry: "./app",
        target: "node",
        output: {
            filename: "[name].entry.js",
            path: path.join(__dirname, "server-build")
        },
        module: {
            loaders: [
                {
                    test: /\.js?$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader'
                }
            ]
        },
        resolve: {
            modulesDirectories: ['node_modules'],
            extensions: ['', '.js']
        },
        externals: nodeModules
    }
];
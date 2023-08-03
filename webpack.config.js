const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

// const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        // đẻ ra nhiều entrypoint
        main: './src/index.js',
        test: './src/test.js'

        // gộp hết vào 1 entrypoint
        // main: [
        //     './src/index.js', 
        //     './src/test.js'
        // ]
    },
    output: {
        //đẻ ra nhiều entrypoint
        filename: '[name].js',

        /// gộp hết vào 1 entrypoint
        // filename: 'onefileBundle.js',

        path : path.resolve(__dirname, 'dist'),
        clean: true
    },
    mode: "development",
    watch: true,
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    devServer: {
        static: {
          directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
        open: true
      },
    plugins: [
        new HtmlWebpackPlugin({
            title : "nam nguyen"
        }),
        //new CleanWebpackPlugin()
    ],
    module: {
        rules: [
          {
            test: /\.(?:js|mjs|cjs)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [
                  ['@babel/preset-env', { targets: "defaults" }]
                ]
              }
            }
          }
        ]
      }
}
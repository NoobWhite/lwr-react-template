const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    plugins: [new HtmlWebpackPlugin({
        template: 'src/index.html'
    })],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                     loader: "babel-loader"
                }
            }
        ]
    },
    devServer: {
        port: 8080,
        compress: true,
        open: true
	}
}
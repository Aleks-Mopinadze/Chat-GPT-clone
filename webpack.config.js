const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './src/index.js',
    mode: 'production',
    plugins: [new HtmlWebpackPlugin({
        template: "index.html"
    })],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: ["@tailwindcss/postcss"],
                            },
                        },
                    },
                ],
            },
        ],
    },
    devServer: {
        static: './dist',
    },
};
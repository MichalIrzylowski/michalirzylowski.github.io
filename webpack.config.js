const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (_, options) => {
    const isDevelopment = options.mode === 'development';
    return {
        entry: './src/index.tsx',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js',
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.module\.s(a|c)ss$/i,
                    use: [
                        'style-loader',
                        {
                            loader: 'css-loader',
                            options: {
                                modules: {
                                    mode: 'local',
                                    localIdentName: isDevelopment
                                        ? '[path][name]__[local]'
                                        : '[hash:base64]',
                                },
                            },
                        },
                        'sass-loader',
                    ],
                },
                {
                    test: /\.s(a|c)ss$/,
                    exclude: /\.module.(s(a|c)ss)$/,
                    use: ['style-loader', 'css-loader', 'sass-loader'],
                },
            ],
        },
        devtool: isDevelopment && 'inline-source-map',
        plugins: [
            new HtmlWebpackPlugin({
                template: './public/index.html',
                title: isDevelopment ? 'development' : 'Michal_Irzylowski',
            }),
        ],
        devServer: {
            contentBase: './dist',
            hot: true,
        },
    };
};

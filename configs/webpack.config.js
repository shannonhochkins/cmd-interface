import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import general from './general.config.js';

const {host, port} = general;

module.exports = {
    entry: [
      './src/index.js',
    ],
    watch : true,
    output: {
        path: path.join(__dirname, '../dist'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
	        {
	            test: /\.js$/,
	            loader: 'babel-loader',
	            exclude: /node_modules/
	        }, 
        ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
    	 title : 'CMD Interface',
    })]
};
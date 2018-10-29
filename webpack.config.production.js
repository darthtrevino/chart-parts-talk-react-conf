/* eslint-disable */

var path = require('path')
var webpack = require('webpack')

module.exports = {
	entry: ['@babel/polyfill', './index'],
	mode: 'production',
	output: {
		path: path.join(__dirname, 'site/dist'),
		filename: 'bundle.js',
		publicPath: '/dist/',
	},
	module: {
		rules: [
			{
				test: /\.md$/,
				loader: 'html-loader!markdown-loader?gfm=false',
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader',
			},
			{
				test: /\.(png|jpg|gif)$/,
				loader: 'url-loader?limit=8192',
			},
			{
				test: /\.svg$/,
				loader: 'url-loader?limit=10000&mimetype=image/svg+xml',
			},
		],
	},
}

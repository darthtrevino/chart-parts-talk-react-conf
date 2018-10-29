var path = require('path')
var webpack = require('webpack')

module.exports = {
	mode: 'development',
	entry: ['@babel/polyfill', 'webpack-hot-middleware/client', './index'],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: 'chart-parts-talk-react-conf/dist',
	},
	plugins: [new webpack.HotModuleReplacementPlugin()],
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
				include: __dirname,
			},
			{
				test: /\.css$/,
				loaders: ['style-loader', 'raw-loader'],
				include: __dirname,
			},
			{
				test: /\.svg$/,
				loader: 'url-loader?limit=10000&mimetype=image/svg+xml',
				include: path.join(__dirname, 'assets'),
			},
			{
				test: /\.png$/,
				loader: 'url-loader?mimetype=image/png',
				include: path.join(__dirname, 'assets'),
			},
			{
				test: /\.gif$/,
				loader: 'url-loader?mimetype=image/gif',
				include: path.join(__dirname, 'assets'),
			},
			{
				test: /\.jpg$/,
				loader: 'url-loader?mimetype=image/jpg',
				include: path.join(__dirname, 'assets'),
			},
		],
	},
}

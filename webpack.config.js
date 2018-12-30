const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

var devMode = process.env.NODE_ENV == 'development';

module.exports = {
	entry: './src/js/main.js',
	output: {
		filename: 'bundle-[hash].js',
		path: path.resolve(__dirname, './public')
	},
	mode: 'development',
	// watch: true,
	devtool: 'source-map',
	// keep webpack output minimal
	stats: {
	  all: false,
	  errors: true,
	  builtAt: true,
	  timings: true
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			// process all image assets, and if small enough inline as data: URL
			// {
			// 	loader: "url-loader",
			// 	query: { limit: 1024, name: 'images/[name]-[hash].[ext]' },
			// 	test: /\.(svg|png|jpg)$/
			// },
			{
				test: /\.s?css$/,
				use: [
					devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader',
					'sass-loader'
				]
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(['./public/'], {
			exclude: ['.gitignore', '.gitkeep'],
			root: path.join(__dirname, './')
		}),
		// extract css to files
		new MiniCssExtractPlugin({
			filename: devMode ? '[name].css' : 'bundle-[hash].css',
			chunkFilename: devMode ? '[id].css' : 'bundle-[id].[hash].css',
		}),

		// compile the main app.html file, causing injecting of JS and CSS assets
		new HtmlWebpackPlugin({ 
			filename:'index.html', 
			template: './src/index.html',
			environment: process.env.NODE_ENV
		}),

		new VueLoaderPlugin()

	]
};
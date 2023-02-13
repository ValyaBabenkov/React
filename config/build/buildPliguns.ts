import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack, { DefinePlugin } from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { BuildPaths } from './types/config'

export function buildPlugins(
	paths: BuildPaths
): webpack.WebpackPluginInstance[] {
	return [
		//Для отоборажение прогресса
		new webpack.ProgressPlugin(),
		new HtmlWebpackPlugin({
			template: paths.html,
		}),
		new MiniCssExtractPlugin({
			filename: 'css/[name].[contenthash:8].css',
			chunkFilename: 'css/[name].[contenthash:8].css',
		}),
		new DefinePlugin({
			__IS_DEV__: JSON.stringify('__IS_DEV__'),
		}),
		new webpack.HotModuleReplacementPlugin(),
	]
}

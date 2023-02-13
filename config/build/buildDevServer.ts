import { BuildOptions } from './types/config'
import { Configuration as DevServerConfiguration } from 'webpack-dev-server'
export function buildDevServer(options: BuildOptions): DevServerConfiguration {
	const { port } = options
	return {
		port,
		open: true,
		//Для рендинга через главную страницу
		historyApiFallback: true,
	}
}

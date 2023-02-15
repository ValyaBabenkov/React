import path from 'path';
import { Configuration } from 'webpack';
import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolve';
import { BuildOptions } from './types/config';

export function buildWebpackConfig(options: BuildOptions): Configuration {
    const { paths, mode, isDev } = options;
    return {
        mode,
        // Стартовая точка нашего приложения
        entry: paths.entry,
        // Куда собираем сборку
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true,
        },

        // Plugins
        plugins: buildPlugins(options),

        // TS
        module: {
            // Loader выходит за рамки ts (jpg,png,avi)
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),

        // Отображает где ошибка при сборке
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
    };
}

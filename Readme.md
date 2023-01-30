# Инициализируем проект

```
npm init -y
```

# Устанавливаем webpack (TypeScript)

## Ссылки:

Webpack:
https://webpack.js.org/concepts/
https://webpack.js.org/plugins/

TS:
https://webpack.js.org/guides/typescript/
https://webpack.js.org/configuration/configuration-languages/

DevServer
https://webpack.js.org/configuration/dev-server/

Env
https://webpack.js.org/guides/environment-variables/

```
npm i -D webpack@5.69.1 webpack-cli@4.9.2 html-webpack-plugin@5.5.0 typescript@4.5.5 ts-loader@9.2.6
npm i -D ts-node@10.5.0 @types/node@17.0.21 @types/webpack@5.28.0
npm i -D webpack-dev-server@4.7.4 @types/webpack-dev-server@4.7.2

```

## 1. Настраиваем конфигурационный файл - webpack.config.ts

```
import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'

const config: webpack.Configuration = {
	mode: 'development',
	//Стартовая точка нашего приложения
	entry: path.resolve(__dirname, 'src', 'index.ts'),

	//TS
	module: {
		//Loader выходит за рамки ts (jpg,png,avi)
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},

	//Куда собираем сборку
	output: {
		filename: '[name].[contenthash].js',
		path: path.resolve(__dirname, 'build'),
		//Удаление предыдущей сборки
		clean: true,
		//Шаблон
	},
	plugins: [
		//Для отоборажение прогресса
		new webpack.ProgressPlugin(),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'public', 'index.html'),
		}),
	],
}
export default config

```

## 2. Настройка tsconfig.json

```
{
	"compilerOptions": {
		//Куда производится сборка (не нужна)
		"outDir": "./dist/",
		//Стройгая типотизация (не пропускает)
		"noImplicitAny": true,
		//ESNext || es6
		"module": "ESNext",
		//В какой синтаксис будет компилироваться (es6)
		"target": "es5",
		"jsx": "react",
		//ts,js
		"allowJs": true,
		//99% node
		"moduleResolution": "node",
		//esModuleInterop - для import -> require()
		"esModuleInterop": true,
		//Поддержка export default
		"allowSyntheticDefaultImports": true
	},
	"ts-node": {
		"compilerOptions": {
			"module": "CommonJS"
		}
	}
}
```

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

Sass loader (Minicssplugin)
https://webpack.js.org/loaders/sass-loader/#root
https://webpack.js.org/plugins/mini-css-extract-plugin/#root

Css modules
https://webpack.js.org/loaders/postcss-loader/#css-modules

```
npm i -D webpack@5.69.1 webpack-cli@4.9.2 html-webpack-plugin@5.5.0 typescript@4.5.5 ts-loader@9.2.6
npm i -D ts-node@10.5.0 @types/node@17.0.21 @types/webpack@5.28.0
npm i -D webpack-dev-server@4.7.4 @types/webpack-dev-server@4.7.2

npm i react@17.0.2 react-dom@17.0.2
npm i -D @types/react@17.0.39 @types/react-dom@17.0.11

npm i -D sass-loader@12.6.0 sass@1.49.9 css-loader@6.6.0 style-loader@3.3.1 mini-css-extract-plugin@2.5.3


```

## 1. Настройка tsconfig.json

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

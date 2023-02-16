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

SVG
https://react-svgr.com/docs/webpack/
https://stackoverflow.com/questions/44717164/unable-to-import-svg-files-in-typescript

IMAGE
https://v4.webpack.js.org/loaders/file-loader/

i18n
https://www.i18next.com/overview/getting-started

Hot Reshresh
https://webpack.js.org/guides/hot-module-replacement/

Babel
https://babeljs.io/setup

Eslint
https://eslint.org/docs/latest/use/getting-started

Jest
https://jestjs.io/docs/getting-started#generate-a-basic-configuration-file

BundelAnalizator


```
npm i -D webpack@5.69.1 webpack-cli@4.9.2 html-webpack-plugin@5.5.0 typescript@4.5.5 ts-loader@9.2.6
npm i -D ts-node@10.5.0 @types/node@17.0.21 @types/webpack@5.28.0
npm i -D webpack-dev-server@4.7.4 @types/webpack-dev-server@4.7.2

npm i react@17.0.2 react-dom@17.0.2
npm i -D @types/react@17.0.39 @types/react-dom@17.0.11

npm i -D sass-loader@12.6.0 sass@1.49.9 css-loader@6.6.0 style-loader@3.3.1 mini-css-extract-plugin@2.5.3

npm i react-router-dom@6.2.1
npm i -D @types/react-router-dom@5.3.3

npm install --save-dev @svgr/webpack@6.2.1

npm install file-loader --save-dev@6.2.0

npm i i18next@21.6.11 react-i18next@11.15.5 i18next-browser-languagedetector@6.1.3 i18next-http-backend@1.3.2

npm install --save-dev babel-loader@8.2.3 @babel/core@7.17.5
npm install @babel/preset-env@7.16.11 --save-dev
npm i babel-plugin-i18next-extract@0.8.3 --save-dev

npm init @eslint/config
sudo npm install -g eslint

Linter css
npm install --save-dev stylelint@14.5.3 stylelint-config-standard@3.0.0

Jest
npm install -g jest
npm i -D jest@27.5.1
npm i -D @types/jest@29.4.0
jest --init

BundelAnalizator
yarn add -D webpack-bundle-analyzer @types/webpack-bundle-analyzer

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

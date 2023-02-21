module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'plugin:i18next/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: {
            jsx: true,
        },
        sourceType: 'module',
    },
    plugins: [
        'react',
        'i18next',
        'react-hooks',
    ],
    rules: {
    // Сохранение отступы
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        indent: [2, 4],
        // JSX разрешение
        'react/jsx-filename-extension': [
            2,
            { extensions: ['.js', '.jsx', 'tsx'] },
        ],
        // Использование абсолютьных путей
        'import/no-unresolved': 'off',
        // Подсвечиваем неиспользуемые переменные
        'no-unused-vars': 'warn',
        // Отключаем дефайлтное значение
        'react/require-default-props': 'off',
        // Импорт React отключаем
        'react/react-in-jsx-scope': 'off',
        // Не ругаемся на стрелочные функции
        'react/function-component-definition': 'off',
        // Подсвечиваем когда пред передаем в компоненты
        'react/jsx-props-no-spreading': 'warn',
        // Выключим
        'no-shadow': 'warn',
        // Табуляцию
        'no-tabs': 'off',
        // Импорт
        'import/extensions': 'off',
        // Импорт из DevDepensed
        'import/no-extraneous-dependencies': 'off',
        'import/prefer-default-export': 'off',
        'no-underscore-dangle': 'off',
        'no-redeclare': 'warn',
        'no-promise-executor-return': 'off',
        'implicit-arrow-linebreak': 'off',
        'i18next/no-literal-string': ['error', { markupOnly: true, ignoreAttribute: ['data-testid', 'to'] }],
        'max-len': ['error', { ignoreComments: true, code: 120 }],

        // Отключаем симатику (div вещать OnClick нельзя)
        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',

        'react-hooks/rules-of-hooks': 'error', // Проверяем правила хуков
        'react-hooks/exhaustive-deps': 'error', // Проверяем зависимости эффекта
    },
    globals: {
        __IS_DEV__: true,
    },
    // Отключаем правила в тестах
    overrides: [
        {
            files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
            rules: {
                'i18next/no-literal-string': 'off',
                'max-len': 'off',
            },
        },
    ],
};

module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:prettier/recommended',
        // 'plugin:@typescript-eslint/recommended',
    ],
    plugins: ['prettier', 'react', 'react-hooks'],
    rules: {
        eqeqeq: 'error',
        'no-console': 'warn',
        'prettier/prettier': 'error',
        'react/display-name': 'off',
        'react/no-children-prop': 'off',
        // if you use React 17+; otherwise, turn this on
        'react/react-in-jsx-scope': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'react/prop-types': 'off',
    },
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    env: {
        browser: true,
        node: true,
        es6: true,
        jest: true,
    },
    ignorePatterns: ['node_modules', 'build', 'dist', 'public'],
};

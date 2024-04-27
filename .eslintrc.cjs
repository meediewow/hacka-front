'use strict';

module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    plugins: ['react-refresh'],
    rules: {
        'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
        'no-restricted-imports': [
            'error',
            {
                paths: [
                    {
                        name: '@mui/material',
                        message:
                            "Please use icons import like this: ==> import Typography from '@mui/material/Typography'",
                    },
                    {
                        name: 'lodash',
                        message:
                            "Please use lodash import like this: import noop from 'lodash/noop'",
                    },
                ],
            },
        ],
    },
};

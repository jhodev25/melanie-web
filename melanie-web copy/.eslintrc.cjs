/** @type {import ('eslint').ESLint.ConfigData} */
module.exports = {
  env: {
    browser: true,
    node: true,
    'vitest-globals/env': true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    react: {
      version: '18.2.0',
    },
  },
  plugins: [],
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:vitest-globals/recommended',
    'plugin:prettier/recommended', // must be at bottom of list
  ],
  rules: {
    // import
    'import/no-unresolved': 'error',
    'import/prefer-default-export': 'off',
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always',
        groups: ['builtin', 'external', 'internal', ['parent', 'sibling'], 'unknown', 'object', 'type'],
      },
    ],

    // react
    'react/jsx-filename-extension': 'off',
    'react/destructuring-assignment': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/function-component-definition': [
      'error',
      { namedComponents: 'arrow-function', unnamedComponents: 'arrow-function' },
    ],

    // misc
    'no-param-reassign': 'off', // redux toolkit use immer for object construction
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'react',
            importNames: ['default'],
            message: 'React default is automatically imported by bundler.',
          },
        ],
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        peerDependencies: ['**/test/**/*', '**/*.test.*', '**/*.spec.*'],
        devDependencies: ['**/test/**/*', '**/*.test.*', '**/*.spec.*', 'setupTests.js'],
      },
    ],
  },
  overrides: [
    /** Testing File Config */
    {
      files: ['**/?(*.)+(spec|test).[t]s?(x)'],
      extends: ['plugin:testing-library/react'],
    },

    /** TypeScript File Config */
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.eslint.json',
      },
      extends: ['airbnb-typescript', 'plugin:@typescript-eslint/recommended'],
      rules: {
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/consistent-type-imports': [
          'error',
          {
            prefer: 'type-imports',
          },
        ],
        'import/no-extraneous-dependencies': [
          'error',
          {
            peerDependencies: ['**/test/**/*', '**/*.test.*', '**/*.spec.*'],
            devDependencies: ['**/test/**/*', '**/*.test.*', '**/*.spec.*', 'vite.config.ts'],
          },
        ],
      },
      settings: {
        'import/resolver': {
          typescript: {
            alwaysTryTypes: true,
            project: './tsconfig.eslint.json',
          },
        },
      },
    },
  ],
};

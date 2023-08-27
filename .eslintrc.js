module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'prettier',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:jsx-a11y/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'prettier',
    'react',
    '@typescript-eslint',
    'jest',
    'import',
    'simple-import-sort',
  ],
  rules: {
    'react/no-unused-prop-types': 0,
    'react/react-in-jsx-scope': 2,
    'react/function-component-definition': 0,
    'no-use-before-define': 0,
    'no-underscore-dangle': 0,
    // note we must disable the base rule as it can report incorrect errors
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 1,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    'react/require-default-props': 0,
    'prettier/prettier': 1,
    'react/prop-types': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-props-no-spreading': 0,
    'jest/expect-expect': 0,
    'jest/valid-expect': 0,
    'import/prefer-default-export': 0,
    'react/display-name': 0,
    'react/jsx-no-useless-fragment': 0,
    'global-require': 0,
    '@typescript-eslint/no-var-requires': 0,
    'no-console': 0,
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/no-extraneous-dependencies': 0,
    'simple-import-sort/imports': [
      1,
      {
        groups: [
          // Side effect imports.
          ['^\\u0000'],
          // Packages. `react` related packages come first.
          // Absolute imports and other imports such as Vue-style `@/foo`.
          ['^react', '^@?\\w'],
          // Internal packages.
          // Anything that does not start with a dot.
          [
            '^(src/assets)(/.*|$)',
            '^(src/api)(/.*|$)',
            '^(src/modules)(/.*|$)',
            '^(src/redux)(/.*|$)',
            '^(src/services)(/.*|$)',
            '^(src/models)(/.*|$)',
            '^(src/hooks)(/.*|$)',
            '^(src/utils)(/.*|$)',
            '^(src/components)(/.*|$)',
            '^(src/navigation)(/.*|$)',
            '^(src/constants)(/.*|$)',
            '^[^.]',
          ],
          ['^\\.'],
        ],
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
    jest: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {},
    },
  },
  overrides: [
    {
      files: ['**/*.spec.*', '**/testHelpers.*'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
  ],
};

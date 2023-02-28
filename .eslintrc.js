module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  root: true,
  extends: ['airbnb', 'airbnb-typescript', 'airbnb/hooks', 'prettier', 'plugin:import/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['prettier'],
  rules: {
    'react/function-component-definition': [2, { 'namedComponents': 'arrow-function' }],
    'import/no-cycle': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react/require-default-props': [0],
    'react/jsx-props-no-spreading': [0],
    'import/prefer-default-export': [0],
    'react/jsx-no-useless-fragment': [0],
    'react/no-unstable-nested-components': ['off'],
    'no-shadow': 'off',
    'no-undef': 'off',
    'semi': [2, 'never'],
    'object-curly-spacing': ["error", "always"],
    "import/order": [
      "error",
      {
        "distinctGroup": true,
        "groups": ["builtin", "external", "internal", "parent", "sibling", "index", "object", "type"]
      }
    ],
    'no-param-reassign': ["error", { "props": false }],
    'prettier/prettier': 'error',
    'consistent-return': [0],
    'react-hooks/exhaustive-deps': 'warn',
    'global-require': [0],
    'no-void': [0],
    'react-hooks/exhaustive-deps': [0]
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },
  ignorePatterns: [
    '.eslintrc.js',
    '.prettierrc.js',
    'metro.config.js',
    'babel.config.js',
    '*.json',
  ],
}

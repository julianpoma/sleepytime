module.exports = {
  extends: ['@react-native-community'],
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es6: true,
    node: true,
    'react-native/react-native': true,
  },
  rules: {
    // 'sort-imports': [
    //   1,
    //   {
    //     memberSyntaxSortOrder: ['single', 'multiple', 'none', 'all'],
    //   },
    // ],
    'no-shadow': 1,
    'no-param-reassign': 1,
    'no-console': 1,
    'implicit-arrow-linebreak': 0,
    'prefer-arrow-callback': 2,
    'react/prop-types': 0,
    'react/destructuring-assignment': ['warn'],
    'react-native/no-color-literals': 0,
    'react/prefer-stateless-function': 1,
    'sort-keys': [
      'error',
      'asc',
      { caseSensitive: true, natural: false, minKeys: 2 },
    ],
    quotes: ['error', 'single', { avoidEscape: true }],
    'jsx-quotes': ['error', 'prefer-double'],
  },
};

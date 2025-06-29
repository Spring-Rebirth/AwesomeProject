module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    'react-native/no-inline-styles': 'off',
    '@typescript-eslint/no-shadow': 'off',
    'react/no-unstable-nested-components': ['error', { allowAsProps: true }],
    '@typescript-eslint/no-unused-vars': ['warn', { 'argsIgnorePattern': '^_' }],
  },
};

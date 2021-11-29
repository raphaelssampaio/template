module.exports = {
  root: true,
  extends: [
    'standard',
    'standard-jsx',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:flowtype/recommended',
    'plugin:promise/recommended'
  ],
  parser: '@babel/eslint-parser',
  env: {
    jest: true,
    'react-native/react-native': true
  },
  plugins: [
    'flowtype',
    'jest',
    'react',
    'react-native',
    'promise',
    'detox'
  ],
  overrides: [
    {
      files: ['*.e2e.js'],
      env: {
        'detox/detox': true,
        jest: true,
        'jest/globals': true,
      },
    },
  ],
  rules: {
    'camelcase': 1,
    'no-empty': 0,
    'no-unused-expressions': 1,
    'promise/catch-or-return': 0,
    'promise/always-return': 0,
    'react/display-name': 0,
    'react-hooks/exhaustive-deps': 0,
    'react/prop-types': 0,
    'react/jsx-indent-props': 0,
    'react/display-name': 1,
    'react/no-unescaped-entities': 0,
    'react-hooks/rules-of-hooks': 2,
    'react-native/no-unused-styles': 2,
    'react-native/no-single-element-style-arrays': 2
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      flowVersion: '0.141.0',
      version: 'detect'
    }
  }
}

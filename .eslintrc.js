module.exports = {
  env: {
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  plugins: ['import', 'unused-imports'],
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'standard',
    'prettier',
  ],
  rules: {
    'unused-imports/no-unused-imports-ts': 'warn',
    'import/order': [
      'error',
      {
        groups: [['builtin', 'external']],
        'newlines-between': 'always',
      },
    ],
    'no-useless-constructor': 0,
    'no-unused-vars': 'off',
    'no-empty': ['error', { allowEmptyCatch: true }],
    'import/no-unresolved': ['error', { ignore: ['drizzle-orm/'] }],
    'no-undef': 'off',
    'no-console': [
      'warn',
      {
        allow: ['error'],
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src'],
      },
    },
  },
};

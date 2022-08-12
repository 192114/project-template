module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'airbnb',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'semi': ['error', 'never'],
    'quotes': ['error', 'single'],
    'jsx-quotes': ['error', 'prefer-double'],
    'react/jsx-filename-extension': ['error', {extensions: ['.tsx', '.ts', '.jsx', '.js']}],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-indent': ['error', 2],
    'lines-between-class-members': ['error', 'always'],
    'indent': ['error', 2, {SwitchCase: 1}],
    'linebreak-style': ['error', 'unix'],
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/extensions': ['error', 'ignorePackages', {
      'ts': 'never',
      'tsx': 'never',
      'js': 'never',
      'jsx': 'never',
      'mjs': 'never'
    }]
  },
  'settings': {
    'import/resolver': {
      'node': {
        'paths': ['src'],
        'extensions': ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  }
}

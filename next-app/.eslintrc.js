module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended', 'next'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    babelOptions: {
      presets: [require.resolve('next/babel')],
    },
  },
  plugins: ['react'],
  rules: {
    'react/no-unescaped-entities': 'off',  // Disable specific rule
    '@next/next/no-page-custom-font': 'off',  // Disable Next.js specific rule
    'no-unused-vars': 'off', // Disable unused-vars rule
    'no-undef': 'off', // Disable no-undef rule
  },
};

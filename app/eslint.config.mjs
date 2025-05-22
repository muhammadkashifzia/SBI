import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ['next', 'next/core-web-vitals', 'prettier'],
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      'no-var': 'error',
      'no-multiple-empty-lines': ['error', { max: 1 }],
      curly: ['error', 'all'],
      semi: ['error'],
      quotes: ['error', 'single'],
      'prefer-arrow-callbacks': ['error'],
      'prefer-template': ['error'],
      'react/no-unescaped-entities': 'off',
      '@next/next/no-page-custom-font': 'off',
    },
  }),
];
export default eslintConfig;

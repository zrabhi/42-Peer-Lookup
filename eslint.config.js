import baseConfig from 'eslint-config-expo';
import tailwindcssPlugin from 'eslint-plugin-tailwindcss';
import prettierPlugin from 'eslint-plugin-prettier';
import unicornPlugin from 'eslint-plugin-unicorn';
import typescriptESLintPlugin from '@typescript-eslint/eslint-plugin';
import unusedImportsPlugin from 'eslint-plugin-unused-imports';
import typescriptParser from '@typescript-eslint/parser';
import simpleImportSortPlugin from 'eslint-plugin-simple-import-sort';
import reactCompilerPlugin from 'eslint-plugin-react-compiler';

export default [
  {
    ignores: [
      'node_modules/**',
      '.*',
      '*.config.js',
      'ios/**',
      'android/**',
      'babel.config.js',
      'metro.config.js',
      'jest.config.js',
      'native.config.js',
    ],
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    plugins: {
      prettier: prettierPlugin,
      unicorn: unicornPlugin,
      '@typescript-eslint': typescriptESLintPlugin,
      'unused-imports': unusedImportsPlugin,
      tailwindcss: tailwindcssPlugin,
      'simple-import-sort': simpleImportSortPlugin,
      'react-compiler': reactCompilerPlugin,
    },
    rules: {
      'prettier/prettier': 'warn',
      'react-compiler/react-compiler': 'error',
      'react/display-name': 'off',
      'react/no-inline-styles': 'off',
      'react/destructuring-assignment': 'off',
      'react/require-default-props': 'off',
      'unicorn/filename-case': [
        'error',
        {
          cases: {
            pascalCase: true,
          },
        },
      ],
      'no-console': 'warn',
      'unused-imports/no-unused-imports': 'error',
      'max-params': ['error', 3],
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      '@typescript-eslint/consistent-type-imports': [
        'warn',
        {
          prefer: 'type-imports',
          fixStyle: 'inline-type-imports',
          disallowTypeAnnotations: true,
        },
      ],
      'unused-imports/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      'tailwindcss/classnames-order': [
        'warn',
        {
          officialSorting: true,
        },
      ],
      'max-lines-per-function': ['error', 180],
    },
  },
  {
    files: [
      'src/app/**/*',
      './+*.ts*',
      './expo-env.d.ts',
      './nativewind-env.d.ts',
    ],
    rules: {
      'unicorn/filename-case': 'off',
    },
  }
];

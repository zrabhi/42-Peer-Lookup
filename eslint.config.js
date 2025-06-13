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
      'react/destructuring-assignment': 'off', // Vscode doesn't support automatically destructuring, it's a pain to add a new variable
      'react/require-default-props': 'off', // Allow non-defined react props as undefined
      'unicorn/filename-case': [
        'error',
        {
          cases: {
            pascalCase: true,
          },
        },
      ],
      'unused-imports/no-unused-imports': 'error',
      'max-params': ['error', 3],
      'simple-import-sort/imports': 'error', // Import configuration for `eslint-plugin-simple-import-sort`
      'simple-import-sort/exports': 'error',
      '@typescript-eslint/consistent-type-imports': [
        'warn',
        {
          prefer: 'type-imports',
          fixStyle: 'inline-type-imports',
          disallowTypeAnnotations: true,
        },
      ], // Ensure `import type` is used when it's necessary
      'unused-imports/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      'unused-imports/no-unused-imports': 'error',
      'tailwindcss/classnames-order': [
        'warn',
        {
          officialSorting: true,
        },
      ], // Follow Tailwind CSS class order
      'max-lines-per-function': ['error', 180],
    },
  },
{
    files: [
      'src/app/**/*',
      './+*.ts*',
      './nativewind-env.d.ts',
    ],
    rules: {
      'unicorn/filename-case': 'off',
    },
}
];

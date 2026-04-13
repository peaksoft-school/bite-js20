import js from '@eslint/js'
import globals from 'globals'
import reactPlugin from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import importPlugin from 'eslint-plugin-import'
import prettierConfig from 'eslint-config-prettier'

export default [
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: 'module',
      globals: { ...globals.browser, ...globals.es2021 },
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooks,
      'jsx-a11y': jsxA11y,
      import: importPlugin,
    },
    settings: {
      react: { version: 'detect' },
    },
    rules: {
      // React
      ...reactPlugin.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
      'react/jsx-props-no-spreading': 'off',
      'react/function-component-definition': 'off',
      'react/prop-types': 'off',
      'react/display-name': 'off',

      // Импорты
      'import/prefer-default-export': 'off',

      // Общие
      'no-shadow': 'off',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'max-len': [
        'error',
        {
          code: 100,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreRegExpLiterals: true,
        },
      ],

      // Хуки
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // Доступность
      'jsx-a11y/label-has-associated-control': [
        'error',
        {
          required: { some: ['nesting', 'id'] },
        },
      ],
    },
  },

  {
    ignores: ['dist/**', 'node_modules/**', 'vite.config.js'],
  },

  prettierConfig,
]

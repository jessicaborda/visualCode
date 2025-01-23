import js from '@eslint/js';
import importPlugin from 'eslint-plugin-import'; // Importar el plugin de importación
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: { react: { version: '18.3' } },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      import: importPlugin, // Asegúrate de que este plugin esté en la sección de plugins
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      // Ordenar los imports
      'import/order': [
        'error',
        {
          groups: [
            ['builtin', 'external'],
            ['internal', 'sibling', 'parent'],
          ],
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
      // Espacios entre los imports y otras declaraciones
      'padding-line-between-statements': [
        'error',
        { prev: 'import', next: 'block', blankLine: 'always' }, // Espacio después de los imports
        { prev: 'import', next: 'function', blankLine: 'always' }, // Espacio entre los imports y funciones
        { prev: 'function', next: 'function', blankLine: 'always' }, // Espacio entre funciones
      ],
    },
  },
];

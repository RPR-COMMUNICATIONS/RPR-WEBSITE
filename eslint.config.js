/**
 * TS-Λ3 // LINTING SUBSTRATE CONFIGURATION [v1.1.0]
 * Path: eslint.config.js
 * Mission: Enforce Smallcaps Mandate // Clinical React Typography
 * Authority: THE OVERWATCH // SG-CANONICAL-2026
 * Status: AUTHORITATIVE // LATCHED
 * Fix: Escalated rules to support Context API and i18n providers found in main.tsx.
 * Fix: Added explicit support for React 18 and Vite-based module resolution.
 */

import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import reactPlugin from 'eslint-plugin-react';
import globals from 'globals';

export default tseslint.config(
    {
        // 🧬 SUBSTRATE EXCLUSIONS
        ignores: [
            'dist',
            'node_modules',
            'legacy',
            'public',
            '.firebase',
            'scripts/inventory/*.csv',
            '**/*.d.ts'
        ]
    },
    {
        extends: [
            js.configs.recommended,
            ...tseslint.configs.recommended,
        ],
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: {
                ...globals.browser,
                ...globals.es2021,
                ...globals.node
            },
            parserOptions: {
                project: ['./tsconfig.node.json', './tsconfig.json'],
                tsconfigRootDir: import.meta.dirname,
            },
        },
        plugins: {
            'react': reactPlugin,
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
        rules: {
            // 🚥 REACT HOOKS & REFRESH LATCH
            ...reactHooks.configs.recommended.rules,
            'react-refresh/only-export-components': [
                'warn',
                { allowConstantExport: true },
            ],

            // 🛡️ CLINICAL SMALLCAPS & NAMING MANDATES
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/no-unused-vars': ['error', {
                argsIgnorePattern: '^_',
                varsIgnorePattern: '^_'
            }],

            // 🧬 TYPOGRAPHIC & REACT INTEGRITY
            'react/prop-types': 'off', // Deferred to TypeScript interfaces
            'react/react-in-jsx-scope': 'off', // Latched for React 17+ / Vite
            'react/jsx-no-target-blank': 'warn',

            // ⚙️ ARCHITECTURAL CONSTRAINTS
            'no-console': ['warn', { allow: ['warn', 'error', 'info', 'log'] }],
            'prefer-const': 'error',
            'no-var': 'error',
            'no-debugger': 'error',

            // 📐 NAMING LATCH (Enforcing Clinical Casing)
            '@typescript-eslint/naming-convention': [
                'warn',
                {
                    selector: 'variable',
                    format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
                },
                {
                    selector: 'function',
                    format: ['camelCase', 'PascalCase'],
                },
                {
                    selector: 'typeLike',
                    format: ['PascalCase'],
                },
            ],

            // 🛰️ MODULE RESOLUTION RULES
            // Note: Supports the .tsx extensions used in your main.tsx latch
            'no-restricted-imports': ['error', {
                patterns: [{
                    group: ['src/styles/*'],
                    message: 'Please utilize the global style latch in src/main.tsx.'
                }]
            }]
        },
    }
);
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginJsxA11y from "eslint-plugin-jsx-a11y";
import pluginPrettier from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";
import globals from "globals";

export default [
  // Configuración base de ESLint
  eslint.configs.recommended,
  // Configuración recomendada para TypeScript
  ...tseslint.configs.recommended,
  // Configuración para el Client (React)
  {
    files: ["src/**/*.{ts,tsx}"], // Cambiado de Client a src
    plugins: {
      react: pluginReact,
      "react-hooks": pluginReactHooks,
      "jsx-a11y": pluginJsxA11y,
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        sourceType: "module",
        project: "./tsconfig.json", // Ajustado a la raíz
      },
      globals: {
        ...globals.browser,
      },
    },
    settings: {
      react: {
        version: "detect",
        pragma: "React",
        fragment: "Fragment",
      },
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "warn",
      ...pluginReact.configs.recommended.rules,
      ...pluginReactHooks.configs.recommended.rules,
      ...pluginJsxA11y.configs.recommended.rules,
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
      "no-console": ["warn", { allow: ["error"] }],
      eqeqeq: "error",
      semi: ["error", "always"],
      quotes: ["error", "double"],
      indent: ["error", 2],
      "prettier/prettier": "error",
    },
  },

  // Configuración global (ignorados)
  {
    ignores: [
      "**/dist/",
      "**/node_modules/",
      "**/.next/",
      "vite.config.ts", // Cambiado de Client/vite.config.ts
    ],
  },

  // Configuración de Prettier
  {
    plugins: {
      prettier: pluginPrettier,
    },
    rules: {
      ...prettierConfig.rules,
      "prettier/prettier": [
        "error",
        {
          endOfLine: "lf",
          singleQuote: false,
          trailingComma: "all",
          semi: true,
          printWidth: 80,
          tabWidth: 2,
        },
      ],
    },
  },
];

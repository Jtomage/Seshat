import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import prettierPlugin from "eslint-plugin-prettier/recommended";
import prettierConfig from "eslint-config-prettier/flat";
import perfectionist from "eslint-plugin-perfectionist";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  {
    ignores: ["**/dist/", "**/node_modules/", "**/converage/", "**/*.d.ts"],
    files: ["**/*.{ts, tsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      react: pluginReact,
      "react-hooks": reactHooks,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  globalIgnores([
    "**/dist/",
    "**/node_modules/",
    "**/converage/",
    "**/*.d.ts",
    "eslint.config.js",
  ]),
  js.configs.recommended,
  ...tseslint.configs.recommended,
  reactRefresh.configs.vite,
  perfectionist.configs["recommended-natural"],
  prettierPlugin,
  prettierConfig,
  {
    rules: {
      "no-unused-vars": "off", // Disable base ESLint rule
      "@typescript-eslint/no-unused-vars": [
        // Configure TypeScript unused vars rule
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/triple-slash-reference": "off",
      "prettier/prettier": [
        "error",
        {
          endOfLine: "crlf",
          trailingComma: "es5",
        },
      ],
      "linebreak-style": ["error", "windows"],
      "no-console": ["error", { allow: ["warn", "error"] }],
    },
  },
]);

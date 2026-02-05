import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import reactXPlugin from "eslint-plugin-react-x";
import reactDomPlugin from "eslint-plugin-react-dom";
import prettierPlugin from "eslint-plugin-prettier/recommended";
import prettierConfig from "eslint-config-prettier/flat";
import perfectionist from "eslint-plugin-perfectionist";
import { defineConfig, globalIgnores } from "eslint/config";
import { rules } from "eslint-config-prettier";

export default defineConfig([
  {
    ignores: ["**/dist/", "**/node_modules/", "**/converage/", "**/*.d.ts"],
    files: ["**/*.{ts, tsx}"],
    extends: [],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        projectService: true,
      },
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
  tseslint.configs.strictTypeChecked,
  reactXPlugin.configs["recommended-typescript"],
  reactDomPlugin.configs.recommended,
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
      "linebreak-style": ["error", "windows"],
      "prettier/prettier": [
        "error",
        {
          endOfLine: "crlf",
        },
      ],
      "no-console": ["error", { allow: ["warn", "error"] }],
    },
  },
]);

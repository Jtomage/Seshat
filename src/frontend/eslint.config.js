import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import prettierRecommended from "eslint-plugin-prettier/recommended";
import { defineConfig, globalIgnores } from "eslint/config";
import perfectionist from "eslint-plugin-perfectionist";

export default defineConfig({
  ignores: ["**/dist/", "**/node_modules/", "**/converage/", "**/*.d.ts"],
  extends: [perfectionist],
  languageOptions: {
    globals: globals.browser,
    parser: parser,
    parserOptions: {
      parser: "@typescript-eslint/parser",
    },
    project: ["./*/tsconfig.json"],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  plugins: {
    react: pluginReact,
    "react-hooks": pluginReactHooks,
  },
  prettierRecommended,
  rules: {
    "sort-imports": [
      "error",
      {
        ignoreCase: false,
        ignoreDeclarationSort: false,
        ignore,
      },
    ],
    "perfectionist/sort-jsx-props": [
      "error",
      {
        order: "asc", // or 'asc' for alphabetical
        "case-insensitive": true,
        type: "alphabetical",
      },
    ],
  },
});

// export default defineConfig([
//   globalIgnores(['**/dist/', '**/node_modules/', "**/converage/", "**/*.d.ts"]),
//   {
//     files: ['**/*.{ts,tsx}'],
//     extends: [
//       js.configs.recommended,
//       tseslint.configs.recommended,
//       reactHooks.configs['recommended-latest'],
//       reactRefresh.configs.vite,
//     ],
//     languageOptions: {
//       parser: tseslint.parser,
//       ecmaVersion: "latest",
//       globals: globals.browser,
//       project: "./tsconfig.json",
//       tsconfigRootDir: __dirname
//     },
//     settings: {
//       react: {
//         version: "detect"
//       }
//     },
//     plugins: {
//       react: pluginReact,
//       "react-hooks": pluginReactHooks,
//     }
//   },
//   prettierRecommended
// ])

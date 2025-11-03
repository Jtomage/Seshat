import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import prettierRecommended from "eslint-plugin-prettier/recommended";
import { defineConfig, globalIgnores } from "eslint/config";
import { version } from "os";

export default defineConfig([
  globalIgnores([
    "**/dist/",
    "**/node_modules/",
    "**/converage/",
    "**/*.d.ts",
    "eslint.config.js",
  ]),
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...tseslint.configs.stylistic,
  reactRefresh.configs.vite,
  prettierRecommended,
  {
    ignores: ["**/dist/", "**/node_modules/", "**/converage/", "**/*.d.ts"],
    files: ["**/*.{ts, tsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      // parser: tseslint.parser,
      // parserOptions: {
      //   sourceType: "module",
      //   //project: ["./tsconfig.json", "./**/tsconfig.json"],
      // },
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
    rules: {
      ...reactHooks.configs.recommended.rules,
    },
  },
]);

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

// {
//   files: ["**/*.{js,jsx,ts,tsx}"],
//   extends: [
//     js.configs.recommended,
//     pluginReact.configs,
//     tseslint.configs.recommended,
//     reactRefresh.configs.vite,
//   ],
//   languageOptions: {
//     globals: globals.browser,
//     parser: tseslint.parser,
//     parserOptions: {
//       parser: "@typescript-eslint/parser",
//       project: "./tsconfig.json",
//     },
//   },
//   settings: {
//     react: {
//       version: "detect",
//     },
//   },
//   plugins: {
//     "react-hooks": reactHooks,
//   },
//   rules: {
//     "sort-imports": [
//       "error",
//       {
//         ignoreCase: false,
//         ignoreDeclarationSort: false,
//       },
//     ],
//     "perfectionist/sort-jsx-props": [
//       "error",
//       { type: "alphabetical", ignoreCase: true, order: "asc" },
//     ],
//     //"sort-variable-declarations": "error",
//   },

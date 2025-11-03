// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";

import baseConfig from "../eslint.config.js";

export default defineConfig([
  ...baseConfig,
  ...storybook.configs["flat/recommended"],
  globalIgnores(["dist", ".storybook", "storybook-static"]),
  {
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parser: tseslint.parser,
      parserOptions: {
        projectService: true,
        project: "./tsconfig.json",
      },
    },
  },
]);

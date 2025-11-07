/// <reference types="vitest/config" />
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { cjsInterop } from "vite-plugin-cjs-interop";
import dts from "vite-plugin-dts";
import { defineConfig } from "vitest/config";

import * as packageJson from "./package.json";
// import griffel from "@griffel/vite-plugin";

// https://vite.dev/config/
export default defineConfig({
  build: {
    emptyOutDir: true,
    lib: {
      entry: resolve(__dirname, "./src/index.ts"),
      fileName: (format) => `index.${format}.js`,
      formats: ["es", "cjs"],
      name: "@seshat/components",
    },
    rollupOptions: {
      external: [...Object.keys(packageJson.peerDependencies)],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
  plugins: [
    react(),
    cjsInterop({
      dependencies: ["@fluentui/react-components"],
    }),
    dts({
      entryRoot: "src",
      insertTypesEntry: true,
      tsconfigPath: "./tsconfig.app.json",
    }),
    // griffel({
    //   babelOptions: {
    //     presets: ["@babel/preset-typescript", "@babel/preset-react"],
    //   },
    // }),
  ],
  ssr: {
    noExternal: ["@fluentui/react-icons"],
  },
  test: {
    environment: "jsdom",
    globals: true,
    include: ["./src/**/*.test.{ts,tsx}"],
    setupFiles: ".test/vitest-setup.ts",
  },
});

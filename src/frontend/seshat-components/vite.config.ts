import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { resolve } from "path";
import { cjsInterop } from "vite-plugin-cjs-interop";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    cjsInterop({
      dependencies: ["@fluentui/react-components"],
    }),
    dts({
      insertTypesEntry: true,
      tsconfigPath: "./tsconfig.app.json"
    }),
  ],
  ssr: {
    noExternal: ["@fluentui/react-icons"],
  },
  build: {
    lib: {
      entry: resolve(__dirname, "./src/index.ts"),
      name: "@seshat/components",
      formats: ["es", "cjs"],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    emptyOutDir: true,
  },
  test: {
    environment: "jsdom",
    setupFiles: ["vitest-setup.ts"],
    globals: true,
  },
});

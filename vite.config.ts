import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";
import { resolve } from "path";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  build: {
    minify: true,
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "comp-lib",
      fileName: "index",
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      plugins: [
        dts({
          exclude: ["node_modules/**", "src/stories/**"],
          clearPureImport: true,
        }),
      ],
      treeshake: true,
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "react",
          "react-dom": "reactDom",
        },
      },
    },
  },
});

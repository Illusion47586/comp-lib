import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";
import { resolve } from "path";
import { webpackStats } from "rollup-plugin-webpack-stats";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "comp-lib",
    },
    rollupOptions: {
      plugins: [webpackStats()],
      external: ["react"],
      output: {
        globals: {
          react: "react",
        },
      },
    },
  },
});

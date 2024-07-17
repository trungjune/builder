import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "~bootstrap": path.resolve("node_modules/bootstrap"),
      path: "path-browserify",
    },
  },
  define: {
    __dirname: JSON.stringify(__dirname),
  },
});

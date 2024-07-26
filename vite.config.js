import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: '/', // GitHub Pages serves from the root for username.github.io repositories
  plugins: [react()],
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
});

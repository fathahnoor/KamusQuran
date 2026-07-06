import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "node:path";

// GitHub Pages serves at /<repo-name>/ by default.
// We detect the repo name so `npm run build` works both locally and in CI.
// Set BASE_PATH env var to override (e.g. BASE_PATH=/ npm run build for project pages).
const repoName = "KamusQuran";
const base = process.env.BASE_PATH ?? `/${repoName}/`;

export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  build: {
    target: "es2020",
    chunkSizeWarningLimit: 1000,
  },
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "node:path";

// GitHub Pages serves at /<repo-name>/ by default.
// We detect the repo name so `npm run build` works both locally and in CI.
// Set BASE_PATH env var to override (e.g. BASE_PATH=/ npm run build for project pages).
const repoName = "KamusQuran";
const base = process.env.BASE_PATH ?? `/${repoName}/`;

/** Build timestamp in YYYYMMDDHHMMSS (UTC) — injected at build time for version tracking. */
function buildTimestamp(): string {
  const d = new Date();
  const Y = d.getUTCFullYear().toString().padStart(2, "0");
  const M = (d.getUTCMonth() + 1).toString().padStart(2, "0");
  const D = d.getUTCDate().toString().padStart(2, "0");
  const h = d.getUTCHours().toString().padStart(2, "0");
  const m = d.getUTCMinutes().toString().padStart(2, "0");
  const s = d.getUTCSeconds().toString().padStart(2, "0");
  return `${Y}${M}${D}${h}${m}${s}`;
}

export default defineConfig({
  base,
  define: {
    __BUILD_TIMESTAMP__: JSON.stringify(buildTimestamp()),
  },
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

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Absolute asset paths: with "./", deep links such as /products/<slug> asked for
  // /products/assets/*.js, got index.html back from the SPA redirect and rendered blank.
  base: "/",
  build: {
    outDir: "dist",
  },
});

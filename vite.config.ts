// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./", // Set base to relative path
  build: {
    outDir: "dist", // Ensure the build output directory is 'dist'
  },
});

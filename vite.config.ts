// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "./", // Ensures proper asset paths
  build: {
    outDir: "dist", // Ensures the build output is in the 'dist' folder
  },
});

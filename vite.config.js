import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // GitHub Pages serves this project at /kova/. Keep local development at /.
  base: process.env.GITHUB_ACTIONS ? "/kova/" : "/",
  plugins: [react(), tailwindcss()],
});

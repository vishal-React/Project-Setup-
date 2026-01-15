import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  resolve: {
    // alias for import from @ src
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  // Sourcemaps are enabled to make debugging production issues easier
  build: { sourcemap: true },
});

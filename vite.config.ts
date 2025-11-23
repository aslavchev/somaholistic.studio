import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { copyFileSync } from "fs";

// Plugin to copy 404.html for GitHub Pages SPA routing
const copy404Plugin = () => ({
  name: 'copy-404',
  closeBundle() {
    try {
      copyFileSync('dist/index.html', 'dist/404.html');
      console.log('✓ Copied index.html to 404.html for GitHub Pages SPA routing');
    } catch (err) {
      console.warn('⚠ Could not copy 404.html:', err);
    }
  }
});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/somaholistic.studio/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
    copy404Plugin(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));

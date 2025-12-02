import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { copyFileSync } from "fs";
import { createHtmlPlugin } from "vite-plugin-html";
import { randomBytes } from "crypto";

// Generate cryptographic nonce for CSP
const generateNonce = () => randomBytes(16).toString('base64');

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
export default defineConfig(({ mode }) => {
  const styleNonce = generateNonce();

  return {
    base: "/somaholistic.studio/",
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [
      react(),
      mode === 'development' && componentTagger(),
      createHtmlPlugin({
        minify: true,
        inject: {
          data: {
            styleNonce,
          },
        },
      }),
      copy404Plugin(),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});

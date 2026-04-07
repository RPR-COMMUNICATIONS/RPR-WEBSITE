import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

/**
 * TS-Λ3 // BUILD ENGINE CONFIGURATION [v5.5.2]
 * Path: vite.config.ts
 * Mission: Linguistic Chunking & Asset Fission.
 * Authority: THE OVERWATCH // SG-CANONICAL-2026
 * Fix: Isolated i18n chunk to optimize multi-language payload.
 */

export default defineConfig({
  plugins: [
    react(),
    // 🧬 TAILWIND V4 ENGINE
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    emptyOutDir: true,
    rollupOptions: {
      output: {
        /**
         * 📦 AUTHORITATIVE CHUNKING
         * Separates core logic from heavy linguistic & cloud substrates.
         */
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom', 'framer-motion'],
          firebase: ['firebase/app', 'firebase/auth', 'firebase/firestore'],
          i18n: ['i18next', 'react-i18next', 'i18next-browser-languagedetector'],
          ui: ['lucide-react'],
        },
      },
    },
  },
  server: {
    port: 5173,
    strictPort: true,
    host: true,
    proxy: {
      '/api': {
        target: 'http://localhost:4242',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

/**
 * TS-Λ3 // BUILD ENGINE CONFIGURATION [v5.5.0]
 * Path: vite.config.ts
 * Mission: Orchestrate Production Compilation & Asset Fission.
 * Authority: THE OVERWATCH // SG-CANONICAL-2026
 * Status: AUTHORITATIVE // v13.5.3_ALIGNED
 */

export default defineConfig({
  plugins: [
    react(),
    // 🧬 TAILWIND V4 ENGINE: Governing the CSS substrate via a single-pass build.
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // 🧬 Clinical Alias: Map '@' to 'src' for cleaner relative imports
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false, // Forensic security: Disable maps in production
    emptyOutDir: true,
    rollupOptions: {
      output: {
        /**
         * 📦 MANUAL CHUNKING STRATEGY
         * Liquidates the 'Large Bundle' warning by splitting logic axis.
         */
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom', 'framer-motion'],
          firebase: ['firebase/app', 'firebase/auth', 'firebase/firestore'],
          ui: ['lucide-react'],
        },
      },
    },
  },
  server: {
    port: 5173,
    strictPort: true,
    host: true,
  },
});
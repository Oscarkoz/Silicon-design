import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true,  // Öppnar automatiskt i webbläsaren
    strictPort: true,
  },
  css: {
    postcss: "./postcss.config.js"
  }
});

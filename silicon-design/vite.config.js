import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Kan säga att jag markerar vilken port jag vill att servern ska använda.
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

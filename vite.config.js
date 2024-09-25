import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/portfolio_2024/',  // Set your base path for GitHub Pages deployment
  plugins: [react()],
  assetsInclude: ['**/*.glb'],  // Include GLB assets in the build
  build: {
    chunkSizeWarningLimit: 2000,  // Increase this to suppress warnings for large chunks
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Split your large files or libraries into separate chunks
          if (id.includes('node_modules')) {
            return 'vendor';
          }
          if (id.includes('.glb')) {
            return 'models';
          }
        },
      },
    },
  },
});

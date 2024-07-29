// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Output directory
    minify: 'terser', // Use terser for minification
    terserOptions: {
      compress: {
        drop_console: true, // Optional: Remove console logs
      },
      mangle: true, // Optional: Enable name mangling
    },
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor code into separate chunks
          vendor: ['react', 'react-dom'],
        },
      },
    },
    // chunkSizeWarningLimit removed
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'), // Set up path aliases if needed
    },
  },
});

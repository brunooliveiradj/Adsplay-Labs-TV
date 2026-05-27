import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    react(), 
    tailwindcss(),
  ],
  build: {
    target: 'es2015',
    cssTarget: 'chrome47',
  },
  esbuild: {
    target: 'es2015',
    include: /\.(ts|tsx|js|jsx)$/,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
  server: {
    port: 3000,
    host: '0.0.0.0',
    hmr: process.env.DISABLE_HMR !== 'true',
  },
});

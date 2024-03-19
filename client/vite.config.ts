import react from '@vitejs/plugin-react';

import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: resolve(__dirname, './src/') },
      { find: '@shared', replacement: resolve(__dirname, './src/shared') },
      { find: '@features', replacement: resolve(__dirname, './src/features') },
      { find: '@services', replacement: resolve(__dirname, './src/services') },
      { find: '@pages', replacement: resolve(__dirname, './src/pages') },
      { find: '@assets', replacement: resolve(__dirname, './src/assets') },
    ],
  },
})

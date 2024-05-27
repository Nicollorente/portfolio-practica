import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'redux',
        'react-redux',
        '@fortawesome/react-fontawesome',
        '@fortawesome/free-brands-svg-icons',
        '@reduxjs/toolkit',
        'styled-components'
      ]
    }
  }
});

import react from '@vitejs/plugin-react';

export default {
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['web-vitals','redux','@fortawesome/free-brands-svg-icons']
    }
  }
};

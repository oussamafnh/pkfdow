import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.apk'],
  server: {
    port: 3331,
    host: true,
    allowedHosts: ['download.mypkf.app', 'localhost']
  }
});
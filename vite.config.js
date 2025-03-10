import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: "/Hotel-Booking",
  css: {
    postcss: './postcss.config.js', // Ensure PostCSS is configured here
  },
});

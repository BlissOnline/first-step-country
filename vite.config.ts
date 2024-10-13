import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src', // Adjust based on your project structure
    },
  },
  build: {
    outDir: 'dist', // Ensure this matches your deployment directory
  },
  base: './', // Ensure paths are relative
});

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import Sitemap from 'vite-plugin-sitemap'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Sitemap({
      hostname: 'https://firststepcountry.com/', 
      dynamicRoutes: ['/questions', '/about'], // Add more dynamic routes if needed
    }),
  ],
  resolve: {
    alias: {
      '@': '/src', // Adjust based on your project structure
    },
  },
  build: {
    outDir: 'dist', // Ensure this matches your deployment directory
  },
  base: '/', // Ensure paths are relative
  //base: '/your-subdirectory/'   
});



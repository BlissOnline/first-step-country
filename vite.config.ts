import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import Sitemap from 'vite-plugin-sitemap'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Sitemap({
      hostname: 'https://firststepcountry.com/', 
      dynamicRoutes: [
        '/', //✅ Home Page
        '/about',
        '/questions/q1',
        '/questions/q2',
        '/questions/q3',
        '/questions/q4',
        '/questions/q5',
        '/questions/q6',
        '/questions/q7',
        '/questions/q8',
        '/questions/results',
        '/countryIndex',
      ],
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



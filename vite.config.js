// vite.config.js
import { defineConfig } from 'vite'; // Import the Vite config function
import react from '@vitejs/plugin-react'; // Import the React plugin for Vite

// Export the Vite configuration
export default defineConfig({
  plugins: [react()], // Use the React plugin so Vite can handle JSX, fast refresh, etc.
  server: {
    port: 3000, // Set the development server to run on port 3000
  },
  build: {
    outDir: 'dist', // Output directory for the production build
  },
  // This ensures routing works correctly with React Router (for GitHub Pages or other SPA deployments)
  base: './',
});

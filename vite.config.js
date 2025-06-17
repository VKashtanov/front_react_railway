import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// Function to resolve path, makes config more readable and DRY
const resolvePath = (relativePath) => path.resolve(__dirname, relativePath);

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolvePath('src/main.jsx'), // or src/index.jsx
        // add other entry points here if you have them, e.g.,
        // about: resolvePath('about.html'),
        // contact: resolvePath('contact.html')
      },
    },
  },
  resolve: { // Recommended for cleaner imports
    alias: {
      '@': resolvePath('src'), // Example alias for 'src' directory
    }
  }
})
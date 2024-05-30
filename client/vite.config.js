import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080', // Backend server URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // Optional: rewrite the path if needed
      },
    },
  },
})


// https://connect-app-backend-7hpt.onrender.com
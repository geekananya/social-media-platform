import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: "https://connect-app-backend-7hpt.onrender.com", // Backend server URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // Optional: rewrite the path if needed
      },
    },
  },
})


//import.meta.env.proxy
// https://connect-app-backend-7hpt.onrender.com
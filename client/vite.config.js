import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxy API requests to another server
      '/Os': {
        target: 'https://production-ijdl.onrender.com', // Your backend server URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/Os/, ''),
      },
    },
  },
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // This allows external access
    port: 4008,
    strictPort: true, // Exit if port is already in use
  }
})
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss(),
  ], server: {
    host: true, // Allow access from external IPs (e.g. ngrok or localtunnel)
    port: 5173, // Make sure this matches the port you're tunneling
    strictPort: true,
    allowedHosts: ['all'], // Allow all tunnel domains like loca.lt or ngrok.io
  }
})

import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite' // You must install this package
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // Add this here
  ],
  base: '/',
})
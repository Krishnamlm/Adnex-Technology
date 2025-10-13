import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],

  base: './', // ✅ use relative paths for custom domain hosting

  base: '/Adnex-Technology/', 

})
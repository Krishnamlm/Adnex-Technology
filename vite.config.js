import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
<<<<<<< HEAD
  base: './', // ✅ use relative paths for custom domain hosting
=======
  base: '/Adnex-Technology/', 
>>>>>>> 6f2d298f7f28b7f1670eb1d2ccaf9938cf040af5
})

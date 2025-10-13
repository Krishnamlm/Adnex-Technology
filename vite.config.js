// vite.config.js

// 🎯 CRITICAL FIX: Ensure defineConfig is imported from 'vite'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ command }) => {
    // Determine the base path:
    const basePath = command === 'build' ? '/Adnex-Technology/' : '/';

    return {
        plugins: [react(), tailwindcss()],
        base: basePath,
    }
})
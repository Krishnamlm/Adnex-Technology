// vite.config.js (Fix the original path conflict)

// Find and delete the duplicated lines, keeping ONLY the correct conditional logic:
export default defineConfig(({ command }) => {
    // Determine the base path:
    const basePath = command === 'build' ? '/Adnex-Technology/' : '/';

    return {
        plugins: [react(), tailwindcss()],
        base: basePath, // Keep this line ONLY
    }
})
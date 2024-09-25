import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/portfolio_2024/",
  plugins: [react()],
  assetsInclude: ['**/*.glb'],
})
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/nu-boyolali-app/', // ⬅️ WAJIB
  plugins: [react()],
})

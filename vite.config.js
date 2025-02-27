import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "IBM_FS_05_04_ConfEventPlanner",
  plugins: [react()],
})

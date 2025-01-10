import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import EnvironmentPlugin from "vite-plugin-environment";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), EnvironmentPlugin(["VITE_BACKEND_BASE_URL"])],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src'),
    },
  },
})

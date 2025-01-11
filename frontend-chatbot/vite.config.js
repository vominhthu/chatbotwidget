/* eslint-disable no-undef */

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import EnvironmentPlugin from 'vite-plugin-environment'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), EnvironmentPlugin('all', { prefix: 'VITE_'})],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    host: true
  },
  build: {
    outDir: 'dist'
  }
})

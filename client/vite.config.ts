import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import macrosPlugin from 'vite-plugin-babel-macros';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [macrosPlugin(), react({
    babel: {
      plugins: [
        "babel-plugin-macros",
      ],
    },
  })],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
})

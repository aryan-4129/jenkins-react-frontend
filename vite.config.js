import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // 👈 This allows global `expect`, `test`, etc.
    environment: 'jsdom', // 👈 Required for DOM testing
  },
});

/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import EnvironmentPlugin from 'vite-plugin-environment';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    visualizer(),
    tsconfigPaths(),
    react(),
    EnvironmentPlugin('all', { prefix: 'WEB_' }),
    checker({
      overlay: false,
      eslint: {
        lintCommand: 'eslint --ignore-pattern "**/*.test.*" --cache --ext ts,tsx "./src/"',
      },
      typescript: true,
    }),
  ],
  server: {
    hmr: true,
    port: 3000,
  },
  test: {
    clearMocks: true,
    environment: 'jsdom',
    exclude: ['**/node_modules/**', '**/dist/**', '**/.{idea,git,cache,output,temp}/**', '**/mocks/**'],
    globals: true,
    include: ['src/**/?(*.)(test).[jt]s?(x)'],
    outputFile: {
      html: './reports/index.html',
    },
    setupFiles: ['./setupTests.js'],
  },
});

// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    build: {
      rollupOptions: {
        external: [],
      },
    },

    optimizeDeps: {
      include: ['cookie'],
    },

    ssr: {
      noExternal: ['cookie'],
    },

    plugins: [tailwindcss()],
  },

  integrations: [react()],
});
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://nikhromov.github.io',
  output: 'static',
  vite: {
    ssr: {
      external: ['svelte']
    }
  }
});

import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';

export default defineConfig({
  site: 'https://codigosinsiesta.github.io',
  base: '/harness-engineering-presentation',
  integrations: [svelte()],
  server: {
    port: 4327
  }
});

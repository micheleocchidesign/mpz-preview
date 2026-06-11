import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],
  // Togliamo 'base' perché il sito è nella root del dominio
  site: 'https://martazola.it',
});

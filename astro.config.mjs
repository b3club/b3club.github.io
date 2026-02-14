import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import preact from '@astrojs/preact';

export default defineConfig({
  site: 'https://b3fc.org',
  devToolbar: {
    enabled: true
  },
  integrations: [tailwind(), sitemap(), mdx(), preact()],
  markdown: {
    shikiConfig: {
      theme: 'one-dark-pro'
    }
  }
});

// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Static landing hub for wuemsim.org. Each program app lives on its own
// subdomain (edu., intel.) and is deployed from its own repo; this site is the
// front door that routes visitors to them.
export default defineConfig({
  site: 'https://wuemsim.org',
  integrations: [sitemap()],
});

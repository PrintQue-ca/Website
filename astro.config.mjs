// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
// GitHub Pages project site is at username.github.io/Website/ — set base only in CI so dev stays at /.
// Per Astro docs, base should match repo name with leading slash (no trailing): https://docs.astro.build/en/guides/deploy/github
export default defineConfig({
  site: 'https://printque-ca.github.io',
  base: process.env.GITHUB_ACTIONS === 'true' ? '/Website' : '/',
  integrations: [tailwind()],
});

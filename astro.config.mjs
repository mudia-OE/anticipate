// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Astro automatically includes all published static routes in the sitemap.
// Keep modification dates tied to real editorial updates, not every build.
const pageLastModified = new Map([
  ['/', '2026-10-28'],
  ['/research/stockton-time-machine/', '2026-10-27'],
  ['/research/isiah-thomas-time-machine/', '2026-10-28'],
  ['/series/nba-time-machine/', '2026-10-28'],
]);

export default defineConfig({
  site: 'https://anticipate-peak.vercel.app',
  integrations: [
    sitemap({
      serialize(item) {
        const pathname = new URL(item.url).pathname;
        const modified = pageLastModified.get(pathname);
        if (modified) {
          item.lastmod = modified;
        }
        return item;
      },
    }),
  ],
});

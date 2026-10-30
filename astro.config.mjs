// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { researchArticles } from './src/data/researchArticles.js';

// Astro discovers every published static route automatically, including the
// homepage, series landing page and all research articles. The research registry
// is the source of truth for known article publication dates.
const datedResearch = researchArticles.filter((article) =>
  article.publishedAt && article.href?.startsWith('/research/')
);
const latestResearchDate = datedResearch
  .map((article) => article.publishedAt)
  .sort()
  .at(-1);

const pageLastModified = new Map([
  ['/', latestResearchDate ?? '2026-10-28'],
  ['/series/nba-time-machine/', latestResearchDate ?? '2026-10-28'],
  ...datedResearch.map((article) => [article.href, article.publishedAt]),
]);

// Pages without a confirmed publication or editorial-update date (such as the
// original Haliburton study) remain in the sitemap without an invented lastmod.
export default defineConfig({
  site: 'https://anticipate-peak.vercel.app',
  integrations: [
    sitemap({
      serialize(item) {
        const pathname = new URL(item.url).pathname;
        const modified = pageLastModified.get(pathname);
        if (modified) item.lastmod = modified;
        return item;
      },
    }),
  ],
});

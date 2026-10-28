# Publishing on Anticipate

The homepage is publication-led: **the newest published research article is automatically the main feature**, and previous articles move to the "More investigations" feed. **NBA Time Machine** has its own permanent featured-series spotlight.

## Publishing a new research article

1. Add its published Astro page at `src/pages/research/<slug>.astro`.
2. Add a matching entry to `src/data/researchArticles.js`, including:
   - `href` (the public `/research/<slug>/` URL)
   - `publishedAt` as `YYYY-MM-DD`
   - `title`, `headlineLead`, `headlineAccent`, `description`, `category`
   - `episode` for series articles; otherwise `null`
3. Deploy. The homepage sorts published articles by date and automatically promotes the latest one. **Do not manually swap homepage cards.**

If two articles are published on the same date, set `publishedAt` to a more precise ISO date/time for those entries so their ordering is unambiguous; ISO-formatted timestamps sort correctly.

The date is an editorial publication timestamp, **not** a date automatically updated every time the site builds. Do not use a false publication date to force a ranking.

## Publishing an NBA Time Machine episode

In addition to the steps above, update the corresponding entry in `src/data/nbaTimeMachineSeries.js`:

- Change `status` from `"locked"` to `"published"`.
- Add the episode's real `href` and an optional `teaser`.
- Keep the episode list in its planned sequence.

The series page and homepage automatically count published versus locked entries, and locked episodes remain non-clickable. The newest article takes the homepage lead regardless of which Anticipate series it belongs to.

## Quality check

After deployment, verify the homepage, featured-series banner, episode cards, new article URL, and `/sitemap-index.xml`. The Astro sitemap includes newly published routes automatically.

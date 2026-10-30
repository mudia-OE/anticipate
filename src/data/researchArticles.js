/**
 * Published Anticipate research.
 *
 * Add one entry whenever a new article goes live. The homepage automatically
 * promotes the newest publishedAt date to its lead feature and moves older
 * investigations into the research feed. Do not manually reorder homepage HTML.
 *
 * publishedAt uses YYYY-MM-DD. Older material without a confirmed publication
 * date can use null and will sort after dated research.
 */
export const researchArticles = [
  {
    id: "charles-barkley",
    category: "NBA TIME MACHINE",
    episode: "03",
    publishedAt: "2026-10-30",
    title: "We Tried to Find the Next Charles Barkley. The Model Kept Picking Centers.",
    headlineLead: "We Tried to Find the Next Charles Barkley. ",
    headlineAccent: "The Model Kept Picking Centers.",
    description: "Barkley defied his position. Our model chose four centers in its top five, and Zion Williamson ranked 11th. Explore the full 279-player interactive comparison.",
    href: "/research/charles-barkley-time-machine/",
  },
  {
    id: "isiah-thomas",
    category: "NBA TIME MACHINE",
    episode: "02",
    publishedAt: "2026-10-28",
    title: "Isiah Thomas Looks Surprisingly Familiar.",
    headlineLead: "Isiah Thomas Looks ",
    headlineAccent: "Surprisingly Familiar.",
    description: "Can Zeke's game translate to today's NBA? Five 2025–26 matches, interactive radars, and a Trae Young wildcard.",
    href: "/research/isiah-thomas-time-machine/",
  },
  {
    id: "john-stockton",
    category: "NBA TIME MACHINE",
    episode: "01",
    publishedAt: "2026-10-27",
    title: "We Looked for the Next John Stockton",
    headlineLead: "We Looked for the Next ",
    headlineAccent: "John Stockton.",
    description: "279 players. Five closest matches. One playmaking profile nobody in 2025–26 could quite reproduce.",
    href: "/research/stockton-time-machine/",
  },
  {
    id: "haliburton-achilles",
    category: "THE MODEL ROOM",
    episode: null,
    publishedAt: null,
    title: "Tyrese Haliburton: A Career-Ending Injury? Or a Career-Defining One?",
    headlineLead: "Tyrese Haliburton: A Career-Ending Injury? Or a ",
    headlineAccent: "Career-Defining One?",
    description: "Historical Achilles recoveries and an interpretable regression model explore Haliburton's return.",
    href: "/research/haliburton-achilles/",
  },
];

export const publishedResearch = researchArticles
  .filter((article) => typeof article.href === "string" && article.href.startsWith("/research/"))
  .sort((a, b) => {
    const dateDiff = (b.publishedAt ?? "").localeCompare(a.publishedAt ?? "");
    return dateDiff || a.id.localeCompare(b.id);
  });

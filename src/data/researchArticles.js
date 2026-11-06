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
    id: "hakeem-olajuwon",
    category: "NBA TIME MACHINE",
    episode: "06",
    publishedAt: "2026-11-06",
    title: "We Tried to Find the Next Hakeem Olajuwon",
    headlineLead: "We Tried to Find the Next ",
    headlineAccent: "Hakeem Olajuwon.",
    description: "Victor Wembanyama narrowly tops Jaren Jackson Jr. in our Hakeem investigation, while Alperen Şengün makes the offensive-style case. Explore five matches and an interactive radar.",
    href: "/research/hakeem-olajuwon-time-machine/",
  },
  {
    id: "moses-malone",
    category: "NBA TIME MACHINE",
    episode: "05",
    publishedAt: "2026-11-04",
    updatedAt: "2026-11-05",
    title: "We Tried to Find the Next Moses Malone",
    headlineLead: "We Tried to Find the Next ",
    headlineAccent: "Moses Malone.",
    description: "Karl-Anthony Towns leads the model; Jalen Duren offers a compelling interior comparison. Explore five modern matches and an interactive statistical radar.",
    href: "/research/moses-malone-time-machine/",
  },
  {
    id: "larry-bird",
    category: "NBA TIME MACHINE",
    episode: "04",
    publishedAt: "2026-11-01",
    title: "We Tried to Find the Next Larry Bird",
    headlineLead: "We Tried to Find the ",
    headlineAccent: "Next Larry Bird.",
    description: "279 modern players. Michael Porter Jr. wins the numbers, Jalen Johnson makes the stylistic case. Explore Bird's history, interactive comparisons and model sensitivity.",
    href: "/research/larry-bird-time-machine/",
  },
  {
    id: "charles-barkley",
    category: "NBA TIME MACHINE",
    episode: "03",
    publishedAt: "2026-10-30",
    title: "We Tried to Find the Next Charles Barkley. The Model Kept Picking Centers.",
    headlineLead: "We Tried to Find the Next Charles Barkley. ",
    headlineAccent: "The Model Kept Picking Centers.",
    description: "Four of Barkley's five closest modern matches were centers. Explore his extraordinary rebounding through interactive statistical and physical radars.",
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

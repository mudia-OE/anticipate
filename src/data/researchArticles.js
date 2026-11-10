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
    id: "shaquille-oneal",
    category: "NBA TIME MACHINE",
    episode: "08",
    publishedAt: "2026-11-10",
    title: "We Tried to Find the Next Shaquille O'Neal. The NBA May Not Have One.",
    headlineLead: "We Tried to Find the Next Shaquille O'Neal. ",
    headlineAccent: "The NBA May Not Have One.",
    description: "Shaq's 1999–00 MVP season met 279 modern NBA players. Joel Embiid led the matches, but no one reproduced his 325-pound profile.",
    href: "/research/shaquille-oneal-time-machine/",
  },
  {
    id: "magic-johnson",
    category: "NBA TIME MACHINE",
    episode: "07",
    publishedAt: "2026-11-08",
    updatedAt: "2026-11-10",
    title: "We Tried to Find the Next Magic Johnson",
    headlineLead: "We Tried to Find the Next ",
    headlineAccent: "Magic Johnson.",
    description: "6-foot-9. Twelve assists a night. We compared Magic Johnson's 1986–87 MVP season to 279 modern NBA players to find five surprising matches.",
    href: "/research/magic-johnson-time-machine/",
  },
  {
    id: "hakeem-olajuwon",
    category: "NBA TIME MACHINE",
    episode: "06",
    publishedAt: "2026-11-06",
    title: "We Tried to Find the Next Hakeem Olajuwon",
    headlineLead: "We Tried to Find the Next ",
    headlineAccent: "Hakeem Olajuwon.",
    description: "We compared Hakeem Olajuwon’s legendary 1992–93 season to 279 modern players. Five compelling matches, one difficult question: who comes closest to the Dream?",
    href: "/research/hakeem-olajuwon-time-machine/",
  },
  {
    id: "moses-malone",
    category: "NBA TIME MACHINE",
    episode: "05",
    publishedAt: "2026-11-04",
    updatedAt: "2026-11-06",
    title: "We Tried to Find the Next Moses Malone",
    headlineLead: "We Tried to Find the Next ",
    headlineAccent: "Moses Malone.",
    description: "Moses Malone turned missed shots into points. We compared his MVP season against 279 modern players to find five unexpected statistical matches.",
    href: "/research/moses-malone-time-machine/",
  },
  {
    id: "larry-bird",
    category: "NBA TIME MACHINE",
    episode: "04",
    publishedAt: "2026-11-01",
    updatedAt: "2026-11-06",
    title: "We Tried to Find the Next Larry Bird",
    headlineLead: "We Tried to Find the ",
    headlineAccent: "Next Larry Bird.",
    description: "Can anyone reproduce Larry Bird’s scoring, rebounding and playmaking? We compared his iconic MVP season to 279 modern players and uncovered a surprising debate.",
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

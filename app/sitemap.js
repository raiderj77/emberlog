import { SITE } from "@/lib/site";
import { TOOLS } from "@/lib/tools";
import { ARTICLES } from "@/lib/articles";

export default function sitemap() {
  const base = SITE.url;
  const now = new Date();
  const staticRoutes = [
    { path: "/", priority: 1.0, freq: "weekly" },
    { path: "/log/", priority: 0.9, freq: "monthly" },
    { path: "/tools/", priority: 0.8, freq: "monthly" },
    { path: "/guides/", priority: 0.8, freq: "weekly" },
    { path: "/about/", priority: 0.4, freq: "yearly" },
    { path: "/contact/", priority: 0.3, freq: "yearly" },
    { path: "/privacy/", priority: 0.2, freq: "yearly" },
    { path: "/terms/", priority: 0.2, freq: "yearly" },
    { path: "/disclaimer/", priority: 0.2, freq: "yearly" },
  ];
  const toolRoutes = TOOLS.map((t) => ({ path: `/tools/${t.slug}/`, priority: 0.7, freq: "monthly" }));
  const guideRoutes = ARTICLES.map((a) => ({ path: `/guides/${a.slug}/`, priority: 0.7, freq: "monthly", lastModified: new Date(a.updated) }));

  return [...staticRoutes, ...toolRoutes, ...guideRoutes].map((r) => ({
    url: `${base}${r.path}`,
    lastModified: r.lastModified || now,
    changeFrequency: r.freq,
    priority: r.priority,
  }));
}

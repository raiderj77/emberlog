import { SITE } from "@/lib/site";
import { TOOLS } from "@/lib/tools";
import { SMOKE_PRESETS } from "@/lib/smokePresets";
import { getAllGuides } from "@/lib/guides";

export const dynamic = "force-static";

const reviewed = new Date(`${SITE.contentReviewed}T00:00:00.000Z`);

export default function sitemap() {
  const staticRoutes = [
    { path: "/", priority: 1.0, freq: "weekly" },
    { path: "/log/", priority: 0.9, freq: "monthly" },
    { path: "/tools/", priority: 0.8, freq: "monthly" },
    { path: "/guides/", priority: 0.8, freq: "weekly" },
    { path: "/about/", priority: 0.4, freq: "yearly" },
    { path: "/editorial-standards/", priority: 0.4, freq: "yearly" },
    { path: "/contact/", priority: 0.3, freq: "yearly" },
    { path: "/privacy/", priority: 0.2, freq: "yearly" },
    { path: "/terms/", priority: 0.2, freq: "yearly" },
    { path: "/disclaimer/", priority: 0.2, freq: "yearly" },
  ];
  const toolRoutes = TOOLS.map((tool) => ({ path: `/tools/${tool.slug}/`, priority: 0.7, freq: "monthly" }));
  const presetRoutes = SMOKE_PRESETS.map((preset) => ({ path: `/tools/smoke-time/${preset.slug}/`, priority: 0.6, freq: "monthly" }));
  const guideRoutes = getAllGuides().map((guide) => ({
    path: `/guides/${guide.slug}/`,
    priority: 0.7,
    freq: "monthly",
    lastModified: guide.updated ? new Date(`${guide.updated}T00:00:00.000Z`) : reviewed,
  }));

  return [...staticRoutes, ...toolRoutes, ...presetRoutes, ...guideRoutes].map((route) => ({
    url: `${SITE.url}${route.path}`,
    lastModified: route.lastModified || reviewed,
    changeFrequency: route.freq,
    priority: route.priority,
  }));
}

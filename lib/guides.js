import { ARTICLES } from "./articles.js";
import { uniqueBySlug } from "./collections.js";
import { getAllPosts } from "./posts.js";

const RETIRED_GUIDE_SLUGS = new Set(["brisket-cook-time"]);

export function getAllGuides() {
  return uniqueBySlug(ARTICLES, getAllPosts()).filter(
    (guide) => !RETIRED_GUIDE_SLUGS.has(guide.slug),
  );
}

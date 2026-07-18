export function uniqueBySlug(...collections) {
  const seen = new Set();

  return collections.flat().filter((article) => {
    if (!article?.slug || seen.has(article.slug)) return false;
    seen.add(article.slug);
    return true;
  });
}

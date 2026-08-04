export function isCurrentPath(pathname, href) {
  if (href === "/") return pathname === "/";

  const basePath = href.endsWith("/") ? href.slice(0, -1) : href;
  return pathname === basePath || pathname === href || pathname.startsWith(`${basePath}/`);
}

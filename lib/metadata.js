import { compactDescription, compactTitle } from "./seo.js";
import { SITE } from "./site.js";

export function pageMetadata({ title, description, canonical, keywords, robots }) {
  const conciseDescription = compactDescription(description);
  const socialTitle = compactTitle(`${title} | ${SITE.name}`, 65);
  return {
    title,
    description: conciseDescription,
    alternates: { canonical },
    ...(keywords && { keywords }),
    ...(robots && { robots }),
    openGraph: {
      type: "website",
      siteName: SITE.name,
      title: socialTitle,
      description: conciseDescription,
      url: canonical,
      images: ["/og.png"],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description: conciseDescription,
      images: ["/og.png"],
    },
  };
}

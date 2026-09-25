import type { MetadataRoute } from "next";

const base = "https://skandapictures.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/production", "/founder", "/contact"];
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
  }));
}

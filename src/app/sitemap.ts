import type { MetadataRoute } from "next";

const base = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${base}/`, lastModified: now, priority: 1 },
    { url: `${base}/about`, lastModified: now, priority: 0.9 },
    { url: `${base}/journey`, lastModified: now, priority: 0.9 },
    { url: `${base}/portfolio`, lastModified: now, priority: 0.7 },
    { url: `${base}/contact`, lastModified: now, priority: 0.8 },
  ];
}

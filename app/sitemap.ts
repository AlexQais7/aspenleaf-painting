import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.aspenleafpainting.com";
  const lastModified = new Date();

  return [
    { url: base, lastModified, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/about`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/interior-painting`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services/exterior-painting`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services/commercial-painting`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/drywall-repair`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/deck-staining`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/texture-painting`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/portfolio`, lastModified, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/warranty`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/contact`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/booking`, lastModified, changeFrequency: "monthly", priority: 0.7 },
  ];
}

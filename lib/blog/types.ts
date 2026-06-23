// Blog content system — add new posts in posts.ts, NOT as new page.tsx files.
// This file defines the shape of a post and the reusable category hero images,
// so a new post almost never needs a brand-new photo.

export type BlogCategory =
  | "Calgary Weather"
  | "House Aging"
  | "Cost Guides"
  | "Maintenance"
  | "Seasonal Guides"
  | "DIY & Maintenance";

export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "callout"; text: string }
  | {
      type: "image";
      cloudinaryId: string;
      alt: string;
      width?: "full" | "half";
    }
  | { type: "cta"; heading: string; subtext: string };

export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  category: BlogCategory;
  date: string; // ISO format, e.g. "2026-06-22"
  heroImageId?: string; // optional override — otherwise falls back to category default
  heroAlt: string;
  blocks: ContentBlock[];
  relatedLinks?: { href: string; label: string }[];
}

// One evergreen hero image per category, reused across every post in that
// category. This is the main lever for not needing a brand-new photo for
// every single post — pick (or upload) ONE good Cloudinary image per
// category below, and every post in that category automatically uses it
// unless a post sets its own `heroImageId`.
export const CATEGORY_HERO_IMAGE: Record<BlogCategory, string> = {
  "Calgary Weather": "exteriorshade_after_cvst3f",
  "House Aging": "for_exteriori_page1_e6ggt9",
  "Cost Guides": "IMG_2538_myvrcq",
  Maintenance: "exterirorfront_after_afypl9",
  "Seasonal Guides": "for_fence_page_ad94gd",
  "DIY & Maintenance": "IMG_2538_myvrcq",
};

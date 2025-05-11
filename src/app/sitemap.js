import { SITE_BASE_URL } from "@/config/siteConfig";

const domain = SITE_BASE_URL;

// const blogPosts = [
//   { slug: "getting-started-with-nextjs", lastModified: "2024-12-01" },
//   { slug: "how-to-seo-nextjs", lastModified: "2025-01-15" },
//   { slug: "deploying-on-vercel", lastModified: "2025-04-10" },
// ];

export default function sitemap() {
  const now = new Date().toISOString();

  const staticRoutes = [
    {
      url: `${domain}`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 1.0,
    },
    {
      url: `${domain}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${domain}/projects`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${domain}/contact`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ];

  //   const blogRoutes = blogPosts.map((post) => ({
  //     url: `${domain}/blog/${post.slug}`,
  //     lastModified: new Date(post.lastModified).toISOString(),
  //     changeFrequency: "monthly",
  //     priority: 0.6,
  //   }));

  return [...staticRoutes];
}

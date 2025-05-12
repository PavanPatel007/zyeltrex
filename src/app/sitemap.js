import { SITE_BASE_URL } from "@/config/siteConfig";
import { blogsData } from "@/data/blogs";
import { ROUTE } from "@/routes/routes";

const domain = SITE_BASE_URL;

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
      url: `${domain}${ROUTE.about}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${domain}${ROUTE.contact}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${domain}${ROUTE.services.webDevelopment}`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${domain}${ROUTE.services.appDevelopment}`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${domain}${ROUTE.services.aiMlDevelopment}`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${domain}${ROUTE.blog.root}`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ];

  const blogRoutes = blogsData.map((post) => ({
    url: `${domain}${ROUTE.blog.root}/${post.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogRoutes];
}

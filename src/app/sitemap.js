import articleIndex from "@/data/article-index.json";

export default async function Sitemap() {
  const articles = articleIndex.articles.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });

  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://www.thebeardeddeveloper.co.uk";

  // Priority configuration for different route types
  const routePriorities = {
    "": 1.0, // Homepage
    "/services/bespoke": 0.8,
    "/services/shopify": 0.8,
    "/services/bigcommerce": 0.8,
    "/services/netsuite": 0.8,
    "/services/ai": 0.8,
    "/services/integrations": 0.8,
    "/projects": 0.7,
    "/contact": 0.7,
    "/resources": 0.7,
    "/resources/components": 0.7,
    "/resources/articles": 0.7,
    "/privacy": 0.3,
    "/cookies": 0.3,
  };

  const routes = [
    "",
    "/projects",
    "/services/bespoke",
    "/services/shopify",
    "/services/bigcommerce",
    "/services/netsuite",
    "/services/ai",
    "/services/integrations",
    "/contact",
    "/privacy",
    "/cookies",
    "/resources",
    "/resources/components",
    "/resources/articles",
  ];

  // Transform static routes with lastmod and priority
  const staticRoutes = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    priority: routePriorities[route] || 0.5,
  }));

  // Transform article routes with publication date and uniform priority
  const articleRoutes = articles.map((article) => ({
    url: `${baseUrl}${article.path.replace(/\\/g, "/")}`,
    lastModified: new Date(article.date).toISOString(),
    priority: 0.6,
  }));

  return [...staticRoutes, ...articleRoutes];
}

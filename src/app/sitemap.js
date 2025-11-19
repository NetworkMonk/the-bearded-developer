import articleIndex from "@/data/article-index.json";

export default async function Sitemap() {
  const articles = articleIndex.articles.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });

  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://www.thebeardeddeveloper.co.uk";
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

  const posts = articles.map((article) => article.path.replace(/\\/g, "/"));

  return [...routes, ...posts].map((url) => {
    return { url: `${baseUrl}${url}` };
  });
}

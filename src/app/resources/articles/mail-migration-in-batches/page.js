import article from "./meta.json";
import ArticleContainer from "@/components/articles/ArticleContainer";

export const metadata = {
  title: article.metadata.title,
  description: article.metadata.description,
};

export default function ArticlePage() {
  return (
    <ArticleContainer article={article}>
      <section className="md:p-10 relative">
        <p className="mt-5">
          Explore our collection of reusable React components that you can use
          in your applications. We use the tailwindcss library for styling and
          custom css where specified.
        </p>
      </section>
    </ArticleContainer>
  );
}

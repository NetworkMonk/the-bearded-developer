import { lexend } from "@/app/fonts";

import article from "./meta.json";
import ArticleContainer from "@/components/articles/ArticleContainer";

export const metadata = {
  title:
    "Components | The Bearded Developer | Shopify, Web Development, and Technology Solutions",
  description:
    "See some of our pre built components and templates for web development that you can use in your applications",
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

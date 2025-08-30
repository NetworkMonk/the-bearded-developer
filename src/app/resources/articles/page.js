import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import { lexend } from "@/app/fonts";
import ArticleList from "@/components/articles/ArticleList";
import { Suspense } from "react"; // <-- Add this import

export const metadata = {
  title:
    "Articles | The Bearded Developer | Shopify, Web Development, and Technology Solutions",
  description:
    "Explore our articles on Shopify, web development, and technology solutions.",
};

export default function ArticlesPage() {
  return (
    <div id="articles" className="my-20">
      <Section>
        <Container>
          {/* Hero Section */}
          <section className="md:p-10 relative">
            <h2
              className={`text-5xl md:text-6xl font-bold ${lexend.className}`}
            >
              Articles
            </h2>
            <p
              className={`text-lg md:text-xl font-semibold mt-5 md:mt-10 max-w-xl`}
            >
              Explore our articles on Shopify, web development, and technology
              solutions.
            </p>
          </section>

          {/* Wrap ArticleList in Suspense */}
          <Suspense fallback={<div>Loading articles...</div>}>
            <ArticleList />
          </Suspense>

          <section className="md:p-10 relative">
            <h2
              className={`text-5xl md:text-6xl font-bold ${lexend.className}`}
            >
              Ready to Start Your Project?
            </h2>
            <p
              className={`text-lg md:text-xl font-semibold mt-5 md:mt-10 max-w-xl`}
            >
              Let&apos;s build a web solution that drives your business forward.
              Contact us today.
            </p>
            <p className="mt-5">
              <a href="/contact">
                <button className="animated-button animated-button-fill animated-button-small min-w-36 text-brand-black hover:text-brand-platinum uppercase font-semibold transition-all duration-500 mx-0 md:ml-auto md:mr-0 text-center">
                  Let&apos;s talk
                </button>
              </a>
            </p>
          </section>
        </Container>
      </Section>
    </div>
  );
}

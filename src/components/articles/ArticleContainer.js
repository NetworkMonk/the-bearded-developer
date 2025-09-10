import { lexend } from "@/app/fonts";

import Container from "../common/Container";
import Section from "../common/Section";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import SecondaryCTA from "../common/SecondaryCTA";

export default function ArticleContainer({ children, article }) {
  const hasBgImage = !!article.image;
  const sectionStyle = hasBgImage
    ? {
        position: "relative",
        backgroundImage: `linear-gradient(rgba(20,20,20,0.6), rgba(20,20,20,0.1)), url(${article.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "400px",
      }
    : {};

  const textColorClass = "text-white";

  return (
    <div className="my-20">
      <Section>
        <Container>
          <section
            className={`p-10 relative rounded-lg mb-10 md:mb-0 ${textColorClass}`}
            style={sectionStyle}
          >
            <h1
              className={`text-3xl sm:text-5xl md:text-6xl font-bold ${lexend.className}`}
            >
              {article.title}
            </h1>
            <p className="text-lg md:text-xl font-semibold mt-5 md:mt-10">
              {article.description}
            </p>
          </section>

          {children}

          <section className="p-3 md:p-12 relative my-5">
            <a
              href="/resources/articles"
              className="cursor-pointer text-xl font-semibold inline-block hover:text-brand-blue transition-colors duration-500"
            >
              <FontAwesomeIcon icon={faArrowLeft} className="mr-1 w-3 h-3" />{" "}
              Read More Articles
            </a>
          </section>

          <SecondaryCTA />
        </Container>
      </Section>
    </div>
  );
}

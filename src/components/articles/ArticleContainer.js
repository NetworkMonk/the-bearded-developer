import { lexend } from "@/app/fonts";

import Container from "../common/Container";
import Section from "../common/Section";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

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

          <section className="md:p-10 relative mt-20">
            <a
              href="/resources/articles"
              className="outline outline-2 outline-white hover:outline-brand-blue bg-brand-blue text-white hover:bg-white hover:text-brand-blue px-6 py-2 rounded-full transition-colors duration-500 uppercase font-semibold cursor-pointer"
            >
              <FontAwesomeIcon icon={faArrowLeft} className="mr-3" /> Read More
              Articles
            </a>
          </section>

          <section className="p-2 md:p-10 relative mt-20">
            <div className="bg-brand-blue bg-gradient-to-br from-brand-blue to-brand-light-blue rounded-xl shadow-xl p-10 rounded-lg text-white">
              <h2
                className={`text-3xl sm:text-5xl md:text-6xl font-bold ${lexend.className}`}
              >
                Need Something Else?
              </h2>
              <p
                className={`text-lg md:text-xl font-semibold mt-5 md:mt-10 max-w-xl`}
              >
                Let&apos;s work together to create a custom solution that meets
                your needs. Contact us today.
              </p>
              <p className="mt-10">
                <a
                  href="/contact"
                  className="w-48 outline outline-2 outline-white bg-transparent text-white hover:bg-white hover:text-brand-blue px-6 py-2 rounded-full transition-colors duration-500 uppercase font-semibold mx-auto md:ml-auto md:mr-0 text-center"
                >
                  Let&apos;s talk
                </a>
              </p>
            </div>
          </section>
        </Container>
      </Section>
    </div>
  );
}

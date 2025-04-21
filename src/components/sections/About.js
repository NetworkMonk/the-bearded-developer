import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import { lexend } from "@/app/fonts";
import InView from "../animated/InView";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default async function About() {
  return (
    <div id="about" className="mb-20">
      <Section>
        <Container>
          <InView>
            <div className="md:p-10 relative z-20">
              <h2
                className={`text-5xl md:text-6xl font-bold in-up ${lexend.className}`}
              >
                Who We Are
              </h2>
              <p
                className={`text-lg md:text-xl font-semibold mt-5 md:mt-10 in-up`}
                style={{ animationDelay: ".25s" }}
              >
                Over 20 Years of Experience in IT and E-Commerce.
              </p>
              <p
                className="mt-8 mb-2 opacity-80 flex items-start font-medium in-up"
                style={{ animationDelay: ".5s" }}
              >
                <FontAwesomeIcon
                  icon={faQuoteLeft}
                  className="opacity-50 mr-3 w-6 h-6 -mt-1.5"
                />
                At The Bearded Developer, we craft high-performance web
                solutions that empower UK e-commerce businesses to thrive. Our
                founder, James, specialises in building scalable Shopify stores,
                bespoke Next.js applications, and seamless Celigo integrations.
                Certified in Shopify and Celigo, we deliver tailored solutions
                that boost conversions, streamline operations, and drive growth.
                Whether you&apos;re a retailer seeking a custom store front or a
                startup needing technical expertise, we&apos;re here to bring
                your vision to life. Explore our portfolio and let&apos;s start
                building your next project today.
              </p>

              <div
                className="flex items-start gap-10 in-up"
                style={{ animationDelay: ".75s" }}
              >
                <Image
                  src="/img/james-plant-portrait.jpg"
                  alt="James Plant"
                  width={200}
                  height={200}
                  className="rounded-full mt-10 w-20 h-20"
                />
                <div>
                  <p className="text-lg md:text-xl font-semibold mt-5 md:mt-10">
                    James Plant
                    <br />
                  </p>
                  <p className="text-sm">
                    <span className="opacity-80 font-medium">
                      Shopify & Celigo Certified
                    </span>
                    <br />
                    <span className="opacity-80 font-medium">
                      20+ Years of Experience
                    </span>
                    <br />
                    <span className="opacity-80 font-medium">
                      <a
                        href="https://www.linkedin.com/in/james-plant-7ab317b/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon
                          icon={faLinkedin}
                          className="w-6 h-6"
                        />
                      </a>
                    </span>
                  </p>
                </div>
              </div>
              <p className="mt-10 in-up" style={{ animationDelay: ".75s" }}>
                <a href="/contact">
                  <button className="animated-button animated-button-fill animated-button-small min-w-36 text-brand-black hover:text-brand-platinum uppercase font-semibold transition-all duration-500 mx-0 md:ml-auto md:mr-0 text-center">
                    Let&apos;s talk
                  </button>
                </a>
              </p>
            </div>
          </InView>
        </Container>
      </Section>
    </div>
  );
}

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
                className="mt-8 mb-2 opacity-80 flex items-start font-medium in-up text-lg"
                style={{ animationDelay: ".5s" }}
              >
                <FontAwesomeIcon
                  icon={faQuoteLeft}
                  className="opacity-50 mr-3 w-6 h-6 -mt-1.5"
                />
                Hi, I&apos;m James! I&apos;ve been building websites and solving
                tech problems for over 20 years from my base here in Braintree,
                Essex. I love helping businesses - whether you&apos;re down the
                road or across the country - create amazing online experiences
                that actually work for your customers. From Shopify stores to
                custom web apps, I&apos;m here to make your digital life easier.
                Let&apos;s chat about what you need!
              </p>

              <div
                className="flex items-start gap-10 in-up"
                style={{ animationDelay: ".75s" }}
              >
                <Image
                  src="/img/james-plant-portrait.jpg"
                  alt="James Plant"
                  width={80}
                  height={80}
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
                      20+ Years Serving UK Businesses
                    </span>
                    <br />
                    <span className="opacity-80 font-medium">
                      <a
                        href="https://www.linkedin.com/in/james-plant-7ab317b/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit our LinkedIn profile"
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
                <a
                  href="/contact"
                  className="animated-button animated-button-fill animated-button-small min-w-36 text-brand-black hover:text-brand-platinum uppercase font-semibold transition-all duration-500 mx-0 md:ml-auto md:mr-0 text-center"
                >
                  Let&apos;s talk
                </a>
              </p>
            </div>
          </InView>
        </Container>
      </Section>
    </div>
  );
}

import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import { lexend } from "@/app/fonts";
import InView from "../animated/InView";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
                Our Story
              </h2>

              {/* Two-column layout from lg */}
              <div className="mt-10 lg:grid lg:grid-cols-[1fr_320px] lg:gap-16 items-start">

                {/* Left: blockquote + portrait + CTA */}
                <div>
                  {/* Pull quote */}
                  <blockquote
                    className="in-up border-l-4 border-brand-teal pl-6 md:pl-8"
                    style={{ animationDelay: ".5s" }}
                  >
                    <span
                      className="block text-5xl leading-none text-brand-teal/25 select-none pointer-events-none font-serif mb-2"
                      aria-hidden="true"
                    >
                      &ldquo;
                    </span>
                    <p className="text-lg md:text-xl leading-relaxed text-brand-black/80 font-medium">
                      Hi, I&apos;m James! I&apos;ve been building websites and
                      solving tech problems for over 20 years from my base here
                      in Braintree, Essex. I love helping businesses - whether
                      you&apos;re down the road or across the country - create
                      amazing online experiences that actually work for your
                      customers. From Shopify stores to custom web apps,
                      I&apos;m here to make your digital life easier.
                      Let&apos;s chat about what you need!
                    </p>
                  </blockquote>

                  {/* Portrait + attribution */}
                  <div
                    className="mt-8 flex items-center gap-5 in-up"
                    style={{ animationDelay: ".75s" }}
                  >
                    <Image
                      src="/img/james-plant-portrait.jpg"
                      alt="James Plant"
                      width={64}
                      height={64}
                      className="rounded-full w-16 h-16 ring-2 ring-brand-teal/30 object-cover shrink-0"
                    />
                    <div>
                      <p
                        className={`text-base font-semibold text-brand-black ${lexend.className}`}
                      >
                        James Plant
                      </p>
                      <div className="mt-1 space-y-0.5">
                        <p
                          className={`text-xs font-semibold uppercase tracking-[0.12em] text-brand-teal ${lexend.className}`}
                        >
                          Shopify &amp; Celigo Certified
                        </p>
                        <p className="text-xs text-brand-black/50 font-medium">
                          20+ Years Serving UK Businesses
                        </p>
                      </div>
                      <a
                        href="https://www.linkedin.com/in/james-plant-7ab317b/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit our LinkedIn profile"
                        className="mt-2 inline-flex text-brand-black/40 hover:text-brand-teal transition-colors duration-200"
                      >
                        <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
                      </a>
                    </div>
                  </div>

                  {/* CTA */}
                  <p
                    className="mt-10 in-up"
                    style={{ animationDelay: "1s" }}
                  >
                    <a
                      href="/contact"
                      className="animated-button animated-button-fill animated-button-small min-w-36 text-brand-black hover:text-brand-platinum uppercase font-semibold transition-all duration-500 mx-0 text-center"
                    >
                      Let&apos;s talk
                    </a>
                  </p>
                </div>

                {/* Right: Partner badges + platform logos */}
                <div
                  className="mt-12 lg:mt-0 in-up max-w-sm mx-auto lg:max-w-none lg:mx-0"
                  style={{ animationDelay: ".6s" }}
                >
                  <div className="border border-gray-200 rounded-2xl p-8 bg-white shadow-sm">

                    <p className={`text-xs font-semibold uppercase tracking-[0.15em] text-brand-teal mb-5 text-center ${lexend.className}`}>
                      Certified Partners
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center justify-center p-3 rounded-xl bg-gray-50">
                        <img
                          src="/img/partner-logos/celigo-authorized-partner.png"
                          alt="Celigo Authorised Partner"
                          className="w-full object-contain"
                        />
                      </div>
                      <div className="flex items-center justify-center p-3 rounded-xl bg-gray-50">
                        <img
                          src="/img/partner-logos/flowgear-partner.png"
                          alt="Flow Gear Partner"
                          className="w-full object-contain"
                        />
                      </div>
                    </div>

                    <div className="my-6 border-t border-gray-100" />

                    <p className={`text-xs font-semibold uppercase tracking-[0.15em] text-brand-teal mb-5 text-center ${lexend.className}`}>
                      Platforms We Specialise In
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center justify-center p-3 rounded-xl bg-gray-50">
                        <img
                          src="/img/partner-logos/shopify.PNG"
                          alt="Shopify"
                          className="w-full object-contain"
                        />
                      </div>
                      <div className="flex items-center justify-center p-3 rounded-xl bg-gray-50">
                        <img
                          src="/img/partner-logos/bigcommerce.png"
                          alt="BigCommerce"
                          className="w-full object-contain"
                        />
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </InView>
        </Container>
      </Section>
    </div>
  );
}

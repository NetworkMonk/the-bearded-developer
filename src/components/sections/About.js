import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import { lexend } from "@/app/fonts";
import InView from "../animated/InView";

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
              <p className={`mt-5 in-up`} style={{ animationDelay: ".5s" }}>
                At The Bearded Developer, we craft high-performance web
                solutions that empower UK e-commerce businesses to thrive. With
                over 20 years of experience in IT and e-commerce, our founder,
                James, specializes in building scalable Shopify stores, bespoke
                Next.js applications, and seamless Celigo integrations.
                Certified in Shopify and Celigo, we deliver tailored solutions
                that boost conversions, streamline operations, and drive growth.
                Whether you&apos;re a retailer seeking a custom store front or a
                startup needing technical expertise, we&apos;re here to bring
                your vision to life. Explore our portfolio and let&apos;s start
                building your next project today.
              </p>
              <p className="mt-5 in-up" style={{ animationDelay: ".5s" }}>
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

import { lexend } from "@/app/fonts";

import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import ContactForm from "@/components/resources/example-components/ContactForm";
import CookieBanner from "@/components/resources/example-components/CookieBanner";
import CookiePreferences from "@/components/resources/example-components/CookiePreferences";
import HeroButton from "@/components/resources/example-components/HeroButton";
import PreviewPanel from "@/components/resources/example-components/PreviewPanel";
// import CollapsibleCode from "./CollapsibleCode";

export const metadata = {
  title:
    "Components | The Bearded Developer | Shopify, Web Development, and Technology Solutions",
  description:
    "See some of our pre built components and templates for web development that you can use in your applications",
};

export default function ProjectsPage() {
  return (
    <div className="my-20">
      <Section>
        <Container>
          <section className="md:p-10 relative">
            <h1
              className={`text-5xl md:text-6xl font-bold ${lexend.className}`}
            >
              Components
            </h1>
            <p className="text-lg md:text-xl font-semibold mt-5 md:mt-10">
              Browse our collection of pre-built components and templates for
              web development. These resources are designed to help you
              kickstart your projects with ease and efficiency.
            </p>
            <div className="my-20 flex flex-col gap-10">
              <div>
                <h2
                  className={`text-4xl md:text-5xl font-bold ${lexend.className}`}
                >
                  React Components
                </h2>
                <p className="mt-5">
                  Explore our collection of reusable React components that you
                  can use in your applications. We use the tailwindcss library
                  for styling and custom css where specified.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-10">
                <HeroButton />
                <ContactForm />
                <CookieBanner />
                <CookiePreferences />
              </div>
            </div>
          </section>
        </Container>
      </Section>
    </div>
  );
}

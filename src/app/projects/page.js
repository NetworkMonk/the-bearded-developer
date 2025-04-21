import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import { lexend } from "@/app/fonts";
import InView from "@/components/animated/InView";
import Project from "@/components/Project";

export const metadata = {
  title: "Projects | The Bearded Developer",
  description:
    "Explore our portfolio of Shopify stores, bespoke web applications, and web consultancy projects, built with Next.js and Celigo for UK e-commerce businesses.",
};

const projects = [
  {
    title: "RC Boat Engines",
    subtitle: "Shopify Store for UK and Worldwide Retailer",
    description: [
      "A new business venture selling RC boat engines and accessories. " +
        "The client needed an e-commerce store that could handle international shipping and multiple currencies. " +
        "The store also required a theme to match the brand's identity.",
      "We recommended the Shopify platform for its ease of use and scalability, along with its strong integration capabilities and reliability. ",
      "We delivered a custom Shopify store that launched successfully and we continue to work alongside RC Boat Engines.",
    ],
    images: [
      "/img/projects/rcboatengines_01.png",
      "/img/projects/rcboatengines_02.png",
      "/img/projects/rcboatengines_03.png",
      "/img/projects/rcboatengines_04.png",
      "/img/projects/rcboatengines_05.png",
    ],
    alt: "Shopify Store for UK and Worldwide Retailer",
    review:
      "James was very attentive to my project needs and asked the right questions along with bringing his tenure with Shopify and eCommerce stores " +
      "we are absolutely thrilled at what James has built for us. I have another project in the future and will be coming back to him and " +
      "I am already looking forward to it.",
    technologies: ["Shopify", "UI/UX", "Theme Design"],
  },

  {
    title: "Coder Cave",
    subtitle: "Shopify Store for UK Retailer",
    description: [
      "Tasked with creating a new Shopify store for this UK based retailer of clothing and coding accessories. " +
        "The store needed to be user-friendly, mobile-optimized, and capable of handling high traffic volumes. " +
        "The client also required seamless integration with their existing inventory management system.",
      "We developed a custom Shopify store that not only met these requirements but also provided a scalable solution for future growth. " +
        "The store was designed with a focus on user experience, ensuring that customers could easily navigate and find products. " +
        "We integrated with the supplier providers to allow automated order processing and inventory management.",
    ],
    images: [
      "/img/projects/codercave_01.png",
      "/img/projects/codercave_02.png",
      "/img/projects/codercave_03.png",
      "/img/projects/codercave_04.png",
      "/img/projects/codercave_05.png",
    ],
    alt: "Shopify Store for UK Retailer",
    review:
      "We are incredibly happy with the work that The Bearded Developer has done for us. Our store is easy to use and matches our brand perfectly.",
    technologies: ["Shopify", "Integrations", "UI/UX", "Theme Design"],
  },

  {
    title: "Shipping Estimating Service",
    subtitle: "Bespoke Web Application Service",
    description: [
      "I was asked to extend the existing functionality of existing services within the business. This started with building out a costing " +
        "estimating service for all consignment being shipped through their warehouse.",
      "Previously the business was unaware of what the estimated costs of consignment were, this was due to complexity with the stock profile " +
        "and the number of carriers and complex rate cards. ",
      "We have built and delivered new service endpoints that allow the business to estimate the costs of shipping all their consignments. " +
        "The service is fully customisable with all rate cards configurations stored in the customers ERP NetSuite.",
    ],
    images: [],
    alt: "Bespoke Web Application Service",
    review:
      "The work completed was excellent and the communication was great. We are very happy with the performance of the changes. " +
      "We are looking forward to working with The Bearded Developer again in the future.",
    technologies: ["Laravel", "NetSuite", "Integrations", "API Design"],
  },
];

export default function ProjectsPage() {
  return (
    <div id="projects" className="my-20">
      <Section>
        <Container>
          <InView>
            {/* Hero Section */}
            <section className="md:p-10 relative">
              <h2
                className={`text-5xl md:text-6xl font-bold in-up ${lexend.className}`}
              >
                Some of our Projects
              </h2>
              <p
                className={`text-lg md:text-xl font-semibold mt-5 md:mt-10 in-up max-w-xl`}
                style={{ animationDelay: ".25s" }}
              >
                Discover how The Bearded Developer delivers high-performance web
                solutions for UK businesses.
              </p>
            </section>

            {/* Case Studies */}
            <section className="flex flex-col gap-12 md:p-12 mt-16 divide-slate-200 divide-y-2">
              {projects.map((project, index) => (
                <Project key={index} project={project} />
              ))}
            </section>

            {/* CTA Section */}
            <section className="md:p-10 relative">
              <h2
                className={`text-5xl md:text-6xl font-bold in-up ${lexend.className}`}
              >
                Ready to Start Your Project?
              </h2>
              <p
                className={`text-lg md:text-xl font-semibold mt-5 md:mt-10 in-up max-w-xl`}
                style={{ animationDelay: ".25s" }}
              >
                Let&apos;s build a web solution that drives your business
                forward. Contact us today.
              </p>
              <p className="mt-5 in-up" style={{ animationDelay: ".25s" }}>
                <a href="/contact">
                  <button className="animated-button animated-button-fill animated-button-small min-w-36 text-brand-black hover:text-brand-platinum uppercase font-semibold transition-all duration-500 mx-0 md:ml-auto md:mr-0 text-center">
                    Let&apos;s talk
                  </button>
                </a>
              </p>
            </section>
          </InView>
        </Container>
      </Section>
    </div>
  );
}

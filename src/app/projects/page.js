import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import Link from "next/link";
import { lexend } from "@/app/fonts";
import InView from "@/components/animated/InView";
import MessageUs from "@/components/sections/MessageUs";
import LetsTalk from "@/components/sections/LetsTalk";

export const metadata = {
  title: "Projects | The Bearded Developer",
  description:
    "Explore our portfolio of Shopify stores, bespoke web applications, and web consultancy projects, built with Next.js and Celigo for UK e-commerce businesses.",
};

const projects = [
  {
    title: "Coder Cave - Shopify Store for UK Retailer",
    description:
      "A custom Shopify store with integrations for print-on-demand services, optimized for mobile and SEO.",
    image: "/images/shopify-project-placeholder.jpg",
    alt: "Shopify Store for UK Retailer",
    client: "Coder Cave",
    challenge:
      "Needed a scalable, user-friendly online store with seamless inventory management.",
    solution:
      "Built a custom Shopify store with Celigo integrations for real-time inventory sync, optimized for mobile and SEO.",
    technologies: "Shopify, Celigo, Next.js, Tailwind CSS",
    results:
      "Reduced cart abandonment by 15% and improved page load time by 30%.",
  },

  {
    title: "RC Boat Engines - Shopify Store for UK Retailer",
    description:
      "A custom Shopify store with integrations for print-on-demand services, optimized for mobile and SEO.",
    image: "/images/shopify-project-placeholder.jpg",
    alt: "Shopify Store for UK Retailer",
    client: "Coder Cave",
    challenge:
      "Needed a scalable, user-friendly online store with seamless inventory management.",
    solution:
      "Built a custom Shopify store with Celigo integrations for real-time inventory sync, optimized for mobile and SEO.",
    technologies: "Shopify, Celigo, Next.js, Tailwind CSS",
    results:
      "Reduced cart abandonment by 15% and improved page load time by 30%.",
  },

  {
    title: "Shipping Estimating Service - Bespoke Business Web Application",
    description:
      "A custom Shopify store with integrations for print-on-demand services, optimized for mobile and SEO.",
    image: "/images/shopify-project-placeholder.jpg",
    alt: "Shopify Store for UK Retailer",
    client: "Coder Cave",
    challenge:
      "Needed a scalable, user-friendly online store with seamless inventory management.",
    solution:
      "Built a custom Shopify store with Celigo integrations for real-time inventory sync, optimized for mobile and SEO.",
    technologies: "Shopify, Celigo, Next.js, Tailwind CSS",
    results:
      "Reduced cart abandonment by 15% and improved page load time by 30%.",
  },
];

export default function ProjectsPage() {
  return (
    <div id="projects" className="my-20">
      <Section>
        <Container>
          <InView>
            {/* Hero Section */}
            <section className="md:p-10 relative ">
              <h2
                className={`text-5xl md:text-6xl font-bold in-up ${lexend.className}`}
                style={{ animationDelay: "0.25s" }}
              >
                Some of our Projects
              </h2>
              <p
                className={`text-lg md:text-xl font-semibold mt-5 md:mt-10 in-up max-w-xl`}
                style={{ animationDelay: ".5s" }}
              >
                Discover how The Bearded Developer delivers high-performance web
                solutions for UK businesses.
              </p>
            </section>

            {/* Case Studies */}
            <section className="flex flex-col gap-12">
              {projects.map((project, index) => {
                return (
                  <div key={index} className="grid md:grid-cols-5 gap-10">
                    <div className="text-black md:col-span-3">
                      <h2
                        className={`text-2xl font-semibold mb-2 ${lexend.className}`}
                      >
                        {project.title}
                      </h2>
                      <p className="text-sm mb-2">
                        <strong>Client</strong>: {project.client}
                      </p>
                      <p className="text-sm mb-2">
                        <strong>Challenge</strong>: {project.challenge}
                      </p>
                      <p className="text-sm mb-2">
                        <strong>Solution</strong>: {project.solution}
                      </p>
                      <p className="text-sm mb-2">
                        <strong>Technologies</strong>: {project.technologies}
                      </p>
                      <p className="text-sm mb-4">
                        <strong>Results</strong>: {project.results}
                      </p>
                    </div>
                    <div className="md:col-span-2">
                      <p className="text-sm italic">images</p>
                      <img
                        src={project.image}
                        alt={project.alt}
                        className="w-full h-48 object-cover rounded-md mb-4"
                      />
                    </div>
                  </div>
                );
              })}

              {/* Project 1: Shopify Store */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <img
                  src="/images/shopify-project-placeholder.jpg"
                  alt="Shopify Store for UK Retailer"
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h2 className="text-2xl font-semibold mb-2">
                  Shopify Store for UK Retailer
                </h2>
                <p className="text-sm mb-2">
                  <strong>Client</strong>: UK-based e-commerce retailer
                </p>
                <p className="text-sm mb-2">
                  <strong>Challenge</strong>: Needed a scalable, user-friendly
                  online store with seamless inventory management.
                </p>
                <p className="text-sm mb-2">
                  <strong>Solution</strong>: Built a custom Shopify store with
                  Celigo integrations for real-time inventory sync, optimized
                  for mobile and SEO.
                </p>
                <p className="text-sm mb-2">
                  <strong>Technologies</strong>: Shopify, Celigo, Next.js,
                  Tailwind CSS
                </p>
                <p className="text-sm mb-4">
                  <strong>Results</strong>: Reduced cart abandonment by 15% and
                  improved page load time by 30%.
                </p>
                <p className="text-sm italic">
                  “James delivered a flawless store that transformed our online
                  presence.” - [Client Name, replace with real testimonial]
                </p>
              </div>

              {/* Project 2: Next.js E-commerce App */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <img
                  src="/images/nextjs-project-placeholder.jpg"
                  alt="Next.js E-commerce Application"
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h2 className="text-2xl font-semibold mb-2">
                  Next.js E-commerce Application
                </h2>
                <p className="text-sm mb-2">
                  <strong>Client</strong>: UK startup
                </p>
                <p className="text-sm mb-2">
                  <strong>Challenge</strong>: Required a fast, headless
                  e-commerce platform to compete with larger retailers.
                </p>
                <p className="text-sm mb-2">
                  <strong>Solution</strong>: Developed a headless Next.js
                  application with Shopify API integration, featuring
                  server-side rendering and dynamic product pages.
                </p>
                <p className="text-sm mb-2">
                  <strong>Technologies</strong>: Next.js, Shopify API, Node.js,
                  Vercel
                </p>
                <p className="text-sm mb-4">
                  <strong>Results</strong>: Achieved 2-second load times and
                  increased conversions by 20%.
                </p>
                <p className="text-sm italic">
                  “The Bearded Developer exceeded our expectations with a
                  lightning-fast app.” – [Client Name, replace with real
                  testimonial]
                </p>
              </div>

              {/* Project 3: Web Consultancy */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <img
                  src="/images/consultancy-project-placeholder.jpg"
                  alt="Web Consultancy for SME"
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h2 className="text-2xl font-semibold mb-2">
                  Web Consultancy for SME
                </h2>
                <p className="text-sm mb-2">
                  <strong>Client</strong>: UK small business
                </p>
                <p className="text-sm mb-2">
                  <strong>Challenge</strong>: Struggled with outdated website
                  and poor user engagement.
                </p>
                <p className="text-sm mb-2">
                  <strong>Solution</strong>: Conducted a website audit,
                  implemented performance optimizations, and provided a roadmap
                  for digital transformation using modern frameworks.
                </p>
                <p className="text-sm mb-2">
                  <strong>Technologies</strong>: Next.js, Google Analytics,
                  Hotjar
                </p>
                <p className="text-sm mb-4">
                  <strong>Results</strong>: Improved user retention by 25% and
                  reduced bounce rate by 10%.
                </p>
                <p className="text-sm italic">
                  “James’ expertise turned our website into a powerful tool.” –
                  [Client Name, replace with real testimonial]
                </p>
              </div>
            </section>

            {/* CTA Section */}
            <section className="text-center mt-12">
              <h2 className="text-2xl font-semibold mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-lg mb-6">
                Let&apos;s build a web solution that drives your business
                forward. Contact us today.
              </p>
              <Link
                as="a"
                href="/#lets-talk"
                className="inline-block bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition"
              >
                Contact Us
              </Link>
            </section>
          </InView>
          <LetsTalk />
        </Container>
      </Section>
    </div>
  );
}

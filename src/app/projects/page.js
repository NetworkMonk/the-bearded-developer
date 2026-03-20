import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import { lexend } from "@/app/fonts";
import InView from "@/components/animated/InView";
import Project from "@/components/Project";
import Link from "next/link";

export const metadata = {
  title: "Projects | The Bearded Developer",
  description:
    "A selection of client work spanning Shopify, BigCommerce, infrastructure consultancy, and bespoke web development for UK businesses.",
};

const projects = [
  {
    title: "Sealey",
    subtitle: "eCommerce Infrastructure and Platform Consultancy",
    logo: "/img/client-logos/sealey-logo.png",
    url: null,
    description: [
      "Sealey are one of the UK's leading suppliers of tools and equipment, operating across multiple eCommerce platforms including BigCommerce and Shopify. " +
        "I was brought in as a consultant to assess and stabilise an infrastructure that had been experiencing regular critical incidents — " +
        "system failures affecting core business processes, sometimes going undetected for days at a time.",
      "The first priority was consolidating infrastructure that had been managed by multiple separate external parties. " +
        "Moving everything into Sealey's own cloud accounts gave the business direct ownership of their systems, clear cost visibility, " +
        "and the freedom to make independent decisions about their technology — rather than being constrained by the choices of outside vendors.",
      "Alongside this, I built a bespoke monitoring system using a central uptime platform with custom endpoints querying the BigCommerce and " +
        "Shopify APIs directly. Rather than waiting for a customer to report a problem, the system actively checks for early warning signs — " +
        "such as unprocessed orders accumulating — and surfaces them to the IT team via their internal messaging system within minutes of detection.",
    ],
    outcome:
      "System incidents that previously went unnoticed for days — often requiring significant effort to unpick the data problems that followed — " +
      "are now flagged and resolved in minutes, before customers are affected. Infrastructure that was fragmented across multiple external parties " +
      "now sits under Sealey's direct ownership, with full visibility and control.",
    images: [],
    facts: [
      { label: "Platforms", value: "BigCommerce & Shopify" },
      { label: "Incident response", value: "Days reduced to minutes" },
      { label: "Infrastructure", value: "Moved fully in-house" },
      { label: "Engagement type", value: "Ongoing consultancy" },
    ],
    review: null,
    technologies: ["BigCommerce", "Shopify", "Infrastructure", "Monitoring", "API Design", "Consultancy"],
  },

  {
    title: "RC Boat Engines",
    subtitle: "Shopify Store for UK and Worldwide Retailer",
    logo: "/img/client-logos/rc_boat_engines.png",
    url: "https://rcboatengines.co.uk/",
    description: [
      "A new business venture selling RC boat engines and accessories, requiring an e-commerce store capable of handling international orders " +
        "and multiple currencies from launch. The store also needed a theme that matched the brand's identity.",
      "We recommended Shopify for its reliability, ease of management, and strong integration capabilities — " +
        "giving the business the tools to grow without needing developer involvement for day-to-day operations.",
      "The store launched successfully and we continue to work alongside RC Boat Engines as the business grows.",
    ],
    outcome:
      "A new business launched and trading internationally from day one, with a store the client can manage themselves. " +
      "An ongoing relationship — we continue to support and develop the store.",
    images: [
      "/img/projects/rcboatengines_01.png",
      "/img/projects/rcboatengines_02.png",
      "/img/projects/rcboatengines_03.png",
      "/img/projects/rcboatengines_04.png",
      "/img/projects/rcboatengines_05.png",
    ],
    review:
      "James was very attentive to my project needs and asked the right questions along with bringing his tenure with Shopify and eCommerce stores — " +
      "we are absolutely thrilled at what James has built for us. I have another project in the future and will be coming back to him and " +
      "I am already looking forward to it.",
    technologies: ["Shopify", "UI/UX", "Theme Design"],
  },

  {
    title: "Coder Cave",
    subtitle: "Shopify Store for UK Retailer",
    logo: "/img/client-logos/coder-cave.png",
    logoBg: "#4e5054",
    url: "https://codercave.net/",
    description: [
      "Coder Cave is a UK retailer of clothing and coding accessories. The brief was a new Shopify store that was easy to navigate, " +
        "mobile-optimised, and capable of handling the volume their marketing activity would drive.",
      "We integrated with their supplier to enable automated order processing and inventory management — " +
        "removing the manual work from fulfilment and keeping stock levels accurate without ongoing effort from the client.",
    ],
    outcome:
      "A store that matches the brand, works well on mobile, and handles supplier integration automatically. " +
      "The client manages their catalogue and marketing without needing developer support for day-to-day operations.",
    images: [
      "/img/projects/codercave_01.png",
      "/img/projects/codercave_02.png",
      "/img/projects/codercave_03.png",
      "/img/projects/codercave_04.png",
      "/img/projects/codercave_05.png",
    ],
    review:
      "We are incredibly happy with the work that The Bearded Developer has done for us. Our store is easy to use and matches our brand perfectly.",
    technologies: ["Shopify", "Integrations", "UI/UX", "Theme Design"],
  },

  {
    title: "036 Group",
    subtitle: "Bespoke Shipping Cost Estimation Service",
    logo: "/img/client-logos/036_Logo_White_RGB.png",
    logoBg: "#232142",
    url: null,
    description: [
      "036 Group operates a network of consumer brands — including White Stores, Nova, and HWC Logistics — running fulfilment through a central warehouse. " +
        "The problem: the business had no reliable way to know what any given consignment would cost to ship. " +
        "With multiple carriers, complex rate cards, and a varied stock profile, the numbers simply weren't accessible.",
      "I was asked to extend the existing infrastructure to solve this. I designed and built new service endpoints that query all active carrier rate cards " +
        "and return accurate estimated shipping costs for any consignment — at the point it matters, before despatch.",
      "All rate card configurations are stored and managed within the business's ERP system, NetSuite, keeping everything in one place " +
        "and making updates straightforward without code changes.",
    ],
    outcome:
      "The business now has real-time visibility of estimated shipping costs across all carriers and consignment profiles — " +
      "removing the guesswork from an area that was previously invisible. Rate card updates are managed directly in NetSuite by the operations team.",
    images: [],
    facts: [
      { label: "Integration", value: "Multiple carriers & rate cards" },
      { label: "Configuration", value: "Managed directly in NetSuite" },
      { label: "Delivery", value: "Real-time cost estimation" },
      { label: "Engagement type", value: "Bespoke API development" },
    ],
    review:
      "The work completed was excellent and the communication was great. We are very happy with the performance of the changes. " +
      "We are looking forward to working with The Bearded Developer again in the future.",
    technologies: ["Laravel", "NetSuite", "API Design", "Integrations"],
  },

  {
    title: "Cotton & Twigg",
    subtitle: "Shopify — Ongoing UI and SEO Support",
    logo: "/img/client-logos/cotton_and_twigg_pink_square.png",
    url: "https://cottonandtwigg.co.uk/",
    description: [
      "Cotton & Twigg sell personalised gifts for babies and young children through a Shopify store. " +
        "The work here has been ongoing rather than a single project — a series of focused UI improvements and SEO changes " +
        "designed to improve search visibility and convert more of the site's existing traffic.",
      "Small, consistent improvements compound over time. Better page structure, clearer product presentation, " +
        "and targeted keyword work have all contributed to the store moving from low visibility to generating regular orders.",
    ],
    outcome:
      "The store is now generating regular orders where it previously struggled to convert traffic. " +
      "Ongoing iterative support continues to improve search visibility and on-site experience.",
    images: [],
    facts: [
      { label: "Platform", value: "Shopify" },
      { label: "Focus", value: "SEO & UI improvements" },
      { label: "Result", value: "Now generating regular orders" },
      { label: "Engagement type", value: "Ongoing iterative support" },
    ],
    review: null,
    technologies: ["Shopify", "SEO", "UI/UX"],
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
                Client Work
              </h2>
              <p
                className="text-lg md:text-xl font-semibold mt-5 md:mt-10 in-up max-w-2xl text-gray-700"
                style={{ animationDelay: ".25s" }}
              >
                A selection of projects spanning Shopify, BigCommerce, infrastructure consultancy,
                and bespoke web development — built for UK businesses at various stages of growth.
              </p>
            </section>

            {/* Case Studies */}
            <section className="flex flex-col gap-0 md:p-12 mt-8 divide-slate-200 divide-y-2">
              {projects.map((project, index) => (
                <Project key={index} project={project} />
              ))}
            </section>

            {/* CTA Section */}
            <section className="md:p-10 relative mt-8">
              <h2
                className={`text-5xl md:text-6xl font-bold in-up ${lexend.className}`}
              >
                Ready to Start Your Project?
              </h2>
              <p
                className="text-lg md:text-xl font-semibold mt-5 md:mt-10 in-up max-w-xl text-gray-700"
                style={{ animationDelay: ".25s" }}
              >
                Let&apos;s build something that works for your business.
              </p>
              <p className="mt-6 in-up" style={{ animationDelay: ".25s" }}>
                <Link
                  href="/contact"
                  className="bg-brand-teal text-white px-6 py-3 rounded-full font-semibold hover:bg-brand-blue transition-colors inline-block"
                >
                  Get in touch
                </Link>
              </p>
            </section>
          </InView>
        </Container>
      </Section>
    </div>
  );
}

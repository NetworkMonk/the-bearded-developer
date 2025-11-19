import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import { lexend } from "@/app/fonts";
import InView from "../animated/InView";
import Card from "../common/Card";
import { faShopify } from "@fortawesome/free-brands-svg-icons";
import {
  faBrain,
  faCartShopping,
  faCode,
  faDatabase,
  faDownLeftAndUpRightToCenter,
} from "@fortawesome/free-solid-svg-icons";

const services = [
  {
    title: "Shopify",
    image: "/img/waves/blue-layered-wave.svg",
    content: [
      "As a Shopify Certified Partner, we specialize in building high-converting stores, custom themes, and powerful app integrations. From store setup to advanced customizations, we know Shopify inside and out.",
    ],
    logo: faShopify,
    colorClass: "bg-[#EE6123]/30",
    link: "/services/shopify",
  },
  {
    title: "AI",
    image: "/img/waves/blue-layered-wave.svg",
    content: [
      "From custom AI integrations to intelligent automation workflows, we help businesses leverage cutting-edge technology to improve efficiency and reduce manual tasks.",
    ],
    logo: faBrain,
    colorClass: "bg-[#343837]/30",
    link: "/services/ai",
  },
  {
    title: "BigCommerce",
    image: "/img/waves/blue-layered-wave.svg",
    content: [
      "BigCommerce offers powerful built-in features perfect for growing businesses. We help you leverage its advanced capabilities including multi-channel selling, API-first architecture, and enterprise scalability.",
    ],
    logo: faCartShopping,
    colorClass: "bg-[#43d6bd]/30",
    link: "/services/bigcommerce",
  },
  {
    title: "Integrations",
    image: "/img/waves/gray-layered-wave.svg",
    content: [
      "If you have a need to get two systems talking to each other, we can help. We have experience in integrating systems to save time and reduce errors.",
    ],
    logo: faDownLeftAndUpRightToCenter,
    colorClass: "bg-[#2c6ccd]/30",
    link: "/services/integrations",
  },
  {
    title: "NetSuite",
    image: "/img/waves/gray-layered-wave.svg",
    content: [
      "NetSuite is a powerful tool, but sometimes it needs a little help to do exactly what you need. We can help with customisation of forms, workflows, and scripts to make NetSuite work exactly how you want it to.",
    ],
    logo: faDatabase,
    colorClass: "bg-[#F15A24]/30",
    link: "/services/netsuite",
  },
  {
    title: "Bespoke Solutions",
    image: "/img/waves/gray-layered-wave.svg",
    content: [
      "Start with a blank canvas and build exactly what you need. We will work with you to understand your requirements and build a web application that is exactly what you need.",
    ],
    logo: faCode,
    colorClass: "bg-[#343837]/30",
    link: "/services/bespoke",
  },
];

export default async function Services() {
  return (
    <div id="services" className="my-20">
      <Section>
        <Container>
          <InView>
            <div className="md:p-10 relative z-20">
              <h2
                className={`text-5xl md:text-6xl font-bold in-up ${lexend.className}`}
                style={{ animationDelay: "0.25s" }}
              >
                What We Do
              </h2>
              <p
                className={`text-lg md:text-xl font-semibold mt-5 md:mt-10 in-up max-w-xl`}
                style={{ animationDelay: ".5s" }}
              >
                So, what can we do for you? Here are some of the things we can
                help you with.
              </p>

              <div
                className="in-up grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-10"
                style={{ animationDelay: ".75s" }}
              >
                {services.map((service, index) => (
                  <Card
                    key={index}
                    image={service.image}
                    title={service.title}
                    logo={service.logo}
                    link={service.link}
                    colorClass={service.colorClass}
                  >
                    {service.content.map((text, i) => (
                      <p key={i} className="mb-3">
                        {text}
                      </p>
                    ))}
                  </Card>
                ))}
              </div>
            </div>
          </InView>
        </Container>
      </Section>
    </div>
  );
}

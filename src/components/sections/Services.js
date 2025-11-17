import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import { lexend } from "@/app/fonts";
import InView from "../animated/InView";
import Image from "next/image";
import blob2 from "@/components/blobs/blob2.svg";
import Shopify from "./services/Shopify";
import BigCommerce from "./services/BigCommerce";
import Bespoke from "./services/Bespoke";
import AI from "./services/AI";
import Integrations from "./services/Integrations";
import NetSuite from "./services/NetSuite";

const services = [
  {
    title: "Ecommerce",
    subtitle: "Helping you to manage your online stores",
    content: [
      "We are certified partners with Shopify and can work on many other platforms. If you have an existing online store or are looking to start selling online then we can help you with your e-commerce needs.",
      "We can work with your internal and external teams to deliver the best solution for your business.",
    ],
    background: "from-brand-blue to-brand-light-blue text-white",
  },
  {
    title: "Bespoke Web Applications",
    subtitle: "An application that is exactly what you need, no more, no less",
    content: [
      "Start with a blank canvas and build exactly what you need. We will work with you to understand your requirements and build a web application that is exactly what you need.",
      "If you have a specific requirement that can't be met with an off the shelf solution then a bespoke web application is the way to go. We're happy to discuss specific needs with you and make the best recommendation we can.",
    ],
    background: "from-indigo-700 to-indigo-500 text-white",
  },
  {
    title: "Integrations",
    subtitle: "We love getting technology talking",
    content: [
      "If you have a need to get two systems talking to each other, we can help. We have experience in integrating systems to save time and reduce errors.",
      "We can help create or improve integrations in any number of iPaaS tools such as Celigo. Or we can create custom integrations using APIs and webhooks. Whatever you need to get one system talking to another, we can help.",
    ],
    background: "from-emerald-700 to-emerald-500 text-white",
  },
  {
    title: "NetSuite",
    subtitle: "Customisations and integrations for your ERP",
    content: [
      "NetSuite is a powerful tool, but sometimes it needs a little help to do exactly what you need. We can help with customisation of forms, workflows, and scripts to make NetSuite work exactly how you want it to.",
      "We can audit and improve your NetSuite setup to make sure you are getting the most out of your investment. We can also help with integrations to other systems to make sure you have a seamless experience.",
    ],
    background: "from-blue-700 to-blue-500 text-white",
  },
  {
    title: "APIs",
    subtitle: "Create custom endpoints for your systems and partners",
    content: [
      "Custom APIs can be a powerful tool for your business. We can help create custom endpoints for your systems to talk to each other. This can be useful for integrating systems that don't have a native integration, or for creating a custom interface for your customers to interact with your systems.",
      "We can help create APIs using REST, SOAP, or GraphQL, and can help with the security and documentation of your APIs to make sure they are secure and easy to use.",
    ],
    background: "from-orange-700 to-orange-500 text-white",
  },
  {
    title: "Agency Management",
    subtitle: "Helping you manage your external teams",
    content: [
      "If you have a team of developers working on your project, we can help you manage them. We can help with project management, code reviews, and mentoring to make sure your project is on track and on budget.",
      "We can help with setting up CI/CD pipelines to make sure your code is tested and deployed automatically, and we can help with code quality tools to make sure your code is maintainable and scalable.",
    ],
    background: "from-rose-700 to-rose-500 text-white",
  },
];

export default async function Services() {
  return (
    <div id="services" className="my-20">
      <Section>
        <div className="max-w-7xl mx-auto relative">
          <div className="absolute top-64 md:left-48 max-w-full w-[500px] h-[500px] xl:w-[600px] xl:h-[600px] z-10 overflow-y-visible pointer-events-none">
            <Image
              priority
              src={blob2}
              alt="A Blob"
              className="absolute h-[500px] w-[500px] xl:h-[600px] xl:w-[600px] transform rotate-270 opacity-15 pointer-events-none"
            />
          </div>
        </div>
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
              <div className="in-up" style={{ animationDelay: ".75s" }}>
                <Shopify />
                <BigCommerce />
                <Bespoke />
                <AI />
                <Integrations />
                <NetSuite />
              </div>
            </div>
          </InView>
        </Container>
        <div className="max-w-7xl mx-auto relative">
          <div className="absolute bottom-32 max-w-full w-[500px] h-[500px] xl:w-[600px] xl:h-[600px] z-10 overflow-y-visible pointer-events-none">
            <Image
              priority
              src={blob2}
              alt="A Blob"
              className="absolute -ml-32 h-[500px] w-[500px] xl:h-[600px] xl:w-[600px] transform rotate-90 opacity-15 pointer-events-none"
            />
          </div>
        </div>
      </Section>
    </div>
  );
}

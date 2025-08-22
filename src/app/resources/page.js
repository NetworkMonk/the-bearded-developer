import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import { lexend } from "../fonts";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title:
    "Resources | The Bearded Developer | Shopify, Web Development, and Technology Solutions",
  description:
    "Explore our resources for web development and technology insights. Your friendly partner for Shopify solutions and tech guidance.",
};

const links = [
  {
    title: "Components",
    href: "/resources/components",
    description:
      "Browse our collection of pre-built components and templates for web development. These resources are designed to help you kickstart your projects with ease and efficiency.",
    img: "https://placehold.co/600x400/png",
    buttonTitle: "Explore Components",
  },
  {
    title: "Articles",
    href: "/resources/articles",
    description:
      "Browse our collection of insightful articles covering various topics in web development and technology.",
    img: "https://placehold.co/600x400/png",
    buttonTitle: "Explore Articles",
  },
  {
    title: "Templates",
    href: false,
    description:
      "View some of our full site and single page templates, get a head start on your project.",
    img: "https://placehold.co/600x400/png",
    buttonTitle: "Coming Soon",
  },
];

export default function ProjectsPage() {
  return (
    <div className="my-20">
      <Section>
        <Container>
          <section className="md:p-10 relative">
            <h1
              className={`text-5xl md:text-6xl font-bold ${lexend.className}`}
            >
              Resources
            </h1>
            <p className="text-lg md:text-xl font-semibold mt-5 md:mt-10 max-w-xl">
              You can find a variety of resources here to help you with your
              projects.
            </p>

            <div className="my-20 flex flex-col gap-40">
              {links.map((link, index) => (
                <div key={index} className="flex flex-col gap-10">
                  <h2
                    className={`text-4xl md:text-5xl font-bold ${lexend.className}`}
                  >
                    {link.title}
                  </h2>
                  <p>{link.description}</p>
                  <Image
                    src={link.img}
                    alt={link.title}
                    width={600}
                    height={400}
                  />
                  <div>
                    {link.href ? (
                      <Link
                        href={link.href}
                        as={<button />}
                        className="outline outline-2 outline-white hover:outline-brand-blue bg-brand-blue text-white hover:bg-white hover:text-brand-blue px-6 py-2 rounded-full transition-colors duration-500 uppercase font-semibold"
                      >
                        {link.buttonTitle}
                      </Link>
                    ) : (
                      <button className="outline outline-2 outline-white bg-brand-blue text-white px-6 py-2 rounded-full uppercase font-semibold opacity-50">
                        {link.buttonTitle}
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
          <section className="md:p-10 relative">
            <h2
              className={`text-5xl md:text-6xl font-bold ${lexend.className}`}
            >
              Need Something Custom?
            </h2>
            <p
              className={`text-lg md:text-xl font-semibold mt-5 md:mt-10 max-w-xl`}
            >
              Let&apos;s work together to create a custom solution that meets
              your needs. Contact us today.
            </p>
            <p className="mt-5">
              <a href="/contact">
                <button className="animated-button animated-button-fill animated-button-small min-w-36 text-brand-black hover:text-brand-platinum uppercase font-semibold transition-all duration-500 text-center">
                  Let&apos;s talk
                </button>
              </a>
            </p>
          </section>{" "}
        </Container>
      </Section>
    </div>
  );
}

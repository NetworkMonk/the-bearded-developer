import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import { lexend } from "@/app/fonts";
import InView from "../animated/InView";
import Image from "next/image";

export default async function Technologies() {
  const technologies = [
    {
      name: "Microsoft Entra",
      displayOrder: 0,
      logo: "/img/tech-logos/microsoft_entra_logo.svg",
    },
    { name: "React", displayOrder: 1, logo: "/img/tech-logos/react-2.svg" },
    { name: "Next.js", displayOrder: 2, logo: "/img/tech-logos/next.svg" },
    {
      name: "Tailwind CSS",
      displayOrder: 3,
      logo: "/img/tech-logos/tailwindcss.svg",
    },
    {
      name: "NetSuite",
      displayOrder: 4,
      logo: "/img/tech-logos/netsuite-1.svg",
    },
    { name: "Node.js", displayOrder: 5, logo: "/img/tech-logos/nodejs-3.svg" },
    { name: "PHP", displayOrder: 6, logo: "/img/tech-logos/php-logo.svg" },
    { name: "Laravel", displayOrder: 7, logo: "/img/tech-logos/laravel-2.svg" },
    {
      name: "MySQL",
      displayOrder: 8,
      logo: "/img/tech-logos/mysql-logo-pure.svg",
    },
    {
      name: "WordPress",
      displayOrder: 9,
      logo: "/img/tech-logos/wordpress-icon-1.svg",
    },
    { name: "Shopify", displayOrder: 10, logo: "/img/tech-logos/shopify.svg" },
    {
      name: "BigCommerce",
      displayOrder: 11,
      logo: "/img/tech-logos/bigcommerce-logomark-whitebg.png",
    },
    { name: "Go", displayOrder: 12, logo: "/img/tech-logos/go-6.svg" },
    { name: "Celigo", displayOrder: 13, logo: "/img/tech-logos/celigo.png" },
    {
      name: "Squarespace",
      displayOrder: 14,
      logo: "/img/tech-logos/squarespace-logo.png",
    },
  ];

  return (
    <div id="technology" className="my-20">
      <Section>
        <Container>
          <InView>
            <div className="md:p-10 relative z-20">
              <h2
                className={`text-5xl md:text-6xl font-bold in-up ${lexend.className}`}
                style={{ animationDelay: "0.25s" }}
              >
                We Love Technology
              </h2>
              <p
                className="text-lg md:text-xl font-semibold mt-5 md:mt-10 in-up max-w-xl"
                style={{ animationDelay: ".5s" }}
              >
                We&apos;ve completed projects using many of the latest
                technologies.
              </p>
              <p
                className="mt-5 in-up max-w-xl"
                style={{ animationDelay: ".75s" }}
              >
                We are always looking to expand our knowledge and experience
                with new technologies. We work with lot&apos;s of other
                technologies outside of this list as well. If you have any
                specific requirements let&apos;s have a chat.
              </p>

              <div className="mt-10">
                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {technologies
                    .sort((a, b) => a.displayOrder - b.displayOrder)
                    .map((skill, index) => (
                      <div
                        key={index}
                        className="in-up group"
                        style={{ animationDelay: `${index / 9 + 1}s` }}
                      >
                        <div className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col items-center gap-3 cursor-default hover:border-brand-teal/40 hover:shadow-sm transition-all duration-300">
                          <Image
                            src={skill.logo}
                            alt={skill.name}
                            title={skill.name}
                            className="w-12 h-12 object-contain filter grayscale group-hover:grayscale-0 opacity-50 group-hover:opacity-100 transition-all duration-300"
                            width={48}
                            height={48}
                          />
                          <span
                            className={`text-xs font-medium text-center text-brand-black/50 group-hover:text-brand-teal transition-colors duration-300 leading-tight ${lexend.className}`}
                          >
                            {skill.name}
                          </span>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </InView>
        </Container>
      </Section>
    </div>
  );
}

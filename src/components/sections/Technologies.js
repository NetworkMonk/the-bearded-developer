import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import { lexend } from "@/app/fonts";
import InView from "../animated/InView";
import Image from "next/image";
import blob2 from "@/components/blobs/blob2.svg";

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
    { name: "Go", displayOrder: 11, logo: "/img/tech-logos/go-6.svg" },
    { name: "Celigo", displayOrder: 12, logo: "/img/tech-logos/celigo.png" },
    {
      name: "Squarespace",
      displayOrder: 13,
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
                className={`text-lg md:text-xl font-semibold mt-5 md:mt-10 in-up max-w-xl`}
                style={{ animationDelay: ".5s" }}
              >
                We&apos;ve completed projects using many of the latest
                technologies.
              </p>
              <p
                className={`mt-5 in-up max-w-xl`}
                style={{ animationDelay: ".75s" }}
              >
                We are always looking to expand our knowledge and experience
                with new technologies. We work with lot&apos;s of other
                technologies outside of this list as well. If you have any
                specific requirements let&apos;s have a chat.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-10">
                {technologies
                  .sort((a, b) => a.displayOrder - b.displayOrder)
                  .map((skill, index) => {
                    return (
                      <div
                        key={index}
                        className="p-3 cursor-default transition-colors duration-300 in-up"
                        style={{ animationDelay: `${index / 9 + 1}s` }}
                      >
                        <Image
                          src={skill.logo}
                          alt={skill.name}
                          title={skill.name}
                          className="w-24 h-24 mx-auto mb-2 filter grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
                          width={96}
                          height={96}
                        />
                      </div>
                    );
                  })}
              </div>
            </div>
          </InView>
        </Container>
        <div className="max-w-7xl mx-auto">
          <div className="absolute bottom-32 max-w-full w-[300px] h-[300px] xl:w-[600px] xl:h-[600px] z-10 overflow-y-visible pointer-events-none">
            <Image
              priority
              src={blob2}
              alt="A Blob"
              className="absolute mt-10 -ml-32 h-[300px] w-[300px] xl:h-[600px] xl:w-[600px] transform rotate-45 opacity-15 pointer-events-none"
            />
          </div>
        </div>
      </Section>
    </div>
  );
}

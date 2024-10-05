import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import { lexend } from "@/app/fonts";
import InView from "../animated/InView";
import Image from "next/image";
import blob1 from "@/components/blobs/blob1.svg";

export default async function Achievements() {
  const clients = [
    {
      name: "036",
      logo: "/img/client-logos/036_Logo_White_RGB.png",
      background: "#232142",
    },
    {
      name: "White Stores",
      logo: "/img/client-logos/Whitestores-Living-Logo-Green.png",
    },
    {
      name: "Nova Outdoor Living",
      logo: "/img/client-logos/Nova_Logo_Horizontal_B&W_RGB-Green.png",
    },
    {
      name: "HWC Logistics",
      logo: "/img/client-logos/HWC-Logistics-Logo-Colour-Pantone.png",
    },
    {
      name: "Coder Cave",
      logo: "/img/client-logos/coder-cave.png",
      background: "#4e5054"
    },

  ];

  return (
    <div id="clients" className="my-20">
      <Section>
        <Container>
          <InView>
            <div className="md:p-10 relative z-20">
              <h2
                className={`text-5xl md:text-6xl font-bold in-up ${lexend.className}`}
                style={{ animationDelay: "0.25s" }}
              >
                Who We&apos;ve Worked With
              </h2>
              <p
                className={`text-lg md:text-xl font-semibold mt-5 md:mt-10 in-up max-w-xl`}
                style={{ animationDelay: ".5s" }}
              >
                A selection of some of our clients who we are proud to have
                worked with.
              </p>
              <p
                className={`mt-5 in-up max-w-xl`}
                style={{ animationDelay: ".75s" }}
              >
                Want to get on this list? Get in touch with us today to discuss your project.
              </p>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-14 mt-10">
                {clients.map((client, cIndex) => {
                  const background = client.background || "transparent";
                  return (
                    <div
                      key={cIndex}
                      className="in-up"
                      style={{ animationDelay: `${cIndex / 4 + 1}s` }}
                    >
                      <div
                        className="h-32 p-10 opacity-60 hover:opacity-100 transition-all duration-300"
                        style={{ backgroundColor: background }}
                      >
                        <Image
                          src={client.logo}
                          alt={client.name}
                          title={client.name}
                          className="mx-auto mb-2 filter max-w-64"
                          layout="fill"
                          objectFit="contain"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </InView>
        </Container>
        <div className="max-w-7xl mx-auto relative">
          <div className="absolute right-0 bottom-32 max-w-full w-[500px] h-[500px] xl:w-[600px] xl:h-[600px] z-10 overflow-y-visible pointer-events-none">
            <Image
              priority
              src={blob1}
              alt="A Blob"
              className="absolute h-[500px] w-[500px] xl:h-[600px] xl:w-[600px] transform rotate-270 opacity-15 pointer-events-none"
            />
          </div>
        </div>
      </Section>
    </div>
  );
}

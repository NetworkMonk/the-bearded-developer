import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import { lexend } from "@/app/fonts";
import InView from "../animated/InView";
import Image from "next/image";

export default async function Achievements() {
  const clients = [
    {
      name: "036 Group Company",
      logo: "/img/client-logos/036_Logo_White_RGB.png",
      background: "#232142",
    },
    {
      name: "RC Boat Engines Ltd.",
      logo: "/img/client-logos/rc_boat_engines.png",
    },
    {
      name: "Sealey Group",
      logo: "/img/client-logos/sealey-logo.png",
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
      name: "Coder Cave",
      logo: "/img/client-logos/coder-cave.png",
      background: "#4e5054",
    },
    {
      name: "HWC Logistics",
      logo: "/img/client-logos/HWC-Logistics-Logo-Colour-Pantone.png",
    },
    {
      name: "Cortex Now Ltd.",
      logo: "/img/client-logos/cortex_now_logo.png",
    },
    {
      name: "Lightwork Electrical Services Ltd",
      logo: "/img/client-logos/lightwork_electrical_logo.png",
    },
    {
      name: "Cotton and Twigg",
      logo: "/img/client-logos/cotton_and_twigg_pink_square.png",
    },
    { name: "Love Leo", logo: "/img/client-logos/love-leo.jpeg" },
    {
      name: "Fluffs and Files",
      logo: "/img/client-logos/fluffs-and-files.svg",
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
                Proudly Working With These Clients
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
                Want to get on this list? Get in touch with us today to discuss
                your project.
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14 mt-10">
                {clients.map((client, cIndex) => {
                  const background = client.background || "transparent";
                  return (
                    <div
                      key={cIndex}
                      className="in-up"
                      style={{ animationDelay: `${cIndex / 9 + 1}s` }}
                    >
                      <div
                        className="max-w-80 sm:max-w-none mx-auto sm:mx-0 h-full p-10 opacity-60 hover:opacity-100 transition-all duration-300 flex justify-center items-center"
                        style={{ backgroundColor: background }}
                      >
                        <div>
                          <Image
                            src={client.logo}
                            alt={client.name}
                            title={client.name}
                            className="max-h-full w-auto mx-auto"
                            width={500}
                            height={500}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </InView>
        </Container>
      </Section>
    </div>
  );
}

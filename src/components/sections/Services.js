import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import { lexend } from "@/app/fonts";
import InView from "../animated/InView";
import Image from "next/image";
import blob2 from "@/components/blobs/blob2.svg";
import Integrations from "./services/Integrations";
import NetSuite from "./services/NetSuite";
import API from "./services/API";
import Agency from "./services/Agency";
import Ecommerce from "./services/Ecommerce";
import Bespoke from "./services/Bespoke";

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
              <div className="in-up" style={{ animationDelay: ".75s" }}>
                <Ecommerce />
                <Bespoke />
                <Integrations />
                <NetSuite />
                <API />
                <Agency />
              </div>
              {/* <p
                className={`mt-5 in-up max-w-xl`}
                style={{ animationDelay: ".75s" }}
              >
                Want to get on this list? Get in touch with us today to discuss your project.
              </p> */}
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

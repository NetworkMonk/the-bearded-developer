"use client";

import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import { lexend } from "@/app/fonts";
import InView from "../animated/InView";
import Image from "next/image";
import wave2 from "@/components/waves/wave2.svg";
import beard from "@/components/logos/beard.svg";

export default function Title() {
  return (
    <div id="home">
      <div className="bg-brand-black text-white mb-0">
        <Section>
          <Container>
            <div id="home">
              <InView>
                <div className="relative">
                  <div className="lg:grid grid-cols-1 gap-5">
                    <div className="h-full flex flex-col items-center md:px-10 lg:py-10 lg:order-1">
                      <div className="flex-1 flex items-center pt-20 pb-10 xl:pb-0 relative">
                        <div>
                          <h1
                            className={`text-4xl md:text-6xl font-bold in-up text-center ${lexend.className}`}
                            style={{ animationDelay: "0s" }}
                          >
                            BigCommerce, Shopify & Bespoke Software Developer
                            Essex & UK
                          </h1>
                          <Image
                            src={beard}
                            alt="The Bearded Developer Logo"
                            className="mx-auto w-24 lg:w-64 my-10 in-up"
                            style={{ animationDelay: "0.5s" }}
                            priority={true}
                          />
                          <h2
                            className={`text-lg md:text-xl font-medium mt-10 in-up text-center mx-auto max-w-2xl`}
                            style={{ animationDelay: "1s" }}
                          >
                            Helping UK businesses build better e-commerce
                            stores, automate their operations, and grow with 20+
                            years of hands-on development experience.
                          </h2>
                          <div
                            className="mt-20 in-up text-center flex justify-center"
                            style={{ animationDelay: "1.5s" }}
                          >
                            <a
                              href="/contact"
                              className="animated-button animated-button-fill min-w-48 hover:text-brand-black uppercase font-semibold transition-all duration-500 transform lg:scale-125 mx-auto"
                            >
                              Let&apos;s talk
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </InView>
            </div>
          </Container>
        </Section>
      </div>
      <div className="-mt-5 pointer-events-none">
        <Image priority src={wave2} alt="A Wave" className="w-full" />
      </div>
    </div>
  );
}

"use client";

import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import InView from "../animated/InView";

export default function MessageUs() {
  return (
    <Section>
      <Container>
        <div className="my-5">
          <InView>
            <div
              className="p-5 py-8 mt-5 md:mt-10 md:p-10 bg-gradient-to-br from-brand-blue to-brand-light-blue text-white rounded-xl shadow-xl in-up flex flex-col md:flex-row items-center gap-5"
              style={{ animationDelay: "0.25s" }}
            >
              <p className="text-xl font-semibold text-center md:text-left">
                Don&apos;t forget to message us for a free consultation!
              </p>
              <button
                className="w-48 outline outline-2 outline-white bg-transparent text-white hover:bg-white hover:text-brand-blue px-6 py-2 rounded-full transition-colors duration-500 uppercase font-semibold mx-auto md:ml-auto md:mr-0"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("lets-talk")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                Let&apos;s talk
              </button>
            </div>
          </InView>
        </div>
      </Container>
    </Section>
  );
}

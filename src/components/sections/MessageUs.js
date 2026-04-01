"use client";

import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import InView from "../animated/InView";
import { lexend } from "@/app/fonts";

export default function MessageUs() {
  return (
    <Section>
      <Container>
        <div className="my-5">
          <InView>
            <div
              className="relative overflow-hidden in-up rounded-2xl shadow-xl"
              style={{ animationDelay: "0.25s" }}
            >
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-blue via-brand-teal to-brand-light-blue" />

              {/* Dot-grid texture overlay */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
                  backgroundSize: "22px 22px",
                }}
              />

              {/* Subtle top-right bloom */}
              <div
                className="absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-20"
                style={{
                  background:
                    "radial-gradient(circle, rgba(255,255,255,0.6) 0%, transparent 70%)",
                }}
              />

              {/* Content */}
              <div className="relative z-10 px-8 py-10 md:px-14 md:py-12 flex flex-col md:flex-row md:items-center gap-6 md:gap-10 text-white">
                <div className="flex-1">
                  <p
                    className={`text-xs font-semibold uppercase tracking-[0.18em] text-white/60 mb-2 ${lexend.className}`}
                  >
                    Free consultation
                  </p>
                  <p
                    className={`text-2xl md:text-3xl font-bold leading-snug ${lexend.className}`}
                  >
                    Ready to move your project forward?
                  </p>
                  <p className="mt-2 text-sm text-white/70">
                    Don&apos;t wait - message us today and let&apos;s discuss what we can build together.
                  </p>
                </div>
                <div className="shrink-0">
                  <a
                    href="/contact"
                    className={`inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white text-brand-blue font-semibold text-sm uppercase tracking-wide hover:bg-brand-platinum transition-colors duration-300 shadow-md ${lexend.className}`}
                  >
                    Let&apos;s talk
                  </a>
                </div>
              </div>
            </div>
          </InView>
        </div>
      </Container>
    </Section>
  );
}

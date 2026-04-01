"use client";

import Container from "@/components/common/Container";
import { lexend } from "@/app/fonts";
import InView from "../animated/InView";
import Image from "next/image";
import wave2 from "@/components/waves/wave2.svg";
import beard from "@/components/logos/beard.svg";

const trustSignals = [
  "20+ years experience",
  "UK-based",
  "Free consultation",
];

export default function Title() {
  return (
    <div id="home">
      <div className="bg-brand-black text-white relative overflow-hidden">

        {/* Dot-grid background texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(2, 128, 144, 0.18) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Radial vignette — fades texture at edges */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 20%, #131515 75%)",
          }}
        />

        {/* Subtle top-left teal bloom */}
        <div
          className="absolute -top-32 -left-32 w-[600px] h-[600px] pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(2, 128, 144, 0.12) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10">
          <Container>
            <InView>
              <div className="min-h-[88vh] flex items-center pt-28 pb-16 lg:pt-0 lg:pb-0">
                <div className="w-full lg:grid lg:grid-cols-[1fr_auto] lg:gap-12 xl:gap-20 lg:items-center">

                  {/* Left: headline, trust, body, CTA */}
                  <div className="flex flex-col items-center lg:items-start text-center lg:text-left">

                    <h1
                      className={`text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-[1.06] tracking-tight in-up ${lexend.className}`}
                      style={{ animationDelay: "0s" }}
                    >
                      BigCommerce, Shopify &amp; Bespoke Software Developer{" "}
                      <span className="text-brand-light-blue">
                        Essex &amp; UK
                      </span>
                    </h1>

                    {/* Trust signals — desktop */}
                    <div
                      className="mt-8 hidden lg:flex items-center gap-0 in-up"
                      style={{ animationDelay: "0.35s" }}
                    >
                      {trustSignals.map((signal, i) => (
                        <span key={signal} className="flex items-center">
                          <span
                            className={`text-xs font-semibold uppercase tracking-[0.14em] text-brand-light-blue/80 ${lexend.className}`}
                          >
                            {signal}
                          </span>
                          {i < trustSignals.length - 1 && (
                            <span className="mx-3 w-1 h-1 rounded-full bg-brand-teal inline-block" />
                          )}
                        </span>
                      ))}
                    </div>

                    <p
                      className="mt-8 text-base md:text-lg text-white/60 leading-relaxed max-w-lg in-up"
                      style={{ animationDelay: "0.6s" }}
                    >
                      Helping UK businesses build better e-commerce stores,
                      automate their operations, and grow with 20+ years of
                      hands-on development experience.
                    </p>

                    <div
                      className="mt-10 in-up"
                      style={{ animationDelay: "0.85s" }}
                    >
                      <a
                        href="/contact"
                        className="animated-button animated-button-fill min-w-48 hover:text-brand-black uppercase font-semibold transition-all duration-500 transform lg:scale-110 mx-auto lg:mx-0"
                      >
                        Let&apos;s talk
                      </a>
                    </div>

                    {/* Trust signals — mobile */}
                    <div
                      className="mt-10 flex lg:hidden flex-wrap justify-center items-center gap-x-1 gap-y-2 in-up"
                      style={{ animationDelay: "1.1s" }}
                    >
                      {trustSignals.map((signal, i) => (
                        <span key={signal} className="flex items-center">
                          <span
                            className={`text-xs font-semibold uppercase tracking-[0.14em] text-brand-light-blue/80 ${lexend.className}`}
                          >
                            {signal}
                          </span>
                          {i < trustSignals.length - 1 && (
                            <span className="mx-3 w-1 h-1 rounded-full bg-brand-teal inline-block" />
                          )}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right: beard logo with teal glow — desktop only */}
                  <div
                    className="hidden lg:flex items-center justify-center relative in-up"
                    style={{ animationDelay: "0.2s" }}
                  >
                    {/* Outer glow ring */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background:
                          "radial-gradient(circle at center, rgba(131, 197, 190, 0.15) 0%, rgba(2, 128, 144, 0.1) 40%, transparent 70%)",
                        transform: "scale(1.6)",
                      }}
                    />
                    {/* Inner glow */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background:
                          "radial-gradient(circle at center, rgba(2, 128, 144, 0.2) 0%, transparent 55%)",
                      }}
                    />
                    <Image
                      src={beard}
                      alt="The Bearded Developer"
                      className="relative w-64 xl:w-80 2xl:w-96 opacity-95 drop-shadow-2xl"
                      priority
                    />
                  </div>

                  {/* Mobile logo — below content */}
                  <div
                    className="lg:hidden flex justify-center mt-14 in-up"
                    style={{ animationDelay: "1.3s" }}
                  >
                    <div className="relative">
                      <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          background:
                            "radial-gradient(circle at center, rgba(2, 128, 144, 0.3) 0%, transparent 70%)",
                          transform: "scale(2)",
                        }}
                      />
                      <Image
                        src={beard}
                        alt="The Bearded Developer"
                        className="relative w-32 opacity-90"
                        priority
                      />
                    </div>
                  </div>

                </div>
              </div>
            </InView>
          </Container>
        </div>
      </div>

      <div className="-mt-5 pointer-events-none">
        <Image priority src={wave2} alt="" className="w-full" />
      </div>
    </div>
  );
}

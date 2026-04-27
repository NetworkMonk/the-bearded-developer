"use client";

import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import { lexend } from "@/app/fonts";
import InView from "../animated/InView";
import Link from "next/link";
import { useState } from "react";
import { faShopify } from "@fortawesome/free-brands-svg-icons";
import {
  faBrain,
  faCartShopping,
  faCode,
  faGear,
  faDatabase,
  faDownLeftAndUpRightToCenter,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const services = [
  {
    title: "Shopify Development and Ongoing Support",
    content:
      "As a Shopify Certified Partner, we build high-converting storefronts, custom themes, and robust app integrations tailored to your operations.",
    highlights: [
      "Theme Development",
      "Support",
      "App Integrations",
      "Store Optimisation",
    ],
    logo: faShopify,
    link: "/services/shopify",
    bgColor: "bg-orange-100",
    activeBadge: "bg-orange-200 text-orange-700",
  },
  {
    title: "Celigo Integration Services",
    content:
      "We deliver Celigo integration services from architecture through ongoing managed support, helping your business automate critical cross-platform workflows.",
    highlights: ["Integration Design", "Managed Support", "Error Monitoring"],
    logo: faGear,
    link: "/services/celigo",
    bgColor: "bg-emerald-100",
    activeBadge: "bg-emerald-200 text-emerald-700",
  },
  {
    title: "AI and Automation Solutions",
    content:
      "From custom AI integrations to practical automation workflows, we help your team reduce repetitive work and move faster with confidence.",
    highlights: ["Automation", "LLM Integrations", "Process Improvement"],
    logo: faBrain,
    link: "/services/ai",
    bgColor: "bg-violet-100",
    activeBadge: "bg-violet-200 text-violet-700",
  },
  {
    title: "BigCommerce Development and Ongoing Support",
    content:
      "We help you get the most from BigCommerce with scalable architecture, clean integrations, and thoughtful implementation for growth.",
    highlights: [
      "B2B Features",
      "Support",
      "API-first Build",
      "Multi-channel Commerce",
    ],
    logo: faCartShopping,
    link: "/services/bigcommerce",
    bgColor: "bg-amber-100",
    activeBadge: "bg-amber-200 text-amber-700",
  },
  {
    title: "Integration Services",
    content:
      "When systems need to talk, we connect them reliably so your data flows cleanly and your team avoids manual rework.",
    highlights: ["System Connectivity", "Data Flows", "Operational Efficiency"],
    logo: faDownLeftAndUpRightToCenter,
    link: "/services/integrations",
    bgColor: "bg-rose-100",
    activeBadge: "bg-rose-200 text-rose-700",
  },
  {
    title: "NetSuite Customisation and Development",
    content:
      "We tailor NetSuite to your business with custom workflows, scripts, and form logic so your ERP works the way your team actually operates.",
    highlights: ["SuiteScript", "Workflow Customisation", "Performance Tuning"],
    logo: faDatabase,
    link: "/services/netsuite",
    bgColor: "bg-cyan-100",
    activeBadge: "bg-cyan-200 text-cyan-700",
  },
  {
    title: "Bespoke Solutions",
    content:
      "When off-the-shelf tools fall short, we design and build bespoke applications aligned with your process, goals, and roadmap.",
    highlights: ["Discovery", "Custom Web Apps", "Long-term Support"],
    logo: faCode,
    link: "/services/bespoke",
    bgColor: "bg-fuchsia-100",
    activeBadge: "bg-fuchsia-200 text-fuchsia-700",
  },
];

export default function Services() {
  const [selectedIndex, setSelectedIndex] = useState(0);

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
                Our Web &amp; E-commerce Development Services
              </h2>
              <p
                className="text-lg md:text-xl font-semibold mt-5 md:mt-10 in-up max-w-xl"
                style={{ animationDelay: ".5s" }}
              >
                So, what can we do for you? Here are some of the things we can
                help you with.
              </p>

              <div className="in-up py-10" style={{ animationDelay: ".75s" }}>
                <div className="rounded-2xl overflow-hidden border border-brand-black/10 bg-white/95">
                  {services.map((service, index) => {
                    const isActive = selectedIndex === index;

                    return (
                      <div
                        key={service.title}
                        role="button"
                        tabIndex={0}
                        aria-expanded={isActive}
                        onClick={() => setSelectedIndex(index)}
                        onFocus={() => setSelectedIndex(index)}
                        onMouseEnter={() => setSelectedIndex(index)}
                        onKeyDown={(event) => {
                          if (event.key === "Enter" || event.key === " ") {
                            event.preventDefault();
                            setSelectedIndex(index);
                          }
                        }}
                        className={`w-full text-left border-b border-brand-black/10 last:border-b-0 transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal/70 ${
                          isActive
                            ? `${service.bgColor} border-l-4 border-l-brand-teal`
                            : "bg-white hover:bg-brand-platinum border-l-4 border-l-transparent"
                        }`}
                      >
                        <div className="px-6 md:px-10 py-7 md:py-10">
                          <div className="grid grid-cols-1 md:grid-cols-[70px_1fr] gap-4 md:gap-8 items-start">
                            {/* Icon badge */}
                            <span
                              className={`inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-300 ${
                                isActive
                                  ? service.activeBadge
                                  : "border border-brand-teal/40 bg-brand-teal/10 text-brand-teal"
                              }`}
                            >
                              <FontAwesomeIcon
                                icon={service.logo}
                                className="text-sm"
                                aria-hidden="true"
                              />
                            </span>

                            <div>
                              {/* Title row with arrow */}
                              <div className="flex items-start justify-between gap-4">
                                <h3
                                  className={`text-2xl md:text-3xl font-medium text-brand-black ${lexend.className}`}
                                >
                                  {service.title}
                                </h3>
                                <FontAwesomeIcon
                                  icon={faArrowRight}
                                  className={`w-4 h-4 mt-2 shrink-0 text-brand-teal transition-transform duration-300 ${
                                    isActive ? "rotate-90" : ""
                                  }`}
                                  aria-hidden="true"
                                />
                              </div>

                              {/* Highlights */}
                              <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-brand-black/60">
                                {service.highlights.map(
                                  (highlight, highlightIndex) => (
                                    <span
                                      key={highlight}
                                      className="inline-flex items-center gap-3"
                                    >
                                      <span>{highlight}</span>
                                      {highlightIndex <
                                        service.highlights.length - 1 && (
                                        <span className="text-brand-teal/50">
                                          •
                                        </span>
                                      )}
                                    </span>
                                  ),
                                )}
                              </div>

                              {/* Expanded content */}
                              <div
                                className={`grid transition-all duration-300 ease-out ${
                                  isActive
                                    ? "grid-rows-[1fr] opacity-100 mt-5"
                                    : "grid-rows-[0fr] opacity-0"
                                }`}
                              >
                                <div className="overflow-hidden">
                                  <p className="text-base max-w-3xl leading-relaxed text-brand-black/80">
                                    {service.content}
                                  </p>
                                  <div className="mt-6">
                                    <Link
                                      href={service.link}
                                      className="animated-button animated-button-fill animated-button-small min-w-36 text-brand-black hover:text-brand-platinum uppercase font-semibold transition-all duration-500 inline-flex items-center justify-center min-w-[180px]"
                                      aria-label={`Find out more about ${service.title}`}
                                    >
                                      Find out more
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </InView>
        </Container>
      </Section>
    </div>
  );
}

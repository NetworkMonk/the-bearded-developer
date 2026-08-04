import { lexend } from "@/app/fonts";
import Image from "next/image";
import wave1 from "@/components/waves/wave1.svg";
import wave2 from "@/components/waves/wave2.svg";
import DSSection from "./DSSection";
import Spec from "./Spec";

export default function Layouts() {
  return (
    <DSSection
      id="layouts"
      eyebrow="Patterns"
      title="Page layouts"
      description="Three templates cover the whole site: a dark hero for the homepage, a two-column article layout with a sticky sidebar, and a plain single-column page for services and resources. Everything else is a variation on one of them."
    >
      <Spec
        title="Dark hero"
        usage="The homepage opening. Four layers stack up on brand-black: a teal dot grid, a radial vignette that fades the grid at the edges, a soft teal bloom in the top-left, then the content. Trust signals sit between the headline and the body copy, separated by 4px teal dots."
        padding="p-0"
        code={"// dot grid\nradial-gradient(circle, rgba(2, 128, 144, 0.18) 1px, transparent 1px) / 28px 28px\n\n// vignette\nradial-gradient(ellipse 80% 80% at 50% 50%, transparent 20%, #131515 75%)\n\n// bloom\nradial-gradient(circle, rgba(2, 128, 144, 0.12) 0%, transparent 70%)"}
      >
        <div className="bg-brand-black text-white relative overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(2, 128, 144, 0.18) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 20%, #131515 75%)",
            }}
          />
          <div
            className="absolute -top-32 -left-32 w-[600px] h-[600px] pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(2, 128, 144, 0.12) 0%, transparent 70%)",
            }}
          />
          <div className="relative z-10 px-8 py-16">
            <h4
              className={`text-3xl md:text-4xl font-bold leading-[1.06] tracking-tight max-w-2xl ${lexend.className}`}
            >
              BigCommerce, Shopify &amp; Bespoke Software Developer{" "}
              <span className="text-brand-light-blue">Essex &amp; UK</span>
            </h4>
            <div className="mt-6 flex flex-wrap items-center">
              {["20+ years experience", "UK-based", "Free consultation"].map(
                (signal, i, arr) => (
                  <span key={signal} className="flex items-center">
                    <span
                      className={`text-xs font-semibold uppercase tracking-[0.14em] text-brand-light-blue/80 ${lexend.className}`}
                    >
                      {signal}
                    </span>
                    {i < arr.length - 1 && (
                      <span className="mx-3 w-1 h-1 rounded-full bg-brand-teal inline-block" />
                    )}
                  </span>
                )
              )}
            </div>
            <p className="mt-6 text-base text-white/60 leading-relaxed max-w-lg">
              Helping UK businesses build better e-commerce stores, automate
              their operations, and grow.
            </p>
            <div className="mt-8">
              <button
                type="button"
                className="animated-button animated-button-fill min-w-48 text-white hover:text-brand-black uppercase font-semibold transition-all duration-500"
              >
                Let&apos;s talk
              </button>
            </div>
          </div>
        </div>
      </Spec>

      <Spec
        title="Wave transitions"
        usage="Two SVG waves handle every transition between a dark band and the white page. wave2 closes the hero and is pulled up by -mt-5 to hide the seam; wave1 opens the footer, with the footer content pulled up over it at lg and above."
        surface="light"
        padding="p-0"
      >
        <div>
          <div className="bg-brand-black h-20" />
          <div className="-mt-5 pointer-events-none">
            <Image src={wave2} alt="" className="w-full" />
          </div>
          <div className="py-10 text-center">
            <p className="text-xs text-brand-black/40 font-mono">
              wave2 — dark to light · wave1 — light to dark
            </p>
          </div>
          <div className="pointer-events-none">
            <Image src={wave1} alt="" className="w-full" />
          </div>
          <div className="bg-brand-black h-20" />
        </div>
      </Spec>

      <Spec
        title="Article template"
        usage="A three-column grid where the body takes two and the sidebar takes one. The sidebar is sticky from md up with a 40px offset, so the quick reference and service links stay in view for the length of a long read. On mobile the sidebar drops below the article."
        code={"// grid\nsection: md:p-12 relative grid md:grid-cols-3 gap-8\nbody:    md:col-span-2\nsidebar: md:col-span-1 bg-gray-100 p-6 rounded-lg mt-10 md:mt-0 md:sticky top-10"}
      >
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div
              className="rounded-lg p-8 text-white mb-6"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(20,20,20,0.6), rgba(20,20,20,0.1)), url(/img/james-plant-portrait.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <p className={`text-2xl font-bold ${lexend.className}`}>
                Article title over its header image
              </p>
              <p className="text-sm font-semibold mt-3 text-white/90">
                The meta description doubles as the standfirst, so it is written
                once and works in both places.
              </p>
            </div>
            <h4 className={`text-xl font-semibold ${lexend.className}`}>
              A section heading
            </h4>
            <p className="mt-4 text-sm text-brand-black/70 leading-relaxed">
              Body copy runs at the full width of the two-column span. Every
              article links to at least one service page and two or three
              related articles.
            </p>
            <div className="mt-6 bg-blue-50 p-5 rounded-lg">
              <h5 className={`font-semibold text-blue-900 text-sm ${lexend.className}`}>
                A callout sits inline with the copy
              </h5>
            </div>
          </div>

          <aside className="md:col-span-1 bg-gray-100 p-6 rounded-lg">
            <h4 className={`text-base font-semibold ${lexend.className}`}>
              Quick Reference
            </h4>
            <div className="mt-4 space-y-3 text-sm">
              {[
                { border: "border-blue-400", term: "iPaaS", desc: "Integration platform as a service" },
                { border: "border-green-400", term: "Flow", desc: "One scheduled data movement" },
                { border: "border-yellow-400", term: "Retry", desc: "An automatic second attempt" },
              ].map((item) => (
                <div
                  key={item.term}
                  className={`border-l-4 pl-3 ${item.border}`}
                >
                  <strong className="text-xs">{item.term}</strong>
                  <br />
                  <span className="text-xs text-brand-black/60">
                    {item.desc}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <h5 className={`text-sm font-semibold ${lexend.className}`}>
                Related Articles
              </h5>
              <ul className="text-xs mt-2 space-y-2">
                <li className="text-blue-600 hover:underline cursor-pointer">
                  Celigo error troubleshooting guide
                </li>
                <li className="text-blue-600 hover:underline cursor-pointer">
                  Celigo monitoring best practices
                </li>
              </ul>
            </div>

            <div className="mt-4 p-4 bg-green-50 rounded-lg">
              <h5 className={`text-sm font-semibold ${lexend.className}`}>
                Our Services
              </h5>
              <ul className="text-xs mt-2 space-y-2">
                <li className="text-blue-600 hover:underline cursor-pointer">
                  Celigo
                </li>
                <li className="text-blue-600 hover:underline cursor-pointer">
                  Integrations
                </li>
              </ul>
            </div>

            <p className="mt-4 text-xs">
              Need a hand with yours?{" "}
              <span className="text-blue-600 hover:underline font-semibold cursor-pointer">
                Get in touch
              </span>
              .
            </p>
          </aside>
        </div>
      </Spec>

      <Spec
        title="Article list item"
        usage="A five-column grid giving three columns to the text and two to the thumbnail. Below md the thumbnail moves inline under the description rather than being dropped, so mobile readers still get the image."
        code={"grid md:grid-cols-5 gap-10 content-stretch justify-between py-16\ntext: md:col-span-3 · image: md:col-span-2 hidden md:block"}
      >
        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-3">
            <h4 className={`text-2xl font-semibold ${lexend.className}`}>
              Celigo error troubleshooting guide
            </h4>
            <h5
              className={`text-base opacity-80 font-medium mb-2 ${lexend.className}`}
            >
              What the common failures actually mean
            </h5>
            <p className="text-sm opacity-80 my-3">
              {["Celigo", "NetSuite", "Integrations"].map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-200 text-gray-800 rounded-full px-2 py-1 text-xs font-semibold mr-2 mb-2 whitespace-nowrap inline-block"
                >
                  {tag}
                </span>
              ))}
            </p>
            <p className="text-sm mb-2 opacity-80">
              A plain-English walkthrough of the errors that show up most often
              in Celigo, and what to do about each one.
            </p>
            <div className="mt-6">
              <button
                type="button"
                className="outline outline-2 outline-white hover:outline-brand-blue bg-brand-blue text-white hover:bg-white hover:text-brand-blue px-6 py-2 rounded-full transition-colors duration-500 uppercase font-semibold cursor-pointer"
              >
                Read
              </button>
            </div>
          </div>
          <div className="md:col-span-2">
            <div className="overflow-hidden rounded-xl">
              <Image
                alt=""
                width={480}
                height={480}
                src="/img/james-plant-portrait.jpg"
                className="object-cover w-full shadow-xs hover:scale-105 hover:shadow-xl transition-all duration-200 h-48"
              />
            </div>
          </div>
        </div>
      </Spec>
    </DSSection>
  );
}

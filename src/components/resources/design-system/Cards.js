import { lexend } from "@/app/fonts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faGear, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import DSSection from "./DSSection";
import Spec from "./Spec";

const technologies = [
  { name: "Next.js", logo: "/img/tech-logos/next.svg" },
  { name: "React", logo: "/img/tech-logos/react-2.svg" },
  { name: "Tailwind CSS", logo: "/img/tech-logos/tailwindcss.svg" },
  { name: "NetSuite", logo: "/img/tech-logos/netsuite-1.svg" },
];

export default function Cards() {
  return (
    <DSSection
      id="cards"
      eyebrow="Components"
      title="Cards & surfaces"
      description="Card surfaces share one recipe: white fill, a gray-200 hairline, a 16px radius and a shadow only where the card needs to lift off the page. Interactive cards signal it by warming their border to teal on hover rather than by moving."
    >
      <div className="mt-10 first:mt-0 grid lg:grid-cols-2 gap-5">
        <Spec
          title="Review card"
          usage="A flex column so the author block always pins to the bottom regardless of quote length. Opens with an oversized serif quotation mark at 25% teal — decorative and hidden from screen readers."
          surface="platinum"
          wrapperClass="h-full flex flex-col"
          code={"flex flex-col bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-brand-teal/30 transition-all duration-300"}
        >
          <div className="flex flex-col bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-brand-teal/30 transition-all duration-300 h-full">
            <span
              className="block text-5xl leading-none text-brand-teal/25 select-none pointer-events-none font-serif mb-3"
              aria-hidden="true"
            >
              &ldquo;
            </span>
            <div className="flex gap-0.5 mb-3">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-amber-400 text-sm">
                  ★
                </span>
              ))}
            </div>
            <p className="text-sm leading-relaxed text-brand-black/70 flex-1">
              One word - AMAZING! I had several problems with my website and
              James sorted them out for me in the space of 2 days, highly
              recommend.
            </p>
            <div className="mt-5 pt-4 border-t border-gray-100">
              <p
                className={`text-sm font-semibold text-brand-black ${lexend.className}`}
              >
                Jackie T
              </p>
              <p
                className={`text-xs font-semibold uppercase tracking-[0.12em] text-brand-teal mt-0.5 ${lexend.className}`}
              >
                Cotton and Twigg
              </p>
            </div>
          </div>
        </Spec>

        <Spec
          title="Testimonial figure"
          usage="The longer-form counterpart to a review card, used for LinkedIn recommendations pulled from the CMS. Semantic figure and blockquote elements, with the quote glyph as inline SVG."
          surface="platinum"
          wrapperClass="h-full flex flex-col"
          code={"bg-brand-platinum/5 rounded-lg p-5 h-full flex flex-col in-up"}
        >
          <figure className="bg-white rounded-lg p-5 h-full flex flex-col border border-gray-200">
            <blockquote className="flex-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="inline-block w-10 h-10 mb-3 fill-brand-teal/30"
              >
                <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" />
              </svg>
              <p className="text-sm mb-3">
                James was very attentive to my project needs and asked the right
                questions. We are absolutely thrilled at what he has built for
                us.
              </p>
            </blockquote>
            <div className="flex mt-5">
              <FontAwesomeIcon
                icon={faQuoteLeft}
                className="inline-block w-6 h-6 mr-3 mt-1 opacity-30"
              />
              <div>
                <p className="text-sm">Jake E</p>
                <p className="text-xs text-gray-400 font-medium">
                  Director - RC Boat Engines Ltd.
                </p>
              </div>
            </div>
          </figure>
        </Spec>
      </div>

      <Spec
        title="Service accordion row"
        usage="The homepage services list. Rows are stacked inside one rounded container with dividers between them; hovering or focusing a row expands it. The open row takes a soft tinted fill, a 4px teal left border and rotates its arrow 90 degrees. The expand animation uses a grid-rows 0fr to 1fr transition, so it works without measuring content height."
        padding="p-0"
        code={"// open\n{bgColor} border-l-4 border-l-brand-teal\n\n// closed\nbg-white hover:bg-brand-platinum border-l-4 border-l-transparent\n\n// expansion\ngrid transition-all duration-300 grid-rows-[0fr] → grid-rows-[1fr]"}
      >
        <div className="rounded-2xl overflow-hidden border border-brand-black/10 bg-white/95">
          <div className="w-full text-left border-b border-brand-black/10 transition-all duration-300 bg-emerald-100 border-l-4 border-l-brand-teal">
            <div className="px-6 md:px-10 py-7">
              <div className="grid grid-cols-1 md:grid-cols-[70px_1fr] gap-4 md:gap-8 items-start">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-200 text-emerald-700">
                  <FontAwesomeIcon icon={faGear} className="text-sm" />
                </span>
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <h4
                      className={`text-2xl font-medium text-brand-black ${lexend.className}`}
                    >
                      Celigo Integration Services
                    </h4>
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="w-4 h-4 mt-2 shrink-0 text-brand-teal rotate-90"
                    />
                  </div>
                  <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-brand-black/60">
                    {["Integration Design", "Managed Support", "Error Monitoring"].map(
                      (highlight, i, arr) => (
                        <span key={highlight} className="inline-flex items-center gap-3">
                          <span>{highlight}</span>
                          {i < arr.length - 1 && (
                            <span className="text-brand-teal/50">•</span>
                          )}
                        </span>
                      )
                    )}
                  </div>
                  <div className="mt-5">
                    <p className="text-base max-w-3xl leading-relaxed text-brand-black/80">
                      We deliver Celigo integration services from architecture
                      through ongoing managed support.
                    </p>
                    <div className="mt-6">
                      <button
                        type="button"
                        className="animated-button animated-button-fill animated-button-small text-brand-black hover:text-brand-platinum uppercase font-semibold transition-all duration-500 inline-flex items-center justify-center min-w-[180px]"
                      >
                        Find out more
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full text-left transition-all duration-300 bg-white hover:bg-brand-platinum border-l-4 border-l-transparent cursor-pointer">
            <div className="px-6 md:px-10 py-7">
              <div className="grid grid-cols-1 md:grid-cols-[70px_1fr] gap-4 md:gap-8 items-start">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-teal/40 bg-brand-teal/10 text-brand-teal">
                  <FontAwesomeIcon icon={faGear} className="text-sm" />
                </span>
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <h4
                      className={`text-2xl font-medium text-brand-black ${lexend.className}`}
                    >
                      Bespoke Solutions
                    </h4>
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="w-4 h-4 mt-2 shrink-0 text-brand-teal"
                    />
                  </div>
                  <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-brand-black/60">
                    <span>Discovery</span>
                    <span className="text-brand-teal/50">•</span>
                    <span>Custom Web Apps</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Spec>

      <div className="mt-10 first:mt-0 grid md:grid-cols-2 gap-5">
        <Spec
          title="Technology tile"
          wrapperClass="h-full flex flex-col"
          usage="Logos rest in greyscale at 50% opacity and come to full colour on hover, so the grid reads as texture until a visitor looks for something specific. The label shifts to teal at the same time."
          code={"bg-white border border-gray-200 rounded-xl p-4 flex flex-col items-center gap-3 hover:border-brand-teal/40 hover:shadow-sm transition-all duration-300\n// logo: filter grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100"}
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {technologies.map((tech) => (
              <div key={tech.name} className="group">
                <div className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col items-center gap-3 cursor-default hover:border-brand-teal/40 hover:shadow-sm transition-all duration-300">
                  <Image
                    src={tech.logo}
                    alt={tech.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 object-contain filter grayscale group-hover:grayscale-0 opacity-50 group-hover:opacity-100 transition-all duration-300"
                  />
                  <span
                    className={`text-xs font-medium text-center text-brand-black/50 group-hover:text-brand-teal transition-colors duration-300 leading-tight ${lexend.className}`}
                  >
                    {tech.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Spec>

        <Spec
          title="Project facts panel"
          wrapperClass="h-full flex flex-col"
          usage="Used where a project has no screenshots. A divide-y list turns key figures into a scannable column, with the label in wide-tracked uppercase and the value in semibold Lexend."
          code={"bg-gray-50 rounded-xl p-6 divide-y divide-gray-200"}
        >
          <div className="bg-gray-50 rounded-xl p-6 divide-y divide-gray-200">
            {[
              { label: "Platform", value: "BigCommerce" },
              { label: "Integration", value: "NetSuite via Celigo" },
              { label: "Engagement", value: "Ongoing retainer" },
            ].map((fact) => (
              <div key={fact.label} className="py-4 first:pt-0 last:pb-0">
                <p
                  className={`text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1 ${lexend.className}`}
                >
                  {fact.label}
                </p>
                <p
                  className={`text-lg font-semibold text-gray-800 ${lexend.className}`}
                >
                  {fact.value}
                </p>
              </div>
            ))}
          </div>
        </Spec>
      </div>

      <Spec
        title="Client logo tile"
        usage="Client marks sit at 60% opacity until hovered, which keeps a grid of mismatched logos looking even. Each tile takes an optional background colour, so a logo drawn for a dark background still reads properly in a grid of white tiles."
        code={"h-full rounded-xl border border-gray-200 p-8 flex justify-center items-center opacity-60 hover:opacity-100 transition-all duration-300\n// background comes from the client record, defaulting to #ffffff"}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: "Shopify", logo: "/img/tech-logos/shopify.svg", bg: "#ffffff" },
            { name: "Celigo", logo: "/img/tech-logos/celigo.png", bg: "#ffffff" },
            { name: "NetSuite", logo: "/img/tech-logos/netsuite-1.svg", bg: "#ffffff" },
            { name: "Go", logo: "/img/tech-logos/go-6.svg", bg: "#232142" },
          ].map((client) => (
            <div
              key={client.name}
              className="h-full rounded-xl border border-gray-200 p-8 flex justify-center items-center opacity-60 hover:opacity-100 transition-all duration-300"
              style={{ backgroundColor: client.bg }}
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={200}
                height={80}
                className="w-auto max-h-10 mx-auto object-contain"
              />
            </div>
          ))}
        </div>
      </Spec>

      <Spec
        title="Partner badge panel"
        usage="A bordered white panel that groups credentials under teal eyebrow headings, split by a hairline. Each logo sits on its own light grey plinth so partner marks of different shapes still align."
        surface="platinum"
      >
        <div className="max-w-sm mx-auto border border-gray-200 rounded-2xl p-8 bg-white shadow-sm">
          <p
            className={`text-xs font-semibold uppercase tracking-[0.15em] text-brand-teal mb-5 text-center ${lexend.className}`}
          >
            Certified Partners
          </p>
          <div className="grid grid-cols-2 gap-4">
            {["/img/tech-logos/celigo.png", "/img/tech-logos/shopify.svg"].map(
              (logo) => (
                <div
                  key={logo}
                  className="flex items-center justify-center p-3 rounded-xl bg-gray-50 h-16"
                >
                  <Image
                    src={logo}
                    alt=""
                    width={120}
                    height={48}
                    className="max-h-8 w-auto object-contain"
                  />
                </div>
              )
            )}
          </div>
          <div className="my-6 border-t border-gray-100" />
          <p
            className={`text-xs font-semibold uppercase tracking-[0.15em] text-brand-teal mb-5 text-center ${lexend.className}`}
          >
            Platforms We Specialise In
          </p>
          <div className="grid grid-cols-2 gap-4">
            {[
              "/img/tech-logos/bigcommerce-logomark-whitebg.png",
              "/img/tech-logos/netsuite-1.svg",
            ].map((logo) => (
              <div
                key={logo}
                className="flex items-center justify-center p-3 rounded-xl bg-gray-50 h-16"
              >
                <Image
                  src={logo}
                  alt=""
                  width={120}
                  height={48}
                  className="max-h-8 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </Spec>

      <Spec
        title="Thumbnail"
        usage="Article and project images crop to a fixed 256px height inside a rounded mask, so a mixed set of source images still produces an even grid. The image scales to 105% on hover while the mask holds its shape."
        code={"// wrapper\nmt-4 overflow-hidden rounded-xl\n\n// image\nobject-cover w-full h-64 shadow-xs hover:scale-105 hover:shadow-xl transition-all duration-200"}
      >
        <div className="max-w-sm">
          <div className="mt-4 overflow-hidden rounded-xl">
            <Image
              alt="Example article thumbnail"
              width={480}
              height={480}
              src="/img/james-plant-portrait.jpg"
              className="object-cover w-full shadow-xs hover:scale-105 hover:shadow-xl transition-all duration-200 h-64"
            />
          </div>
        </div>
      </Spec>
    </DSSection>
  );
}

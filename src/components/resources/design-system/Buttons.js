import { lexend } from "@/app/fonts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowUpRightFromSquare,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import DSSection from "./DSSection";
import Spec from "./Spec";

export default function Buttons() {
  return (
    <DSSection
      id="buttons"
      eyebrow="Components"
      title="Buttons & actions"
      description="Every action on the site is a pill. There are two families: the animated SCSS button used for the primary 'Let's talk' call to action, and a set of Tailwind-only pills that invert their fill and text colour on hover over 500ms. Hover the examples below to see the transitions."
    >
      <Spec
        title="Primary — hero call to action"
        usage="The main conversion button. A continuous 4-second pulse draws a soft teal glow around it, and hovering fills the button from a 3px inset ring out to solid. Reserved for the single most important action on a page, normally on a dark background."
        surface="dark"
        code={"animated-button animated-button-fill min-w-48 hover:text-brand-black uppercase font-semibold transition-all duration-500 transform lg:scale-110"}
        meta={[
          { label: "Source", value: "src/app/buttonAnimations.scss" },
          { label: "Animation", value: "pulseAnimation, 4s ease-in-out, infinite" },
          { label: "Hover", value: "inset ring expands to solid fill, 0.5s" },
          { label: "Height", value: "60px (icon-size token)" },
        ]}
      >
        <div className="flex justify-center py-8">
          <button
            type="button"
            className="animated-button animated-button-fill min-w-48 text-white hover:text-brand-black uppercase font-semibold transition-all duration-500"
          >
            Let&apos;s talk
          </button>
        </div>
      </Spec>

      <Spec
        title="Primary — compact"
        usage="The same animated button with the glow and pulse removed and the height reduced to 40px. Used in the navigation bar, inside expanded service rows, and anywhere the full-size version would dominate."
        code={"animated-button animated-button-fill animated-button-small min-w-36 text-brand-black hover:text-brand-platinum font-semibold transition-all duration-500 flex items-center"}
        meta={[
          { label: "Size", value: "60 × 40px, widened by min-w-36" },
          { label: "Resting", value: "Solid #7de2d1 fill, no shadow" },
          { label: "Hover", value: "Fill darkens to brand-black" },
        ]}
      >
        <div className="flex justify-center py-6">
          <button
            type="button"
            className="animated-button animated-button-fill animated-button-small min-w-36 text-brand-black hover:text-brand-platinum font-semibold transition-all duration-500 flex items-center"
          >
            Let&apos;s talk
          </button>
        </div>
      </Spec>

      <Spec
        title="Solid pill"
        usage="The workhorse secondary action — 'Read', 'Explore Articles', 'View Code'. Inverts completely on hover: the brand-blue fill becomes white and the outline picks up the blue."
        code={"outline outline-2 outline-white hover:outline-brand-blue bg-brand-blue text-white hover:bg-white hover:text-brand-blue px-6 py-2 rounded-full transition-colors duration-500 uppercase font-semibold"}
      >
        <div className="flex flex-wrap items-center gap-4 justify-center py-4">
          <button
            type="button"
            className="outline outline-2 outline-white hover:outline-brand-blue bg-brand-blue text-white hover:bg-white hover:text-brand-blue px-6 py-2 rounded-full transition-colors duration-500 uppercase font-semibold cursor-pointer"
          >
            Read
          </button>
          <button
            type="button"
            disabled
            className="outline outline-2 outline-white bg-brand-blue text-white px-6 py-2 rounded-full uppercase font-semibold opacity-50 cursor-not-allowed"
          >
            Coming soon
          </button>
          <span className="text-xs text-brand-black/40">
            Default / disabled at 50% opacity
          </span>
        </div>
      </Spec>

      <Spec
        title="Ghost on gradient"
        usage="Used on the teal gradient CTA panels where a solid button would compete with the background. A white 2px outline over a transparent fill, inverting to a solid white pill on hover."
        surface="light"
        padding="p-0"
        code={"w-48 outline outline-2 outline-white bg-transparent text-white hover:bg-white hover:text-brand-blue px-6 py-2 rounded-full transition-colors duration-500 uppercase font-semibold"}
      >
        <div className="bg-gradient-to-br from-brand-blue to-brand-light-blue p-10 flex flex-wrap items-center gap-4 justify-center">
          <button
            type="button"
            className="outline outline-2 outline-white bg-transparent text-white hover:bg-white hover:text-brand-blue px-6 py-2 rounded-full transition-colors duration-500 uppercase font-semibold cursor-pointer"
          >
            Let&apos;s talk
          </button>
          <button
            type="button"
            className={`inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white text-brand-blue font-semibold text-sm uppercase tracking-wide hover:bg-brand-platinum transition-colors duration-300 shadow-md cursor-pointer ${lexend.className}`}
          >
            Let&apos;s talk
          </button>
        </div>
      </Spec>

      <Spec
        title="Article call to action pair"
        usage="Every long-form article closes with a gradient panel carrying two actions: a filled white primary pointing at the relevant service page, and an outlined blue secondary pointing at contact."
        padding="p-0"
        code={"// Primary\nbg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100\n\n// Secondary\nbg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 border-2 border-white"}
      >
        <div className="bg-gradient-to-br from-blue-400 to-purple-500 p-10 flex flex-wrap gap-4 justify-center">
          <button
            type="button"
            className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-block cursor-pointer"
          >
            Explore Celigo services
          </button>
          <button
            type="button"
            className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors inline-block border-2 border-white cursor-pointer"
          >
            Get in touch
          </button>
        </div>
      </Spec>

      <Spec
        title="Text links"
        usage="Inline actions that sit in body copy or at the foot of a panel. All use teal as the resting colour and shift to brand-blue on hover, with an arrow to signal direction of travel."
        code={"inline-flex items-center gap-2 text-sm font-semibold text-brand-teal hover:text-brand-blue transition-colors"}
      >
        <div className="flex flex-col gap-4 items-start">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand-teal hover:text-brand-blue transition-colors cursor-pointer">
            Visit RC Boat Engines
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              className="w-3 h-3"
            />
          </span>
          <span
            className={`inline-flex items-center gap-2 text-xs font-semibold text-brand-teal hover:text-brand-blue transition-colors duration-150 cursor-pointer ${lexend.className}`}
          >
            Free consultation - let&apos;s discuss your project
            <FontAwesomeIcon icon={faArrowRight} className="w-3 h-3" />
          </span>
          <span className="text-sm text-blue-600 hover:underline cursor-pointer">
            An inline link inside article copy
          </span>
        </div>
      </Spec>

      <Spec
        title="Pagination"
        usage="Fixed 32px square cells with a 6px radius — the only place on the site where a control is not a pill. The current page is filled; the rest invert to brand-blue on hover. The list is clamped to two pages either side of the current one."
        code={"w-8 h-8 flex items-center justify-center border rounded-md bg-white text-brand-black hover:bg-brand-blue hover:text-white hover:outline hover:outline-brand-blue transition-colors duration-500"}
      >
        <div className="flex gap-2">
          <span className="w-8 h-8 flex items-center justify-center border rounded-md bg-white text-brand-black cursor-pointer transition-colors duration-500 hover:bg-brand-blue hover:text-white hover:outline hover:outline-brand-blue">
            <FontAwesomeIcon icon={faChevronLeft} className="w-2 h-2" />
          </span>
          {[1, 2, 3].map((page) => (
            <span
              key={page}
              className={`w-8 h-8 flex items-center justify-center border rounded-md cursor-pointer transition-colors duration-500 ${
                page === 2
                  ? "bg-brand-blue text-white border-brand-blue"
                  : "bg-white text-brand-black hover:bg-brand-blue hover:text-white hover:outline hover:outline-brand-blue"
              }`}
            >
              {page}
            </span>
          ))}
          <span className="w-8 h-8 flex items-center justify-center border rounded-md bg-white text-brand-black cursor-pointer transition-colors duration-500 hover:bg-brand-blue hover:text-white hover:outline hover:outline-brand-blue">
            <FontAwesomeIcon icon={faChevronRight} className="w-2 h-2" />
          </span>
        </div>
      </Spec>

      <Spec
        title="Tags"
        usage="Three tag treatments, all fully rounded and uppercase-free. Article tags are the heaviest, technology tags sit one step lighter, and related-service tags are interactive — they fill with teal on hover."
        code={"// Article\nbg-gray-200 text-gray-800 rounded-full px-2 py-1 text-xs font-semibold\n\n// Technology\nbg-gray-100 text-gray-700 rounded-full px-3 py-1 text-xs font-semibold\n\n// Service link\n+ hover:bg-brand-teal hover:text-white transition-colors"}
      >
        <div className="space-y-5">
          <div className="flex flex-wrap gap-2">
            {["Celigo", "NetSuite", "Integrations"].map((tag) => (
              <span
                key={tag}
                className="bg-gray-200 text-gray-800 rounded-full px-2 py-1 text-xs font-semibold whitespace-nowrap inline-block"
              >
                {tag}
              </span>
            ))}
            <span className="text-xs text-brand-black/40 self-center ml-2">
              Article tags
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {["Next.js", "Tailwind CSS", "NetSuite"].map((tag) => (
              <span
                key={tag}
                className="bg-gray-100 text-gray-700 rounded-full px-3 py-1 text-xs font-semibold"
              >
                {tag}
              </span>
            ))}
            <span className="text-xs text-brand-black/40 self-center ml-2">
              Technology tags
            </span>
          </div>
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-xs text-gray-400 uppercase tracking-widest font-semibold">
              Related services
            </span>
            {["Shopify", "Integrations"].map((tag) => (
              <span
                key={tag}
                className="text-xs font-semibold bg-gray-100 text-gray-700 hover:bg-brand-teal hover:text-white px-3 py-1 rounded-full transition-colors cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Spec>
    </DSSection>
  );
}

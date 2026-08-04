import { lexend } from "@/app/fonts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faBars,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import DSSection from "./DSSection";
import Spec from "./Spec";

const navLinkClass = `text-sm font-medium text-brand-black/70 hover:text-brand-teal transition-colors duration-200`;

const services = [
  { name: "Shopify", desc: "Custom storefronts, theme development & app integrations" },
  { name: "BigCommerce", desc: "Enterprise e-commerce builds and platform migrations" },
  { name: "NetSuite", desc: "ERP configuration, customisation and data sync" },
  { name: "Celigo", desc: "iPaaS integration flows between your business systems" },
];

export default function Navigation() {
  return (
    <DSSection
      id="navigation"
      eyebrow="Components"
      title="Navigation"
      description="A fixed white bar that hides itself on scroll-down and returns on scroll-up, swapping its bottom border for a shadow once the page has moved. Dropdowns open on hover with a 120ms close delay so the pointer can cross the gap without the panel snapping shut."
    >
      <Spec
        title="Desktop bar"
        usage="80px tall, capped to the same max-w-6xl measure as page content. Links are Lexend medium at 70% black, moving to teal on hover over 200ms. The call to action sits hard right at both breakpoints."
        padding="p-0"
        meta={[
          { label: "Height", value: "h-20 (80px)" },
          { label: "Breakpoint", value: "lg — switches to the mobile panel below 1024px" },
          { label: "Scroll down", value: "-mt-32, transition 500ms" },
          { label: "Scrolled", value: "border-b swaps to shadow-md" },
        ]}
      >
        <div className="bg-white border-b border-gray-100">
          <div className="px-6">
            <div className="flex h-20 items-center justify-between">
              <div className="flex items-center gap-8">
                <Image
                  src="/img/beard-black.png"
                  alt="The Bearded Developer"
                  width={36}
                  height={36}
                />
                <div className="hidden md:flex items-center gap-6">
                  <span className={`cursor-pointer ${navLinkClass} ${lexend.className}`}>
                    Home
                  </span>
                  <span
                    className={`inline-flex items-center gap-1.5 cursor-pointer ${navLinkClass} ${lexend.className}`}
                  >
                    About Us
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className="w-2.5 h-2.5 mt-0.5"
                    />
                  </span>
                  <span
                    className={`inline-flex items-center gap-1.5 cursor-pointer text-sm font-medium text-brand-teal ${lexend.className}`}
                  >
                    Services
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className="w-2.5 h-2.5 mt-0.5 rotate-180"
                    />
                  </span>
                  <span className={`cursor-pointer ${navLinkClass} ${lexend.className}`}>
                    Projects
                  </span>
                </div>
              </div>
              <button
                type="button"
                className="animated-button animated-button-fill animated-button-small min-w-36 text-brand-black hover:text-brand-platinum font-semibold transition-all duration-500 flex items-center"
              >
                Let&apos;s talk
              </button>
            </div>
          </div>
        </div>
      </Spec>

      <Spec
        title="Services mega menu"
        usage="A 580px panel in a two-column grid, shown here in its open state. Each item pairs a Lexend label with a plain-English description, so a visitor who does not know what Celigo is can still work out whether it applies to them. A teal eyebrow heads the panel and a consultation link closes it."
        surface="platinum"
        code={"w-[580px] rounded-2xl bg-white border border-gray-100 shadow-2xl\n// closed: opacity-0 scale-[0.97] -translate-y-1 pointer-events-none\n// open:   opacity-100 scale-100 translate-y-0"}
      >
        <div className="max-w-[580px] mx-auto rounded-2xl bg-white border border-gray-100 shadow-2xl">
          <div className="px-5 pt-4 pb-3 border-b border-gray-100">
            <p
              className={`text-xs font-semibold uppercase tracking-[0.15em] text-brand-teal ${lexend.className}`}
            >
              What we do
            </p>
          </div>
          <div className="p-3 grid grid-cols-1 sm:grid-cols-2 gap-1">
            {services.map((service) => (
              <span
                key={service.name}
                className="group flex flex-col px-4 py-3.5 rounded-xl hover:bg-brand-platinum transition-colors duration-150 cursor-pointer"
              >
                <span
                  className={`text-sm font-semibold text-brand-black group-hover:text-brand-teal transition-colors duration-150 ${lexend.className}`}
                >
                  {service.name}
                </span>
                <span className="text-xs text-brand-black/45 mt-1 leading-snug">
                  {service.desc}
                </span>
              </span>
            ))}
          </div>
          <div className="px-5 py-3.5 border-t border-gray-100 bg-brand-platinum/40 rounded-b-2xl">
            <span
              className={`inline-flex items-center gap-2 text-xs font-semibold text-brand-teal hover:text-brand-blue transition-colors duration-150 cursor-pointer ${lexend.className}`}
            >
              Free consultation - let&apos;s discuss your project
              <FontAwesomeIcon icon={faArrowRight} className="w-3 h-3" />
            </span>
          </div>
        </div>
      </Spec>

      <div className="mt-10 first:mt-0 grid md:grid-cols-2 gap-5">
        <Spec
          title="Simple dropdown"
          usage="The lighter sibling of the mega menu, used for About Us and Resources. Minimum 180px wide, single column, no descriptions."
          surface="platinum"
        >
          <div className="max-w-[220px] mx-auto rounded-xl bg-white border border-gray-100 shadow-xl">
            <div className="py-2">
              {["All Resources", "Design System", "Components", "Articles"].map(
                (item) => (
                  <span
                    key={item}
                    className={`block px-4 py-2.5 text-sm text-brand-black/70 hover:text-brand-teal hover:bg-brand-platinum transition-colors duration-150 cursor-pointer ${lexend.className}`}
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>
        </Spec>

        <Spec
          title="Mobile panel"
          usage="Below lg the bar collapses to a hamburger and a wordmark. Sections with children become accordions; everything else is a direct link. The panel closes itself if the user starts scrolling."
          surface="platinum"
        >
          <div className="max-w-[280px] mx-auto rounded-xl bg-white border border-gray-100 shadow-xl overflow-hidden">
            <div className="flex h-14 items-center gap-3 px-3 border-b border-gray-100">
              <FontAwesomeIcon
                icon={faBars}
                className="w-5 h-5 text-brand-black/50"
              />
              <span
                className={`text-sm font-semibold text-brand-black ${lexend.className}`}
              >
                The Bearded Developer
              </span>
            </div>
            <div className="pb-4 pt-2 px-2">
              <span
                className={`block px-3 py-2.5 text-sm font-medium text-brand-black/70 cursor-pointer ${lexend.className}`}
              >
                Home
              </span>
              <div className="px-3 pb-1">
                <span
                  className={`flex w-full items-center justify-between py-2.5 text-sm font-medium text-brand-teal cursor-pointer ${lexend.className}`}
                >
                  Services
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="w-3 h-3 rotate-180"
                  />
                </span>
                <div className="pb-2 pl-3 space-y-0.5">
                  {["Shopify", "BigCommerce", "Celigo"].map((child) => (
                    <span
                      key={child}
                      className={`block py-2 text-sm text-brand-black/55 hover:text-brand-teal transition-colors duration-150 cursor-pointer ${lexend.className}`}
                    >
                      {child}
                    </span>
                  ))}
                </div>
              </div>
              <span
                className={`block px-3 py-2.5 text-sm font-medium text-brand-black/70 cursor-pointer ${lexend.className}`}
              >
                Contact Us
              </span>
            </div>
          </div>
        </Spec>
      </div>

      <Spec
        title="Footer navigation"
        usage="A four-column sitemap on brand-black. Column headings reuse the teal eyebrow; links sit at 60% white and go to full white on hover. A gradient teal hairline separates the footer from the page above it."
        surface="dark"
      >
        <div className="h-px bg-gradient-to-r from-transparent via-brand-teal to-transparent opacity-60 mb-8" />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { heading: "Services", items: ["Shopify", "BigCommerce", "Celigo"] },
            { heading: "Company", items: ["About", "Projects", "Contact Us"] },
            { heading: "Resources", items: ["Articles", "Components", "Design System"] },
          ].map((column) => (
            <div key={column.heading}>
              <p
                className={`text-xs font-semibold uppercase tracking-[0.15em] text-brand-light-blue mb-5 ${lexend.className}`}
              >
                {column.heading}
              </p>
              <ul className="space-y-2.5">
                {column.items.map((item) => (
                  <li key={item}>
                    <span className="text-sm text-white/60 hover:text-white transition-colors duration-200 cursor-pointer">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Spec>
    </DSSection>
  );
}

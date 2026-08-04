import { lexend } from "@/app/fonts";
import DSSection from "./DSSection";
import Spec from "./Spec";

const accessibility = [
  {
    title: "Icon-only controls carry a hidden label",
    detail:
      "The hamburger, the quotation glyphs and the decorative blobs are all handled explicitly — either an sr-only span naming the control, or aria-hidden and an empty alt where the element is purely decorative.",
  },
  {
    title: "Repeated links are disambiguated",
    detail:
      "Seven cards saying 'Learn More' is a screen reader problem. Each one carries an aria-label naming its destination, plus an sr-only continuation inside the link text.",
  },
  {
    title: "State is announced, not just drawn",
    detail:
      "The services accordion sets aria-expanded, pagination sets aria-current on the active page, and the toggle switch is built on Headless UI so its role and state come from the library.",
  },
  {
    title: "Keyboard paths match pointer paths",
    detail:
      "The services list responds to focus as well as hover, and handles Enter and Space, so a keyboard user reaches the same expanded content a mouse user does.",
  },
  {
    title: "Focus is visible where it matters",
    detail:
      "Interactive rows use focus-visible:ring-2 focus-visible:ring-brand-teal/70 rather than removing the outline outright.",
  },
];

const conventions = [
  {
    title: "Tokens live in CSS, not in a config file",
    detail:
      "Tailwind v4 means the brand palette, the custom 3xl breakpoint and the easing curves are declared in an @theme block in globals.scss. That file is the single source of truth for the design tokens.",
  },
  {
    title: "Fonts are opted into, never inherited",
    detail:
      "Montserrat is set once on the body. Lexend is applied per element with lexend.className, so a heading using the display face is always explicit in the markup.",
  },
  {
    title: "Class names are always complete strings",
    detail:
      "Variants are selected by picking a whole class string from a lookup, never by building one from fragments — Tailwind only ships classes it can see in full at build time.",
  },
  {
    title: "Client components are the exception",
    detail:
      "Almost everything renders on the server. The 'use client' directive appears only where there is genuine interactivity: the navigation, the services accordion, the contact form, the intersection observer and the cookie controls.",
  },
  {
    title: "Content data sits above the component",
    detail:
      "Service lists, technology logos, client marks and footer links are declared as arrays at the top of their file and mapped over. Adding an item is a data edit, not a markup edit.",
  },
];

export default function Principles() {
  return (
    <DSSection
      id="principles"
      eyebrow="Patterns"
      title="Principles & conventions"
      description="The rules that keep the system consistent as it grows. Most of them exist because breaking them caused a problem once."
    >
      <div className="mt-10 first:mt-0 grid md:grid-cols-2 gap-5">
        <Spec
          title="Accessibility"
          padding="p-6 md:p-8"
          wrapperClass="h-full flex flex-col"
        >
          <div className="divide-y divide-gray-100">
            {accessibility.map((item) => (
              <div key={item.title} className="py-4 first:pt-0 last:pb-0">
                <p
                  className={`text-sm font-semibold text-brand-black ${lexend.className}`}
                >
                  {item.title}
                </p>
                <p className="mt-1.5 text-xs text-brand-black/60 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </Spec>

        <Spec
          title="Code conventions"
          padding="p-6 md:p-8"
          wrapperClass="h-full flex flex-col"
        >
          <div className="divide-y divide-gray-100">
            {conventions.map((item) => (
              <div key={item.title} className="py-4 first:pt-0 last:pb-0">
                <p
                  className={`text-sm font-semibold text-brand-black ${lexend.className}`}
                >
                  {item.title}
                </p>
                <p className="mt-1.5 text-xs text-brand-black/60 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </Spec>
      </div>

      <Spec
        title="Writing style"
        usage="Copy is part of the design system. The rules below apply to every heading, label and paragraph on the site."
        surface="platinum"
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              rule: "UK English",
              detail: "Colour, organisation, licence, recognise, catalogue.",
            },
            {
              rule: "Plain language",
              detail:
                "Written for an operations manager, not a developer. Technical terms are explained the moment they appear.",
            },
            {
              rule: "No padding",
              detail:
                "If it fits in one sentence, it gets one sentence. Nothing is inflated to sound more impressive.",
            },
            {
              rule: "Concrete over abstract",
              detail:
                "Real scenarios and real numbers rather than general claims about efficiency.",
            },
          ].map((item) => (
            <div
              key={item.rule}
              className="bg-white rounded-xl border border-gray-200 p-5"
            >
              <p
                className={`text-sm font-semibold text-brand-teal ${lexend.className}`}
              >
                {item.rule}
              </p>
              <p className="mt-2 text-xs text-brand-black/60 leading-relaxed">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </Spec>
    </DSSection>
  );
}

import Link from "next/link";
import { lexend } from "@/app/fonts";
import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import SecondaryCTA from "@/components/common/SecondaryCTA";
import Buttons from "@/components/resources/design-system/Buttons";
import Cards from "@/components/resources/design-system/Cards";
import ContentBlocks from "@/components/resources/design-system/ContentBlocks";
import Forms from "@/components/resources/design-system/Forms";
import Foundations from "@/components/resources/design-system/Foundations";
import Layouts from "@/components/resources/design-system/Layouts";
import Motion from "@/components/resources/design-system/Motion";
import Navigation from "@/components/resources/design-system/Navigation";
import Principles from "@/components/resources/design-system/Principles";

const pageUrl =
  "https://www.thebeardeddeveloper.co.uk/resources/design-system";

export const metadata = {
  title: "Design System & UI Component Library | The Bearded Developer",
  description:
    "The design system behind our site - colour tokens, typography, components, layouts and motion, each shown as a live example with the code behind it.",
  keywords:
    "design system, ui component library, front end development, next.js development, tailwind css, web design essex, ui design uk, react components",
  alternates: {
    canonical: pageUrl,
  },
  robots: "index, follow",
  openGraph: {
    title: "Design System & UI Component Library | The Bearded Developer",
    description:
      "Colour tokens, typography, components, layouts and motion - the full design system behind our site, documented with live examples and the code behind them.",
    url: pageUrl,
    siteName: "The Bearded Developer",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "The Bearded Developer design system",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Design System & UI Component Library | The Bearded Developer",
    description:
      "Colour tokens, typography, components, layouts and motion - documented with live examples and the code behind them.",
    images: ["/twitter-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Design System & UI Component Library",
  description:
    "The design system behind The Bearded Developer - colour tokens, typography, components, layouts and motion, documented with live examples.",
  url: pageUrl,
  inLanguage: "en-GB",
  isPartOf: {
    "@type": "WebSite",
    name: "The Bearded Developer",
    url: "https://www.thebeardeddeveloper.co.uk",
  },
  about: [
    { "@type": "Thing", name: "Design system" },
    { "@type": "Thing", name: "User interface design" },
    { "@type": "Thing", name: "Front-end web development" },
  ],
  author: {
    "@type": "Organization",
    name: "The Bearded Developer",
    url: "https://www.thebeardeddeveloper.co.uk",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.thebeardeddeveloper.co.uk",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Resources",
      item: "https://www.thebeardeddeveloper.co.uk/resources",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Design System",
      item: pageUrl,
    },
  ],
};

const contents = [
  { id: "colour", label: "Colour" },
  { id: "typography", label: "Typography" },
  { id: "layout", label: "Layout & spacing" },
  { id: "shape", label: "Shape & elevation" },
  { id: "motion", label: "Motion" },
  { id: "buttons", label: "Buttons & actions" },
  { id: "navigation", label: "Navigation" },
  { id: "cards", label: "Cards & surfaces" },
  { id: "forms", label: "Forms & inputs" },
  { id: "content", label: "Content blocks" },
  { id: "layouts", label: "Page layouts" },
  { id: "principles", label: "Principles" },
];

const relatedServices = [
  {
    href: "/services/bespoke",
    label: "Bespoke Software",
    detail: "custom web applications built on this foundation",
  },
  {
    href: "/services/shopify",
    label: "Shopify",
    detail: "theme development and custom storefronts",
  },
  {
    href: "/services/bigcommerce",
    label: "BigCommerce",
    detail: "API-first builds and platform migrations",
  },
  {
    href: "/services/ai",
    label: "AI",
    detail: "practical tooling with an interface people will actually use",
  },
];

const relatedReading = [
  {
    href: "/resources/articles/making-your-website-accessible",
    label: "Making Your Website Accessible: A Practical Guide to WCAG Compliance",
  },
  {
    href: "/resources/articles/web-app-automation",
    label: "How to Automate Your Business Processes with Custom Web Applications",
  },
  {
    href: "/resources/articles/optimizing-your-shopify-store",
    label: "Optimizing Your Shopify Store for Speed and Conversions",
  },
  {
    href: "/resources/components",
    label: "Pre-built components you can copy into your own project",
  },
];

const stats = [
  { value: "8", label: "Brand colour tokens" },
  { value: "2", label: "Typefaces" },
  { value: "40+", label: "Documented components" },
  { value: "1", label: "Codebase they all come from" },
];

export default function DesignSystemPage() {
  return (
    <div className="my-20">
      <Section>
        <Container>
          {/* Hero */}
          <section className="md:p-10 relative">
            <p
              className={`text-xs font-semibold uppercase tracking-[0.18em] text-brand-teal ${lexend.className}`}
            >
              The Bearded Developer
            </p>
            <h1
              className={`mt-4 text-5xl md:text-6xl font-bold ${lexend.className}`}
            >
              Design System
            </h1>
            <p className="text-lg md:text-xl font-semibold mt-5 md:mt-10 max-w-2xl">
              Every colour, typeface, component and interaction used across this
              site, in one place.
            </p>
            <p className="mt-5 max-w-2xl text-brand-black/70 leading-relaxed">
              This is not a mood board. Each example below is the real component,
              rendered from the same code that runs the live site, with the
              classes and behaviour that produce it written alongside. It exists
              so you can judge the standard of the design and front-end work
              without picking through a website page by page.
            </p>
            <p className="mt-4 max-w-2xl text-brand-black/70 leading-relaxed">
              It is built with Next.js and Tailwind CSS v4, and it is the same
              approach we take to{" "}
              <Link
                href="/services/bespoke"
                className="text-brand-teal hover:text-brand-blue font-semibold underline underline-offset-2 transition-colors"
              >
                bespoke web application work
              </Link>{" "}
              and to{" "}
              <Link
                href="/services/shopify"
                className="text-brand-teal hover:text-brand-blue font-semibold underline underline-offset-2 transition-colors"
              >
                Shopify
              </Link>{" "}
              and{" "}
              <Link
                href="/services/bigcommerce"
                className="text-brand-teal hover:text-brand-blue font-semibold underline underline-offset-2 transition-colors"
              >
                BigCommerce
              </Link>{" "}
              storefronts. Hover, focus and scroll the examples — the states and
              animations are live.
            </p>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-gray-200 bg-white p-5"
                >
                  <p
                    className={`text-3xl font-bold text-brand-teal ${lexend.className}`}
                  >
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-brand-black/50 leading-snug">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Contents */}
            <nav aria-label="Design system contents" className="mt-10">
              <p
                className={`text-xs font-semibold uppercase tracking-[0.15em] text-brand-teal mb-4 ${lexend.className}`}
              >
                Contents
              </p>
              <ul className="flex flex-wrap gap-2">
                {contents.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className={`inline-block px-4 py-2 rounded-full text-xs font-semibold bg-brand-platinum text-brand-blue hover:bg-brand-teal hover:text-white transition-colors duration-300 ${lexend.className}`}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </section>

          <div className="md:px-10">
            <Foundations />
            <Motion />
            <Buttons />
            <Navigation />
            <Cards />
            <Forms />
            <ContentBlocks />
            <Layouts />
            <Principles />
          </div>

          {/* Where this work applies */}
          <section className="md:px-10 py-16 border-t border-gray-200">
            <h2
              className={`text-3xl md:text-4xl font-bold text-brand-black ${lexend.className}`}
            >
              Where this work applies
            </h2>
            <p className="mt-4 text-base text-brand-black/60 leading-relaxed max-w-3xl">
              A design system is only worth building if it makes the real work
              faster and more consistent. These are the services it feeds into,
              and some further reading if you want to see how we think.
            </p>

            <div className="mt-10 grid md:grid-cols-2 gap-5">
              <div className="rounded-xl bg-green-50 p-6">
                <h3
                  className={`text-base font-semibold text-green-900 ${lexend.className}`}
                >
                  Services
                </h3>
                <ul className="mt-4 space-y-2.5 text-sm">
                  {relatedServices.map((service) => (
                    <li key={service.href}>
                      <Link
                        href={service.href}
                        className="text-blue-600 hover:underline font-semibold"
                      >
                        {service.label}
                      </Link>
                      <span className="text-brand-black/60">
                        {" "}
                        — {service.detail}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl bg-blue-50 p-6">
                <h3
                  className={`text-base font-semibold text-blue-900 ${lexend.className}`}
                >
                  Related reading
                </h3>
                <ul className="mt-4 space-y-2.5 text-sm">
                  {relatedReading.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-blue-600 hover:underline font-semibold"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <SecondaryCTA
            title="Like What You See?"
            description="If this is the standard you want for your own site or product, let's talk about what you're building."
          />
        </Container>
      </Section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </div>
  );
}

import LetsTalk from "@/components/sections/LetsTalk";
import Technologies from "@/components/sections/Technologies";
import Clients from "@/components/sections/Clients";
import Title from "@/components/sections/Title";
import Services from "@/components/sections/Services";
import MessageUs from "@/components/sections/MessageUs";
import Reviews from "@/components/sections/Reviews";
import About from "@/components/sections/About";

export const metadata = {
  title:
    "The Bearded Developer | Shopify & Web Development in Braintree, Essex",
  description:
    "Professional web development and Shopify solutions based in Braintree, Essex, serving businesses nationwide. Your trusted technology partner across the UK. Expert e-commerce development, custom web applications, and digital solutions for local and national clients.",
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "The Bearded Developer",
    image: "https://www.thebeardeddeveloper.co.uk/img/beard-black.png",
    description:
      "Professional web development and Shopify solutions based in Braintree, Essex, serving businesses nationwide across the UK.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Braintree",
      addressRegion: "Essex",
      addressCountry: "GB",
    },
    areaServed: [
      {
        "@type": "State",
        name: "Essex",
      },
      {
        "@type": "State",
        name: "London",
      },
      {
        "@type": "State",
        name: "Hertfordshire",
      },
      {
        "@type": "State",
        name: "Suffolk",
      },
      {
        "@type": "State",
        name: "Cambridgeshire",
      },
      {
        "@type": "Country",
        name: "United Kingdom",
      },
    ],
    serviceType: [
      "Web Development",
      "Shopify Development",
      "E-commerce Solutions",
      "Custom Web Applications",
    ],
    url: "https://www.thebeardeddeveloper.co.uk",
  };

  return (
    <page>
      <svg
        style={{ width: 0, height: 0, position: "absolute" }}
        aria-hidden="true"
        focusable="false"
      >
        <linearGradient id="my-cool-gradient" x2="1" y2="1">
          <stop offset="0%" stopColor="#99f6e4" />
          <stop offset="100%" stopColor="#028090" />
        </linearGradient>
      </svg>

      <Title />
      <About />
      <Services />
      <MessageUs />
      <Clients />
      <Technologies />
      <Reviews />
      <LetsTalk />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </page>
  );
}

import LetsTalk from "@/components/sections/LetsTalk";
import Technologies from "@/components/sections/Technologies";
import Clients from "@/components/sections/Clients";
import Title from "@/components/sections/Title";
import Services from "@/components/sections/Services";
import MessageUs from "@/components/sections/MessageUs";
import Reviews from "@/components/sections/Reviews";
import About from "@/components/sections/About";

export const metadata = {
  title: "Shopify & BigCommerce Developer UK | NetSuite Integration Expert",
  description:
    "Senior Shopify & BigCommerce developer specialising in custom integrations, NetSuite connectivity & API development. Proven £100k+ cost savings. Free consultation available.",
  openGraph: {
    title: "Shopify & BigCommerce Developer UK | NetSuite Integration Expert",
    description:
      "Senior Shopify & BigCommerce developer specialising in custom integrations, NetSuite connectivity & API development. Proven £100k+ cost savings. Free consultation available.",
    type: "website",
    url: "https://www.thebeardeddeveloper.co.uk/",
    images: [
      {
        url: "https://www.thebeardeddeveloper.co.uk/img/the-bearded-developer.png",
        width: 1200,
        height: 630,
        alt: "Shopify & BigCommerce Developer UK",
      },
    ],
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "The Bearded Developer",
    image:
      "https://www.thebeardeddeveloper.co.uk/img/the-bearded-developer.png",
    description:
      "Senior Shopify & BigCommerce developer specialising in custom integrations, NetSuite connectivity & API development for UK businesses.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Braintree",
      addressRegion: "Essex",
      addressCountry: "GB",
      postalCode: "CM7 9NF",
      streetAddress: "Braintree, Essex",
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
      "Shopify Development",
      "BigCommerce Development",
      "NetSuite Integration",
      "E-commerce Custom Development",
      "Laravel Development",
      "React Development",
      "API Integration",
      "Bespoken Web Development",
    ],
    url: "https://www.thebeardeddeveloper.co.uk",
    // Add these for better local SEO
    telephone: "07545960983",
    email: "jamesplant@gmail.com",
    priceRange: "£££",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0", // If you have reviews
      reviewCount: "5", // Update with actual count
    },
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

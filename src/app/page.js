import LetsTalk from "@/components/sections/LetsTalk";
import Technologies from "@/components/sections/Technologies";
import Clients from "@/components/sections/Clients";
import Title from "@/components/sections/Title";
import Services from "@/components/sections/Services";
import MessageUs from "@/components/sections/MessageUs";
import Reviews from "@/components/sections/Reviews";
import About from "@/components/sections/About";

export const metadata = {
  title: "The Bearded Developer",
  description:
    "Your Web Application Development and Technology Partner. Experts in Shopify, Celigo and NetSuite, along with a wide range of other technologies.",
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    name: "The Bearded Developer | Web Development and Technology Partner",
    image: "https://www.thebeardeddeveloper.co.uk/images/beard-black.png",
    description:
      "Your Web Application Development and Technology Partner. Experts in Shopify, Celigo and NetSuite, along with a wide range of other technologies.",
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

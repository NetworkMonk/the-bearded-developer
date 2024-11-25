import Nav from "@/components/common/Nav";
import Footer from "@/components/sections/Footer";
import LetsTalk from "@/components/sections/LetsTalk";
import Technologies from "@/components/sections/Technologies";
import Clients from "@/components/sections/Clients";
import Title from "@/components/sections/Title";
import Services from "@/components/sections/Services";
import MessageUs from "@/components/sections/MessageUs";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    name: "The Bearded Developer | Web Development and Technology Partner",
    image: "https://www.thebeardeddeveloper.co.uk/images/beard-black.png",
    description: "Your Web Application Development and Technology Partner.",
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

      <Nav />
      <Title />
      <Services />
      <MessageUs />
      <Clients />
      <Technologies />
      <LetsTalk />
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </page>
  );
}

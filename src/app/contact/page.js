import Section from "@/components/common/Section";
import LetsTalk from "@/components/sections/LetsTalk";

export const metadata = {
  title:
    "Contact Us | The Bearded Developer | Shopify, Web Development, and Technology Solutions",
  description:
    "Contact us for a free consultation. Your friendly web development and technology partner. Offering Shopify solutions, web development services, and tech insights. Let's build something great together!",
};

export default function ProjectsPage() {
  return (
    <div id="projects" className="my-20">
      <Section>
        <LetsTalk />
      </Section>
    </div>
  );
}

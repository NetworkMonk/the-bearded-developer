import Section from "@/components/common/Section";
import LetsTalk from "@/components/sections/LetsTalk";

export const metadata = {
  title: "Contact Us | The Bearded Developer",
  description:
    "Contact us for a free consultation. We specialize in Shopify development, custom themes, and app integrations.",
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

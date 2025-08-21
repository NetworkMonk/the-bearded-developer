import { lexend } from "@/app/fonts";

import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import HeroButton from "@/components/resources/example-components/HeroButton";
import PreviewPanel from "@/components/resources/example-components/PreviewPanel";
// import CollapsibleCode from "./CollapsibleCode";

export const metadata = {
  title:
    "Components | The Bearded Developer | Shopify, Web Development, and Technology Solutions",
  description:
    "See some of our pre built components and templates for web development that you can use in your applications",
};

export default function ProjectsPage() {
  const exampleMarkup = `<a href="">
  <button className="animated-button animated-button-fill min-w-48 dark:text-white hover:text-brand-black uppercase font-semibold transition-all duration-500 transform lg:scale-125">
    CLICK ME
  </button>
</a>`;
  const exampleStyle = `@keyframes pulseAnimation {
  0% {
    -webkit-box-shadow: 0px 2.5px 70px 3px rgba(125, 226, 209, 0.3);
    -moz-box-shadow: 0px 2.5px 70px 3px rgba(125, 226, 209, 0.3);
    box-shadow: 0px 2.5px 70px 3px rgba(125, 226, 209, 0.3);
    }
  25% {
    -webkit-box-shadow: 0px 2.5px 30px 3px rgba(125, 226, 209, 0.2);
    -moz-box-shadow: 0px 2.5px 30px 3px rgba(125, 226, 209, 0.2);
    box-shadow: 0px 2.5px 30px 3px rgba(125, 226, 209, 0.2);
    }
  50% {
    -webkit-box-shadow: 0px 2.5px 60px 3px rgba(125, 226, 209, 0.3);
    -moz-box-shadow: 0px 2.5px 60px 3px rgba(125, 226, 209, 0.3);
    box-shadow: 0px 2.5px 60px 3px rgba(125, 226, 209, 0.3);
    }
  75% {
    -webkit-box-shadow: 0px 2.5px 25px 3px rgba(125, 226, 209, 0.2);
    -moz-box-shadow: 0px 2.5px 25px 3px rgba(125, 226, 209, 0.2);
    box-shadow: 0px 2.5px 25px 3px rgba(125, 226, 209, 0.2);
    }
  100% {
    -webkit-box-shadow: 0px 2.5px 70px 3px rgba(125, 226, 209, 0.3);
    -moz-box-shadow: 0px 2.5px 70px 3px rgba(125, 226, 209, 0.3);
    box-shadow: 0px 2.5px 70px 3px rgba(125, 226, 209, 0.3);
    }
}

.animated-button {
  cursor: pointer;
  position: relative;
  display: inline-block;
  width: 120px;
  height: $icon-size;
  margin-left: $icon-size/5;
  margin-right: $icon-size/5;
  border-radius: $icon-size * $border-radius;
  overflow: hidden;
  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    transition: all 0.25s ease;
    border-radius: $icon-size * $border-radius;
  }
  i {
    position: relative;
    color: $white;
    font-size: $icon-size/2;
    margin-top: $icon-size/4;
    transition: all 0.25s ease;
  }

  -webkit-box-shadow: 0px 2.5px 50px 3px rgba(125, 226, 209, 0.25);
  -moz-box-shadow: 0px 2.5px 50px 3px rgba(125, 226, 209, 0.25);
  box-shadow: 0px 2.5px 50px 3px rgba(125, 226, 209, 0.25);

  animation: pulseAnimation 4s ease-in-out;
  animation-iteration-count: infinite;
  animation-play-state: running;
}

.animated-button-fill {
  &::before {
    transition-duration: 0.5s;
    box-shadow: inset 0 0 0 3px $green;
    z-index: -1;
  }
  &:hover::before {
    box-shadow: inset 0 0 0 $icon-size $green;
    z-index: -1;
  }
}`;

  return (
    <div className="my-20">
      <Section>
        <Container>
          <section className="md:p-10 relative">
            <h1
              className={`text-5xl md:text-6xl font-bold ${lexend.className}`}
            >
              Components
            </h1>
            <p className="text-lg md:text-xl font-semibold mt-5 md:mt-10">
              Browse our collection of pre-built components and templates for
              web development. These resources are designed to help you
              kickstart your projects with ease and efficiency.
            </p>
            <div className="my-20 flex flex-col gap-10">
              <div>
                <h2
                  className={`text-4xl md:text-5xl font-bold ${lexend.className}`}
                >
                  React Components
                </h2>
                <p className="mt-5">
                  Explore our collection of reusable React components that you
                  can use in your applications. We use the tailwindcss library
                  for styling and custom css where specified.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-10">
                <HeroButton />
              </div>
            </div>
          </section>
        </Container>
      </Section>
    </div>
  );
}

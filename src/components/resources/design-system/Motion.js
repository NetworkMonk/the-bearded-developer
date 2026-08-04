import { lexend } from "@/app/fonts";
import InView from "@/components/animated/InView";
import Blocks from "@/components/animated/Blocks";
import DSSection from "./DSSection";
import Spec from "./Spec";

const entrances = [
  {
    name: "in-up",
    from: "translateY(50px)",
    usage: "The default. Headings, paragraphs, cards, grid items.",
    demo: "in-up",
  },
  {
    name: "in-right",
    from: "translateX(-50px)",
    usage: "Content that reads in from the left edge.",
    demo: "in-right",
  },
  {
    name: "in-up-right",
    from: "translate(-50px, 50px)",
    usage: "Diagonal entrance for section headings and achievement blocks.",
    demo: "in-up-right",
  },
];

const durations = [
  { value: "150ms", usage: "Menu items and tag hovers — near-instant feedback" },
  { value: "200ms", usage: "Nav links, input focus, icon wells" },
  { value: "300ms", usage: "Cards, tiles and accordion expansion" },
  { value: "500ms", usage: "Buttons and the nav bar hiding on scroll" },
  { value: "1000ms", usage: "Entrance animations" },
  { value: "4000ms", usage: "The hero button pulse, looping" },
];

export default function Motion() {
  return (
    <DSSection
      id="motion"
      eyebrow="Foundations"
      title="Motion"
      description="Animation is used for one job: bringing content in as you reach it. Entrance animations are defined as paused CSS animations and only start once an ancestor picks up the in-view class from an intersection observer, so nothing animates off-screen and nothing runs twice at once."
    >
      <Spec
        title="Entrance animations"
        usage="Scroll this panel out of view and back to replay them. Each class sets animation-play-state: paused; a single rule — .in-view .in-up — releases them. Stagger is applied per element with an inline animationDelay rather than nth-child rules."
        surface="platinum"
        code={".in-up {\n  animation: animation-in-up 1s both paused;\n  animation-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);\n}\n\n.in-view .in-up { animation-play-state: running; }"}
      >
        <InView>
          <div className="grid md:grid-cols-3 gap-4">
            {entrances.map((entrance, index) => (
              <div
                key={entrance.name}
                className={`bg-white rounded-xl border border-gray-200 p-5 ${entrance.demo}`}
                style={{ animationDelay: `${index * 0.25}s` }}
              >
                <code className="text-xs text-brand-teal">.{entrance.name}</code>
                <p className="mt-2 text-[11px] font-mono text-brand-black/40">
                  from {entrance.from}
                </p>
                <p className="mt-2 text-xs text-brand-black/60 leading-relaxed">
                  {entrance.usage}
                </p>
              </div>
            ))}
          </div>
        </InView>
      </Spec>

      <Spec
        title="Stagger"
        usage="Grids cascade by deriving the delay from the item index. Testimonials use index / 3 + 2, technology tiles use index / 9 + 1 — the divisor sets how tightly the cascade bunches up."
        surface="platinum"
        code={"style={{ animationDelay: `${index / 9 + 1}s` }}"}
      >
        <InView>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
            {[...Array(12)].map((_, index) => (
              <div
                key={index}
                className="in-up aspect-square rounded-lg bg-brand-teal/15 border border-brand-teal/30 flex items-center justify-center"
                style={{ animationDelay: `${index / 9 + 0.2}s` }}
              >
                <span className="text-[10px] font-mono text-brand-teal/70">
                  {index}
                </span>
              </div>
            ))}
          </div>
        </InView>
      </Spec>

      <Spec
        title="Decorative blocks"
        usage="A background flourish for dark panels. Six columns of bars drop in from above with a slight overshoot on the way down, staggered across roughly four seconds and held at 10% opacity so they never compete with the content in front of them."
        surface="dark"
        padding="p-0"
        code={"@keyframes animation-block {\n  0%   { opacity: 0; transform: translateY(-150px); }\n  25%  { opacity: 1; }\n  50%  { transform: translateY(5px); }\n  100% { opacity: 1; transform: translateY(0px); }\n}"}
      >
        <div className="relative h-48 overflow-hidden">
          <Blocks />
        </div>
      </Spec>

      <div className="mt-10 first:mt-0 grid md:grid-cols-2 gap-5">
        <Spec
          title="Duration scale"
          wrapperClass="h-full flex flex-col"
          usage="Durations map to how far the element has to travel and how much the user is waiting on it. Anything under a pointer resolves in 300ms or less."
        >
          <div className="space-y-2">
            {durations.map((duration) => (
              <div
                key={duration.value}
                className="flex items-baseline gap-4 py-2 border-b border-gray-100 last:border-b-0"
              >
                <code className="w-20 shrink-0 text-xs text-brand-teal">
                  {duration.value}
                </code>
                <span className="text-xs text-brand-black/60 leading-relaxed">
                  {duration.usage}
                </span>
              </div>
            ))}
          </div>
        </Spec>

        <Spec
          title="Easing"
          wrapperClass="h-full flex flex-col"
          usage="Two custom curves are registered in the theme layer alongside the entrance curve baked into the keyframe classes."
          code={"--ease-fluid:  cubic-bezier(0.3, 0, 0, 1);\n--ease-snappy: cubic-bezier(0.2, 0, 0, 1);\n\n// entrance\ncubic-bezier(0.455, 0.03, 0.515, 0.955);"}
        >
          <div className="space-y-4">
            {[
              { name: "ease-fluid", curve: "cubic-bezier(0.3, 0, 0, 1)" },
              { name: "ease-snappy", curve: "cubic-bezier(0.2, 0, 0, 1)" },
              {
                name: "entrance",
                curve: "cubic-bezier(0.455, 0.03, 0.515, 0.955)",
              },
            ].map((easing) => (
              <div key={easing.name}>
                <p
                  className={`text-sm font-semibold text-brand-black ${lexend.className}`}
                >
                  {easing.name}
                </p>
                <code className="text-[11px] text-brand-black/50">
                  {easing.curve}
                </code>
              </div>
            ))}
          </div>
        </Spec>
      </div>
    </DSSection>
  );
}

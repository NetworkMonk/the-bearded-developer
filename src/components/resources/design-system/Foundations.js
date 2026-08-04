import { lexend, montserrat } from "@/app/fonts";
import DSSection from "./DSSection";
import Spec from "./Spec";

const brandColours = [
  {
    name: "Brand Black",
    token: "brand-black",
    hex: "#131515",
    swatch: "bg-brand-black",
    onDark: true,
    usage: "Hero and footer backgrounds, primary body text, headings.",
  },
  {
    name: "Brand Blue",
    token: "brand-blue",
    hex: "#006D77",
    swatch: "bg-brand-blue",
    onDark: true,
    usage: "Solid buttons, active pagination, gradient start on CTA panels.",
  },
  {
    name: "Brand Teal",
    token: "brand-teal",
    hex: "#028090",
    swatch: "bg-brand-teal",
    onDark: true,
    usage: "The primary accent. Link hovers, eyebrow labels, icon badges, rules.",
  },
  {
    name: "Brand Light Blue",
    token: "brand-light-blue",
    hex: "#83C5BE",
    swatch: "bg-brand-light-blue",
    onDark: false,
    usage: "Gradient end on CTA panels, accent text on dark backgrounds.",
  },
  {
    name: "Brand Platinum",
    token: "brand-platinum",
    hex: "#EDF6F9",
    swatch: "bg-brand-platinum",
    onDark: false,
    usage: "Hover states in menus, quiet section fills, button hover text.",
  },
  {
    name: "Brand Orange",
    token: "brand-orange",
    hex: "#E29578",
    swatch: "bg-brand-orange",
    onDark: false,
    usage: "Reserved warm accent. Used sparingly against the teal family.",
  },
  {
    name: "Brand Light Orange",
    token: "brand-light-orange",
    hex: "#FFDDD2",
    swatch: "bg-brand-light-orange",
    onDark: false,
    usage: "Soft warm fill for tinted panels.",
  },
  {
    name: "Brand White",
    token: "brand-white",
    hex: "#FFFFFF",
    swatch: "bg-brand-white border border-gray-200",
    onDark: false,
    usage: "Card surfaces, nav bar, the default page background.",
  },
];

const semanticColours = [
  {
    name: "Warning",
    swatch: "bg-red-50 border-l-4 border-red-500",
    text: "text-red-900",
    classes: "bg-red-50 border-l-4 border-red-500",
    usage: "Problems, failure symptoms, what goes wrong.",
  },
  {
    name: "Informational",
    swatch: "bg-blue-50 border-l-4 border-blue-500",
    text: "text-blue-900",
    classes: "bg-blue-50",
    usage: "Diagnostic steps, how-to instructions, neutral guidance.",
  },
  {
    name: "Positive",
    swatch: "bg-green-50 border-l-4 border-green-500",
    text: "text-green-900",
    classes: "bg-green-50",
    usage: "Quick fixes, delivered outcomes, recommendations.",
  },
  {
    name: "Caution",
    swatch: "bg-yellow-50 border-l-4 border-yellow-500",
    text: "text-yellow-900",
    classes: "bg-yellow-50 border-l-4 border-yellow-500",
    usage: "When to call in help, things to keep an eye on.",
  },
  {
    name: "Secondary",
    swatch: "bg-orange-50 border-l-4 border-orange-500",
    text: "text-orange-900",
    classes: "bg-orange-50",
    usage: "Moderate severity, secondary recommendations.",
  },
  {
    name: "Comparison",
    swatch: "bg-purple-50 border-l-4 border-purple-500",
    text: "text-purple-900",
    classes: "bg-purple-50",
    usage: "Contrast panels when weighing one platform against another.",
  },
  {
    name: "Neutral",
    swatch: "bg-gray-50 border-l-4 border-gray-400",
    text: "text-gray-900",
    classes: "bg-gray-50",
    usage: "Background context and supporting detail.",
  },
];

const typeScale = [
  {
    label: "Display",
    sample: "Build better",
    classes: "text-4xl md:text-5xl xl:text-6xl font-bold leading-[1.06] tracking-tight",
    note: "Homepage hero headline only. One per page.",
  },
  {
    label: "Page title",
    sample: "Design System",
    classes: "text-5xl md:text-6xl font-bold",
    note: "The h1 on every top-level page and the h2 on homepage sections.",
  },
  {
    label: "Article title",
    sample: "Celigo error troubleshooting",
    classes: "text-4xl md:text-5xl font-bold",
    note: "Article body h2, one step down from a page title.",
  },
  {
    label: "Section heading",
    sample: "How the sync actually works",
    classes: "text-2xl font-semibold",
    note: "Article h3 and card titles. Always paired with mt-8.",
  },
  {
    label: "Lead paragraph",
    sample: "So, what can we do for you?",
    classes: "text-lg md:text-xl font-semibold",
    note: "Sits directly under a page title. Montserrat, not Lexend.",
  },
  {
    label: "Body",
    sample: "Helping UK businesses build better e-commerce stores.",
    classes: "text-base leading-relaxed",
    note: "Default running text. Montserrat.",
  },
  {
    label: "Small",
    sample: "Practical insights, no noise and no fluff.",
    classes: "text-sm text-brand-black/60",
    note: "Supporting copy, card body text, sidebar content.",
  },
];

const toneRamp = [
  { class: "text-brand-black", label: "100%", usage: "Headings" },
  { class: "text-brand-black/80", label: "80%", usage: "Emphasised body" },
  { class: "text-brand-black/70", label: "70%", usage: "Body and nav links" },
  { class: "text-brand-black/60", label: "60%", usage: "Supporting copy" },
  { class: "text-brand-black/50", label: "50%", usage: "Captions, meta" },
  { class: "text-brand-black/40", label: "40%", usage: "Labels, muted icons" },
];

const radii = [
  { name: "rounded-md", px: "6px", box: "rounded-md", usage: "Pagination cells" },
  { name: "rounded-lg", px: "8px", box: "rounded-lg", usage: "Callouts, inputs, panels" },
  { name: "rounded-xl", px: "12px", box: "rounded-xl", usage: "Tiles, menus, fact panels" },
  { name: "rounded-2xl", px: "16px", box: "rounded-2xl", usage: "Cards, mega menu, CTA blocks" },
  { name: "rounded-full", px: "pill", box: "rounded-full", usage: "Every button and tag" },
];

const shadows = [
  { name: "shadow-sm", box: "shadow-sm", usage: "Resting cards and tiles" },
  { name: "shadow-md", box: "shadow-md", usage: "Nav on scroll, card hover" },
  { name: "shadow-lg", box: "shadow-lg", usage: "Service cards" },
  { name: "shadow-xl", box: "shadow-xl", usage: "CTA panels, dropdowns" },
  { name: "shadow-2xl", box: "shadow-2xl", usage: "Services mega menu" },
];

export default function Foundations() {
  return (
    <>
      <DSSection
        id="colour"
        eyebrow="Foundations"
        title="Colour"
        description="Eight brand tokens defined as CSS custom properties in the Tailwind theme layer. The palette is deliberately cool and narrow: a teal family carries almost everything, with a single warm accent held in reserve. Nothing on the site uses a colour outside this list except the semantic callout scale below."
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {brandColours.map((colour) => (
            <div
              key={colour.token}
              className="rounded-xl border border-gray-200 bg-white overflow-hidden"
            >
              <div
                className={`h-24 flex items-end p-4 ${colour.swatch}`}
              >
                <span
                  className={`text-[11px] font-mono ${
                    colour.onDark ? "text-white/70" : "text-brand-black/50"
                  }`}
                >
                  {colour.hex}
                </span>
              </div>
              <div className="p-4">
                <p
                  className={`text-sm font-semibold text-brand-black ${lexend.className}`}
                >
                  {colour.name}
                </p>
                <code className="mt-1 block text-[11px] text-brand-teal">
                  {colour.token}
                </code>
                <p className="mt-2 text-xs text-brand-black/50 leading-relaxed">
                  {colour.usage}
                </p>
              </div>
            </div>
          ))}
        </div>

        <Spec
          title="Semantic callout scale"
          usage="Long-form content uses a fixed seven-colour scale so a reader learns the meaning once and carries it across every article. Colours are never mixed between meanings."
          surface="light"
        >
          <div className="grid md:grid-cols-2 gap-4">
            {semanticColours.map((item) => (
              <div
                key={item.name}
                className={`p-4 rounded-lg ${item.swatch}`}
              >
                <p
                  className={`text-sm font-semibold ${item.text} ${lexend.className}`}
                >
                  {item.name}
                </p>
                <p className={`mt-1 text-xs ${item.text} opacity-80 leading-relaxed`}>
                  {item.usage}
                </p>
                <code className={`mt-2 block text-[10px] ${item.text} opacity-60`}>
                  {item.classes}
                </code>
              </div>
            ))}
          </div>
        </Spec>

        <Spec
          title="Text tone ramp"
          usage="Rather than a set of grey tokens, secondary text is expressed as opacity against brand-black. This keeps text harmonious on both white and tinted surfaces."
        >
          <div className="space-y-2">
            {toneRamp.map((tone) => (
              <div key={tone.class} className="flex items-baseline gap-4">
                <span className="w-12 shrink-0 text-[11px] font-mono text-brand-black/40">
                  {tone.label}
                </span>
                <span className={`text-sm ${tone.class}`}>
                  The quick brown fox jumps over the lazy dog
                </span>
                <span className="ml-auto hidden md:block text-[11px] text-brand-black/40">
                  {tone.usage}
                </span>
              </div>
            ))}
          </div>
        </Spec>
      </DSSection>

      <DSSection
        id="typography"
        eyebrow="Foundations"
        title="Typography"
        description="Two typefaces, both variable weight and loaded through next/font with display: swap. Lexend carries every heading, label and button; Montserrat carries running text. The split is strict — a heading never uses Montserrat and a paragraph never uses Lexend."
      >
        <div className="grid md:grid-cols-2 gap-5">
          <div className="rounded-xl border border-gray-200 bg-white p-8">
            <p
              className={`text-xs font-semibold uppercase tracking-[0.15em] text-brand-teal ${lexend.className}`}
            >
              Headings
            </p>
            <p className={`mt-4 text-5xl font-bold ${lexend.className}`}>Lexend</p>
            <p className={`mt-4 text-2xl ${lexend.className}`}>
              Aa Bb Cc Dd Ee Ff Gg
            </p>
            <p className={`mt-1 text-2xl ${lexend.className}`}>0123456789</p>
            <p className="mt-6 text-sm text-brand-black/60 leading-relaxed">
              Variable weight, latin subset. Applied per-element via{" "}
              <code className="text-xs text-brand-teal">lexend.className</code>{" "}
              rather than a global rule, so headings opt in explicitly.
            </p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-8">
            <p
              className={`text-xs font-semibold uppercase tracking-[0.15em] text-brand-teal ${lexend.className}`}
            >
              Body
            </p>
            <p className={`mt-4 text-5xl font-bold ${montserrat.className}`}>
              Montserrat
            </p>
            <p className={`mt-4 text-2xl ${montserrat.className}`}>
              Aa Bb Cc Dd Ee Ff Gg
            </p>
            <p className={`mt-1 text-2xl ${montserrat.className}`}>0123456789</p>
            <p className="mt-6 text-sm text-brand-black/60 leading-relaxed">
              Set on the <code className="text-xs text-brand-teal">body</code>{" "}
              element in the root layout, so it is the default for everything
              that does not ask for Lexend.
            </p>
          </div>
        </div>

        <Spec
          title="Type scale"
          usage="Sizes are responsive pairs rather than a fixed ramp — most headings step up once at the md breakpoint and again at xl for the hero."
        >
          <div className="divide-y divide-gray-100">
            {typeScale.map((step) => (
              <div key={step.label} className="py-6 first:pt-0 last:pb-0">
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <span
                    className={`text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-teal ${lexend.className}`}
                  >
                    {step.label}
                  </span>
                  <span className="text-[11px] text-brand-black/40 font-mono">
                    {step.classes}
                  </span>
                </div>
                <p
                  className={`mt-3 text-brand-black ${step.classes} ${
                    step.label === "Body" ||
                    step.label === "Small" ||
                    step.label === "Lead paragraph"
                      ? montserrat.className
                      : lexend.className
                  }`}
                >
                  {step.sample}
                </p>
                <p className="mt-2 text-xs text-brand-black/50">{step.note}</p>
              </div>
            ))}
          </div>
        </Spec>

        <Spec
          title="Eyebrow label"
          usage="A single recurring device: small, uppercase, wide-tracked Lexend in teal. It sits above headings, labels footer columns, marks partner panels and titles form fields. Tracking varies between 0.12em and 0.18em depending on how much room it has."
          code={"text-xs font-semibold uppercase tracking-[0.15em] text-brand-teal ${lexend.className}"}
        >
          <div className="space-y-4">
            <p
              className={`text-xs font-semibold uppercase tracking-[0.15em] text-brand-teal ${lexend.className}`}
            >
              What we do
            </p>
            <p
              className={`text-xs font-semibold uppercase tracking-[0.12em] text-brand-teal ${lexend.className}`}
            >
              Shopify &amp; Celigo Certified
            </p>
            <p
              className={`text-xs font-semibold uppercase tracking-[0.18em] text-brand-black/40 ${lexend.className}`}
            >
              Free consultation
            </p>
          </div>
        </Spec>
      </DSSection>

      <DSSection
        id="layout"
        eyebrow="Foundations"
        title="Layout & spacing"
        description="Every page is built from the same two primitives. Container fixes the measure, Section provides vertical rhythm, and an inner md:p-10 gives content room to breathe on desktop while staying edge-to-edge on mobile."
      >
        <Spec
          title="Container and Section"
          usage="Container caps content at max-w-6xl (1152px) and applies a uniform 20px gutter. Section is a positioned wrapper that establishes stacking context for decorative blobs and waves."
          surface="platinum"
          code={`// Container\nmax-w-6xl mx-auto p-5\n\n// Section\nrelative my-5\n\n// Inner content block\nmd:p-10 relative z-20`}
        >
          <div className="rounded-lg border-2 border-dashed border-brand-teal/40 p-5">
            <p className="text-[11px] font-mono text-brand-teal/70">
              Container — max-w-6xl mx-auto p-5
            </p>
            <div className="mt-3 rounded-lg border-2 border-dashed border-brand-black/20 p-5">
              <p className="text-[11px] font-mono text-brand-black/40">
                Section — relative my-5
              </p>
              <div className="mt-3 rounded-lg bg-white border border-gray-200 p-6">
                <p className="text-[11px] font-mono text-brand-black/40">
                  Content — md:p-10
                </p>
                <p className="mt-2 text-sm text-brand-black/60">
                  Page content sits here.
                </p>
              </div>
            </div>
          </div>
        </Spec>

        <Spec
          title="Vertical rhythm"
          usage="Spacing is deliberately coarse. Major page sections are separated by my-20, headings are followed by mt-5 on mobile and mt-10 from md up, and paragraphs within a block use mt-4 or mt-6."
        >
          <div className="space-y-3 text-sm">
            {[
              { token: "my-20", px: "80px", usage: "Between major page sections" },
              { token: "mt-10", px: "40px", usage: "Title to lead paragraph (desktop)" },
              { token: "mt-8", px: "32px", usage: "Before an article section heading" },
              { token: "mt-6", px: "24px", usage: "Between article paragraphs" },
              { token: "mt-4", px: "16px", usage: "Within a callout or card" },
              { token: "gap-4 / gap-10", px: "16 / 40px", usage: "Tight grids / content grids" },
            ].map((row) => (
              <div
                key={row.token}
                className="flex items-center gap-4 py-2 border-b border-gray-100 last:border-b-0"
              >
                <code className="w-28 shrink-0 text-xs text-brand-teal">
                  {row.token}
                </code>
                <span className="w-20 shrink-0 text-xs text-brand-black/40 font-mono">
                  {row.px}
                </span>
                <span className="text-xs text-brand-black/60">{row.usage}</span>
              </div>
            ))}
          </div>
        </Spec>

        <Spec
          title="Breakpoints"
          usage="Standard Tailwind breakpoints plus a custom 3xl at 120rem. The navigation is the one component that switches at lg rather than md, to make room for the extra top-level item."
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { name: "sm", value: "640px" },
              { name: "md", value: "768px" },
              { name: "lg", value: "1024px" },
              { name: "xl", value: "1280px" },
              { name: "2xl", value: "1536px" },
              { name: "3xl", value: "1920px" },
            ].map((bp) => (
              <div
                key={bp.name}
                className="rounded-lg bg-brand-platinum px-4 py-3 text-center"
              >
                <p
                  className={`text-sm font-semibold text-brand-blue ${lexend.className}`}
                >
                  {bp.name}
                </p>
                <p className="text-[11px] text-brand-black/50 font-mono mt-0.5">
                  {bp.value}
                </p>
              </div>
            ))}
          </div>
        </Spec>
      </DSSection>

      <DSSection
        id="shape"
        eyebrow="Foundations"
        title="Shape & elevation"
        description="Corner radius signals scale: the larger the surface, the softer the corner. Buttons and tags are always fully rounded. Elevation is used sparingly — most surfaces are separated by a hairline border rather than a shadow."
      >
        <div className="mt-10 first:mt-0 grid md:grid-cols-2 gap-5">
          <Spec title="Radius" padding="p-6" wrapperClass="h-full flex flex-col">
            <div className="space-y-3">
              {radii.map((r) => (
                <div key={r.name} className="flex items-center gap-4">
                  <div
                    className={`w-14 h-14 shrink-0 bg-brand-teal/15 border border-brand-teal/30 ${r.box}`}
                  />
                  <div className="min-w-0">
                    <code className="text-xs text-brand-teal">{r.name}</code>
                    <p className="text-xs text-brand-black/50 mt-0.5">
                      {r.usage}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Spec>

          <Spec
            title="Elevation"
            surface="platinum"
            padding="p-6"
            wrapperClass="h-full flex flex-col"
          >
            <div className="space-y-4">
              {shadows.map((s) => (
                <div key={s.name} className="flex items-center gap-4">
                  <div
                    className={`w-14 h-14 shrink-0 rounded-xl bg-white ${s.box}`}
                  />
                  <div className="min-w-0">
                    <code className="text-xs text-brand-teal">{s.name}</code>
                    <p className="text-xs text-brand-black/50 mt-0.5">
                      {s.usage}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Spec>
        </div>

        <Spec
          title="Borders"
          usage="A hairline border does most of the work of separating surfaces. Three weights are in use across the whole site."
        >
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="rounded-xl border border-gray-100 p-5">
              <code className="text-xs text-brand-teal">border-gray-100</code>
              <p className="mt-2 text-xs text-brand-black/50">
                Dividers inside menus and cards.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 p-5">
              <code className="text-xs text-brand-teal">border-gray-200</code>
              <p className="mt-2 text-xs text-brand-black/50">
                The default card and tile outline.
              </p>
            </div>
            <div className="rounded-xl border border-brand-teal/40 p-5">
              <code className="text-xs text-brand-teal">border-brand-teal/40</code>
              <p className="mt-2 text-xs text-brand-black/50">
                Hover and active state on interactive tiles.
              </p>
            </div>
          </div>
        </Spec>
      </DSSection>
    </>
  );
}

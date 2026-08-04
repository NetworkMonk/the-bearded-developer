import { lexend } from "@/app/fonts";
import DSSection from "./DSSection";
import Spec from "./Spec";

const callouts = [
  {
    tone: "Warning",
    heading: "Signs your integration is failing",
    box: "bg-red-50 p-6 rounded-lg border-l-4 border-red-500",
    title: "text-red-900",
    body: "text-red-800",
    items: [
      "Orders appearing in your ERP hours after they were placed",
      "Stock levels that disagree between systems",
    ],
  },
  {
    tone: "Informational",
    heading: "How to check it yourself",
    box: "bg-blue-50 p-6 rounded-lg",
    title: "text-blue-900",
    body: "text-blue-800",
    items: [
      "Open the flow dashboard and filter to the last 24 hours",
      "Compare the record count against your order report",
    ],
  },
  {
    tone: "Positive",
    heading: "The quick fix",
    box: "bg-green-50 p-6 rounded-lg",
    title: "text-green-900",
    body: "text-green-800",
    items: [
      "Re-run the failed batch from the error console",
      "Set an alert so the next failure reaches you first",
    ],
  },
  {
    tone: "Caution",
    heading: "When to call someone in",
    box: "bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500",
    title: "text-yellow-900",
    body: "text-yellow-800",
    items: [
      "The same error returns after every re-run",
      "You are editing a flow you did not build",
    ],
  },
];

export default function ContentBlocks() {
  return (
    <DSSection
      id="content"
      eyebrow="Components"
      title="Content blocks"
      description="Long-form articles are built from a small kit of repeating blocks. The colour of a block carries meaning, so a reader who has read one article already knows what a yellow panel is about to tell them before they read a word of it."
    >
      <Spec
        title="Callout boxes"
        usage="A tinted fill, an optional 4px left border for the two tones that need urgency, a Lexend heading in the 900 shade and a bulleted list in the 800 shade at text-sm. Nothing else varies between them."
        code={"bg-[tone]-50 p-6 rounded-lg border-l-4 border-[tone]-500\n// heading: font-semibold text-[tone]-900\n// list:    list-disc list-inside space-y-2 text-[tone]-800 text-sm"}
      >
        <div className="grid md:grid-cols-2 gap-5">
          {callouts.map((callout) => (
            <div key={callout.tone}>
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-black/40 mb-2">
                {callout.tone}
              </p>
              <div className={callout.box}>
                <h4
                  className={`font-semibold ${lexend.className} ${callout.title}`}
                >
                  {callout.heading}
                </h4>
                <ul
                  className={`mt-3 list-disc list-inside space-y-2 text-sm ${callout.body}`}
                >
                  {callout.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Spec>

      <Spec
        title="Outcome callout"
        usage="A compact variant used on project entries. The heading is set in small uppercase rather than sentence case, which stops it competing with the project title above it."
        code={"bg-green-50 p-5 rounded-lg border-l-4 border-green-500\n// heading: font-semibold text-green-900 text-sm uppercase tracking-wide"}
      >
        <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-500">
          <h4
            className={`font-semibold text-green-900 text-sm uppercase tracking-wide mb-2 ${lexend.className}`}
          >
            What we delivered
          </h4>
          <p className="text-green-800 text-sm leading-relaxed">
            A rebuilt order sync that cut manual re-keying to zero and gave the
            operations team a single place to see failures.
          </p>
        </div>
      </Spec>

      <Spec
        title="Pull quote"
        usage="A 4px teal left border with generous left padding and an oversized serif quotation mark at 25% opacity above the text. Used for the founder introduction and anywhere a first-person voice needs setting apart."
        code={"border-l-4 border-brand-teal pl-6 md:pl-8\n// glyph: text-5xl text-brand-teal/25 font-serif select-none"}
      >
        <blockquote className="border-l-4 border-brand-teal pl-6 md:pl-8">
          <span
            className="block text-5xl leading-none text-brand-teal/25 select-none pointer-events-none font-serif mb-2"
            aria-hidden="true"
          >
            &ldquo;
          </span>
          <p className="text-lg md:text-xl leading-relaxed text-brand-black/80 font-medium">
            I&apos;ve been building websites and solving tech problems for over
            20 years from my base here in Braintree, Essex.
          </p>
        </blockquote>
      </Spec>

      <Spec
        title="Secondary call to action"
        usage="The panel that closes almost every page. A blue-to-light-blue gradient carrying an oversized heading, one supporting line capped at max-w-xl, and a ghost button. Title, description, label and destination are all overridable, so the same component adapts per page."
        padding="p-0"
        code={"bg-gradient-to-br from-brand-blue to-brand-light-blue rounded-xl shadow-xl p-10 text-white"}
      >
        <div className="p-4 md:p-6 bg-gray-50">
          <div className="bg-brand-blue bg-gradient-to-br from-brand-blue to-brand-light-blue rounded-xl shadow-xl p-10 text-white">
            <h4
              className={`text-3xl sm:text-4xl font-bold ${lexend.className}`}
            >
              Need Something Custom?
            </h4>
            <p className="text-lg font-semibold mt-5 max-w-xl">
              Let&apos;s work together to create a custom solution that meets
              your needs. Contact us today.
            </p>
            <p className="mt-10">
              <button
                type="button"
                className="outline outline-2 outline-white bg-transparent text-white hover:bg-white hover:text-brand-blue px-6 py-2 rounded-full transition-colors duration-500 uppercase font-semibold cursor-pointer"
              >
                Let&apos;s talk
              </button>
            </p>
          </div>
        </div>
      </Spec>

      <Spec
        title="Message banner"
        usage="A shorter, denser CTA for mid-page. Three layers build the surface: a three-stop gradient, a white dot-grid at 10% opacity, and a soft bloom in the top-right corner. Content sits above them on z-10."
        padding="p-0"
        code={"// layer 1\nbg-gradient-to-br from-brand-blue via-brand-teal to-brand-light-blue\n\n// layer 2\nradial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px) / 22px 22px @ opacity-10\n\n// layer 3\nradial bloom, -top-20 -right-20, w-64 h-64, opacity-20"}
      >
        <div className="p-4 md:p-6 bg-gray-50">
          <div className="relative overflow-hidden rounded-2xl shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-blue via-brand-teal to-brand-light-blue" />
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
                backgroundSize: "22px 22px",
              }}
            />
            <div
              className="absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-20"
              style={{
                background:
                  "radial-gradient(circle, rgba(255,255,255,0.6) 0%, transparent 70%)",
              }}
            />
            <div className="relative z-10 px-8 py-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-10 text-white">
              <div className="flex-1">
                <p
                  className={`text-xs font-semibold uppercase tracking-[0.18em] text-white/60 mb-2 ${lexend.className}`}
                >
                  Free consultation
                </p>
                <p
                  className={`text-2xl md:text-3xl font-bold leading-snug ${lexend.className}`}
                >
                  Ready to move your project forward?
                </p>
                <p className="mt-2 text-sm text-white/70">
                  Don&apos;t wait - message us today.
                </p>
              </div>
              <div className="shrink-0">
                <button
                  type="button"
                  className={`inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white text-brand-blue font-semibold text-sm uppercase tracking-wide hover:bg-brand-platinum transition-colors duration-300 shadow-md cursor-pointer ${lexend.className}`}
                >
                  Let&apos;s talk
                </button>
              </div>
            </div>
          </div>
        </div>
      </Spec>

      <Spec
        title="Article call to action"
        usage="The in-article variant, on a blue-to-purple gradient that deliberately sits outside the brand palette so it reads as an interruption rather than part of the article."
        padding="p-0"
      >
        <div className="p-4 md:p-6 bg-gray-50">
          <div className="bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg p-8 text-white">
            <h4 className="text-2xl font-bold mb-4">
              Struggling with a Celigo integration?
            </h4>
            <p className="mb-6">
              We offer managed support retainers that keep your flows running
              and your team out of the error console.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                type="button"
                className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-block cursor-pointer"
              >
                Celigo services
              </button>
              <button
                type="button"
                className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors inline-block border-2 border-white cursor-pointer"
              >
                Get in touch
              </button>
            </div>
          </div>
        </div>
      </Spec>

      <Spec
        title="Achievement heading"
        usage="A heading with a gradient underline that hugs the text rather than spanning the column, because the h4 is set inline-block."
        code={"// h4 is inline-block; the rule is a block span inside it\nbg-gradient-to-br from-teal-200 to-brand-teal h-1 rounded-full block"}
      >
        <h4
          className={`text-xl font-semibold mb-3 tracking-wide inline-block ${lexend.className}`}
        >
          Multi-warehouse stock sync
          <span className="bg-gradient-to-br from-teal-200 to-brand-teal h-1 rounded-full block" />
        </h4>
      </Spec>
    </DSSection>
  );
}

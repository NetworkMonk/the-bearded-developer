import { lexend } from "@/app/fonts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import DSSection from "./DSSection";
import Spec from "./Spec";
import ToggleDemo from "./ToggleDemo";

const inputClass =
  "w-full rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/50 px-4 py-3 text-sm focus:outline-none focus:border-white focus:ring-1 focus:ring-white/50 transition-colors duration-200 mb-5";

const labelClass =
  "block text-xs font-semibold uppercase tracking-[0.14em] text-white/80 mb-1.5";

export default function Forms() {
  return (
    <DSSection
      id="forms"
      eyebrow="Components"
      title="Forms & inputs"
      description="There is one form pattern on the site and it lives on a teal gradient card. Fields are translucent white over that gradient rather than solid boxes, which keeps the card reading as a single object. The whole form swaps for a confirmation panel on submit rather than showing an inline message."
    >
      <Spec
        title="Contact form"
        usage="Labels are the teal eyebrow treatment inverted to white. Inputs use a 20% white fill with a 30% border, brightening to a solid white border and a soft ring on focus. The textarea is fixed at min-h-36 with resize disabled so the card cannot be pulled out of shape."
        padding="p-0"
        code={
          "// input\nw-full rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/50\npx-4 py-3 text-sm focus:outline-none focus:border-white focus:ring-1 focus:ring-white/50\n\n// label\nblock text-xs font-semibold uppercase tracking-[0.14em] text-white/80 mb-1.5"
        }
        meta={[
          { label: "Card", value: "bg-gradient-to-br from-brand-blue to-brand-light-blue" },
          { label: "Radius", value: "rounded-2xl, p-8, shadow-xl" },
          { label: "States", value: "idle → pending → success | error" },
        ]}
      >
        <div className="p-6 md:p-8 bg-gray-50">
          <div className="max-w-md mx-auto bg-gradient-to-br from-brand-blue to-brand-light-blue rounded-2xl p-8 shadow-xl text-white">
            <label className={`${labelClass} ${lexend.className}`}>Name</label>
            <input
              type="text"
              className={inputClass}
              placeholder="Your name"
              readOnly
            />
            <label className={`${labelClass} ${lexend.className}`}>
              Email Address
            </label>
            <input
              type="email"
              className={inputClass}
              placeholder="Your email address"
              readOnly
            />
            <label className={`${labelClass} ${lexend.className}`}>
              What would you like to talk about?
            </label>
            <textarea
              className={`${inputClass} min-h-24 resize-none`}
              placeholder="Write about your requirements..."
              readOnly
            />
            <div className="flex justify-center mt-2">
              <button
                type="button"
                className="outline outline-2 outline-white bg-transparent text-white hover:bg-white hover:text-brand-blue px-6 py-2 rounded-full transition-colors duration-500 uppercase font-semibold cursor-pointer"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </Spec>

      <div className="mt-10 first:mt-0 grid lg:grid-cols-3 gap-5">
        <Spec
          title="Pending state"
          padding="p-0"
          surface="light"
          wrapperClass="h-full flex flex-col"
        >
          <div className="p-6 bg-gray-50 h-full">
            <div className="bg-gradient-to-br from-brand-blue to-brand-light-blue rounded-2xl p-8 shadow-xl text-white h-full flex items-center justify-center">
              <button
                type="button"
                disabled
                className="animate-pulse outline outline-2 outline-white bg-white text-brand-blue px-6 py-2 rounded-full uppercase font-semibold cursor-default text-sm"
              >
                Sending Message...
              </button>
            </div>
          </div>
        </Spec>

        <Spec
          title="Success state"
          padding="p-0"
          surface="light"
          wrapperClass="h-full flex flex-col"
        >
          <div className="p-6 bg-gray-50 h-full">
            <div className="bg-gradient-to-br from-brand-blue to-brand-light-blue rounded-2xl p-8 shadow-xl text-white h-full">
              <div className="py-6 text-center">
                <div className="w-12 h-12 rounded-full bg-brand-teal/20 flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-brand-light-blue"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p
                  className={`text-lg font-semibold text-white ${lexend.className}`}
                >
                  Message sent
                </p>
                <p className="mt-2 text-sm text-white/70">
                  We&apos;ll get back to you as soon as possible.
                </p>
              </div>
            </div>
          </div>
        </Spec>

        <Spec
          title="Error state"
          padding="p-0"
          surface="light"
          wrapperClass="h-full flex flex-col"
        >
          <div className="p-6 bg-gray-50 h-full">
            <div className="bg-gradient-to-br from-brand-blue to-brand-light-blue rounded-2xl p-8 shadow-xl text-white h-full">
              <div className="py-6 text-center">
                <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-red-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
                <p
                  className={`text-lg font-semibold text-white ${lexend.className}`}
                >
                  Something went wrong
                </p>
                <p className="mt-2 text-sm text-white/70">
                  Please try again or contact us directly.
                </p>
              </div>
            </div>
          </div>
        </Spec>
      </div>

      <div className="mt-10 first:mt-0 grid md:grid-cols-2 gap-5">
        <Spec
          title="Toggle switch"
          wrapperClass="h-full flex flex-col"
          usage="Built on Headless UI's Switch, so keyboard and screen reader behaviour comes from the library rather than being hand-rolled. Off is gray-200, on is brand-blue, and a locked-on switch drops to 50% opacity. Try them."
          code={"h-6 w-11 rounded-full bg-gray-200 data-[checked]:bg-brand-blue transition-colors duration-200\n// knob: size-5 rounded-full bg-white group-data-[checked]:translate-x-5"}
        >
          <ToggleDemo />
        </Spec>

        <Spec
          title="Contact method pills"
          wrapperClass="h-full flex flex-col"
          usage="Not a form control, but the fallback beside every form. A circular teal-tinted icon well inverts to solid teal on hover while the label underlines — the whole row is one target."
          code={"// icon well\nw-8 h-8 rounded-full bg-brand-teal/10 text-brand-teal\ngroup-hover:bg-brand-teal group-hover:text-white transition-all duration-200"}
        >
          <div className="space-y-3">
            {[
              { icon: faEnvelope, label: "info@thebeardeddeveloper.co.uk" },
              { icon: faPhone, label: "+44 (0) 330 043 5977" },
            ].map((method) => (
              <span
                key={method.label}
                className="flex items-center gap-3 group w-fit cursor-pointer"
              >
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-teal/10 text-brand-teal group-hover:bg-brand-teal group-hover:text-white transition-all duration-200 shrink-0">
                  <FontAwesomeIcon icon={method.icon} className="w-3.5 h-3.5" />
                </span>
                <span className="text-sm text-brand-black/70 group-hover:text-brand-teal transition-colors duration-200 group-hover:underline underline-offset-2">
                  {method.label}
                </span>
              </span>
            ))}
          </div>
        </Spec>
      </div>
    </DSSection>
  );
}

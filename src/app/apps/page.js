import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import { lexend } from "@/app/fonts";
import InView from "@/components/animated/InView";
import Link from "next/link";

export const metadata = {
  title: "Apps & Products | The Bearded Developer",
  description:
    "Software products built and maintained by The Bearded Developer. Live SaaS apps solving real problems — from family organisation to neurodivergent work management.",
};

const apps = [
  {
    slug: "family-board",
    name: "Family Board",
    tagline: "A subscription SaaS with live paying users",
    description:
      "A real-time kiosk dashboard built as a subscription SaaS product. Live, self-service sign-up, paying users, and running on Cloudflare's edge infrastructure. Demonstrates the full lifecycle of shipping and maintaining a consumer product.",
    status: "Live",
    statusColour: "bg-green-100 text-green-800",
    url: "https://familyboard.app",
    technologies: ["Next.js", "TypeScript", "Cloudflare"],
  },
  {
    slug: "nflo",
    name: "NFLO",
    tagline: "Task management and time tracking SaaS",
    description:
      "A task management and time tracking application built as a SaaS product. Focused on simplicity and reducing friction — users capture work, track time, and monitor progress without the overhead of complex project management tools.",
    status: "Live — Free Beta",
    statusColour: "bg-blue-100 text-blue-800",
    url: "https://nflo.app",
    technologies: ["Next.js", "TypeScript", "Cloudflare"],
  },
];

export default function AppsPage() {
  return (
    <div className="my-20">
      <Section>
        <Container>
          <InView>
            <section className="md:p-10 relative">
              <h2 className={`text-5xl md:text-6xl font-bold in-up ${lexend.className}`}>
                Apps &amp; Products
              </h2>
              <p className="text-lg md:text-xl font-semibold mt-5 md:mt-10 in-up max-w-xl" style={{ animationDelay: ".25s" }}>
                Alongside client work, I build and ship my own SaaS products. Both are live, with real users — proof that I understand what it takes to design, build, and maintain a product end to end.
              </p>
            </section>

            <section className="md:p-10 mt-12 grid md:grid-cols-2 gap-8">
              {apps.map((app) => (
                <div key={app.slug} className="bg-white border border-gray-200 rounded-xl p-8 flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className={`text-2xl font-bold ${lexend.className}`}>{app.name}</h3>
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${app.statusColour}`}>
                      {app.status}
                    </span>
                  </div>
                  <p className={`text-sm font-semibold opacity-70 mb-3 ${lexend.className}`}>{app.tagline}</p>
                  <p className="text-sm text-gray-600 leading-relaxed flex-grow">{app.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {app.technologies.map((tech) => (
                      <span key={tech} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex gap-3">
                    <Link
                      href={`/apps/${app.slug}`}
                      className="text-sm font-semibold text-blue-600 hover:underline"
                    >
                      Learn more →
                    </Link>
                    {app.url && (
                      <a
                        href={app.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-gray-500 hover:text-gray-700 hover:underline"
                      >
                        Visit site →
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </section>

            <section className="md:p-10 mt-16">
              <div className="bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl p-10 text-white">
                <h3 className={`text-3xl font-bold mb-4 ${lexend.className}`}>
                  Need a product built?
                </h3>
                <p className="mb-6 max-w-xl">
                  Building and running these products means I understand the full picture — not just writing code, but handling subscriptions, user onboarding, infrastructure, and ongoing maintenance. If you need a bespoke product built, I know what that actually involves.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/services/bespoke"
                    className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-block"
                  >
                    Bespoke development
                  </Link>
                  <Link
                    href="/contact"
                    className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors inline-block border-2 border-white"
                  >
                    Get in touch
                  </Link>
                </div>
              </div>
            </section>
          </InView>
        </Container>
      </Section>
    </div>
  );
}

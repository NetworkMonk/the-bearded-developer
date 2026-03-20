import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import { lexend } from "@/app/fonts";
import InView from "@/components/animated/InView";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Family Board — Family Organisation Dashboard | The Bearded Developer",
  description:
    "Family Board is a kiosk-style tablet dashboard for busy families. Shared calendar, goal tracking, and a points and rewards system. Built with Next.js and Cloudflare.",
};

export default function FamilyBoardPage() {
  return (
    <div className="my-20">
      <Section>
        <Container>
          <InView>
            {/* Hero */}
            <section className="md:p-10">
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                  Live
                </span>
                <span className="text-sm text-gray-500">familyboard.app</span>
              </div>
              <h2 className={`text-5xl md:text-6xl font-bold ${lexend.className}`}>
                Family Board
              </h2>
              <p className={`text-xl md:text-2xl font-semibold mt-4 opacity-70 ${lexend.className}`}>
                A subscription SaaS product — live, self-service, paying users
              </p>
              <p className="text-lg mt-6 max-w-2xl">
                Family Board is a real-time dashboard SaaS built and maintained as a live product. Users sign up, subscribe, and manage their own accounts without any involvement from me. It demonstrates the full product lifecycle: architecture decisions, subscription billing, user onboarding, and ongoing maintenance at scale.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://familyboard.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-teal text-white px-6 py-3 rounded-full font-semibold hover:bg-brand-blue transition-colors inline-block"
                >
                  Visit Family Board
                </a>
                <Link
                  href="/apps"
                  className="text-sm font-semibold text-gray-500 hover:text-gray-700 self-center hover:underline"
                >
                  ← Back to all apps
                </Link>
              </div>
            </section>

            {/* Main dashboard screenshot */}
            <section className="md:px-10 mt-8">
              <Image
                src="/img/apps/family-board/home.familyboard.app_.png"
                alt="Family Board dashboard showing the family calendar, goals, and member points on a tablet"
                width={1280}
                height={800}
                className="w-full rounded-xl shadow-lg border border-gray-100"
                priority
              />
            </section>

            {/* What it demonstrates */}
            <section className="md:p-10 mt-8">
              <h3 className={`text-3xl font-bold ${lexend.className}`}>What building this demonstrates</h3>
              <p className="mt-4 text-gray-700 max-w-2xl">
                Shipping a SaaS product is a different challenge to delivering a client project. There is no handover. You own the infrastructure, the billing, the user experience, and every problem that emerges after launch. Family Board has been running continuously with real paying users, which means I have worked through the things that only surface in production: subscription edge cases, onboarding drop-off, real-time data sync under load, and keeping costs manageable as usage grows.
              </p>
              <p className="mt-4 text-gray-700 max-w-2xl">
                That experience directly benefits client projects. When I advise on architecture, billing integration, or deployment strategy, it comes from having made those decisions with my own money on the line.
              </p>
            </section>

            {/* Points & Rewards */}
            <section className="md:p-10 mt-4">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <h3 className={`text-2xl font-bold ${lexend.className}`}>Points &amp; Rewards</h3>
                  <p className="mt-4 text-gray-700">
                    Each family member has their own points tracker with a visible progress bar. Use it as a reward chart for children, a weight loss tracker for adults, a habit-building tool — whatever your family needs it to be.
                  </p>
                  <p className="mt-3 text-gray-700">
                    Points are easy to award and the display is clear enough that even young children can see their own progress at a glance.
                  </p>
                </div>
                <div>
                  <Image
                    src="/img/apps/family-board/Screenshot 2026-03-16 at 22.30.38.png"
                    alt="Family Board points tracker showing progress bars for each family member"
                    width={1060}
                    height={870}
                    className="w-full rounded-xl shadow-md border border-gray-100"
                  />
                </div>
              </div>
            </section>

            {/* Goals */}
            <section className="md:p-10 mt-4">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div className="order-2 md:order-1">
                  <Image
                    src="/img/apps/family-board/Screenshot 2026-03-16 at 22.31.07.png"
                    alt="Family Board goals panel showing a checklist of family goals"
                    width={430}
                    height={320}
                    className="w-full rounded-xl shadow-md border border-gray-100"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <h3 className={`text-2xl font-bold ${lexend.className}`}>Goal Tracking</h3>
                  <p className="mt-4 text-gray-700">
                    Set shared family goals and track them together. Goals sit on the main dashboard so they&apos;re always in view — not buried in an app nobody opens.
                  </p>
                  <p className="mt-3 text-gray-700">
                    Tick things off as you go. Completed goals are shown with a strikethrough so progress is always visible.
                  </p>
                </div>
              </div>
            </section>

            {/* Capability callout */}
            <section className="md:p-10 mt-4">
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400 max-w-2xl">
                <h4 className={`font-semibold ${lexend.className} text-blue-900`}>Real-time data across multiple users</h4>
                <p className="mt-2 text-sm text-blue-800">
                  The dashboard reflects live data for multiple account members simultaneously — calendar events, goal progress, and points — without page refreshes. This required careful thinking about data architecture, caching strategy, and keeping Cloudflare D1 queries efficient at scale.
                </p>
              </div>
            </section>

            {/* Tech stack */}
            <section className="md:p-10 mt-4">
              <h3 className={`text-3xl font-bold ${lexend.className}`}>How it&apos;s built</h3>
              <p className="mt-4 text-gray-700 max-w-2xl">
                Family Board is built entirely on modern web technologies, deployed on Cloudflare&apos;s global edge network for speed and reliability.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {["Next.js", "TypeScript", "Cloudflare Workers", "Cloudflare D1", "Cloudflare R2"].map((tech) => (
                  <span key={tech} className="bg-gray-100 text-gray-700 text-sm px-4 py-2 rounded-full font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section className="md:p-10 mt-4">
              <div className="bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl p-10 text-white">
                <h3 className={`text-2xl font-bold mb-4 ${lexend.className}`}>
                  Need a web application or SaaS product built?
                </h3>
                <p className="mb-6 max-w-xl">
                  I build bespoke web applications for UK businesses — internal tools, customer-facing products, and anything in between. If you want someone who has shipped and maintained a live product, not just delivered to a brief, get in touch.
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

            <section className="md:p-10 mt-4">
              <Link href="/apps" className="text-sm font-semibold text-blue-600 hover:underline">
                ← View all apps
              </Link>
            </section>
          </InView>
        </Container>
      </Section>
    </div>
  );
}

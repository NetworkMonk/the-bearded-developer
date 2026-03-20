import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import { lexend } from "@/app/fonts";
import InView from "@/components/animated/InView";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "NFLO — Work Management for Neurodivergent Minds | The Bearded Developer",
  description:
    "NFLO is a focused work management tool built for neurodivergent solo contractors. Track tasks, manage time, and actually feel good about what you get done.",
};

export default function NfloPage() {
  return (
    <div className="my-20">
      <Section>
        <Container>
          <InView>
            {/* Hero */}
            <section className="md:p-10">
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                  Live — Free Beta
                </span>
                <span className="text-sm text-gray-500">nflo.app</span>
              </div>
              <h2 className={`text-5xl md:text-6xl font-bold ${lexend.className}`}>
                NFLO
              </h2>
              <p className={`text-xl md:text-2xl font-semibold mt-4 opacity-70 ${lexend.className}`}>
                Task management and time tracking SaaS — free while in active development
              </p>
              <p className="text-lg mt-6 max-w-2xl">
                NFLO is a task management and time tracking SaaS built around the principle that most project tools do too much. It helps solo contractors capture work, prioritise their day, track time against tasks, and maintain a clear picture of progress — without the overhead of a full project management platform.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://nflo.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-teal text-white px-6 py-3 rounded-full font-semibold hover:bg-brand-blue transition-colors inline-block"
                >
                  Visit NFLO
                </a>
                <Link
                  href="/apps"
                  className="text-sm font-semibold text-gray-500 hover:text-gray-700 self-center hover:underline"
                >
                  ← Back to all apps
                </Link>
              </div>
            </section>

            {/* Main screenshot */}
            <section className="md:px-10 mt-8">
              <Image
                src="/img/apps/nflo/projects.webp"
                alt="NFLO projects view showing tasks with status, priority, due dates and points"
                width={1214}
                height={430}
                className="w-full rounded-xl shadow-lg border border-gray-800"
                priority
              />
            </section>

            {/* The product */}
            <section className="md:p-10 mt-8">
              <h3 className={`text-3xl font-bold ${lexend.className}`}>The product</h3>
              <p className="mt-4 text-gray-700 max-w-2xl">
                Most project tools are built for teams with dedicated project managers. Solo contractors — developers, consultants, freelancers — often end up using a fraction of the features while paying for everything else. NFLO is scoped specifically for a single user who needs to manage their own work efficiently.
              </p>
              <p className="mt-4 text-gray-700 max-w-2xl">
                It is currently free while active development continues. The focus is on getting the core experience right before introducing paid tiers.
              </p>
            </section>

            {/* Stat widgets */}
            <section className="md:p-10 mt-4">
              <h3 className={`text-3xl font-bold ${lexend.className}`}>At a glance</h3>
              <p className="mt-4 text-gray-700 max-w-2xl">
                The dashboard surfaces the metrics that matter most — how long you&apos;ve worked today, your current streak, and your points for the month. Small things, but they add up to a genuine sense of momentum.
              </p>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <Image
                  src="/img/apps/nflo/time.webp"
                  alt="NFLO time today widget showing 1 hour 45 minutes logged"
                  width={566}
                  height={100}
                  className="w-full rounded-lg border border-gray-700"
                />
                <Image
                  src="/img/apps/nflo/streak.webp"
                  alt="NFLO streak widget showing a 2-day working streak"
                  width={566}
                  height={100}
                  className="w-full rounded-lg border border-gray-700"
                />
                <Image
                  src="/img/apps/nflo/points.webp"
                  alt="NFLO points widget showing 60 points earned in March 2026"
                  width={566}
                  height={100}
                  className="w-full rounded-lg border border-gray-700"
                />
              </div>
            </section>

            {/* Features */}
            <section className="md:p-10 mt-4">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className={`font-semibold text-blue-900 ${lexend.className}`}>Task management</h4>
                  <p className="mt-2 text-sm text-blue-800">
                    Capture tasks against projects, set priorities and due dates, and maintain a clear picture of what needs to happen and when.
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className={`font-semibold text-green-900 ${lexend.className}`}>Time tracking</h4>
                  <p className="mt-2 text-sm text-green-800">
                    Log time against tasks without friction. See how your time is distributed across projects and clients at a glance.
                  </p>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h4 className={`font-semibold text-purple-900 ${lexend.className}`}>Progress visibility</h4>
                  <p className="mt-2 text-sm text-purple-800">
                    Streaks, daily time totals, and points give a clear signal of momentum — useful for anyone who works independently without external accountability.
                  </p>
                </div>
              </div>
            </section>

            {/* Beta callout */}
            <section className="md:p-10 mt-4">
              <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 max-w-2xl">
                <h4 className={`font-semibold ${lexend.className} text-yellow-900`}>Currently in free beta</h4>
                <p className="mt-2 text-sm text-yellow-800">
                  NFLO is live and available to use for free while key features are still being built. If you&apos;re a neurodivergent solo contractor and want to try it, you&apos;re welcome to sign up. Feedback from real users is actively shaping the roadmap.
                </p>
              </div>
            </section>

            {/* Tech stack */}
            <section className="md:p-10 mt-4">
              <h3 className={`text-3xl font-bold ${lexend.className}`}>How it&apos;s built</h3>
              <p className="mt-4 text-gray-700 max-w-2xl">
                NFLO runs on the same stack as Family Board — Next.js with TypeScript, deployed on Cloudflare&apos;s edge infrastructure. Fast, reliable, and easy to maintain as a solo developer.
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
                  Need a custom workflow tool for your team?
                </h3>
                <p className="mb-6 max-w-xl">
                  I build bespoke internal tools and applications for businesses. If your team has a workflow that off-the-shelf software doesn&apos;t quite fit, that&apos;s exactly the kind of problem I enjoy solving.
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

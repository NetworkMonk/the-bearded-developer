import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import { lexend } from "@/app/fonts";
import InView from "@/components/animated/InView";
import Link from "next/link";

export const metadata = {
  title: "BP Diary — Blood Pressure Tracking App | The Bearded Developer",
  description:
    "BP Diary is a mobile app for tracking blood pressure readings and generating detailed reports for your GP. Coming soon to iOS and Android.",
};

export default function BpDiaryPage() {
  return (
    <div className="my-20">
      <Section>
        <Container>
          <InView>
            {/* Hero */}
            <section className="md:p-10">
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full">
                  In Development
                </span>
                <span className="text-sm text-gray-500">iOS &amp; Android</span>
              </div>
              <h2 className={`text-5xl md:text-6xl font-bold ${lexend.className}`}>
                BP Diary
              </h2>
              <p className={`text-xl md:text-2xl font-semibold mt-4 opacity-70 ${lexend.className}`}>
                Track your blood pressure. Report with confidence.
              </p>
              <p className="text-lg mt-6 max-w-2xl">
                BP Diary is a mobile app for people who need to monitor their blood pressure regularly. Log readings, spot patterns over time, and generate clear, detailed reports that you can share directly with your GP or consultant.
              </p>
              <div className="mt-8">
                <Link
                  href="/apps"
                  className="text-sm font-semibold text-gray-500 hover:text-gray-700 hover:underline"
                >
                  ← Back to all apps
                </Link>
              </div>
            </section>

            {/* What it does */}
            <section className="md:p-10 mt-4">
              <h3 className={`text-3xl font-bold ${lexend.className}`}>What it does</h3>
              <p className="mt-4 text-gray-700 max-w-2xl">
                Many people are asked by their doctor to monitor their blood pressure at home. The problem is that most apps for this are either too basic to be useful, or too complicated to bother with. BP Diary sits in the middle — simple enough to use daily, detailed enough to actually help your medical team.
              </p>

              <div className="mt-8 grid md:grid-cols-2 gap-6 max-w-2xl">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className={`font-semibold text-blue-900 ${lexend.className}`}>Easy logging</h4>
                  <p className="mt-2 text-sm text-blue-800">
                    Record systolic, diastolic, and pulse readings in seconds. Add notes for context — medication taken, exercise, stress levels.
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className={`font-semibold text-green-900 ${lexend.className}`}>Detailed reports</h4>
                  <p className="mt-2 text-sm text-green-800">
                    Generate reports formatted for clinical use. Share directly with your GP or print before an appointment.
                  </p>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h4 className={`font-semibold text-purple-900 ${lexend.className}`}>Trend visualisation</h4>
                  <p className="mt-2 text-sm text-purple-800">
                    See your readings over time in clear charts. Understand whether your blood pressure is improving, stable, or needs attention.
                  </p>
                </div>
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h4 className={`font-semibold text-orange-900 ${lexend.className}`}>Reminders</h4>
                  <p className="mt-2 text-sm text-orange-800">
                    Set daily reminders to take your readings so monitoring becomes a habit rather than something you forget about.
                  </p>
                </div>
              </div>
            </section>

            {/* Tech */}
            <section className="md:p-10 mt-4">
              <h3 className={`text-3xl font-bold ${lexend.className}`}>How it&apos;s being built</h3>
              <p className="mt-4 text-gray-700 max-w-2xl">
                BP Diary is a native mobile app built with React Native and Expo, targeting both iOS and Android from a single codebase. The backend runs on Cloudflare Workers and D1, keeping data secure and the app fast.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {["React Native", "Expo", "TypeScript", "Cloudflare Workers", "Cloudflare D1"].map((tech) => (
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
                  Building something in the health space?
                </h3>
                <p className="mb-6 max-w-xl">
                  Health applications come with particular requirements around data privacy, reliability, and user trust. If you&apos;re developing a health or wellness product and need a development partner, get in touch.
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

            {/* Back link */}
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

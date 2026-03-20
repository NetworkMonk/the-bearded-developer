import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import { lexend } from "@/app/fonts";
import InView from "@/components/animated/InView";
import Link from "next/link";

export const metadata = {
  title: "Bariatric Buddy — Weight Loss Surgery & Medication Support App | The Bearded Developer",
  description:
    "Bariatric Buddy supports people through weight loss surgery or medication with progress tracking, medication management, and a focus on long-term wellbeing. Coming soon to iOS and Android.",
};

export default function BariatricBuddyPage() {
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
                Bariatric Buddy
              </h2>
              <p className={`text-xl md:text-2xl font-semibold mt-4 opacity-70 ${lexend.className}`}>
                Support for every stage of your weight loss journey
              </p>
              <p className="text-lg mt-6 max-w-2xl">
                Bariatric Buddy is a companion app for people who are waiting for weight loss surgery, recovering from it, or starting a course of weight loss medication. It&apos;s built around losing weight healthily, managing medication, and keeping your mental wellbeing front and centre — not just the numbers on the scale.
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

            {/* Why it exists */}
            <section className="md:p-10 mt-4">
              <h3 className={`text-3xl font-bold ${lexend.className}`}>Why it exists</h3>
              <p className="mt-4 text-gray-700 max-w-2xl">
                Weight loss surgery and medications like GLP-1 drugs are life-changing, but the support available to people going through the process often doesn&apos;t match the complexity of what they&apos;re experiencing. There&apos;s the pre-op preparation, the post-surgery dietary changes, the medication schedules, the emotional side of rapid body change, and the long-term habit building that determines whether results last.
              </p>
              <p className="mt-4 text-gray-700 max-w-2xl">
                Bariatric Buddy is designed to be a practical, encouraging companion through all of it — not a calorie-counting app with a new coat of paint.
              </p>
            </section>

            {/* Features */}
            <section className="md:p-10 mt-4">
              <h3 className={`text-3xl font-bold ${lexend.className}`}>What it covers</h3>

              <div className="mt-8 grid md:grid-cols-2 gap-6 max-w-2xl">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className={`font-semibold text-green-900 ${lexend.className}`}>Progress tracking</h4>
                  <p className="mt-2 text-sm text-green-800">
                    Track weight loss in a way that accounts for the non-linear nature of bariatric journeys. See the bigger picture, not just today&apos;s number.
                  </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className={`font-semibold text-blue-900 ${lexend.className}`}>Medication management</h4>
                  <p className="mt-2 text-sm text-blue-800">
                    Complex medication regimes — injections, supplements, timing requirements — managed simply. Reminders, logging, and dose tracking in one place.
                  </p>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h4 className={`font-semibold text-purple-900 ${lexend.className}`}>Mental wellbeing</h4>
                  <p className="mt-2 text-sm text-purple-800">
                    Regular check-ins on how you&apos;re feeling, not just how you&apos;re losing. The emotional side of significant weight loss is just as important as the physical.
                  </p>
                </div>
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h4 className={`font-semibold text-orange-900 ${lexend.className}`}>Nutritional guidance</h4>
                  <p className="mt-2 text-sm text-orange-800">
                    Stage-appropriate nutritional information tailored to where you are in your journey — pre-op, post-op, or on medication.
                  </p>
                </div>
              </div>
            </section>

            {/* Tech */}
            <section className="md:p-10 mt-4">
              <h3 className={`text-3xl font-bold ${lexend.className}`}>How it&apos;s being built</h3>
              <p className="mt-4 text-gray-700 max-w-2xl">
                Like BP Diary, Bariatric Buddy is built with React Native and Expo for native iOS and Android support. The backend uses Cloudflare Workers and D1, keeping user data secure and the app responsive.
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
                  Building a health or wellness app?
                </h3>
                <p className="mb-6 max-w-xl">
                  Health products require careful thinking about user trust, data privacy, and the sensitivity of the subject matter. If you&apos;re building something in this space and need a development partner who takes that seriously, I&apos;d like to hear about it.
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

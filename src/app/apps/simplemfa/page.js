import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import { lexend } from "@/app/fonts";
import InView from "@/components/animated/InView";
import Link from "next/link";

export const metadata = {
  title: "Simple MFA — Two-Factor Authentication for BigCommerce | The Bearded Developer",
  description:
    "Simple MFA adds TOTP two-factor authentication to BigCommerce Stencil storefronts. No theme code required. Built for merchants who take customer account security seriously.",
};

export default function SimpleMFAPage() {
  return (
    <div className="my-20">
      <Section>
        <Container>
          <InView>
            {/* Hero */}
            <section className="md:p-10">
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <span className="bg-amber-100 text-amber-800 text-xs font-semibold px-3 py-1 rounded-full">
                  Early Access — Seeking Partners
                </span>
                <span className="text-sm text-gray-500">simplemfa.app</span>
              </div>
              <h2 className={`text-5xl md:text-6xl font-bold ${lexend.className}`}>
                Simple MFA
              </h2>
              <p className={`text-xl md:text-2xl font-semibold mt-4 opacity-70 ${lexend.className}`}>
                Two-factor authentication for BigCommerce — no theme code required
              </p>
              <p className="text-lg mt-6 max-w-2xl text-gray-700">
                Simple MFA is a BigCommerce Marketplace app that adds TOTP two-factor authentication and passwordless login to Stencil storefronts. Merchants install once via Script Manager and their customers get a secure, branded login experience. No custom development. No theme modifications.
              </p>
              <p className="mt-4 max-w-2xl text-gray-700">
                The app is in early access. I am actively looking for BigCommerce agencies, resellers, and merchants with enterprise accounts to partner with ahead of a public launch. If you work with BigCommerce clients who need tighter account security, I would like to talk.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://simplemfa.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-teal text-white px-6 py-3 rounded-full font-semibold hover:bg-brand-blue transition-colors inline-block"
                >
                  Visit Simple MFA
                </a>
                <Link
                  href="/contact"
                  className="bg-white text-brand-teal border-2 border-brand-teal px-6 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors inline-block"
                >
                  Enquire about partnering
                </Link>
                <Link
                  href="/apps"
                  className="text-sm font-semibold text-gray-500 hover:text-gray-700 self-center hover:underline"
                >
                  ← Back to all apps
                </Link>
              </div>
            </section>

            {/* What problem it solves */}
            <section className="md:p-10 mt-4">
              <h3 className={`text-3xl font-bold ${lexend.className}`}>The problem it solves</h3>
              <p className="mt-4 text-gray-700 max-w-2xl">
                BigCommerce does not offer native two-factor authentication for customer accounts. For merchants running B2B stores, trade portals, or any store where customers hold pricing, order history, or account credit — that is a meaningful security gap.
              </p>
              <p className="mt-4 text-gray-700 max-w-2xl">
                Simple MFA fills that gap without requiring a developer to modify the theme. The entire authentication flow is handled through a hosted, branded login page that sits in front of the native BigCommerce account area.
              </p>
            </section>

            {/* How it works */}
            <section className="md:p-10 mt-4">
              <h3 className={`text-3xl font-bold ${lexend.className}`}>How it works</h3>
              <div className="mt-6 grid md:grid-cols-3 gap-6">
                <div className="bg-gray-50 rounded-xl p-6">
                  <p className={`text-3xl font-bold text-brand-teal ${lexend.className}`}>01</p>
                  <h4 className={`font-semibold mt-3 ${lexend.className}`}>Install from the Marketplace</h4>
                  <p className="mt-2 text-sm text-gray-600">Install Simple MFA from the BigCommerce App Marketplace. No code changes. No developer needed.</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <p className={`text-3xl font-bold text-brand-teal ${lexend.className}`}>02</p>
                  <h4 className={`font-semibold mt-3 ${lexend.className}`}>Add one script tag</h4>
                  <p className="mt-2 text-sm text-gray-600">Add a single script via BigCommerce Script Manager. This redirects login traffic to the Simple MFA hosted login page.</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <p className={`text-3xl font-bold text-brand-teal ${lexend.className}`}>03</p>
                  <h4 className={`font-semibold mt-3 ${lexend.className}`}>Customers migrate automatically</h4>
                  <p className="mt-2 text-sm text-gray-600">Existing customers are migrated via magic link on first login. No manual data import. No disruption to the shopping experience.</p>
                </div>
              </div>
            </section>

            {/* Security features */}
            <section className="md:p-10 mt-4">
              <h3 className={`text-3xl font-bold ${lexend.className}`}>What&apos;s included</h3>
              <div className="mt-6 grid md:grid-cols-2 gap-6">
                <div className="mt-0 bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <h4 className={`font-semibold ${lexend.className} text-blue-900`}>Authentication</h4>
                  <ul className="mt-3 list-disc list-inside space-y-2 text-blue-800 text-sm">
                    <li>TOTP two-factor authentication (Google Authenticator, Authy, 1Password)</li>
                    <li>Passwordless login via magic link</li>
                    <li>Passwords hashed with PBKDF2-SHA256</li>
                    <li>Password complexity and expiry rules</li>
                  </ul>
                </div>
                <div className="mt-0 bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <h4 className={`font-semibold ${lexend.className} text-blue-900`}>Security infrastructure</h4>
                  <ul className="mt-3 list-disc list-inside space-y-2 text-blue-800 text-sm">
                    <li>Rate limiting and IP throttling via Cloudflare</li>
                    <li>Authentication logging with IP address tracking</li>
                    <li>Automatic customer migration — no manual data handling</li>
                  </ul>
                </div>
                <div className="mt-0 bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                  <h4 className={`font-semibold ${lexend.className} text-green-900`}>Merchant controls</h4>
                  <ul className="mt-3 list-disc list-inside space-y-2 text-green-800 text-sm">
                    <li>Custom branding on the hosted login page</li>
                    <li>Admin dashboard for user management</li>
                    <li>Enable/disable 2FA enforcement per store</li>
                  </ul>
                </div>
                <div className="mt-0 bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                  <h4 className={`font-semibold ${lexend.className} text-green-900`}>Installation</h4>
                  <ul className="mt-3 list-disc list-inside space-y-2 text-green-800 text-sm">
                    <li>No theme code changes required</li>
                    <li>Works with all Stencil themes</li>
                    <li>Single script tag via Script Manager</li>
                    <li>Live in under 30 minutes</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Pricing */}
            <section className="md:p-10 mt-4">
              <h3 className={`text-3xl font-bold ${lexend.className}`}>Pricing</h3>
              <p className="mt-4 text-gray-700 max-w-2xl">
                Billing is based on active credentialled customers from the previous month. The free tier is designed for smaller stores or merchants who want to evaluate the product before committing.
              </p>
              <div className="mt-6 grid md:grid-cols-3 gap-6">
                <div className="border border-gray-200 rounded-xl p-6 bg-white">
                  <h4 className={`font-bold text-lg ${lexend.className}`}>Free</h4>
                  <p className="text-3xl font-bold mt-3">£0</p>
                  <p className="text-sm text-gray-500 mt-1">Up to 200 credentialled customers</p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-600">
                    <li>✓ Full TOTP 2FA</li>
                    <li>✓ Passwordless login</li>
                    <li>✓ Automatic customer migration</li>
                  </ul>
                </div>
                <div className="border-2 border-brand-teal rounded-xl p-6 bg-white relative">
                  <span className="absolute -top-3 left-6 bg-brand-teal text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Standard
                  </span>
                  <h4 className={`font-bold text-lg ${lexend.className}`}>Standard</h4>
                  <p className="text-3xl font-bold mt-3">$12</p>
                  <p className="text-sm text-gray-500 mt-1">per 100 additional customers/month</p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-600">
                    <li>✓ Everything in Free</li>
                    <li>✓ Custom branding</li>
                    <li>✓ Authentication logging</li>
                    <li>✓ 10% discount for annual billing</li>
                  </ul>
                </div>
                <div className="border border-gray-200 rounded-xl p-6 bg-white">
                  <h4 className={`font-bold text-lg ${lexend.className}`}>Enterprise</h4>
                  <p className="text-3xl font-bold mt-3">Custom</p>
                  <p className="text-sm text-gray-500 mt-1">10,000+ credentialled customers</p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-600">
                    <li>✓ Everything in Standard</li>
                    <li>✓ Volume pricing</li>
                    <li>✓ Priority support</li>
                    <li>✓ Custom SLA available</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Partner section */}
            <section className="md:p-10 mt-4">
              <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
                <h4 className={`font-semibold ${lexend.className} text-yellow-900`}>Looking for agency and reseller partners</h4>
                <p className="mt-2 text-sm text-yellow-800 max-w-2xl">
                  Simple MFA is in early access ahead of a public BigCommerce Marketplace listing. I am looking for BigCommerce agencies and resellers who work with merchants where account security matters — B2B, trade portals, wholesale. If that describes your client base, I would like to talk about what a partnership arrangement could look like.
                </p>
                <Link
                  href="/contact"
                  className="inline-block mt-4 text-sm font-semibold text-yellow-900 hover:underline"
                >
                  Get in touch about partnering →
                </Link>
              </div>
            </section>

            {/* Tech stack */}
            <section className="md:p-10 mt-4">
              <h3 className={`text-3xl font-bold ${lexend.className}`}>How it&apos;s built</h3>
              <p className="mt-4 text-gray-700 max-w-2xl">
                Simple MFA is built on the same Cloudflare-first stack I use across all my products. The hosted login layer runs on Cloudflare Workers, giving it global low-latency performance and the ability to apply rate limiting and IP throttling at the edge — before a request ever touches the application.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {["Next.js", "TypeScript", "Cloudflare Workers", "Cloudflare D1", "BigCommerce API"].map((tech) => (
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
                  Interested in Simple MFA for your clients?
                </h3>
                <p className="mb-6 max-w-xl">
                  Whether you are a BigCommerce agency, a reseller, or a merchant who wants early access, get in touch. I am actively looking for the right partners to work with ahead of the public launch.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-block"
                  >
                    Enquire about partnering
                  </Link>
                  <Link
                    href="/services/bigcommerce"
                    className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors inline-block border-2 border-white"
                  >
                    BigCommerce services
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

"use client";

import { displayCookieBanner } from "@/components/cookie-consent/ConsentForm";

export default function Cookies() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4 pt-32">
      <h1 className="text-3xl font-bold mb-6">Cookie Policy</h1>

      <h2 className="text-2xl font-semibold mt-6 mb-4">1. Introduction</h2>
      <p className="mb-4">
        The Bearded Developer uses cookies and similar technologies on our
        website (www.thebeardeddeveloper.co.uk) to enhance your experience,
        analyze usage, and improve our services. This Cookie Policy explains
        what cookies are, how we use them, and your choices regarding their use,
        in compliance with the Privacy and Electronic Communications Regulations
        (PECR).
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">2. What Are Cookies?</h2>
      <p className="mb-4">
        Cookies are small text files stored on your device (e.g., computer,
        phone) when you visit a website. They help websites function, remember
        your preferences, and provide insights into usage.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">
        3. Types of Cookies We Use
      </h2>
      <p className="mb-4">We use the following cookies:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>
          <strong>Necessary Cookies</strong>:
          <ul className="list-disc pl-6">
            <li>
              Purpose: Enable core website functionality (e.g., navigation,
              contact form submission).
            </li>
            <li>Example: Session cookies to maintain your browsing session.</li>
            <li>
              Consent: Not required, as they are necessary for the website to
              operate.
            </li>
          </ul>
        </li>
        <li>
          <strong>Analytics Cookies</strong>:
          <ul className="list-disc pl-6">
            <li>
              Purpose: Collect anonymized data on how visitors use our site
              (e.g., pages visited, time spent) to improve performance.
            </li>
            <li>
              Example: Google Analytics cookies (_ga, _gid) to track usage.
            </li>
            <li>
              Consent: Optional, enabled only with your consent via our cookie
              banner.
            </li>
          </ul>
        </li>
        <li>
          <strong>Advertising Cookies</strong> (if applicable):
          <ul className="list-disc pl-6">
            <li>
              Purpose: Track visitor behavior for targeted ads (e.g., LinkedIn
              ads, if used).
            </li>
            <li>Example: Pixel trackers for ad campaigns.</li>
            <li>Consent: Optional, enabled only with your consent.</li>
          </ul>
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-4">4. Cookies We Use</h2>
      <p className="mb-4">
        Below is a list of cookies currently in use (update as needed):
      </p>
      <table className="w-full border-collapse mb-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2 text-left">Cookie</th>
            <th className="border p-2 text-left">Purpose</th>
            <th className="border p-2 text-left">Expiration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">cookie_consent</td>
            <td className="border p-2">Stores your cookie preferences</td>
            <td className="border p-2">1 year</td>
          </tr>
          <tr>
            <td className="border p-2">_ga (Google Analytics)</td>
            <td className="border p-2">Tracks unique visitors</td>
            <td className="border p-2">2 years</td>
          </tr>
          <tr>
            <td className="border p-2">_gid (Google Analytics)</td>
            <td className="border p-2">Tracks session data</td>
            <td className="border p-2">24 hours</td>
          </tr>
          <tr>
            <td className="border p-2">_gat (Google Tag Manager)</td>
            <td className="border p-2">Limits data collection rate</td>
            <td className="border p-2">1 minute</td>
          </tr>
          <tr>
            <td className="border p-2">_clck (Microsoft Clarity)</td>
            <td className="border p-2">
              Tracks user interactions for heatmaps and analytics
            </td>
            <td className="border p-2">1 year</td>
          </tr>
          <tr>
            <td className="border p-2">_clsk (Microsoft Clarity)</td>
            <td className="border p-2">Records session data for playback</td>
            <td className="border p-2">1 day</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-semibold mt-6 mb-4">
        5. How We Use Cookies
      </h2>
      <p className="mb-4">Cookies help us:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>
          Ensure the website functions correctly (e.g., form submissions).
        </li>
        <li>
          Analyze anonymized usage data to improve content and performance.
        </li>
        <li>
          (If applicable) Deliver personalized marketing, with your consent.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-4">
        6. Your Cookie Choices
      </h2>
      <p className="mb-4">You can manage cookies via:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>
          <strong>Cookie Banner</strong>: On your first visit, choose to accept
          or reject non-essential cookies (analytics, marketing). You can update
          preferences at any time by clicking the button on this page labelled
          &quot;Configure Cookies&quot;.
        </li>
        <li>
          <strong>Browser Settings</strong>: Block or delete cookies through
          your browser (e.g., Chrome, Firefox). Note that blocking essential
          cookies may impair website functionality.
        </li>
        <li>
          <strong>Opt-Out Tools</strong>: For Google Analytics, use the opt-out
          browser add-on:{" "}
          <a
            href="https://tools.google.com/dlpage/gaoptout"
            className="text-blue-600 hover:underline"
          >
            tools.google.com/dlpage/gaoptout
          </a>
          .
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-4">
        7. Third-Party Cookies
      </h2>
      <p className="mb-4">
        Some cookies are set by third parties (e.g., Google Analytics, Google
        Tag Manager, Microsoft Clarity). These providers process data under
        their own privacy policies, which we encourage you to review:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>
          Google Analytics and Tag Manager:{" "}
          <a
            href="https://policies.google.com/privacy"
            className="text-blue-600 hover:underline"
          >
            policies.google.com/privacy
          </a>
        </li>
        <li>
          Microsoft Clarity:{" "}
          <a
            href="https://privacy.microsoft.com/en-us/privacystatement"
            className="text-blue-600 hover:underline"
          >
            privacy.microsoft.com/en-us/privacystatement
          </a>
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-4">
        8. Changes to This Policy
      </h2>
      <p className="mb-4">
        We may update this Cookie Policy to reflect changes in technology or
        legal requirements. Updates will be posted on this page with the
        effective date.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">9. Contact Us</h2>
      <p className="mb-4">
        For questions about cookies, contact:
        <br />
        Email:{" "}
        <a
          href="mailto:info@thebeardeddeveloper.co.uk"
          className="font-semibold hover:opacity-60"
        >
          info@thebeardeddeveloper.co.uk
        </a>
        <br />
        Address: 47 York Gardens, Braintree, Essex, CM7 9NF, UK.
      </p>
      <div className="mt-16">
        <button
          className="flex-1 text-base font-semibold border-2 border-gray-800 text-white p-3 cursor-pointer bg-black hover:bg-gray-800 transition-colors duration-300"
          onClick={() => displayCookieBanner()}
        >
          Configure Cookies
        </button>
      </div>
    </div>
  );
}

import Image from "next/image";
import article from "./meta.json";
import ArticleContainer from "@/components/articles/ArticleContainer";
import { lexend } from "@/app/fonts";
import Link from "next/link";

export const metadata = {
  title: article.metadata.title,
  description: article.metadata.description,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Which is faster to launch, BigCommerce or Shopify?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Shopify. You can pick a theme, configure products, and have a functional store live in days without touching code. BigCommerce takes longer to configure, even if it has more built-in functionality.",
      },
    },
    {
      "@type": "Question",
      name: "Is BigCommerce better than Shopify for B2B?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "BigCommerce has dedicated B2B features, but they sit on top of the core platform in a way that can be difficult to configure reliably. The functionality is there, but the implementation is more involved than the documentation suggests. Budget development time accordingly.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a developer for either platform?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If your expectations are high, probably yes, regardless of which platform you choose. Both can be run without a developer for straightforward stores, but any meaningful customisation will require development work and ongoing maintenance.",
      },
    },
    {
      "@type": "Question",
      name: "Are BigCommerce apps more expensive than Shopify apps?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Generally yes. Shopify has a significantly larger app marketplace with more options at different price points. BigCommerce apps tend to cost more and there are fewer alternatives if one doesn't suit you.",
      },
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "BigCommerce vs Shopify 2026: A UK Developer's Honest Take",
  image:
    "https://www.thebeardeddeveloper.co.uk/img/articles/bigcommerce-vs-shopify-comparison/platform-comparison-header.jpg",
  author: {
    "@type": "Person",
    name: "James Plant",
    url: "https://www.thebeardeddeveloper.co.uk",
  },
  publisher: {
    "@type": "Organization",
    name: "The Bearded Developer",
    logo: {
      "@type": "ImageObject",
      url: "https://www.thebeardeddeveloper.co.uk/img/the-bearded-developer.png",
    },
  },
  datePublished: "2026-02-02",
  dateModified: "2026-04-27",
  description:
    "I've built on both and migrated stores between them. What each platform costs, where the hidden charges are, and which one to pick. No affiliate links.",
};

export default function ArticlePage() {
  return (
    <ArticleContainer article={article}>
      <section className="md:p-12 relative grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h2 className={`text-4xl md:text-5xl font-bold ${lexend.className}`}>
            BigCommerce vs Shopify: A Developer&apos;s Honest Take
          </h2>

          <p className="mt-10">
            I get asked this more than almost anything else. And the honest
            answer is: it depends on one thing above everything else. How much
            control do you want, and how quickly do you need to be live?
          </p>

          <p className="mt-6">
            I&apos;ve built stores on both platforms, migrated businesses
            between them, and had plenty of conversations where a client comes
            in convinced one is right for them and leaves thinking differently.
            Here&apos;s what I actually tell people.
          </p>

          <Image
            src="/img/articles/bigcommerce-vs-shopify-comparison/platform-comparison-header.jpg"
            alt="BigCommerce vs Shopify platform comparison"
            width={640}
            height={400}
            className="mx-auto my-8 rounded-lg shadow-md"
          />

          <h3 className={`text-2xl font-semibold mt-8 ${lexend.className}`}>
            Speed to market
          </h3>

          <p className="mt-4">
            If getting live fast is the priority, Shopify wins. Pick a theme,
            configure your products, connect a payment gateway. A functional
            store can be live in days without touching a line of code. For a lot
            of businesses, that&apos;s genuinely enough.
          </p>

          <p className="mt-4">
            BigCommerce can get you there too, but it takes longer. More options
            built in sounds like a good thing, and it is, but those options all
            need decisions made about them. Getting to a place you&apos;re
            actually happy with takes more time.
          </p>

          <h3 className={`text-2xl font-semibold mt-8 ${lexend.className}`}>
            The developer reality
          </h3>

          <p className="mt-4">
            There&apos;s a misconception I hear often: choosing the right
            platform will save you from needing a developer. Mostly not true. If
            you have high expectations for how your store should look and
            behave, you will likely need development work regardless of which
            platform you choose. The question is just where that work sits.
          </p>

          <p className="mt-4">
            Both platforms can be run without a developer for a straightforward
            store. The moment you want anything beyond what comes out of the
            box, the time and cost of customisation applies equally.
          </p>

          <div className="mt-6 bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
            <h4 className={`font-semibold ${lexend.className} text-yellow-900`}>
              Before you decide
            </h4>
            <ul className="mt-3 list-disc list-inside space-y-2 text-yellow-800 text-sm">
              <li>
                Can you launch with a theme and minimal changes? Shopify is
                faster.
              </li>
              <li>
                Do you need significant customisation? Budget dev time and
                ongoing maintenance into both platforms equally.
              </li>
              <li>
                Check whether an app covers your requirement before assuming you
                need custom code.
              </li>
              <li>
                Custom code should be a last resort. It adds to build time and
                creates maintenance overhead.
              </li>
            </ul>
          </div>

          <h3 className={`text-2xl font-semibold mt-8 ${lexend.className}`}>
            Apps and ongoing costs
          </h3>

          <p className="mt-4">
            Both platforms rely on apps to extend functionality beyond the
            basics. Shopify&apos;s marketplace is significantly larger, with
            more options at different price points. BigCommerce has an ecosystem
            too, but in my experience the equivalent apps tend to cost more and
            there&apos;s less choice if something doesn&apos;t suit you.
          </p>

          <p className="mt-4">
            This is often where the real cost difference sits. Running several
            apps on Shopify is common and the pricing is competitive. On
            BigCommerce you may find fewer alternatives, which limits your
            options when you&apos;re trying to keep monthly costs down.
          </p>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4
                className={`font-semibold text-lg ${lexend.className} text-blue-900`}
              >
                Shopify
              </h4>
              <ul className="mt-3 space-y-2 text-blue-800 text-sm list-disc list-inside">
                <li>Fastest to launch out of the box</li>
                <li>Largest app marketplace with competitive pricing</li>
                <li>Easier for non-technical teams day to day</li>
                <li>Transaction fees unless using Shopify Payments</li>
                <li>App costs add up as you grow</li>
              </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h4
                className={`font-semibold text-lg ${lexend.className} text-green-900`}
              >
                BigCommerce
              </h4>
              <ul className="mt-3 space-y-2 text-green-800 text-sm list-disc list-inside">
                <li>More control at the code level</li>
                <li>More built in, fewer required apps</li>
                <li>No transaction fees on any plan</li>
                <li>Longer to configure and launch</li>
                <li>App marketplace is smaller, apps often cost more</li>
              </ul>
            </div>
          </div>

          <Image
            src="/img/articles/bigcommerce-vs-shopify-comparison/decision-framework.jpg"
            alt="How to choose between BigCommerce and Shopify"
            width={640}
            height={400}
            className="mx-auto my-8 rounded-lg shadow-md"
          />

          <h3 className={`text-2xl font-semibold mt-8 ${lexend.className}`}>
            A note on B2B
          </h3>

          <p className="mt-4">
            If you&apos;re building a B2B store, BigCommerce has dedicated B2B
            functionality that looks attractive on paper. In practice, it sits
            on top of the core platform in a way that doesn&apos;t always behave
            predictably. I&apos;ve worked on B2B BigCommerce builds where the
            configuration options are all there, but getting them to work as
            expected takes considerably more effort than you&apos;d anticipate.
          </p>

          <div className="mt-6 bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
            <h4 className={`font-semibold ${lexend.className} text-red-900`}>
              If B2B is a core requirement
            </h4>
            <p className="mt-3 text-red-800 text-sm">
              Budget proper development time and testing. The B2B features in
              BigCommerce can be made to work, but the implementation is more
              involved than the documentation implies. It&apos;s not a
              dealbreaker, just something to go in knowing.
            </p>
          </div>

          <h3 className={`text-2xl font-semibold mt-8 ${lexend.className}`}>
            How to decide
          </h3>

          <p className="mt-4">
            Start with one question: how many customisations do you actually
            need for launch?
          </p>

          <p className="mt-4">
            If you can go largely out of the box, Shopify gets you live faster
            than anything else. If you need customisations, work out which ones
            are essential for launch and which can come later. Then check
            whether an app covers those requirements before assuming custom code
            is the answer.
          </p>

          <div className="mt-6 bg-blue-50 p-6 rounded-lg">
            <h4 className={`font-semibold ${lexend.className} text-blue-900`}>
              Choose Shopify if:
            </h4>
            <ul className="mt-3 list-disc list-inside space-y-2 text-blue-800 text-sm">
              <li>You want to launch quickly with minimal development</li>
              <li>
                Your team will manage the store without ongoing technical
                support
              </li>
              <li>
                You need a large app ecosystem with competitive pricing
              </li>
              <li>You&apos;re running a straightforward D2C operation</li>
            </ul>
          </div>

          <div className="mt-6 bg-green-50 p-6 rounded-lg">
            <h4 className={`font-semibold ${lexend.className} text-green-900`}>
              Choose BigCommerce if:
            </h4>
            <ul className="mt-3 list-disc list-inside space-y-2 text-green-800 text-sm">
              <li>
                You need more control and are comfortable with development
                involvement
              </li>
              <li>
                Transaction fees would have a meaningful impact on your margins
              </li>
              <li>
                You have complex product catalogues or pricing requirements
              </li>
              <li>You want more built in and fewer app dependencies</li>
            </ul>
          </div>

          <div className="mt-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Not sure which platform is right for you?
            </h3>
            <p className="mb-6">
              We build and migrate stores on both BigCommerce and Shopify. Tell
              us what you need and we&apos;ll give you a straight answer.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/services/bigcommerce"
                className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-block"
              >
                BigCommerce Services
              </Link>
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors inline-block border-2 border-white"
              >
                Get Advice
              </Link>
            </div>
          </div>

          <h3 className={`text-2xl font-semibold mt-8 ${lexend.className}`}>
            The bottom line
          </h3>

          <p className="mt-4">
            There&apos;s no universally right answer. Shopify gets you to market
            faster and is easier to run without technical help. BigCommerce
            gives you more control and can work out cheaper at scale if
            transaction fees are a factor. Both have app ecosystems with ongoing
            costs attached.
          </p>

          <p className="mt-6">
            If you&apos;re unsure, start with how your store needs to work on
            day one and what you genuinely cannot compromise on. That tends to
            make the decision clearer than any feature comparison.
          </p>

          <p className="mt-6">
            If you want a second opinion on which platform suits your specific
            requirements,{" "}
            <Link
              href="/contact"
              className="text-blue-600 hover:underline font-semibold"
            >
              get in touch
            </Link>
            . Happy to talk it through.
          </p>
        </div>

        <aside className="md:col-span-1 bg-gray-100 p-6 rounded-lg mt-10 md:mt-0 md:sticky top-10">
          <h3 className={`text-xl font-semibold ${lexend.className}`}>
            Quick Reference
          </h3>
          <div className="mt-4 space-y-3 text-sm">
            <div className="border-l-4 border-blue-400 pl-3">
              <strong>Speed to market</strong>
              <br />
              Shopify wins. Days not weeks.
            </div>
            <div className="border-l-4 border-green-400 pl-3">
              <strong>Control and flexibility</strong>
              <br />
              BigCommerce gives you more at the code level.
            </div>
            <div className="border-l-4 border-yellow-400 pl-3">
              <strong>App costs</strong>
              <br />
              Shopify has more options at lower price points.
            </div>
            <div className="border-l-4 border-red-400 pl-3">
              <strong>B2B</strong>
              <br />
              BigCommerce has the features but implementation is complex.
            </div>
            <div className="border-l-4 border-purple-400 pl-3">
              <strong>Transaction fees</strong>
              <br />
              BigCommerce: none. Shopify: waived with Shopify Payments.
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <h4 className={`font-semibold ${lexend.className}`}>
              Related Articles
            </h4>
            <ul className="text-sm mt-2 space-y-2">
              <li>
                <Link
                  href="/resources/articles/optimizing-your-shopify-store"
                  className="text-blue-600 hover:underline"
                >
                  Optimising Your Shopify Store
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/articles/beginners-guide-to-choosing-the-right-cms"
                  className="text-blue-600 hover:underline"
                >
                  Beginner&apos;s Guide to Choosing the Right CMS
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/articles/ai-automation-ecommerce-2026"
                  className="text-blue-600 hover:underline"
                >
                  AI Automation for E-commerce 2026
                </Link>
              </li>
            </ul>
          </div>

          <div className="mt-6 p-4 bg-green-50 rounded-lg">
            <h4 className={`font-semibold ${lexend.className}`}>
              Our Services
            </h4>
            <ul className="text-sm mt-2 space-y-2">
              <li>
                <Link
                  href="/services/bigcommerce"
                  className="text-blue-600 hover:underline"
                >
                  BigCommerce Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/shopify"
                  className="text-blue-600 hover:underline"
                >
                  Shopify Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/integrations"
                  className="text-blue-600 hover:underline"
                >
                  Platform Integrations
                </Link>
              </li>
            </ul>
          </div>

          <p className="mt-4 text-sm">
            Not sure which platform to choose?{" "}
            <Link
              href="/contact"
              className="text-blue-600 hover:underline font-semibold"
            >
              Get in touch
            </Link>
            .
          </p>
        </aside>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
    </ArticleContainer>
  );
}

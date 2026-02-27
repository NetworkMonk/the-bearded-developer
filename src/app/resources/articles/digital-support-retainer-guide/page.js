import Image from "next/image";
import article from "./meta.json";
import ArticleContainer from "@/components/articles/ArticleContainer";
import { lexend } from "@/app/fonts";
import Link from "next/link";

export const metadata = {
  title: article.metadata.title,
  description: article.metadata.description,
};

export default function ArticlePage() {
  return (
    <ArticleContainer article={article}>
      <section className="md:p-12 relative grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h2 className={`text-4xl md:text-5xl font-bold ${lexend.className}`}>
            What Is a Digital Support Retainer (And Does Your Business Need One)?
          </h2>
          <p className="mt-10">
            Your website goes down on a Friday afternoon. Your integration stops
            syncing orders. A critical app update breaks your checkout. You call
            your developer&mdash;but they are on another project and cannot look at
            it until next week.
          </p>
          <p className="mt-6">
            This is the situation that a digital support retainer is designed to
            prevent. It is an ongoing relationship with a technical partner who
            knows your systems, is available when you need them, and keeps things
            running smoothly&mdash;rather than scrambling to fix emergencies when they
            happen.
          </p>
          <p className="mt-6">
            But retainers are not right for every business. This guide explains
            exactly what they include, who genuinely benefits from one, and what
            to look for before signing anything.
          </p>

          <div>
            <Image
              src="/img/articles/digital-support-retainer-guide/retainer-header.jpg"
              alt="A clean minimal desk with a laptop and notepad suggesting an ongoing partnership"
              width={640}
              height={400}
              className="mx-auto my-8 rounded-lg shadow-md"
            />
          </div>

          <h3 className={`text-2xl font-semibold mt-8 ${lexend.className}`}>
            What Is a Digital Support Retainer?
          </h3>
          <p className="mt-4">
            A digital support retainer is a monthly agreement with a technology
            partner that gives you access to a set amount of their time and
            expertise each month. Think of it like a solicitor on retainer&mdash;you
            are not paying for a specific piece of work, you are paying to have
            the right person available when you need them.
          </p>
          <p className="mt-4">
            Unlike hiring a freelancer for a one-off project, a retainer means
            your partner already knows your systems, your team, and your business.
            When something goes wrong, there is no lengthy briefing process&mdash;they
            can get straight to work.
          </p>
          <p className="mt-4">
            Retainers typically cover a mix of the following, depending on what
            you agree upfront:
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="bg-blue-50 p-5 rounded-lg">
              <h4 className={`font-semibold ${lexend.className} text-blue-900`}>Reactive Support</h4>
              <p className="mt-2 text-blue-800 text-sm">
                When something breaks, your retainer partner is your first call.
                Agreed response times mean you know how quickly help is coming,
                rather than hoping someone picks up your email.
              </p>
            </div>
            <div className="bg-blue-50 p-5 rounded-lg">
              <h4 className={`font-semibold ${lexend.className} text-blue-900`}>Proactive Monitoring</h4>
              <p className="mt-2 text-blue-800 text-sm">
                A good retainer partner watches your systems rather than waiting
                for you to report problems. They spot issues before your customers
                do and fix them before they become crises.
              </p>
            </div>
            <div className="bg-blue-50 p-5 rounded-lg">
              <h4 className={`font-semibold ${lexend.className} text-blue-900`}>Ongoing Development</h4>
              <p className="mt-2 text-blue-800 text-sm">
                Small improvements, new features, content updates, and
                configuration changes that would otherwise sit on a never-ending
                to-do list get done regularly as part of the retainer.
              </p>
            </div>
            <div className="bg-blue-50 p-5 rounded-lg">
              <h4 className={`font-semibold ${lexend.className} text-blue-900`}>Integration Maintenance</h4>
              <p className="mt-2 text-blue-800 text-sm">
                If you have integrations between systems&mdash;your shop and your ERP,
                for example&mdash;a retainer partner keeps them running as platforms
                update and your business requirements change.
              </p>
            </div>
            <div className="bg-blue-50 p-5 rounded-lg">
              <h4 className={`font-semibold ${lexend.className} text-blue-900`}>Security &amp; Updates</h4>
              <p className="mt-2 text-blue-800 text-sm">
                Platform updates, plugin or app updates, and security patches are
                applied regularly&mdash;not left until something breaks because they
                were never done.
              </p>
            </div>
            <div className="bg-blue-50 p-5 rounded-lg">
              <h4 className={`font-semibold ${lexend.className} text-blue-900`}>Strategic Advice</h4>
              <p className="mt-2 text-blue-800 text-sm">
                A retainer partner who knows your business can advise on upcoming
                platform changes, help you plan new features, and flag things that
                might cause problems further down the line.
              </p>
            </div>
          </div>

          <h3 className={`text-2xl font-semibold mt-10 ${lexend.className}`}>
            Who Genuinely Needs a Digital Support Retainer?
          </h3>
          <p className="mt-4">
            Not every business needs a retainer&mdash;but there are some clear signs
            that you would benefit from one.
          </p>

          <div className="mt-6 bg-green-50 p-6 rounded-lg">
            <h4 className={`font-semibold ${lexend.className} text-green-900`}>
              A retainer is likely a good fit if&hellip;
            </h4>
            <ul className="mt-3 list-disc list-inside space-y-2 text-green-800 text-sm">
              <li>Your website or e-commerce store is core to your revenue&mdash;downtime costs you real money</li>
              <li>You have integrations between systems that need regular monitoring and maintenance</li>
              <li>You do not have an in-house technical team, or your team does not have specialist expertise in your platforms</li>
              <li>You regularly have small improvements or changes you need making but no reliable way to get them done</li>
              <li>You have been burned by slow response times from freelancers or agencies during past emergencies</li>
              <li>Platform updates or security patches regularly get delayed because there is no one responsible for them</li>
            </ul>
          </div>

          <div className="mt-4 bg-gray-50 p-6 rounded-lg">
            <h4 className={`font-semibold ${lexend.className} text-gray-800`}>
              A retainer is probably not necessary if&hellip;
            </h4>
            <ul className="mt-3 list-disc list-inside space-y-2 text-gray-600 text-sm">
              <li>Your website is a simple brochure site that rarely changes</li>
              <li>You have a capable in-house technical team covering your main platforms</li>
              <li>Your systems are very straightforward with no integrations to maintain</li>
              <li>You only need occasional development work a few times per year</li>
            </ul>
          </div>

          <div>
            <Image
              src="/img/articles/digital-support-retainer-guide/partnership-support.jpg"
              alt="Organised desk with a support checklist and plants suggesting structured ongoing care"
              width={640}
              height={400}
              className="mx-auto my-8 rounded-lg shadow-md"
            />
          </div>

          <h3 className={`text-2xl font-semibold mt-8 ${lexend.className}`}>
            Retainer vs One-Off Fixes: The Real Difference
          </h3>
          <p className="mt-4">
            Many businesses default to one-off fixes because they seem cheaper. You
            only pay when you need something. But the hidden costs of this approach
            add up quickly.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="bg-red-50 p-5 rounded-lg">
              <h4 className={`font-semibold ${lexend.className} text-red-900`}>The One-Off Approach</h4>
              <ul className="mt-3 space-y-2 text-red-800 text-sm list-disc list-inside">
                <li>Finding a developer when something breaks takes time you do not have</li>
                <li>Every new developer needs a briefing on your systems from scratch</li>
                <li>No one is watching your systems proactively&mdash;problems grow unseen</li>
                <li>Small improvements never get prioritised, so technical debt accumulates</li>
                <li>Emergency rates are significantly higher than planned retainer rates</li>
              </ul>
            </div>
            <div className="bg-green-50 p-5 rounded-lg">
              <h4 className={`font-semibold ${lexend.className} text-green-900`}>The Retainer Approach</h4>
              <ul className="mt-3 space-y-2 text-green-800 text-sm list-disc list-inside">
                <li>Guaranteed response times&mdash;you know help is coming and when</li>
                <li>Your partner already knows your systems, so fixes are faster</li>
                <li>Proactive monitoring catches problems before they escalate</li>
                <li>Regular small improvements keep your systems healthy over time</li>
                <li>Predictable monthly cost that is easier to budget for</li>
              </ul>
            </div>
          </div>

          <p className="mt-6">
            The one-off model feels more flexible, but it is often more expensive
            in practice&mdash;and significantly more stressful when things go wrong at
            the worst possible moment.
          </p>

          <h3 className={`text-2xl font-semibold mt-10 ${lexend.className}`}>
            What Should a Retainer Agreement Include?
          </h3>
          <p className="mt-4">
            Before committing to any retainer, make sure the agreement clearly
            covers the following. If any of these are vague or absent, ask for
            clarification before signing.
          </p>

          <div className="mt-6 space-y-4">
            <div className="border-l-4 border-purple-400 pl-5">
              <h4 className={`font-semibold ${lexend.className}`}>Response Time Commitments</h4>
              <p className="mt-2 text-sm text-gray-700">
                How quickly will they respond to a critical issue? And what counts
                as critical? Make sure response times are defined clearly&mdash;ideally
                with different levels for urgent issues versus routine requests.
              </p>
            </div>
            <div className="border-l-4 border-purple-400 pl-5">
              <h4 className={`font-semibold ${lexend.className}`}>Scope of Work</h4>
              <p className="mt-2 text-sm text-gray-700">
                What is included in the monthly retainer and what sits outside of
                it? A good agreement defines this clearly so there are no surprises
                when you ask for something and are told it is extra.
              </p>
            </div>
            <div className="border-l-4 border-purple-400 pl-5">
              <h4 className={`font-semibold ${lexend.className}`}>Hours or Outcomes?</h4>
              <p className="mt-2 text-sm text-gray-700">
                Some retainers are based on hours per month; others are based on
                outcomes. Hours-based retainers give you flexibility; outcomes-based
                retainers give you clarity. Neither is universally better&mdash;understand
                which you are buying.
              </p>
            </div>
            <div className="border-l-4 border-purple-400 pl-5">
              <h4 className={`font-semibold ${lexend.className}`}>Rollover Policy</h4>
              <p className="mt-2 text-sm text-gray-700">
                If you do not use all your hours in a quiet month, do they roll
                over? This matters more than it sounds&mdash;losing unused hours month
                after month reduces the real value of the retainer.
              </p>
            </div>
            <div className="border-l-4 border-purple-400 pl-5">
              <h4 className={`font-semibold ${lexend.className}`}>Notice Period</h4>
              <p className="mt-2 text-sm text-gray-700">
                How much notice do you need to give if you want to end the
                arrangement? One month is reasonable; six months is not. Make sure
                you are not locked in longer than you are comfortable with.
              </p>
            </div>
            <div className="border-l-4 border-purple-400 pl-5">
              <h4 className={`font-semibold ${lexend.className}`}>Reporting and Communication</h4>
              <p className="mt-2 text-sm text-gray-700">
                How will they keep you updated on what has been done, what is
                being monitored, and what they recommend? A monthly summary at
                minimum keeps you informed and justifies the investment.
              </p>
            </div>
          </div>

          <h3 className={`text-2xl font-semibold mt-10 ${lexend.className}`}>
            How Much Does a Digital Support Retainer Cost?
          </h3>
          <p className="mt-4">
            Pricing varies widely depending on the provider, the scope of support,
            and the platforms covered. As a general guide:
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="bg-gray-50 p-5 rounded-lg text-center">
              <h4 className={`font-semibold ${lexend.className} text-gray-800`}>Light Support</h4>
              <p className="mt-1 text-2xl font-bold text-blue-600">&pound;300&ndash;&pound;750</p>
              <p className="mt-1 text-xs text-gray-500">per month</p>
              <p className="mt-3 text-sm text-gray-600">
                Reactive support, basic monitoring, a few hours of development
                time. Suitable for smaller sites with simple setups.
              </p>
            </div>
            <div className="bg-blue-50 p-5 rounded-lg text-center border-2 border-blue-300">
              <h4 className={`font-semibold ${lexend.className} text-blue-900`}>Standard Support</h4>
              <p className="mt-1 text-2xl font-bold text-blue-600">&pound;750&ndash;&pound;2,000</p>
              <p className="mt-1 text-xs text-blue-600">per month</p>
              <p className="mt-3 text-sm text-blue-800">
                Proactive monitoring, guaranteed response times, regular
                development hours, integration maintenance. Most common tier
                for growing e-commerce businesses.
              </p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg text-center">
              <h4 className={`font-semibold ${lexend.className} text-gray-800`}>Comprehensive Support</h4>
              <p className="mt-1 text-2xl font-bold text-blue-600">&pound;2,000+</p>
              <p className="mt-1 text-xs text-gray-500">per month</p>
              <p className="mt-3 text-sm text-gray-600">
                Full technical partnership, fast SLAs, multiple systems covered,
                strategic advice included. For businesses where technology is
                operationally critical.
              </p>
            </div>
          </div>

          <p className="mt-6 text-sm text-gray-600">
            These figures are for specialist digital support covering platforms like
            Shopify, BigCommerce, NetSuite, and Celigo integrations. Generic IT
            support will be different. The right comparison is not &ldquo;is this
            cheaper than a freelancer?&rdquo;&mdash;it is &ldquo;what does it cost when
            things go wrong without one?&rdquo;
          </p>

          <h3 className={`text-2xl font-semibold mt-10 ${lexend.className}`}>
            Questions to Ask Before You Sign
          </h3>

          <div className="mt-6 bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
            <ul className="space-y-3 text-yellow-800 text-sm list-disc list-inside">
              <li>Have you worked with our specific platforms before? (Shopify, BigCommerce, NetSuite, etc.)</li>
              <li>What is your response time for a critical issue out of business hours?</li>
              <li>Can I speak to a current client on a similar retainer?</li>
              <li>What does a typical month look like — what kind of work gets done?</li>
              <li>How do you handle situations where a task needs more time than the retainer covers?</li>
              <li>What reporting do I receive each month?</li>
              <li>What happens to unused hours?</li>
              <li>What is the notice period to end the agreement?</li>
            </ul>
          </div>

          <div className="mt-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Interested in a Support Retainer?
            </h3>
            <p className="mb-6">
              We offer support retainers covering Shopify, BigCommerce, NetSuite,
              Celigo integrations, and bespoke web applications. No jargon, no
              surprise bills&mdash;just reliable support from people who know your
              systems.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/services/bespoke"
                className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-block"
              >
                View Our Services
              </Link>
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors inline-block border-2 border-white"
              >
                Talk to Us
              </Link>
            </div>
          </div>

          <h3 className={`text-2xl font-semibold mt-10 ${lexend.className}`}>
            The Bottom Line
          </h3>
          <p className="mt-4">
            A digital support retainer is not just a way to pay for development
            time in advance. Done well, it is a relationship with a partner who
            understands your business, keeps your systems healthy, and is there
            when you need them&mdash;not just when they happen to be available.
          </p>
          <p className="mt-6">
            For businesses that depend on their digital systems to generate
            revenue, the cost of not having one often far exceeds the monthly
            retainer fee. One missed order, one day of downtime, one integration
            failure that goes unnoticed for a week&mdash;these are the real costs of
            reactive, ad-hoc support.
          </p>
          <p className="mt-6">
            If your business relies on platforms like{" "}
            <Link
              href="/services/shopify"
              className="text-blue-600 hover:underline font-semibold"
            >
              Shopify
            </Link>
            ,{" "}
            <Link
              href="/services/bigcommerce"
              className="text-blue-600 hover:underline font-semibold"
            >
              BigCommerce
            </Link>
            , or complex{" "}
            <Link
              href="/services/integrations"
              className="text-blue-600 hover:underline font-semibold"
            >
              system integrations
            </Link>
            , a retainer is worth a serious look. The right one will pay for
            itself.
          </p>
        </div>

        <aside className="md:col-span-1 bg-gray-100 p-6 rounded-lg mt-10 md:mt-0 md:sticky top-10">
          <h3 className={`text-xl font-semibold ${lexend.className}`}>
            Do You Need a Retainer?
          </h3>
          <div className="mt-4 space-y-3 text-sm">
            <div className="border-l-4 border-green-500 pl-3">
              Your site or store drives significant revenue
            </div>
            <div className="border-l-4 border-green-500 pl-3">
              You have integrations that need ongoing maintenance
            </div>
            <div className="border-l-4 border-green-500 pl-3">
              You have no in-house technical specialist
            </div>
            <div className="border-l-4 border-green-500 pl-3">
              Small improvements sit undone for months
            </div>
            <div className="border-l-4 border-green-500 pl-3">
              You have been let down by slow response times before
            </div>
            <div className="border-l-4 border-green-500 pl-3">
              Platform updates get delayed or missed
            </div>
          </div>
          <p className="mt-3 text-sm text-gray-600">
            Tick 3 or more? A retainer is probably worth exploring.
          </p>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <h4 className={`font-semibold ${lexend.className}`}>
              Platforms We Support
            </h4>
            <ul className="text-sm mt-2 space-y-2">
              <li>
                <Link href="/services/shopify" className="text-blue-600 hover:underline">
                  Shopify &amp; Shopify Plus
                </Link>
              </li>
              <li>
                <Link href="/services/bigcommerce" className="text-blue-600 hover:underline">
                  BigCommerce
                </Link>
              </li>
              <li>
                <Link href="/services/netsuite" className="text-blue-600 hover:underline">
                  NetSuite
                </Link>
              </li>
              <li>
                <Link href="/services/celigo" className="text-blue-600 hover:underline">
                  Celigo Integrations
                </Link>
              </li>
              <li>
                <Link href="/services/bespoke" className="text-blue-600 hover:underline">
                  Bespoke Web Applications
                </Link>
              </li>
            </ul>
          </div>

          <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
            <h4 className={`font-semibold ${lexend.className}`}>
              Related Reading
            </h4>
            <ul className="text-sm mt-2 space-y-2">
              <li>
                <Link href="/resources/articles/5-signs-ecommerce-integration-failing" className="text-blue-600 hover:underline">
                  5 Signs Your Integration Is Failing
                </Link>
              </li>
              <li>
                <Link href="/resources/articles/celigo-monitoring-best-practices" className="text-blue-600 hover:underline">
                  Celigo Monitoring Best Practices
                </Link>
              </li>
              <li>
                <Link href="/resources/articles/monitoring-and-alerting-website-problems" className="text-blue-600 hover:underline">
                  Monitoring and Alerting Guide
                </Link>
              </li>
            </ul>
          </div>

          <p className="mt-6 text-sm">
            Want to find out what a retainer with us would look like?{" "}
            <Link href="/contact" className="text-blue-600 hover:underline font-semibold">
              Get in touch
            </Link>{" "}
            for a no-obligation chat.
          </p>
        </aside>
      </section>
    </ArticleContainer>
  );
}

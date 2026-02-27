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
            BigCommerce NetSuite Integration: Complete Guide for Growing Retailers
          </h2>
          <p className="mt-10">
            Your BigCommerce store is ticking along nicely. Orders are coming in,
            products are selling, and your team is busy. But behind the scenes,
            someone is manually copying orders into NetSuite. Someone else is
            updating stock levels by hand. And your finance team is waiting until
            the end of the week to reconcile everything.
          </p>
          <p className="mt-6">
            Sound familiar? This is exactly what a BigCommerce&ndash;NetSuite
            integration is designed to solve. When your online store and your
            business management system talk to each other automatically, the
            manual work disappears&mdash;and your business becomes far easier to run.
          </p>
          <p className="mt-6">
            This guide explains what the integration actually does, how it works,
            what it costs, and how to avoid the common mistakes businesses make
            when setting it up.
          </p>

          <div>
            <Image
              src="/img/articles/bigcommerce-netsuite-integration-guide/integration-header.jpg"
              alt="BigCommerce store connected to NetSuite ERP on a clean minimal desk"
              width={640}
              height={400}
              className="mx-auto my-8 rounded-lg shadow-md"
            />
          </div>

          <h3 className={`text-2xl font-semibold mt-8 ${lexend.className}`}>
            What Does the Integration Actually Do?
          </h3>
          <p className="mt-4">
            At its simplest, a BigCommerce&ndash;NetSuite integration creates an
            automatic bridge between your online shop and the system you use to
            run your business. Instead of manually moving information between the
            two, data flows on its own&mdash;in real time or on a regular schedule,
            depending on your setup.
          </p>
          <p className="mt-4">
            Here is what typically gets connected:
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="bg-blue-50 p-5 rounded-lg">
              <h4 className={`font-semibold ${lexend.className} text-blue-900`}>Orders</h4>
              <p className="mt-2 text-blue-800 text-sm">
                Every order placed on BigCommerce is automatically created in
                NetSuite. No manual entry, no missed orders. Your warehouse and
                finance teams see new orders the moment they come in.
              </p>
            </div>
            <div className="bg-blue-50 p-5 rounded-lg">
              <h4 className={`font-semibold ${lexend.className} text-blue-900`}>Stock Levels</h4>
              <p className="mt-2 text-blue-800 text-sm">
                Inventory counts in NetSuite are pushed to your BigCommerce store
                automatically. When stock changes&mdash;through sales, returns, or
                warehouse movements&mdash;your website reflects it.
              </p>
            </div>
            <div className="bg-blue-50 p-5 rounded-lg">
              <h4 className={`font-semibold ${lexend.className} text-blue-900`}>Customer Records</h4>
              <p className="mt-2 text-blue-800 text-sm">
                New customers created on BigCommerce appear in NetSuite. Existing
                customer details&mdash;addresses, payment terms, account history&mdash;stay
                consistent across both systems.
              </p>
            </div>
            <div className="bg-blue-50 p-5 rounded-lg">
              <h4 className={`font-semibold ${lexend.className} text-blue-900`}>Products &amp; Pricing</h4>
              <p className="mt-2 text-blue-800 text-sm">
                Product information, pricing, and catalogue updates can be managed
                centrally in NetSuite and pushed to BigCommerce&mdash;so you only
                update things in one place.
              </p>
            </div>
            <div className="bg-blue-50 p-5 rounded-lg">
              <h4 className={`font-semibold ${lexend.className} text-blue-900`}>Fulfilment &amp; Shipping</h4>
              <p className="mt-2 text-blue-800 text-sm">
                When an order is fulfilled and dispatched in NetSuite, the tracking
                information flows back to BigCommerce and the customer gets notified
                automatically.
              </p>
            </div>
            <div className="bg-blue-50 p-5 rounded-lg">
              <h4 className={`font-semibold ${lexend.className} text-blue-900`}>Financial Data</h4>
              <p className="mt-2 text-blue-800 text-sm">
                Sales totals, refunds, and payment information are recorded in
                NetSuite without your finance team having to manually reconcile
                e-commerce transactions.
              </p>
            </div>
          </div>

          <h3 className={`text-2xl font-semibold mt-10 ${lexend.className}`}>
            How Does the Integration Work? The Three Main Approaches
          </h3>
          <p className="mt-4">
            There is no single &ldquo;plug in and go&rdquo; solution for connecting
            BigCommerce to NetSuite. Businesses typically choose one of three
            approaches, depending on their size, budget, and complexity.
          </p>

          <div className="mt-6 bg-green-50 p-6 rounded-lg">
            <h4 className={`font-semibold text-lg ${lexend.className} text-green-900`}>
              Option 1: An Integration Platform (Recommended for Most Businesses)
            </h4>
            <p className="mt-3 text-green-800 text-sm">
              Platforms like{" "}
              <Link
                href="/services/celigo"
                className="text-green-900 font-semibold hover:underline"
              >
                Celigo
              </Link>{" "}
              are purpose-built for exactly this kind of connection. They come with
              pre-built templates for BigCommerce and NetSuite, which means the
              core setup is done for you&mdash;you configure it to match your
              business rules rather than building everything from scratch.
            </p>
            <p className="mt-3 text-green-800 text-sm">
              This approach is faster to set up, easier to maintain, and comes with
              proper error handling built in. If something goes wrong, you get an
              alert rather than discovering the problem days later. It is the option
              we recommend for the vast majority of growing retailers.
            </p>
          </div>

          <div className="mt-4 bg-yellow-50 p-6 rounded-lg">
            <h4 className={`font-semibold text-lg ${lexend.className} text-yellow-900`}>
              Option 2: A Custom-Built Integration
            </h4>
            <p className="mt-3 text-yellow-800 text-sm">
              Some businesses build a custom connection using the BigCommerce API
              and the NetSuite API. This gives you complete control over exactly
              what data moves, when, and how. It can handle very specific business
              rules that off-the-shelf tools cannot.
            </p>
            <p className="mt-3 text-yellow-800 text-sm">
              The downside is cost and ongoing maintenance. Custom integrations are
              expensive to build and require technical expertise to keep running
              when either platform updates. Unless your requirements are genuinely
              unusual, an integration platform will almost always serve you better.
            </p>
          </div>

          <div className="mt-4 bg-gray-50 p-6 rounded-lg">
            <h4 className={`font-semibold text-lg ${lexend.className} text-gray-900`}>
              Option 3: A Third-Party Connector App
            </h4>
            <p className="mt-3 text-gray-700 text-sm">
              There are several smaller connector tools in the BigCommerce and
              NetSuite app marketplaces. These can work for businesses with
              straightforward requirements, but they often lack flexibility for
              anything beyond the basics. Support is variable, and they can be
              difficult to customise if your processes do not fit the standard mould.
            </p>
          </div>

          <div>
            <Image
              src="/img/articles/bigcommerce-netsuite-integration-guide/data-flow-diagram.jpg"
              alt="Simple diagram showing data flowing between BigCommerce and NetSuite"
              width={640}
              height={400}
              className="mx-auto my-8 rounded-lg shadow-md"
            />
          </div>

          <h3 className={`text-2xl font-semibold mt-8 ${lexend.className}`}>
            What to Expect From the Setup Process
          </h3>
          <p className="mt-4">
            Setting up a BigCommerce&ndash;NetSuite integration is not a quick
            afternoon job, but it is also not as daunting as it might sound. Here
            is a realistic picture of what is involved.
          </p>

          <div className="mt-6 space-y-4">
            <div className="border-l-4 border-blue-400 pl-5">
              <h4 className={`font-semibold ${lexend.className}`}>1. Discovery and Mapping</h4>
              <p className="mt-2 text-sm text-gray-700">
                Before anything is built, you need to map out exactly what data
                should move between systems and in which direction. This sounds
                simple but often surfaces surprises&mdash;product codes that do not
                match, tax rules that differ between systems, or fulfilment
                workflows that need careful handling. Getting this right at the
                start saves a lot of pain later.
              </p>
            </div>
            <div className="border-l-4 border-blue-400 pl-5">
              <h4 className={`font-semibold ${lexend.className}`}>2. Configuration and Testing</h4>
              <p className="mt-2 text-sm text-gray-700">
                Once the mapping is agreed, the integration is configured and
                thoroughly tested with real data before going live. Testing should
                include edge cases&mdash;refunds, partial orders, products with
                variants, B2B customers with special pricing. The more thorough the
                testing, the smoother the go-live.
              </p>
            </div>
            <div className="border-l-4 border-blue-400 pl-5">
              <h4 className={`font-semibold ${lexend.className}`}>3. Go-Live and Monitoring</h4>
              <p className="mt-2 text-sm text-gray-700">
                The first few weeks after going live are important. Watch the logs,
                check that data is arriving correctly, and be ready to tweak
                configuration. No integration is perfect from day one&mdash;the
                first month is about fine-tuning.
              </p>
            </div>
            <div className="border-l-4 border-blue-400 pl-5">
              <h4 className={`font-semibold ${lexend.className}`}>4. Ongoing Maintenance</h4>
              <p className="mt-2 text-sm text-gray-700">
                Integrations need looking after. When BigCommerce or NetSuite
                update their systems, something may need adjusting. When your
                business changes&mdash;new product types, new fulfilment centres,
                new sales channels&mdash;the integration needs to keep pace. This is
                why many businesses opt for a{" "}
                <Link
                  href="/services/integrations"
                  className="text-blue-600 hover:underline font-semibold"
                >
                  managed integration service
                </Link>{" "}
                rather than trying to maintain it themselves.
              </p>
            </div>
          </div>

          <h3 className={`text-2xl font-semibold mt-10 ${lexend.className}`}>
            Common Mistakes to Avoid
          </h3>
          <p className="mt-4">
            Having helped many retailers set up this integration, we see the same
            mistakes crop up repeatedly. Knowing them in advance can save you
            significant time and money.
          </p>

          <div className="mt-6 bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
            <ul className="space-y-4 text-red-800 text-sm">
              <li>
                <strong>Skimping on the discovery phase.</strong> Rushing straight
                to configuration without mapping your data properly is the most
                common cause of failed integrations. The mapping stage feels slow,
                but it is where the real work happens.
              </li>
              <li>
                <strong>Assuming product codes match between systems.</strong> They
                almost never do without some work. SKUs, product variants, bundle
                products&mdash;all of these need careful mapping before the integration
                can work correctly.
              </li>
              <li>
                <strong>Not planning for errors.</strong> Every integration will
                encounter errors eventually. If you do not have alerting and retry
                logic in place from the start, you will not know when things go
                wrong until a customer complains.
              </li>
              <li>
                <strong>Treating it as a one-off project.</strong> An integration
                is not something you build and forget. Your business changes, the
                platforms update, and the integration needs to keep up. Budget for
                ongoing maintenance from the start.
              </li>
              <li>
                <strong>Trying to sync everything at once.</strong> Start with the
                essentials&mdash;orders and inventory&mdash;and add complexity once the
                basics are stable. Trying to build everything in phase one usually
                means nothing works well.
              </li>
            </ul>
          </div>

          <h3 className={`text-2xl font-semibold mt-10 ${lexend.className}`}>
            What Does It Cost?
          </h3>
          <p className="mt-4">
            Costs vary considerably depending on complexity, the tool you choose,
            and whether you use a specialist to set it up.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="bg-gray-50 p-5 rounded-lg text-center">
              <h4 className={`font-semibold ${lexend.className} text-gray-800`}>Integration Platform</h4>
              <p className="mt-2 text-sm text-gray-600">
                Monthly subscription typically &pound;200&ndash;&pound;1,000+
                depending on transaction volume and features. Setup costs on top.
              </p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg text-center">
              <h4 className={`font-semibold ${lexend.className} text-gray-800`}>Implementation</h4>
              <p className="mt-2 text-sm text-gray-600">
                Professional setup typically ranges from &pound;3,000 to &pound;15,000
                depending on complexity. Straightforward setups sit at the lower end.
              </p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg text-center">
              <h4 className={`font-semibold ${lexend.className} text-gray-800`}>Ongoing Support</h4>
              <p className="mt-2 text-sm text-gray-600">
                Monthly retainer or ad-hoc support for maintenance, changes, and
                monitoring. Typically &pound;300&ndash;&pound;1,500 per month.
              </p>
            </div>
          </div>

          <p className="mt-6 text-sm text-gray-600">
            The ROI case is usually straightforward. If you are spending 10 hours
            per week on manual data entry at &pound;25 per hour, that is &pound;1,000 per
            month in staff time&mdash;before accounting for errors and the management
            time to fix them. Most integrations pay for themselves within six months.
          </p>

          <h3 className={`text-2xl font-semibold mt-10 ${lexend.className}`}>
            Should You Set It Up Yourself or Use a Specialist?
          </h3>
          <p className="mt-4">
            If you have a technically confident team, basic integrations using a
            platform like Celigo are manageable. The templates are well documented
            and the configuration tools are designed to be accessible.
          </p>
          <p className="mt-6">
            That said, most businesses find that using a specialist for the initial
            setup is money well spent. A specialist will:
          </p>
          <div className="mt-4 bg-green-50 p-6 rounded-lg">
            <ul className="space-y-2 text-green-800 text-sm list-disc list-inside">
              <li>Identify data mapping issues before they become problems</li>
              <li>Configure error handling and alerting correctly from the start</li>
              <li>Test edge cases your team might not think to check</li>
              <li>Set up monitoring so you know immediately if something breaks</li>
              <li>Document the integration so future changes are straightforward</li>
            </ul>
          </div>
          <p className="mt-6">
            The goal is not just to get the integration working on day one&mdash;it is
            to keep it working reliably as your business grows. See our{" "}
            <Link
              href="/resources/articles/5-signs-ecommerce-integration-failing"
              className="text-blue-600 hover:underline font-semibold"
            >
              guide to spotting integration failures
            </Link>{" "}
            to understand what can go wrong if the setup is not done properly.
          </p>

          <div className="mt-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Connect BigCommerce and NetSuite?
            </h3>
            <p className="mb-6">
              We specialise in BigCommerce and NetSuite integrations using Celigo&apos;s
              proven platform. Whether you are starting from scratch or rescuing a
              troubled integration, we can help you get it right.
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
                Get a Free Consultation
              </Link>
            </div>
          </div>

          <h3 className={`text-2xl font-semibold mt-10 ${lexend.className}`}>
            The Bottom Line
          </h3>
          <p className="mt-4">
            Connecting BigCommerce to NetSuite removes the manual work that slows
            your team down, reduces costly mistakes, and gives you a single accurate
            picture of your stock, orders, and finances. For growing retailers, it
            is not a luxury&mdash;it is the foundation that lets you scale without
            hiring more people to manage spreadsheets.
          </p>
          <p className="mt-6">
            The key is getting the setup right from the beginning. A well-built
            integration runs quietly in the background. A poorly built one generates
            constant fires to fight. Invest the time in the discovery and mapping
            phase, choose a reliable platform, and plan for ongoing maintenance&mdash;and
            your integration will serve you well for years to come.
          </p>
          <p className="mt-6">
            Explore our{" "}
            <Link
              href="/services/celigo"
              className="text-blue-600 hover:underline font-semibold"
            >
              Celigo integration services
            </Link>{" "}
            or read our{" "}
            <Link
              href="/resources/articles/shopify-netsuite-integration-guide"
              className="text-blue-600 hover:underline font-semibold"
            >
              Shopify&ndash;NetSuite integration guide
            </Link>{" "}
            for a detailed comparison of approaches across different platforms.
          </p>
        </div>

        <aside className="md:col-span-1 bg-gray-100 p-6 rounded-lg mt-10 md:mt-0 md:sticky top-10">
          <h3 className={`text-xl font-semibold ${lexend.className}`}>
            Quick Reference
          </h3>
          <div className="mt-4 space-y-3 text-sm">
            <div className="border-l-4 border-blue-400 pl-3">
              <strong>Orders</strong><br />
              Auto-created in NetSuite from BigCommerce
            </div>
            <div className="border-l-4 border-blue-400 pl-3">
              <strong>Inventory</strong><br />
              NetSuite stock levels pushed to your store
            </div>
            <div className="border-l-4 border-blue-400 pl-3">
              <strong>Customers</strong><br />
              Synced and kept consistent across both systems
            </div>
            <div className="border-l-4 border-blue-400 pl-3">
              <strong>Products</strong><br />
              Managed centrally, published to BigCommerce
            </div>
            <div className="border-l-4 border-blue-400 pl-3">
              <strong>Fulfilment</strong><br />
              Tracking updates flow back to the customer automatically
            </div>
          </div>

          <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
            <h4 className={`font-semibold ${lexend.className}`}>
              Recommended Tool
            </h4>
            <p className="text-sm mt-2">
              <Link
                href="/services/celigo"
                className="text-blue-600 hover:underline font-semibold"
              >
                Celigo
              </Link>{" "}
              — pre-built templates for both BigCommerce and NetSuite, with
              proper error handling and monitoring built in.
            </p>
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <h4 className={`font-semibold ${lexend.className}`}>
              Related Articles
            </h4>
            <ul className="text-sm mt-2 space-y-2">
              <li>
                <Link href="/resources/articles/shopify-netsuite-integration-guide" className="text-blue-600 hover:underline">
                  Shopify&ndash;NetSuite Integration Guide
                </Link>
              </li>
              <li>
                <Link href="/resources/articles/celigo-integration-platform-netsuite" className="text-blue-600 hover:underline">
                  Why Celigo for NetSuite Businesses
                </Link>
              </li>
              <li>
                <Link href="/resources/articles/bigcommerce-vs-shopify-comparison" className="text-blue-600 hover:underline">
                  BigCommerce vs Shopify
                </Link>
              </li>
              <li>
                <Link href="/resources/articles/5-signs-ecommerce-integration-failing" className="text-blue-600 hover:underline">
                  5 Signs Your Integration Is Failing
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
                <Link href="/services/bigcommerce" className="text-blue-600 hover:underline">
                  BigCommerce Development
                </Link>
              </li>
              <li>
                <Link href="/services/celigo" className="text-blue-600 hover:underline">
                  Celigo Integration Services
                </Link>
              </li>
              <li>
                <Link href="/services/integrations" className="text-blue-600 hover:underline">
                  Managed Integrations
                </Link>
              </li>
              <li>
                <Link href="/services/netsuite" className="text-blue-600 hover:underline">
                  NetSuite Services
                </Link>
              </li>
            </ul>
          </div>

          <p className="mt-4 text-sm">
            Not sure which approach is right for you?{" "}
            <Link href="/contact" className="text-blue-600 hover:underline font-semibold">
              Get a free consultation
            </Link>.
          </p>
        </aside>
      </section>
    </ArticleContainer>
  );
}

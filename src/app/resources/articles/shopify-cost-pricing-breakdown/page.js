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
            How Much Does Shopify Really Cost? Complete Monthly Pricing
            Breakdown
          </h2>
          <p className="mt-10">
            &quot;Shopify starts at just £25 per month!&quot; That&apos;s what
            the marketing says. Your actual invoice? £487 per month. What
            happened?
          </p>
          <p className="mt-6">
            The advertised Shopify plan pricing is just the beginning. The real
            cost includes transaction fees, payment processing fees, apps you
            can&apos;t run without, theme costs, development work, and a dozen
            other expenses that add up fast. Most businesses underestimate their
            true Shopify costs by 3-5× during planning, leading to budget shock
            when reality hits.
          </p>
          <p className="mt-6">
            This guide breaks down the real cost of running a Shopify store at
            different scales—from small startups to enterprise operations.
            You&apos;ll learn what you&apos;ll actually pay, where costs hide,
            and how to minimize expenses without sacrificing functionality.
          </p>
          <div>
            <Image
              src="/img/articles/shopify-cost-pricing-breakdown/pricing-calculator-header.jpg"
              alt="Shopify pricing calculator and cost breakdown"
              width={640}
              height={400}
              className="mx-auto my-8 rounded-lg shadow-md"
            />
          </div>
          <h3 className={`text-2xl font-semibold mt-8 ${lexend.className}`}>
            Base Shopify Plan Pricing (The Starting Point)
          </h3>
          <p className="mt-4">
            Let&apos;s start with what Shopify actually advertises. These are UK
            prices as of 2026:
          </p>
          <div className="mt-6 grid gap-4">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div className="flex justify-between items-start mb-3">
                <h4 className={`font-semibold text-lg ${lexend.className}`}>
                  Shopify Basic
                </h4>
                <div className="text-right">
                  <div className="text-2xl font-bold text-blue-600">
                    £25/month
                  </div>
                  <div className="text-xs text-gray-500">billed monthly</div>
                </div>
              </div>
              <ul className="text-sm space-y-1 text-gray-700">
                <li>✓ Online store + blog</li>
                <li>✓ Unlimited products</li>
                <li>✓ 2 staff accounts</li>
                <li>✓ Basic reports</li>
                <li>✗ 2.0% transaction fee (if not using Shopify Payments)</li>
                <li>✗ Limited inventory locations (4)</li>
              </ul>
              <p className="text-xs mt-3 text-gray-600">
                <strong>Best for:</strong> New stores testing the market, under
                £5k/month revenue
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-300">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className={`font-semibold text-lg ${lexend.className}`}>
                    Shopify (Standard)
                  </h4>
                  <span className="text-xs bg-blue-200 px-2 py-1 rounded">
                    Most Popular
                  </span>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-blue-600">
                    £65/month
                  </div>
                  <div className="text-xs text-gray-500">billed monthly</div>
                </div>
              </div>
              <ul className="text-sm space-y-1 text-gray-700">
                <li>✓ Everything in Basic</li>
                <li>✓ 5 staff accounts</li>
                <li>✓ Professional reports</li>
                <li>✓ Gift cards</li>
                <li>✗ 1.0% transaction fee (if not using Shopify Payments)</li>
                <li>✓ 5 inventory locations</li>
              </ul>
              <p className="text-xs mt-3 text-gray-600">
                <strong>Best for:</strong> Growing businesses, £5k-£50k/month
                revenue
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div className="flex justify-between items-start mb-3">
                <h4 className={`font-semibold text-lg ${lexend.className}`}>
                  Shopify Advanced
                </h4>
                <div className="text-right">
                  <div className="text-2xl font-bold text-blue-600">
                    £384/month
                  </div>
                  <div className="text-xs text-gray-500">billed monthly</div>
                </div>
              </div>
              <ul className="text-sm space-y-1 text-gray-700">
                <li>✓ Everything in Shopify</li>
                <li>✓ 15 staff accounts</li>
                <li>✓ Advanced reports</li>
                <li>✓ Third-party calculated shipping rates</li>
                <li>✗ 0.6% transaction fee (if not using Shopify Payments)</li>
                <li>✓ 8 inventory locations</li>
              </ul>
              <p className="text-xs mt-3 text-gray-600">
                <strong>Best for:</strong> Established e-commerce,
                £50k-£200k/month revenue
              </p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
              <div className="flex justify-between items-start mb-3">
                <h4 className={`font-semibold text-lg ${lexend.className}`}>
                  Shopify Plus
                </h4>
                <div className="text-right">
                  <div className="text-2xl font-bold text-purple-600">
                    £1,600+/month
                  </div>
                  <div className="text-xs text-gray-500">
                    negotiated pricing
                  </div>
                </div>
              </div>
              <ul className="text-sm space-y-1 text-gray-700">
                <li>✓ Everything in Advanced</li>
                <li>✓ Unlimited staff</li>
                <li>✓ Dedicated account manager</li>
                <li>✓ Custom checkout</li>
                <li>✓ No transaction fees</li>
                <li>✓ API priority</li>
              </ul>
              <p className="text-xs mt-3 text-gray-600">
                <strong>Best for:</strong> Enterprise, £200k+/month revenue
              </p>
            </div>
          </div>
          <div className="mt-6 bg-yellow-50 p-6 rounded-lg">
            <h4 className={`font-semibold ${lexend.className} text-yellow-900`}>
              Annual Billing Discount
            </h4>
            <p className="mt-2 text-yellow-800 text-sm">
              Pay annually and save 25% on Basic/Shopify/Advanced plans. Basic
              drops to £19/month, Shopify to £49/month, Advanced to £288/month.
              But remember—this locks you in for a year. Don&apos;t commit until
              you&apos;ve validated the platform works for your business.
            </p>
          </div>
          <h3 className={`text-2xl font-semibold mt-8 ${lexend.className}`}>
            Transaction Fees (The Hidden Tax)
          </h3>
          <p className="mt-4">
            Here&apos;s where costs get sneaky. If you don&apos;t use Shopify
            Payments (their native payment processor), Shopify charges a
            transaction fee on every sale:
          </p>
          <div className="mt-6 bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
            <h4 className={`font-semibold ${lexend.className} text-red-900`}>
              Transaction Fee Breakdown
            </h4>
            <ul className="mt-3 space-y-2 text-red-800 text-sm">
              <li>
                <strong>Basic Plan:</strong> 2.0% of every transaction
              </li>
              <li>
                <strong>Shopify Plan:</strong> 1.0% of every transaction
              </li>
              <li>
                <strong>Advanced Plan:</strong> 0.6% of every transaction
              </li>
              <li>
                <strong>Shopify Plus:</strong> 0.15% of every transaction
                (negotiable)
              </li>
            </ul>
            <p className="mt-4 text-red-800 text-sm">
              <strong>Real example:</strong> Doing £20,000/month in sales on
              Basic plan with PayPal? That&apos;s £400/month in transaction fees
              to Shopify, on top of PayPal&apos;s fees. Many businesses
              don&apos;t realize this until the first invoice arrives.
            </p>
          </div>
          <div className="mt-6 bg-blue-50 p-6 rounded-lg">
            <h4 className={`font-semibold ${lexend.className} text-blue-900`}>
              How to Avoid Transaction Fees
            </h4>
            <p className="mt-2 text-blue-800 text-sm">
              Use Shopify Payments (powered by Stripe). No transaction fees, but
              you still pay payment processing fees (see next section). For most
              UK businesses, Shopify Payments is the right choice unless you
              have specific requirements for another payment provider.
            </p>
          </div>
          <h3 className={`text-2xl font-semibold mt-8 ${lexend.className}`}>
            Payment Processing Fees (Unavoidable)
          </h3>
          <p className="mt-4">
            Whether you use Shopify Payments or another provider, you&apos;ll
            pay payment processing fees on every transaction. Here&apos;s what
            Shopify Payments charges in the UK:
          </p>
          <div className="mt-6 grid gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <strong>Basic Plan:</strong> 2.0% + 25p per online transaction
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <strong>Shopify Plan:</strong> 1.7% + 25p per online transaction
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <strong>Advanced Plan:</strong> 1.5% + 25p per online transaction
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <strong>Shopify Plus:</strong> Negotiated rates (typically 1.3% +
              25p)
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-600">
            <strong>Quick calculation:</strong> £50 average order value × 100
            orders/month on Shopify plan = £5,000 revenue. Processing fees:
            (1.7% × £5,000) + (£0.25 × 100) = £85 + £25 ={" "}
            <strong>£110/month</strong>
          </p>
          <p className="mt-4 text-sm">
            Use alternative payment providers (PayPal, Square, etc.) and
            you&apos;ll pay their processing fees PLUS Shopify&apos;s
            transaction fee. This rarely makes financial sense.
          </p>
          <div>
            <Image
              src="/img/articles/shopify-cost-pricing-breakdown/app-costs-breakdown.jpg"
              alt="Breakdown of essential Shopify app costs"
              width={640}
              height={400}
              className="mx-auto my-8 rounded-lg shadow-md"
            />
          </div>
          <h3 className={`text-2xl font-semibold mt-8 ${lexend.className}`}>
            Essential Apps (The Budget Killer)
          </h3>
          <p className="mt-4">
            Shopify&apos;s base functionality is deliberately limited.
            You&apos;ll need apps for features most businesses consider
            essential. Here&apos;s what a typical store actually needs:
          </p>
          <div className="mt-6 space-y-4">
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="flex justify-between items-start">
                <div>
                  <strong className="text-sm">Email Marketing</strong>
                  <p className="text-xs text-gray-600 mt-1">
                    Klaviyo, Mailchimp, or Omnisend for abandoned cart recovery,
                    newsletters, customer segments
                  </p>
                </div>
                <div className="text-right text-sm font-semibold text-blue-600">
                  £22-£250/mo
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="flex justify-between items-start">
                <div>
                  <strong className="text-sm">Reviews & Social Proof</strong>
                  <p className="text-xs text-gray-600 mt-1">
                    Judge.me, Loox, or Yotpo for product reviews and photo
                    galleries
                  </p>
                </div>
                <div className="text-right text-sm font-semibold text-blue-600">
                  £0-£99/mo
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="flex justify-between items-start">
                <div>
                  <strong className="text-sm">Upselling & Cross-selling</strong>
                  <p className="text-xs text-gray-600 mt-1">
                    ReConvert, Bold Upsell, or Zipify for post-purchase upsells
                  </p>
                </div>
                <div className="text-right text-sm font-semibold text-blue-600">
                  £0-£79/mo
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="flex justify-between items-start">
                <div>
                  <strong className="text-sm">SEO & Image Optimization</strong>
                  <p className="text-xs text-gray-600 mt-1">
                    Plug in SEO, TinyIMG, or SEO Booster for search visibility
                  </p>
                </div>
                <div className="text-right text-sm font-semibold text-blue-600">
                  £0-£39/mo
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="flex justify-between items-start">
                <div>
                  <strong className="text-sm">Inventory Management</strong>
                  <p className="text-xs text-gray-600 mt-1">
                    Stocky, TradeGecko, or Veeqo if selling across multiple
                    channels
                  </p>
                </div>
                <div className="text-right text-sm font-semibold text-blue-600">
                  £0-£399/mo
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="flex justify-between items-start">
                <div>
                  <strong className="text-sm">Shipping & Fulfillment</strong>
                  <p className="text-xs text-gray-600 mt-1">
                    ShipStation, Easyship, or Advanced Shipping Rules
                  </p>
                </div>
                <div className="text-right text-sm font-semibold text-blue-600">
                  £0-£159/mo
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="flex justify-between items-start">
                <div>
                  <strong className="text-sm">Analytics & Reporting</strong>
                  <p className="text-xs text-gray-600 mt-1">
                    Lifetimely, Better Reports, or Google Analytics enhanced
                    tracking
                  </p>
                </div>
                <div className="text-right text-sm font-semibold text-blue-600">
                  £0-£49/mo
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="flex justify-between items-start">
                <div>
                  <strong className="text-sm">Customer Support</strong>
                  <p className="text-xs text-gray-600 mt-1">
                    Gorgias, Reamaze, or Tidio for helpdesk and live chat
                  </p>
                </div>
                <div className="text-right text-sm font-semibold text-blue-600">
                  £0-£299/mo
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 bg-orange-50 p-6 rounded-lg">
            <h4 className={`font-semibold ${lexend.className} text-orange-900`}>
              Typical App Stack Costs
            </h4>
            <ul className="mt-3 space-y-2 text-orange-800 text-sm">
              <li>
                <strong>Minimal (startup):</strong> £20-£50/month (free tiers +
                1-2 paid apps)
              </li>
              <li>
                <strong>Growing business:</strong> £150-£350/month (5-8
                essential paid apps)
              </li>
              <li>
                <strong>Established business:</strong> £400-£800/month (10+ apps
                with higher tiers)
              </li>
            </ul>
          </div>
          <div className="mt-6 bg-yellow-50 p-6 rounded-lg">
            <h4 className={`font-semibold ${lexend.className} text-yellow-900`}>
              App Overload Warning
            </h4>
            <p className="mt-2 text-yellow-800 text-sm">
              Every app you add slows down your store. Too many apps destroy
              performance and hurt conversions. See our guide on{" "}
              <Link
                href="/resources/articles/optimizing-your-shopify-store"
                className="text-yellow-900 hover:underline font-semibold"
              >
                optimizing Shopify performance
              </Link>{" "}
              for app audit strategies.
            </p>
          </div>
          <h3 className={`text-2xl font-semibold mt-8 ${lexend.className}`}>
            Theme Costs (One-Time or Subscription)
          </h3>
          <p className="mt-4">
            Shopify offers free themes, but most businesses outgrow them
            quickly. Here&apos;s the theme cost landscape:
          </p>
          <div className="mt-6 grid gap-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <strong>Free Shopify Themes</strong>
                  <p className="text-xs text-gray-600 mt-1">
                    Dawn, Sense, Craft—basic but functional. Limited
                    customization.
                  </p>
                </div>
                <div className="text-right font-semibold text-green-600">
                  £0
                </div>
              </div>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <strong>Shopify Theme Store (Paid)</strong>
                  <p className="text-xs text-gray-600 mt-1">
                    One-time purchase, unlimited updates, good support
                  </p>
                </div>
                <div className="text-right font-semibold text-blue-600">
                  £120-£280
                </div>
              </div>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <strong>Third-Party Premium Themes</strong>
                  <p className="text-xs text-gray-600 mt-1">
                    ThemeForest, Out of the Sandbox—more features, variable
                    quality
                  </p>
                </div>
                <div className="text-right font-semibold text-purple-600">
                  £40-£200
                </div>
              </div>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <strong>Custom Theme Development</strong>
                  <p className="text-xs text-gray-600 mt-1">
                    Built specifically for your brand, fully bespoke
                  </p>
                </div>
                <div className="text-right font-semibold text-orange-600">
                  £5,000-£30,000
                </div>
              </div>
            </div>
          </div>
          <p className="mt-6 text-sm">
            <strong>Recommendation:</strong> Start with a paid theme from
            Shopify&apos;s theme store (£120-£280). They&apos;re well-coded,
            regularly updated, and include support. Custom themes make sense
            once you&apos;re doing £100k+/month and have specific requirements
            that themes can&apos;t meet.
          </p>
          <h3 className={`text-2xl font-semibold mt-8 ${lexend.className}`}>
            Development & Customization Costs
          </h3>
          <p className="mt-4">
            Even with a great theme, you&apos;ll need development work.
            Here&apos;s what businesses typically spend:
          </p>
          <div className="mt-6 space-y-4">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className={`font-semibold ${lexend.className}`}>
                Initial Setup & Configuration
              </h4>
              <p className="text-sm text-gray-600 mt-2">
                Theme customization, menu setup, collection configuration,
                product imports, payment setup, shipping zones
              </p>
              <div className="mt-3 flex justify-between items-center">
                <span className="text-sm">
                  <strong>DIY:</strong> Free (your time)
                </span>
                <span className="text-sm">
                  <strong>Agency:</strong> £800-£3,000
                </span>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className={`font-semibold ${lexend.className}`}>
                Custom Features & Functionality
              </h4>
              <p className="text-sm text-gray-600 mt-2">
                Product customizer, subscription system, wholesale portal,
                custom checkout fields, advanced filtering
              </p>
              <div className="mt-3 flex justify-between items-center">
                <span className="text-sm">
                  <strong>Per feature:</strong> £500-£5,000
                </span>
                <span className="text-sm">
                  <strong>Complex project:</strong> £10,000-£50,000
                </span>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className={`font-semibold ${lexend.className}`}>
                Ongoing Maintenance & Updates
              </h4>
              <p className="text-sm text-gray-600 mt-2">
                Monthly tweaks, seasonal promotions, new features, bug fixes,
                app integration
              </p>
              <div className="mt-3 flex justify-between items-center">
                <span className="text-sm">
                  <strong>Retainer:</strong> £300-£2,000/month
                </span>
                <span className="text-sm">
                  <strong>Hourly:</strong> £50-£150/hour
                </span>
              </div>
            </div>
          </div>
          <h3 className={`text-2xl font-semibold mt-8 ${lexend.className}`}>
            Other Hidden Costs
          </h3>
          <p className="mt-4">
            Don&apos;t forget these additional expenses that catch businesses
            off guard:
          </p>
          <div className="mt-6 space-y-3">
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <div>
                <strong className="text-sm">Domain Name</strong>
                <p className="text-xs text-gray-600">
                  .co.uk or .com registration
                </p>
              </div>
              <span className="text-sm font-semibold">£10-£15/year</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <div>
                <strong className="text-sm">Professional Email</strong>
                <p className="text-xs text-gray-600">
                  Google Workspace or Microsoft 365
                </p>
              </div>
              <span className="text-sm font-semibold">£4-£10/user/month</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <div>
                <strong className="text-sm">Product Photography</strong>
                <p className="text-xs text-gray-600">
                  Professional product images
                </p>
              </div>
              <span className="text-sm font-semibold">£5-£50/product</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <div>
                <strong className="text-sm">Stock Photos & Graphics</strong>
                <p className="text-xs text-gray-600">
                  Shutterstock, Unsplash Plus, or Canva Pro
                </p>
              </div>
              <span className="text-sm font-semibold">£0-£30/month</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <div>
                <strong className="text-sm">Marketing & Advertising</strong>
                <p className="text-xs text-gray-600">
                  Facebook Ads, Google Ads, influencer marketing
                </p>
              </div>
              <span className="text-sm font-semibold">£500-£10,000+/month</span>
            </div>
          </div>
          <h3 className={`text-2xl font-semibold mt-8 ${lexend.className}`}>
            Real-World Monthly Cost Examples
          </h3>
          <p className="mt-4">
            Here&apos;s what businesses actually pay at different scales:
          </p>
          <div className="mt-6 grid gap-6">
            <div className="bg-green-50 p-6 rounded-lg border-2 border-green-300">
              <h4
                className={`font-semibold text-xl ${lexend.className} text-green-900`}
              >
                Startup Store (£0-£5k/month revenue)
              </h4>
              <div className="mt-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Shopify Basic</span>
                  <span className="font-semibold">£25</span>
                </div>
                <div className="flex justify-between">
                  <span>Payment processing (est.)</span>
                  <span className="font-semibold">£35</span>
                </div>
                <div className="flex justify-between">
                  <span>Essential apps (2-3)</span>
                  <span className="font-semibold">£30</span>
                </div>
                <div className="flex justify-between">
                  <span>Free theme</span>
                  <span className="font-semibold">£0</span>
                </div>
                <div className="flex justify-between border-t-2 border-green-300 pt-2 mt-2">
                  <strong>Total Monthly Cost</strong>
                  <strong className="text-green-700">£90-£120</strong>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-300">
              <h4
                className={`font-semibold text-xl ${lexend.className} text-blue-900`}
              >
                Growing Business (£10k-£50k/month revenue)
              </h4>
              <div className="mt-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Shopify Standard</span>
                  <span className="font-semibold">£65</span>
                </div>
                <div className="flex justify-between">
                  <span>Payment processing (est.)</span>
                  <span className="font-semibold">£420</span>
                </div>
                <div className="flex justify-between">
                  <span>Apps (6-8 essential)</span>
                  <span className="font-semibold">£250</span>
                </div>
                <div className="flex justify-between">
                  <span>Paid theme</span>
                  <span className="font-semibold">£15/mo amortized</span>
                </div>
                <div className="flex justify-between">
                  <span>Development retainer</span>
                  <span className="font-semibold">£500</span>
                </div>
                <div className="flex justify-between">
                  <span>Email marketing</span>
                  <span className="font-semibold">£120</span>
                </div>
                <div className="flex justify-between border-t-2 border-blue-300 pt-2 mt-2">
                  <strong>Total Monthly Cost</strong>
                  <strong className="text-blue-700">£1,370</strong>
                </div>
              </div>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-300">
              <h4
                className={`font-semibold text-xl ${lexend.className} text-purple-900`}
              >
                Established E-commerce (£100k+/month revenue)
              </h4>
              <div className="mt-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Shopify Plus</span>
                  <span className="font-semibold">£1,600</span>
                </div>
                <div className="flex justify-between">
                  <span>Payment processing (est.)</span>
                  <span className="font-semibold">£1,500</span>
                </div>
                <div className="flex justify-between">
                  <span>Apps (10-15 advanced)</span>
                  <span className="font-semibold">£700</span>
                </div>
                <div className="flex justify-between">
                  <span>Custom theme maintenance</span>
                  <span className="font-semibold">£300</span>
                </div>
                <div className="flex justify-between">
                  <span>Development retainer</span>
                  <span className="font-semibold">£2,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Email marketing (Klaviyo)</span>
                  <span className="font-semibold">£450</span>
                </div>
                <div className="flex justify-between">
                  <span>Advanced analytics</span>
                  <span className="font-semibold">£200</span>
                </div>
                <div className="flex justify-between border-t-2 border-purple-300 pt-2 mt-2">
                  <strong>Total Monthly Cost</strong>
                  <strong className="text-purple-700">£6,750+</strong>
                </div>
              </div>
            </div>
          </div>
          <h3 className={`text-2xl font-semibold mt-8 ${lexend.className}`}>
            How to Minimize Shopify Costs
          </h3>
          <p className="mt-4">
            You can&apos;t avoid all costs, but you can optimize spending:
          </p>
          <div className="mt-6 bg-green-50 p-6 rounded-lg">
            <h4 className={`font-semibold ${lexend.className} text-green-900`}>
              Cost-Saving Strategies
            </h4>
            <ul className="mt-3 list-disc list-inside space-y-2 text-green-800 text-sm">
              <li>
                <strong>Use Shopify Payments:</strong> Eliminate transaction
                fees completely (saves £200-£1,000+/month depending on volume)
              </li>
              <li>
                <strong>Start with free apps:</strong> Many essential apps have
                generous free tiers. Upgrade only when you hit limits
              </li>
              <li>
                <strong>Audit apps quarterly:</strong> Deactivate apps
                you&apos;re not actively using. Typical store wastes
                £50-£150/month on unused subscriptions
              </li>
              <li>
                <strong>Annual billing for high-cost apps:</strong> Email
                marketing and helpdesk tools often offer 20% discounts for
                annual payment
              </li>
              <li>
                <strong>Negotiate Plus pricing:</strong> Shopify Plus pricing is
                negotiable based on projected volume. Push back on initial
                quotes
              </li>
              <li>
                <strong>DIY where possible:</strong> Basic theme customization,
                product uploads, content updates—learn to do yourself before
                hiring help
              </li>
              <li>
                <strong>Batch development work:</strong> Hourly rates expensive.
                Collect a list of changes and do quarterly update sprints
                instead of ad-hoc tweaks
              </li>
            </ul>
          </div>
          <h3 className={`text-2xl font-semibold mt-8 ${lexend.className}`}>
            When Should You Upgrade Plans?
          </h3>
          <p className="mt-4">
            Knowing when to upgrade (or downgrade) saves money and unlocks
            features when you actually need them:
          </p>
          <div className="mt-6 bg-blue-50 p-6 rounded-lg">
            <h4 className={`font-semibold ${lexend.className} text-blue-900`}>
              Upgrade Triggers
            </h4>
            <ul className="mt-3 space-y-3 text-blue-800 text-sm">
              <li>
                <strong>Basic → Shopify:</strong> When you need professional
                reports, gift cards, or more than 2 staff accounts. Usually
                around £5k-£10k/month revenue.
              </li>
              <li>
                <strong>Shopify → Advanced:</strong> When you need third-party
                calculated shipping rates or advanced reports. Usually around
                £30k-£50k/month revenue. Do the math—£320/month increase
                justified by lower transaction fees?
              </li>
              <li>
                <strong>Advanced → Plus:</strong> When you need custom checkout,
                unlimited API calls, better wholesale capabilities, or dedicated
                support. Usually £150k+/month revenue. Plus costs £1,600+/month
                but includes meaningful features and support.
              </li>
            </ul>
          </div>
          <div className="mt-6 bg-yellow-50 p-6 rounded-lg">
            <h4 className={`font-semibold ${lexend.className} text-yellow-900`}>
              Don&apos;t Upgrade Too Early
            </h4>
            <p className="mt-2 text-yellow-800 text-sm">
              Plan features look appealing, but upgrading before you actually
              need capabilities wastes money. Basic plan works fine until you
              genuinely need specific features from higher tiers. Revenue is a
              better upgrade trigger than feature lists.
            </p>
          </div>
          <h3 className={`text-2xl font-semibold mt-8 ${lexend.className}`}>
            Getting Help With Shopify Costs
          </h3>
          <p className="mt-4">
            Understanding true Shopify costs helps budget properly, but
            optimizing your setup requires expertise. Common areas where
            businesses overspend:
          </p>
          <div className="mt-6 bg-gray-50 p-6 rounded-lg">
            <ul className="space-y-2 text-sm">
              <li>✓ Paying for apps that replicate native Shopify features</li>
              <li>
                ✓ Using wrong payment provider (paying transaction fees
                unnecessarily)
              </li>
              <li>✓ Over-customizing when theme settings would work fine</li>
              <li>✓ Staying on higher plan when features unused</li>
              <li>✓ Poor performance from too many apps killing conversions</li>
            </ul>
          </div>
          <p className="mt-6">
            We help businesses optimize Shopify costs through app audits,
            performance optimization, and smart integration strategies. Whether
            you&apos;re planning a new store or reducing costs on an existing
            one, we can help. Learn more about our{" "}
            <Link
              href="/services/shopify"
              className="text-blue-600 hover:underline font-semibold"
            >
              Shopify development services
            </Link>
            .
          </p>
          <div className="mt-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Plan Your Shopify Budget Properly
            </h3>
            <p className="mb-6">
              Don&apos;t let hidden costs derail your e-commerce plans. Get a
              custom cost estimate based on your specific business requirements
              and learn how to optimize from day one.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-block"
              >
                Get Custom Cost Estimate
              </Link>
              <Link
                href="/services/shopify"
                className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors inline-block border-2 border-white"
              >
                View Shopify Services
              </Link>
            </div>
          </div>
          <h3 className={`text-2xl font-semibold mt-8 ${lexend.className}`}>
            The Bottom Line on Shopify Costs
          </h3>
          <p className="mt-4">
            Shopify isn&apos;t as cheap as the advertised base pricing suggests.
            Real monthly costs range from £90-£120 for startups testing the
            market, to £1,000-£2,000 for growing businesses, to £5,000+ for
            established e-commerce operations.
          </p>
          <p className="mt-6">
            The platform price itself (£25-£384/month for most businesses) is
            typically only 10-30% of your total Shopify costs. Payment
            processing fees, apps, development work, and marketing spend make up
            the rest.
          </p>
          <p className="mt-6">
            Budget properly from the start. Understand that the advertised plan
            price is just the beginning. Plan for apps, development, and ongoing
            optimization. And remember—Shopify costs are investments in revenue
            generation. A well-optimized £2,000/month Shopify setup generating
            £100,000/month in sales is a bargain. A poorly optimized £200/month
            setup generating £2,000/month is expensive.
          </p>
          <p className="mt-6">
            Focus on return on investment, not absolute cost. See our guide on{" "}
            <Link
              href="/resources/articles/optimizing-your-shopify-store"
              className="text-blue-600 hover:underline font-semibold"
            >
              optimizing Shopify conversions
            </Link>{" "}
            for strategies to maximize revenue from your investment.
          </p>
        </div>
        <aside className="md:col-span-1 bg-gray-100 p-6 rounded-lg mt-10 md:mt-0 md:sticky top-10">
          <h3 className={`text-xl font-semibold ${lexend.className}`}>
            Cost Calculator
          </h3>
          <div className="mt-4 space-y-4 text-sm">
            <div className="bg-white p-4 rounded-lg">
              <strong>Startup Costs</strong>
              <div className="mt-2 space-y-1 text-xs">
                <div className="flex justify-between">
                  <span>Plan:</span>
                  <span>£25</span>
                </div>
                <div className="flex justify-between">
                  <span>Processing:</span>
                  <span>£35</span>
                </div>
                <div className="flex justify-between">
                  <span>Apps:</span>
                  <span>£30</span>
                </div>
                <div className="flex justify-between border-t pt-1 mt-1 font-semibold">
                  <span>Total:</span>
                  <span>~£90-£120/mo</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <strong>Growing Business</strong>
              <div className="mt-2 space-y-1 text-xs">
                <div className="flex justify-between">
                  <span>Plan:</span>
                  <span>£65</span>
                </div>
                <div className="flex justify-between">
                  <span>Processing:</span>
                  <span>£420</span>
                </div>
                <div className="flex justify-between">
                  <span>Apps:</span>
                  <span>£250</span>
                </div>
                <div className="flex justify-between">
                  <span>Development:</span>
                  <span>£500</span>
                </div>
                <div className="flex justify-between border-t pt-1 mt-1 font-semibold">
                  <span>Total:</span>
                  <span>~£1,370/mo</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
            <h4 className={`font-semibold ${lexend.className}`}>
              Hidden Costs Alert
            </h4>
            <ul className="text-xs mt-2 space-y-1">
              <li>✗ Transaction fees (if not using Shopify Payments)</li>
              <li>✗ Payment processing (unavoidable)</li>
              <li>✗ Apps (£150-£800/month typical)</li>
              <li>✗ Development (ongoing needs)</li>
              <li>✗ Marketing (biggest expense)</li>
            </ul>
          </div>
          <div className="mt-6 p-4 bg-green-50 rounded-lg">
            <h4 className={`font-semibold ${lexend.className}`}>
              Cost-Saving Tips
            </h4>
            <ul className="text-xs mt-2 space-y-1">
              <li>✓ Use Shopify Payments</li>
              <li>✓ Start with free apps</li>
              <li>✓ Audit apps quarterly</li>
              <li>✓ Annual billing discounts</li>
              <li>✓ DIY basic tasks</li>
            </ul>
          </div>
          <p className="mt-4 text-sm">
            Need help optimizing costs?{" "}
            <a
              href="/contact"
              className="text-blue-600 hover:underline font-semibold"
            >
              Get a free audit
            </a>
            .
          </p>
        </aside>
      </section>
    </ArticleContainer>
  );
}

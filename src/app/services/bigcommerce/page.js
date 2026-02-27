import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import { lexend } from "../../fonts";
import Link from "next/link";
import SecondaryCTA from "@/components/common/SecondaryCTA";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAws,
  faShopify,
  faWordpress,
  faMagento,
} from "@fortawesome/free-brands-svg-icons";
import {
  faShoppingCart,
  faRocket,
  faChartLine,
  faCog,
  faStore,
  faShield,
  faCode,
  faUsers,
  faMapMarkerAlt,
  faDesktop,
  faMobile,
  faDatabase,
  faCloudUploadAlt,
  faPuzzlePiece,
  faGears,
  faLayerGroup,
  faCreditCard,
  faGlobe,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

export const metadata = {
  title:
    "BigCommerce Development UK | Expert Developer Essex | Ongoing Support",
  description:
    "Expert BigCommerce development and managed support services. Custom themes, app development, migrations & NetSuite integration. Essex-based, UK-wide. Free consultation.",
  keywords:
    "bigcommerce developer uk, bigcommerce custom app, bigcommerce netsuite integration, bigcommerce migration, stencil theme development, bigcommerce api integration, bigcommerce support uk, bigcommerce maintenance service",
  openGraph: {
    title:
      "BigCommerce Development UK | Expert Developer Essex | Ongoing Support",
    description:
      "Expert BigCommerce development and managed support services. Custom themes, app development, migrations & NetSuite integration. Essex-based, UK-wide. Free consultation.",
    type: "website",
    url: "https://www.thebeardeddeveloper.co.uk/services/bigcommerce",
    images: [
      {
        url: "https://www.thebeardeddeveloper.co.uk/img/thebearded-developer.png",
        width: 1200,
        height: 630,
        alt: "BigCommerce Development Services UK",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "BigCommerce Development UK | Expert Developer Essex | Ongoing Support",
    description:
      "Expert BigCommerce development and managed support services. Custom themes, app development, migrations & NetSuite integration. Essex-based, UK-wide. Free consultation.",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "BigCommerce Development",

  provider: {
    "@type": "LocalBusiness",
    name: "The Bearded Developer",
    image:
      "https://www.thebeardeddeveloper.co.uk/img/the-bearded-developer.png",
    priceRange: "£££",
    telephone: "07545960983",

    address: {
      "@type": "PostalAddress",
      addressLocality: "Braintree",
      addressRegion: "Essex",
      addressCountry: "GB",
      postalCode: "CM7 9NF",
      streetAddress: "Braintree, Essex",
    },
  },
  areaServed: {
    "@type": "Country",
    name: "United Kingdom",
  },
  description:
    "Expert BigCommerce development and managed support services. Custom themes, app development, migrations & NetSuite integration. Essex-based, UK-wide. Free consultation.",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceRange: "£££",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does BigCommerce development cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "BigCommerce development costs vary based on project complexity. Custom theme development typically starts from £3,000, while custom apps and integrations are quoted individually. Contact us for a free consultation.",
      },
    },
    {
      "@type": "Question",
      name: "Can you migrate my store from Shopify to BigCommerce?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we specialize in platform migrations including Shopify to BigCommerce. We preserve your data, SEO rankings, and ensure a smooth transition with minimal downtime.",
      },
    },
    {
      "@type": "Question",
      name: "Do you integrate BigCommerce with NetSuite?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we're experienced in BigCommerce-NetSuite integration, connecting your e-commerce platform with your ERP for real-time inventory, order management, and customer data synchronization.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer BigCommerce managed support retainers in the UK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We provide BigCommerce managed support retainers that include monitoring, bug fixes, feature development time, and priority support. Packages start from £1,200/month with 24-hour response SLAs for standard issues.",
      },
    },
  ],
};

const services = [
  {
    title: "BigCommerce Store Setup",
    icon: faStore,
    description:
      "Complete BigCommerce store configuration from initial setup to launch. Optimized for performance, conversions, and user experience.",
    features: [
      "Store configuration & setup",
      "Payment gateway integration",
      "Shipping & tax configuration",
      "SSL & security setup",
      "SEO optimization",
    ],
  },
  {
    title: "Custom Theme Development",
    icon: faCode,
    description:
      "Bespoke BigCommerce themes designed to reflect your brand and drive conversions. Mobile-responsive and performance-optimized.",
    features: [
      "Custom Stencil theme development",
      "Responsive design implementation",
      "Brand-focused customization",
      "Performance optimization",
      "Cross-browser compatibility",
    ],
  },
  {
    title: "BigCommerce App Development",
    icon: faCog,
    description:
      "Custom applications to extend your BigCommerce store&apos;s functionality. Private apps for specific needs or marketplace apps.",
    features: [
      "Custom app development",
      "BigCommerce API integration",
      "Third-party service connections",
      "Webhook implementations",
      "App store submissions",
    ],
  },
  {
    title: "Multi-Channel Selling",
    icon: faGlobe,
    description:
      "Leverage BigCommerce&apos;s built-in multi-channel capabilities to sell across marketplaces, social media, and multiple storefronts.",
    features: [
      "Amazon & eBay integration",
      "Facebook & Instagram shopping",
      "Google Shopping setup",
      "Multiple storefront management",
      "Centralized inventory management",
    ],
  },
  {
    title: "Migration Services",
    icon: faShoppingCart,
    description:
      "Seamless migration to BigCommerce from other platforms. Preserve your data, SEO rankings, and customer relationships.",
    features: [
      "Platform migrations (Shopify, WooCommerce, etc.)",
      "Data preservation & mapping",
      "SEO migration & redirects",
      "Design recreation",
      "Testing & validation",
    ],
  },
  {
    title: "API Integrations",
    icon: faPuzzlePiece,
    description:
      "Connect BigCommerce with your existing systems, ERPs, CRMs, and third-party services for seamless business operations.",
    features: [
      "ERP system integration",
      "CRM connectivity",
      "Inventory management systems",
      "Marketing automation tools",
      "Custom API development",
    ],
  },
  {
    title: "Performance Optimization",
    icon: faRocket,
    description:
      "Optimize your BigCommerce store for speed, search engines, and conversions. Improve user experience and sales performance.",
    features: [
      "Page speed optimization",
      "Core Web Vitals improvement",
      "SEO enhancements",
      "Conversion rate optimization",
      "Image optimization",
    ],
  },
  {
    title: "Enterprise Solutions",
    icon: faLayerGroup,
    description:
      "Advanced BigCommerce Enterprise solutions for high-volume businesses with complex requirements and custom workflows.",
    features: [
      "Advanced security features",
      "Custom checkout processes",
      "B2B functionality",
      "Advanced reporting",
      "Dedicated support",
    ],
  },
];

const features = [
  {
    title: "Built-in Multi-Channel",
    description:
      "Sell across multiple channels from one platform without additional apps or integrations.",
    icon: faGlobe,
  },
  {
    title: "API-First Architecture",
    description:
      "Headless commerce capabilities with powerful APIs for custom frontend experiences.",
    icon: faCode,
  },
  {
    title: "Enterprise Security",
    description:
      "PCI DSS Level 1 compliance and enterprise-grade security features built-in.",
    icon: faShield,
  },
  {
    title: "No Transaction Fees",
    description:
      "BigCommerce doesn't charge transaction fees, keeping more money in your business.",
    icon: faCreditCard,
  },
];

const migrationSources = [
  { name: "Shopify to BigCommerce", icon: faShopify, color: "text-green-600" },
  { name: "WooCommerce Migration", icon: faWordpress, color: "text-blue-500" },
  { name: "Magento Migration", icon: faMagento, color: "text-orange-500" },
  { name: "Custom Platform Migration", icon: faCode, color: "text-purple-600" },
];

const managedSupportTiers = [
  {
    name: "Foundation Support",
    price: "From £1,200/month",
    icon: faShield,
    developmentHours: "10 hours development/month",
    sla: "24-hour response SLA for standard issues",
    features: [
      "Store monitoring and alert triage",
      "Bug fixes and stability improvements",
      "Small feature development backlog",
      "Priority support queue",
    ],
    ideal:
      "Ideal for established stores that need dependable monthly maintenance coverage.",
  },
  {
    name: "Growth Support",
    price: "From £2,200/month",
    icon: faChartLine,
    developmentHours: "20 hours development/month",
    sla: "24-hour response SLA for standard issues",
    features: [
      "Everything in Foundation Support",
      "More capacity for roadmap features",
      "Regular platform and app compatibility checks",
      "Priority support for trading-critical fixes",
    ],
    ideal:
      "Ideal for growing merchants with ongoing UX, conversion, and integration updates.",
    popular: true,
  },
  {
    name: "Scale Support",
    price: "From £3,400/month",
    icon: faRocket,
    developmentHours: "30 hours development/month",
    sla: "24-hour response SLA for standard issues + emergency out-of-hours support available",
    features: [
      "Everything in Growth Support",
      "Highest monthly development allocation",
      "Emergency support option outside business hours",
      "Best fit for high-volume and enterprise stores",
    ],
    ideal:
      "Ideal for teams where BigCommerce uptime and rapid delivery directly impact revenue.",
  },
];

const bigCommerceProof = [
  {
    quote:
      "Our BigCommerce checkout and product page issues were fixed fast, and we now have a predictable monthly release cadence instead of ad-hoc firefighting.",
    company: "UK Home & Lifestyle Retailer",
    outcome:
      "Stabilized checkout and reduced support tickets within the first month.",
  },
  {
    quote:
      "The managed support retainer gave us a clear SLA and dedicated development time each month, which helped us launch feature updates without disrupting trade.",
    company: "B2B Components Merchant (BigCommerce)",
    outcome:
      "Delivered conversion-focused enhancements while maintaining day-to-day platform reliability.",
  },
];

export default function BigCommerceServicesPage() {
  return (
    <div className="my-20">
      <Section>
        <Container>
          <section className="md:p-10 relative">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h1
                className={`text-5xl md:text-6xl font-bold ${lexend.className} mb-6`}
              >
                BigCommerce Development and Support Services
              </h1>
              <p className="text-xl md:text-2xl font-semibold mb-8 max-w-4xl mx-auto">
                Expert BigCommerce development and customization across Essex
                and the UK. Harness the power of BigCommerce&apos;s built-in
                features for rapid e-commerce growth.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <span className="bg-teal-100 text-teal-800 px-4 py-2 rounded-full font-semibold">
                  <FontAwesomeIcon
                    icon={faShoppingCart}
                    className="mr-2 w-4 h-4 m-0 inline"
                  />
                  BigCommerce Experts
                </span>
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold">
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    className="mr-2 w-4 h-4 m-0 inline"
                  />
                  Essex Based
                </span>
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold">
                  <FontAwesomeIcon
                    icon={faUsers}
                    className="mr-2 w-4 h-4 m-0 inline"
                  />
                  UK Coverage
                </span>
              </div>
            </div>

            {/* Why BigCommerce */}
            <div className="mb-20">
              <h2
                className={`text-4xl md:text-5xl font-bold ${lexend.className} mb-8 text-center`}
              >
                Why Choose BigCommerce?
              </h2>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <FontAwesomeIcon
                        icon={faRocket}
                        className="text-teal-600 text-2xl w-4 h-4 mt-1"
                      />
                      <div>
                        <h3 className="text-xl font-bold mb-2">
                          Built for Growth
                        </h3>
                        <p>
                          BigCommerce offers powerful built-in features that
                          typically require expensive apps on other platforms,
                          perfect for scaling businesses.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <FontAwesomeIcon
                        icon={faGlobe}
                        className="text-blue-600 text-2xl w-4 h-4 mt-1"
                      />
                      <div>
                        <h3 className="text-xl font-bold mb-2">
                          Multi-Channel Native
                        </h3>
                        <p>
                          Sell on Amazon, eBay, Facebook, Instagram, and Google
                          Shopping directly from your BigCommerce dashboard
                          without additional costs.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <FontAwesomeIcon
                        icon={faShield}
                        className="text-green-600 text-2xl w-4 h-4 mt-1"
                      />
                      <div>
                        <h3 className="text-xl font-bold mb-2">
                          Enterprise Ready
                        </h3>
                        <p>
                          PCI DSS Level 1 compliance, 99.99% uptime, and
                          enterprise-grade security features built into every
                          plan.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="bg-gradient-to-br from-teal-400 to-blue-500 rounded-lg p-8 text-white">
                    <h3 className="text-2xl font-bold mb-4">
                      Ready to Grow with BigCommerce?
                    </h3>
                    <p className="mb-6">
                      Let&apos;s discuss how BigCommerce can accelerate your
                      e-commerce growth with powerful built-in features.
                    </p>
                    <Link
                      href="/contact"
                      className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-block"
                    >
                      Get BigCommerce Quote
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* BigCommerce Features */}
            <div className="mb-20">
              <h2
                className={`text-4xl md:text-5xl font-bold ${lexend.className} mb-12 text-center`}
              >
                BigCommerce Built-in Advantages
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="text-center p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <FontAwesomeIcon
                      icon={feature.icon}
                      className="text-4xl text-teal-600 mb-4"
                    />
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Services Grid */}
            <div className="mb-20">
              <h2
                className={`text-4xl md:text-5xl font-bold ${lexend.className} mb-12 text-center`}
              >
                Our BigCommerce Services
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
                  >
                    <div className="flex items-center mb-4">
                      <FontAwesomeIcon
                        icon={service.icon}
                        className="text-3xl text-teal-600 mr-4"
                      />
                      <h3 className={`text-2xl font-bold ${lexend.className}`}>
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <span className="text-green-500 mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Managed Support / Retainers */}
            <div className="mb-20 bg-gradient-to-br from-teal-50 to-blue-50 rounded-lg p-8 md:p-12">
              <h2
                className={`text-4xl md:text-5xl font-bold ${lexend.className} mb-6 text-center`}
              >
                Managed BigCommerce Support & Retainers
              </h2>
              <p className="text-center text-lg mb-12 max-w-4xl mx-auto">
                Ongoing BigCommerce maintenance service for UK merchants that
                need proactive monitoring, bug fixes, feature development, and
                priority support. Choose the package based on the development
                capacity your team needs each month.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                {managedSupportTiers.map((tier, index) => (
                  <div
                    key={index}
                    className={`bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow relative ${
                      tier.popular ? "ring-4 ring-teal-500" : ""
                    }`}
                  >
                    {tier.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-teal-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                          Most Popular
                        </span>
                      </div>
                    )}
                    <div className="text-center mb-6">
                      <FontAwesomeIcon
                        icon={tier.icon}
                        className="text-4xl text-teal-600 mb-4"
                      />
                      <h3
                        className={`text-2xl font-bold ${lexend.className} mb-2`}
                      >
                        {tier.name}
                      </h3>
                      <div className="text-3xl font-bold text-teal-600 mb-2">
                        {tier.price}
                      </div>
                      <p className="text-sm font-semibold text-gray-900">
                        {tier.developmentHours}
                      </p>
                      <p className="text-sm text-gray-600 mt-2">{tier.sla}</p>
                    </div>
                    <ul className="space-y-3 mb-6">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <span className="text-green-500 mr-2 mt-1">✓</span>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="border-t pt-4 mt-4">
                      <p className="text-sm text-gray-600 italic">
                        {tier.ideal}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Migration Services */}
            <div className="mb-20">
              <h2
                className={`text-4xl md:text-5xl font-bold ${lexend.className} mb-12 text-center`}
              >
                Migration to BigCommerce
              </h2>
              <div className="text-center mb-8">
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Moving to BigCommerce from another platform? We handle the
                  entire migration process, preserving your data, SEO rankings,
                  and ensuring a smooth transition for your customers.
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {migrationSources.map((source, index) => (
                  <div
                    key={index}
                    className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <FontAwesomeIcon
                      icon={source.icon}
                      className={`text-4xl ${source.color} mb-4`}
                    />
                    <h3 className="font-bold">{source.name}</h3>
                  </div>
                ))}
              </div>
            </div>

            {/* Process Section */}
            <div className="mb-20">
              <h2
                className={`text-4xl md:text-5xl font-bold ${lexend.className} mb-12 text-center`}
              >
                Our Development Process
              </h2>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="bg-teal-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-teal-600">1</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Analysis & Planning
                  </h3>
                  <p className="text-gray-600">
                    We analyze your business requirements and create a
                    comprehensive BigCommerce implementation plan.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">2</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Design & Development
                  </h3>
                  <p className="text-gray-600">
                    Custom theme development and store configuration optimized
                    for your brand and conversions.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-green-600">3</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Testing & Integration
                  </h3>
                  <p className="text-gray-600">
                    Comprehensive testing of all functionality, integrations,
                    and multi-channel connections.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-purple-600">
                      4
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Launch & Growth</h3>
                  <p className="text-gray-600">
                    Store launch with ongoing optimization, support, and growth
                    acceleration strategies.
                  </p>
                </div>
              </div>
            </div>

            {/* Technologies */}
            <div className="mb-20">
              <h2
                className={`text-3xl md:text-4xl font-bold ${lexend.className} mb-8 text-center`}
              >
                BigCommerce Technologies
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div className="p-6">
                  <FontAwesomeIcon
                    icon={faCode}
                    className="text-4xl text-teal-600 mb-4"
                  />
                  <h3 className="font-bold">Stencil Framework</h3>
                </div>
                <div className="p-6">
                  <FontAwesomeIcon
                    icon={faDatabase}
                    className="text-4xl text-blue-600 mb-4"
                  />
                  <h3 className="font-bold">REST & GraphQL APIs</h3>
                </div>
                <div className="p-6">
                  <FontAwesomeIcon
                    icon={faMobile}
                    className="text-4xl text-green-600 mb-4"
                  />
                  <h3 className="font-bold">Responsive Design</h3>
                </div>
                <div className="p-6">
                  <FontAwesomeIcon
                    icon={faCloudUploadAlt}
                    className="text-4xl text-purple-600 mb-4"
                  />
                  <h3 className="font-bold">Cloud Infrastructure</h3>
                </div>
              </div>
            </div>

            {/* Social Proof */}
            <div className="mb-20">
              <h2
                className={`text-3xl md:text-4xl font-bold ${lexend.className} mb-6 text-center`}
              >
                BigCommerce Client Results
              </h2>
              <p className="text-center text-lg mb-10 max-w-3xl mx-auto">
                BigCommerce support in the UK should deliver measurable
                outcomes, not just ticket replies. Here are examples of the work
                delivered through ongoing support retainers.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                {bigCommerceProof.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
                  >
                    <p className="text-lg italic mb-6">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                    <p className="font-bold mb-2">{item.company}</p>
                    <p className="text-gray-600 text-sm">{item.outcome}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Local Coverage */}
            <div className="mb-20 bg-gray-50 rounded-lg p-8">
              <h2
                className={`text-3xl md:text-4xl font-bold ${lexend.className} mb-6 text-center`}
              >
                BigCommerce Development Across Essex & The UK
              </h2>
              <p className="text-center text-lg mb-8 max-w-3xl mx-auto">
                Based in Braintree, Essex, we provide BigCommerce development
                services to businesses throughout Essex, London, and across the
                UK. Whether you're a startup in Chelmsford or an established
                retailer in London, we deliver enterprise-grade BigCommerce
                solutions with personalized local service.
              </p>
              <div className="text-center">
                <span className="inline-block bg-white px-6 py-3 rounded-full shadow-sm font-bold text-lg">
                  BigCommerce Development • Essex • London • UK Wide
                </span>
              </div>
            </div>
          </section>
          <SecondaryCTA
            title="Discuss Your BigCommerce Project"
            description="Get in touch to explore how our BigCommerce development and support services can help your business grow."
          />
        </Container>
      </Section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </div>
  );
}

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
    "BigCommerce Development Services | Essex & UK | The Bearded Developer",
  description:
    "Expert BigCommerce development and customization in Essex and across the UK. Custom themes, app development, migrations, and API integrations for growing businesses.",
  keywords:
    "bigcommerce development, bigcommerce developer, bigcommerce essex, ecommerce development, bigcommerce themes, bigcommerce apps uk",
  openGraph: {
    title: "Professional BigCommerce Development Services | Essex & UK",
    description:
      "Grow your business with expert BigCommerce development. Custom solutions, themes, and integrations from experienced developers.",
    type: "website",
  },
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
      "BigCommerce doesn&apos;t charge transaction fees, keeping more money in your business.",
    icon: faCreditCard,
  },
];

const migrationSources = [
  { name: "Shopify to BigCommerce", icon: faShopify, color: "text-green-600" },
  { name: "WooCommerce Migration", icon: faWordpress, color: "text-blue-500" },
  { name: "Magento Migration", icon: faMagento, color: "text-orange-500" },
  { name: "Custom Platform Migration", icon: faCode, color: "text-purple-600" },
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
                BigCommerce Development Services
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

            {/* Local Coverage */}
            <div className="mb-20 bg-gray-50 rounded-lg p-8">
              <h2
                className={`text-3xl md:text-4xl font-bold ${lexend.className} mb-6 text-center`}
              >
                BigCommerce Development Across Essex & The UK
              </h2>
              <p className="text-center text-lg mb-8 max-w-3xl mx-auto">
                Based in Essex, we provide BigCommerce development services to
                businesses across the UK. From startups to enterprise retailers,
                we help you leverage BigCommerce&apos;s powerful platform.
              </p>
              <div className="text-center">
                <span className="inline-block bg-white px-6 py-3 rounded-full shadow-sm font-bold text-lg">
                  BigCommerce Development • Essex • London • UK Wide
                </span>
              </div>
            </div>
          </section>
          <SecondaryCTA title="Ready to Accelerate Your E-commerce Growth?" />
        </Container>
      </Section>
    </div>
  );
}

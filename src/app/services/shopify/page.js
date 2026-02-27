import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import { lexend } from "../../fonts";
import Image from "next/image";
import Link from "next/link";
import SecondaryCTA from "@/components/common/SecondaryCTA";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShopify,
  faWordpress,
  faMagento,
} from "@fortawesome/free-brands-svg-icons";
import {
  faStore,
  faShoppingCart,
  faMobile,
  faCog,
  faRocket,
  faChartLine,
  faShield,
  faCode,
  faUsers,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

export const metadata = {
  title:
    "Shopify Developer Essex | Shopify Support & Development UK | The Bearded Developer",
  description:
    "Expert Shopify developer Essex services and UK-wide support. Shopify Plus, custom themes, app development, migrations, and managed support retainers from £900/month.",
  keywords:
    "shopify developer, shopify partner, shopify plus, shopify essex, shopify developer uk, ecommerce development, shopify themes, shopify apps",
  openGraph: {
    title: "Shopify Developer Essex | Shopify Support & Development UK",
    description:
      "Expert Shopify developer Essex services and UK-wide support. Shopify Plus, custom themes, app development, migrations, and managed support retainers from £900/month.",
    type: "website",
  },
};

const managedSupportTiers = [
  {
    name: "Essential Support",
    price: "From £900/month",
    icon: faShield,
    sla: "24-hour response SLA for standard issues",
    developmentHours: "8 development hours/month",
    features: [
      "Store monitoring and issue triage",
      "Bug fixes and theme maintenance",
      "Small feature enhancements",
      "Priority support for trading issues",
    ],
    ideal:
      "For established Shopify stores that need dependable monthly support coverage.",
  },
  {
    name: "Growth Support",
    price: "From £1,900/month",
    icon: faChartLine,
    sla: "Same-day response for standard business-critical issues",
    developmentHours: "16 development hours/month",
    features: [
      "Everything in Essential Support",
      "Expanded monthly development capacity",
      "Conversion and checkout optimisation backlog",
      "Integration and app compatibility management",
    ],
    ideal:
      "For scaling merchants that need ongoing improvements and faster support response.",
    popular: true,
  },
  {
    name: "Scale Support",
    price: "From £3,200/month",
    icon: faRocket,
    sla: "4-hour response for high-priority issues + emergency out-of-hours support available",
    developmentHours: "28 development hours/month",
    features: [
      "Everything in Growth Support",
      "Highest monthly delivery allocation",
      "Incident escalation for complex platform issues",
      "Ongoing roadmap delivery with support coverage",
    ],
    ideal:
      "For high-volume Shopify and Shopify Plus businesses needing rapid support and delivery.",
  },
];

const services = [
  {
    title: "Shopify Store Development",
    icon: faStore,
    description:
      "Complete Shopify store setup from concept to launch. We create high-converting, mobile-optimized stores that drive sales and provide exceptional user experiences.",
    features: [
      "Custom store setup and configuration",
      "Mobile-responsive design",
      "Payment gateway integration",
      "SEO optimization",
      "Performance optimization",
    ],
  },
  {
    title: "Shopify Plus Development",
    icon: faRocket,
    description:
      "Enterprise-level Shopify Plus solutions for high-volume businesses. Advanced features, automation, and scalability for growing companies.",
    features: [
      "Flow automation setup",
      "B2B portal development",
      "Advanced checkout customization",
      "Multi-store management",
      "Enterprise integrations",
    ],
  },
  {
    title: "Custom Theme Development",
    icon: faCode,
    description:
      "Bespoke Shopify themes tailored to your brand. Unique designs that convert visitors into customers while maintaining fast loading speeds.",
    features: [
      "Custom Liquid development",
      "Brand-focused design",
      "Conversion optimization",
      "Theme customization",
      "Performance optimization",
    ],
  },
  {
    title: "Shopify App Development",
    icon: faCog,
    description:
      "Custom Shopify apps to extend your store&apos;s functionality. Private apps for specific business needs or public apps for the Shopify App Store.",
    features: [
      "Private app development",
      "Public app store apps",
      "API integrations",
      "Custom functionality",
      "App maintenance & updates",
    ],
  },
  {
    title: "Shopify POS Solutions",
    icon: faMobile,
    description:
      "Complete point-of-sale solutions connecting your online and offline sales. Perfect for retail businesses with physical locations.",
    features: [
      "POS system setup",
      "Inventory synchronization",
      "Multi-location management",
      "Staff training",
      "Hardware recommendations",
    ],
  },
  {
    title: "Migration Services",
    icon: faShoppingCart,
    description:
      "Seamless migration from other platforms to Shopify. We handle everything from data transfer to design recreation with minimal downtime.",
    features: [
      "Platform migrations (WooCommerce, Magento, etc.)",
      "Data preservation",
      "SEO migration",
      "Design recreation",
      "Testing & optimization",
    ],
  },
  {
    title: "Shopify Optimization",
    icon: faChartLine,
    description:
      "Improve your existing Shopify store&apos;s performance, conversion rates, and user experience through expert analysis and optimization.",
    features: [
      "Speed optimization",
      "Conversion rate optimization",
      "SEO improvements",
      "UX/UI enhancements",
      "Analytics setup",
    ],
  },
  {
    title: "Ongoing Support & Maintenance",
    icon: faShield,
    description:
      "Comprehensive support and maintenance services to keep your Shopify store running smoothly and up-to-date with the latest features.",
    features: [
      "Regular updates & maintenance",
      "Security monitoring",
      "Backup management",
      "Technical support",
      "Performance monitoring",
    ],
  },
];

const locations = [
  "Essex",
  "London",
  "Cambridge",
  "Chelmsford",
  "Colchester",
  "Southend-on-Sea",
  "Basildon",
  "Harlow",
  "Brentwood",
  "Maldon",
];

export default function ShopifyServicesPage() {
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
                Expert Shopify Development Services | Essex & UK
              </h1>
              <p className="text-xl md:text-2xl font-semibold mb-8 max-w-4xl mx-auto">
                Looking for a Shopify developer Essex businesses trust?
                Certified Shopify Partners delivering custom e-commerce
                solutions and Shopify support UK-wide. From startup stores to
                enterprise Shopify Plus implementations.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold">
                  <FontAwesomeIcon
                    icon={faShopify}
                    className="mr-2 w-4 h-4 m-0 inline"
                  />
                  Certified Partner
                </span>
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold">
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    className="mr-2 w-4 h-4 m-0 inline"
                  />
                  Essex Based
                </span>
                <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-semibold">
                  <FontAwesomeIcon
                    icon={faUsers}
                    className="mr-2 w-4 h-4 m-0 inline"
                  />
                  UK Coverage
                </span>
              </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="mb-20">
              <h2
                className={`text-4xl md:text-5xl font-bold ${lexend.className} mb-8 text-center`}
              >
                Why Choose Our Shopify Services?
              </h2>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <FontAwesomeIcon
                        icon={faShopify}
                        className="text-green-600 text-2xl w-4 h-4 mt-1"
                      />
                      <div>
                        <h3 className="text-xl font-bold mb-2">
                          Certified Shopify Partners
                        </h3>
                        <p>
                          As official Shopify partners, we have direct access to
                          the latest features, beta programs, and dedicated
                          support channels.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <FontAwesomeIcon
                        icon={faMapMarkerAlt}
                        className="text-blue-600 text-2xl w-4 h-4 mt-1"
                      />
                      <div>
                        <h3 className="text-xl font-bold mb-2">
                          Local Essex Expertise
                        </h3>
                        <p>
                          Based in Essex with deep understanding of local
                          markets while serving clients across the UK and
                          internationally.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <FontAwesomeIcon
                        icon={faRocket}
                        className="text-purple-600 text-2xl w-4 h-4 mt-1"
                      />
                      <div>
                        <h3 className="text-xl font-bold mb-2">
                          Proven Results
                        </h3>
                        <p>
                          Our Shopify stores consistently achieve higher
                          conversion rates and faster loading times than
                          industry averages.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="bg-gradient-to-br from-green-400 to-blue-500 rounded-lg p-8 text-white">
                    <h3 className="text-2xl font-bold mb-4">
                      Ready to Get Started?
                    </h3>
                    <p className="mb-6">
                      Let&apos;s discuss your Shopify project and how we can
                      help grow your business.
                    </p>
                    <Link
                      href="/contact"
                      className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-block"
                    >
                      Get a Free Shopify Consultation
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Grid */}
            <div className="mb-20">
              <h2
                className={`text-4xl md:text-5xl font-bold ${lexend.className} mb-12 text-center`}
              >
                Our Shopify Services
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
                        className="text-3xl text-blue-600 mr-4"
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
            <div className="mb-20 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg p-8 md:p-12">
              <h2
                className={`text-4xl md:text-5xl font-bold ${lexend.className} mb-6 text-center`}
              >
                Shopify Managed Support & Maintenance Retainers
              </h2>
              <p className="text-center text-lg mb-12 max-w-4xl mx-auto">
                Ongoing Shopify maintenance service for UK merchants that need
                proactive monitoring, bug fixes, feature development, and
                priority support from a dedicated Shopify developer retainer
                team.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                {managedSupportTiers.map((tier, index) => (
                  <div
                    key={index}
                    className={`bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow relative ${
                      tier.popular ? "ring-4 ring-green-500" : ""
                    }`}
                  >
                    {tier.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                          Most Popular
                        </span>
                      </div>
                    )}
                    <div className="text-center mb-6">
                      <FontAwesomeIcon
                        icon={tier.icon}
                        className="text-4xl text-green-600 mb-4"
                      />
                      <h3
                        className={`text-2xl font-bold ${lexend.className} mb-2`}
                      >
                        {tier.name}
                      </h3>
                      <div className="text-3xl font-bold text-green-600 mb-2">
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

            {/* Process Section */}
            <div className="mb-20">
              <h2
                className={`text-4xl md:text-5xl font-bold ${lexend.className} mb-12 text-center`}
              >
                Our Development Process
              </h2>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">1</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Discovery & Planning
                  </h3>
                  <p className="text-gray-600">
                    We understand your business goals, target audience, and
                    technical requirements.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-green-600">2</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Design & Development
                  </h3>
                  <p className="text-gray-600">
                    Custom design and development tailored to your brand and
                    optimized for conversions.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-purple-600">
                      3
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Testing & Optimization
                  </h3>
                  <p className="text-gray-600">
                    Comprehensive testing across devices and browsers with
                    performance optimization.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-orange-600">
                      4
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Launch & Support</h3>
                  <p className="text-gray-600">
                    Smooth launch with ongoing support, maintenance, and growth
                    optimization.
                  </p>
                </div>
              </div>
            </div>

            {/* Local Coverage */}
            <div className="mb-20 bg-gray-50 rounded-lg p-8">
              <h2
                className={`text-3xl md:text-4xl font-bold ${lexend.className} mb-6 text-center`}
              >
                Shopify Development Across Essex & Beyond
              </h2>
              <p className="text-center text-lg mb-8 max-w-3xl mx-auto">
                Based in Essex, we serve businesses across the region and
                throughout the UK. Whether you&apos;re a local startup or an
                established business looking to expand online, we provide expert
                Shopify development services.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {locations.map((location, index) => (
                  <span
                    key={index}
                    className="bg-white px-4 py-2 rounded-full shadow-sm font-medium"
                  >
                    Shopify Developer {location}
                  </span>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className="mb-20">
              <h2
                className={`text-3xl md:text-4xl font-bold ${lexend.className} mb-8 text-center`}
              >
                Technologies We Work With
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div className="p-6">
                  <FontAwesomeIcon
                    icon={faShopify}
                    className="text-4xl text-green-600 mb-4"
                  />
                  <h3 className="font-bold">Shopify & Shopify Plus</h3>
                </div>
                <div className="p-6">
                  <FontAwesomeIcon
                    icon={faCode}
                    className="text-4xl text-blue-600 mb-4"
                  />
                  <h3 className="font-bold">Liquid Template Language</h3>
                </div>
                <div className="p-6">
                  <FontAwesomeIcon
                    icon={faMobile}
                    className="text-4xl text-purple-600 mb-4"
                  />
                  <h3 className="font-bold">React & JavaScript</h3>
                </div>
                <div className="p-6">
                  <FontAwesomeIcon
                    icon={faCog}
                    className="text-4xl text-orange-600 mb-4"
                  />
                  <h3 className="font-bold">APIs & Integrations</h3>
                </div>
              </div>
            </div>
          </section>
          <SecondaryCTA title="Get a Free Shopify Consultation" />
        </Container>
      </Section>
    </div>
  );
}

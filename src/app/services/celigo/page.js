import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import { lexend } from "../../fonts";
import Link from "next/link";
import SecondaryCTA from "@/components/common/SecondaryCTA";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShopify, faSlack } from "@fortawesome/free-brands-svg-icons";
import {
  faRocket,
  faChartLine,
  faDatabase,
  faCode,
  faUsers,
  faMapMarkerAlt,
  faGears,
  faSync,
  faFileInvoice,
  faWarehouse,
  faUserTie,
  faShoppingCart,
  faBell,
  faShield,
  faCheckCircle,
  faWrench,
  faClock,
  faHeadset,
  faChartBar,
  faBolt,
} from "@fortawesome/free-solid-svg-icons";

export const metadata = {
  title:
    "Celigo Integration Services | Celigo Technical Partner | Essex & UK | The Bearded Developer",
  description:
    "Expert Celigo integration services from a Celigo Technical Partner. Specializing in NetSuite integrations, managed support, error troubleshooting, and flow optimization across Essex and the UK.",
  keywords:
    "celigo integration, celigo partner, celigo netsuite, celigo support, celigo managed services, integration platform, ipaas, celigo essex, celigo uk",
  openGraph: {
    title:
      "Celigo Integration Services | Celigo Technical Partner | Essex & UK",
    description:
      "Expert Celigo integration services including setup, troubleshooting, optimization, and managed support. Celigo Technical Partner serving businesses across the UK.",
    type: "website",
  },
};

const services = [
  {
    title: "NetSuite Integrations",
    icon: faDatabase,
    description:
      "Expert Celigo integration services connecting NetSuite to Shopify, e-commerce platforms, CRM systems, payment processors, and third-party applications.",
    features: [
      "Shopify to NetSuite integration",
      "BigCommerce to NetSuite",
      "Multi-channel order synchronization",
      "Inventory management flows",
      "Customer & financial data sync",
      "Payment processor integration",
    ],
  },
  {
    title: "Managed Celigo Support",
    icon: faHeadset,
    description:
      "Continuous monitoring, proactive error prevention, and expert troubleshooting for your Celigo integrations. Monthly retainer packages starting at £800/month.",
    features: [
      "Continuous integration monitoring",
      "Proactive error detection & fixing",
      "Priority support with SLA",
      "Weekly health checks",
      "Credential management",
      "Performance optimization",
    ],
  },
  {
    title: "Flow Development & Optimization",
    icon: faCode,
    description:
      "Custom Celigo flow development, complex data transformations, and performance optimization to handle your unique business requirements.",
    features: [
      "Custom flow development",
      "JavaScript transformation logic",
      "Complex mapping configuration",
      "API endpoint development",
      "Webhook setup & management",
      "Batch processing optimization",
    ],
  },
  {
    title: "Error Troubleshooting",
    icon: faWrench,
    description:
      "Rapid diagnosis and resolution of integration failures. From authentication errors to mapping issues, we fix Celigo errors fast.",
    features: [
      "Authentication failure fixes",
      "Mapping error resolution",
      "API rate limit optimization",
      "Timeout troubleshooting",
      "Data validation fixes",
      "Emergency response services",
    ],
  },
  {
    title: "Integration Strategy & Consulting",
    icon: faChartBar,
    description:
      "Strategic guidance on integration architecture, platform selection, and best practices for scalable, maintainable integrations.",
    features: [
      "Integration requirements analysis",
      "Architecture design & planning",
      "Cost-benefit analysis",
      "Vendor selection guidance",
      "Migration planning",
      "Best practice training",
    ],
  },
  {
    title: "Data Migration & Onboarding",
    icon: faSync,
    description:
      "Safe, accurate data migration from legacy systems to NetSuite via Celigo. Initial setup, historical data imports, and go-live support.",
    features: [
      "Historical data migration",
      "Legacy system extraction",
      "Data cleansing & validation",
      "Staged migration approach",
      "Go-live support",
      "Post-migration reconciliation",
    ],
  },
];

const managedServiceTiers = [
  {
    name: "Essential Monitoring",
    price: "£800/month",
    icon: faBell,
    description: "Basic monitoring and support for stable integrations",
    features: [
      "Dedicated Slack channel",
      "Email alerts for flow failures",
      "Weekly health check",
      "Credential expiration monitoring",
      "Standard support hours (9am-5pm)",
      "Monthly performance review",
      "Documentation updates",
    ],
    ideal: "Small businesses with 1-3 simple flows",
  },
  {
    name: "Proactive Support",
    price: "£1,500/month",
    icon: faShield,
    description: "Comprehensive monitoring with proactive optimization",
    features: [
      "Dedicated Slack channel",
      "Continuous monitoring & alerting",
      "Proactive error prevention",
      "Priority support (response within 4 hours)",
      "Health checks twice per week",
      "Flow optimization recommendations",
      "Quarterly architecture review",
      "Included: 5 hours development/month",
    ],
    ideal: "Growing businesses with 4-10 flows",
    popular: true,
  },
  {
    name: "Enterprise Management",
    price: "£2,500+/month",
    icon: faRocket,
    description: "Full integration lifecycle management with dedicated support",
    features: [
      "Dedicated Slack channel",
      "Dedicated integration specialist",
      "Continuous monitoring with 1-hour response SLA",
      "Weekly strategic check-ins",
      "Advanced performance optimization",
      "Change management & testing",
      "Disaster recovery planning",
      "Included: 15 hours development/month",
      "On-call emergency support",
    ],
    ideal: "Enterprise with 10+ complex flows",
  },
];

const whyCeligo = [
  {
    title: "Pre-built NetSuite Connectors",
    description:
      "Celigo provides purpose-built integrations for NetSuite with pre-configured flows that reduce implementation time from months to weeks.",
    icon: faBolt,
  },
  {
    title: "Lower Total Cost of Ownership",
    description:
      "Compared to custom API development, Celigo reduces development costs by 60-80% and ongoing maintenance costs by similar margins.",
    icon: faChartLine,
  },
  {
    title: "No-Code & Low-Code Platform",
    description:
      "Business users can maintain simple flows while developers handle complex transformations. Reduces dependency on specialized developers.",
    icon: faUsers,
  },
  {
    title: "Proven Scalability",
    description:
      "Handle millions of transactions monthly. Celigo automatically scales to meet demand without infrastructure management.",
    icon: faRocket,
  },
];

const integrationTypes = [
  {
    title: "Shopify ↔ NetSuite",
    description:
      "Bi-directional sync of orders, customers, inventory, fulfillments, and returns between Shopify and NetSuite.",
    timeline: "4-6 weeks",
    cost: "From £5,000 setup",
    benefits: [
      "Real-time order synchronization",
      "Automated inventory updates",
      "Customer data unification",
      "Fulfillment tracking",
    ],
  },
  {
    title: "BigCommerce ↔ NetSuite",
    description:
      "Complete e-commerce integration connecting BigCommerce stores with NetSuite ERP for order management and inventory control.",
    timeline: "4-6 weeks",
    cost: "From £5,000 setup",
    benefits: [
      "Multi-channel order sync",
      "Inventory synchronization",
      "Product catalog management",
      "Financial reconciliation",
    ],
  },
  {
    title: "CRM ↔ NetSuite",
    description:
      "Connect Salesforce, HubSpot, or other CRM systems with NetSuite for unified customer data and sales pipeline visibility.",
    timeline: "3-5 weeks",
    cost: "From £4,000 setup",
    benefits: [
      "Customer record sync",
      "Opportunity tracking",
      "Quote to cash automation",
      "Sales performance reporting",
    ],
  },
  {
    title: "Custom API Integrations",
    description:
      "Connect any system with REST/SOAP APIs to NetSuite or other platforms using Celigo&apos;s flexible integration framework.",
    timeline: "2-8 weeks",
    cost: "From £3,000 setup",
    benefits: [
      "Flexible data mapping",
      "Complex transformations",
      "Webhook support",
      "Custom business logic",
    ],
  },
];

export default function CeligoServicesPage() {
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
                Celigo Integration Services
              </h1>
              <p className="text-xl md:text-2xl font-semibold mb-8 max-w-4xl mx-auto">
                Expert Celigo integration services from a Celigo Technical
                Partner. Specializing in NetSuite integrations, managed support,
                and complex flow development across Essex and the UK.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="mr-2 w-4 h-4 m-0 inline"
                  />
                  Celigo Technical Partner
                </span>
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold">
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

            {/* Why Choose Celigo */}
            <div className="mb-20">
              <h2
                className={`text-4xl md:text-5xl font-bold ${lexend.className} mb-8 text-center`}
              >
                Why Choose Celigo for NetSuite Integrations?
              </h2>
              <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
                Celigo is the leading integration platform for NetSuite
                businesses, offering pre-built connectors, proven scalability,
                and significantly lower total cost of ownership compared to
                custom development.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                {whyCeligo.map((reason, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
                  >
                    <div className="flex items-start space-x-4">
                      <FontAwesomeIcon
                        icon={reason.icon}
                        className="text-blue-600 text-3xl w-8 h-8 mt-1"
                      />
                      <div>
                        <h3
                          className={`text-xl font-bold mb-2 ${lexend.className}`}
                        >
                          {reason.title}
                        </h3>
                        <p className="text-gray-600">{reason.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <p className="text-lg">
                  Learn more about{" "}
                  <Link
                    href="/resources/articles/celigo-integration-platform-netsuite"
                    className="text-blue-600 hover:underline font-semibold"
                  >
                    why Celigo is the right choice for NetSuite businesses
                  </Link>
                  .
                </p>
              </div>
            </div>

            {/* Managed Services Section */}
            <div className="mb-20 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-8 md:p-12">
              <h2
                className={`text-4xl md:text-5xl font-bold ${lexend.className} mb-6 text-center`}
              >
                Managed Celigo Support Services
              </h2>
              <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
                Stop firefighting integration failures at 3 AM. Our managed
                service packages provide proactive monitoring, expert
                troubleshooting, and peace of mind that your integrations are
                running smoothly.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                {managedServiceTiers.map((tier, index) => (
                  <div
                    key={index}
                    className={`bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow relative ${
                      tier.popular ? "ring-4 ring-blue-500" : ""
                    }`}
                  >
                    {tier.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                          Most Popular
                        </span>
                      </div>
                    )}
                    <div className="text-center mb-6">
                      <FontAwesomeIcon
                        icon={tier.icon}
                        className="text-4xl text-blue-600 mb-4"
                      />
                      <h3
                        className={`text-2xl font-bold ${lexend.className} mb-2`}
                      >
                        {tier.name}
                      </h3>
                      <div className="text-3xl font-bold text-blue-600 mb-2">
                        {tier.price}
                      </div>
                      <p className="text-gray-600 text-sm">
                        {tier.description}
                      </p>
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
                      <p className="text-sm text-gray-600">
                        <strong>Ideal for:</strong> {tier.ideal}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-12 text-center">
                <p className="text-lg mb-4">
                  Need help choosing the right package?
                </p>
                <Link
                  href="/contact"
                  className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-colors inline-block text-lg"
                >
                  Schedule Free Consultation
                </Link>
              </div>
            </div>

            {/* Services Grid */}
            <div className="mb-20">
              <h2
                className={`text-4xl md:text-5xl font-bold ${lexend.className} mb-12 text-center`}
              >
                Our Celigo Integration Services
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                      <h3 className={`text-xl font-bold ${lexend.className}`}>
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <span className="text-green-500 mr-2 mt-0.5">✓</span>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Common Integration Types */}
            <div className="mb-20">
              <h2
                className={`text-4xl md:text-5xl font-bold ${lexend.className} mb-12 text-center`}
              >
                Common Integration Projects
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {integrationTypes.map((type, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
                  >
                    <h3
                      className={`text-2xl font-bold ${lexend.className} mb-4`}
                    >
                      {type.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{type.description}</p>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <div className="text-sm text-gray-600 mb-1">
                          <FontAwesomeIcon
                            icon={faClock}
                            className="mr-2 w-3 h-3"
                          />
                          Timeline
                        </div>
                        <div className="font-bold">{type.timeline}</div>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <div className="text-sm text-gray-600 mb-1">
                          <FontAwesomeIcon
                            icon={faChartLine}
                            className="mr-2 w-3 h-3"
                          />
                          Investment
                        </div>
                        <div className="font-bold">{type.cost}</div>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {type.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center">
                          <span className="text-green-500 mr-2">✓</span>
                          <span className="text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Work With Us */}
            <div className="mb-20">
              <h2
                className={`text-4xl md:text-5xl font-bold ${lexend.className} mb-12 text-center`}
              >
                Why Work With The Bearded Developer?
              </h2>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className="text-blue-600 text-2xl w-6 h-6 mt-1"
                      />
                      <div>
                        <h3 className="text-xl font-bold mb-2">
                          Celigo Technical Partner Status
                        </h3>
                        <p>
                          Officially recognized by Celigo for technical
                          expertise, giving you confidence in our capabilities
                          and access to Celigo support channels.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <FontAwesomeIcon
                        icon={faCode}
                        className="text-green-600 text-2xl w-6 h-6 mt-1"
                      />
                      <div>
                        <h3 className="text-xl font-bold mb-2">
                          Deep NetSuite + E-commerce Expertise
                        </h3>
                        <p>
                          Rare dual expertise in both NetSuite and modern
                          e-commerce platforms (Shopify, BigCommerce). We
                          understand both sides of the integration.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <FontAwesomeIcon
                        icon={faHeadset}
                        className="text-purple-600 text-2xl w-6 h-6 mt-1"
                      />
                      <div>
                        <h3 className="text-xl font-bold mb-2">
                          Proactive Managed Services
                        </h3>
                        <p>
                          We don&apos;t just fix problems when they occur. Our
                          managed service prevents errors through monitoring,
                          optimization, and proactive maintenance.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <FontAwesomeIcon
                        icon={faSlack}
                        className="text-purple-600 text-2xl w-6 h-6 mt-1"
                      />
                      <div>
                        <h3 className="text-xl font-bold mb-2">
                          Dedicated Slack Channel
                        </h3>
                        <p>
                          All managed service clients get a dedicated Slack
                          channel for fast, direct communication. No ticket
                          systems, no waiting—just instant access to your
                          integration team.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <FontAwesomeIcon
                        icon={faUsers}
                        className="text-orange-600 text-2xl w-6 h-6 mt-1"
                      />
                      <div>
                        <h3 className="text-xl font-bold mb-2">
                          UK-Based, Personal Service
                        </h3>
                        <p>
                          Direct access to experienced developers, not offshore
                          support teams. Based in Essex with UK-wide coverage
                          and timezone-aligned support.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg p-8 text-white">
                    <h3 className="text-2xl font-bold mb-4">
                      Ready to Get Started?
                    </h3>
                    <p className="mb-6">
                      Whether you need a new integration, help fixing errors, or
                      proactive monitoring, we&apos;re here to help. Schedule a
                      free consultation to discuss your Celigo needs.
                    </p>
                    <div className="space-y-4">
                      <Link
                        href="/contact"
                        className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-block w-full text-center"
                      >
                        Schedule Free Consultation
                      </Link>
                      <Link
                        href="/resources/articles/celigo-error-troubleshooting-guide"
                        className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors inline-block w-full text-center border-2 border-white"
                      >
                        Read Error Troubleshooting Guide
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Process Section */}
            <div className="mb-20">
              <h2
                className={`text-4xl md:text-5xl font-bold ${lexend.className} mb-12 text-center`}
              >
                Our Celigo Integration Process
              </h2>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">1</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Discovery & Analysis
                  </h3>
                  <p className="text-gray-600">
                    Understand your systems, data flows, business processes, and
                    integration requirements.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-green-600">2</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Design & Planning</h3>
                  <p className="text-gray-600">
                    Design flow architecture, data mapping, error handling, and
                    create detailed project plan.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-purple-600">
                      3
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Build & Test</h3>
                  <p className="text-gray-600">
                    Develop flows in sandbox, comprehensive testing with real
                    data, and user acceptance testing.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-orange-600">
                      4
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Deploy & Support</h3>
                  <p className="text-gray-600">
                    Production deployment, monitoring setup, documentation,
                    training, and ongoing support.
                  </p>
                </div>
              </div>
            </div>

            {/* Technical Resources */}
            <div className="mb-20 bg-gray-50 rounded-lg p-8">
              <h2
                className={`text-3xl md:text-4xl font-bold ${lexend.className} mb-6 text-center`}
              >
                Celigo Integration Resources
              </h2>
              <p className="text-center text-lg mb-8 max-w-3xl mx-auto">
                Learn more about Celigo integrations with our comprehensive
                guides and articles:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <Link
                  href="/resources/articles/celigo-error-troubleshooting-guide"
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <h3 className={`text-xl font-bold ${lexend.className} mb-2`}>
                    Celigo Error Troubleshooting Guide
                  </h3>
                  <p className="text-gray-600">
                    Comprehensive guide to diagnosing and fixing common Celigo
                    integration errors including authentication, mapping, rate
                    limits, and timeouts.
                  </p>
                </Link>
                <Link
                  href="/resources/articles/celigo-integration-platform-netsuite"
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <h3 className={`text-xl font-bold ${lexend.className} mb-2`}>
                    Why Choose Celigo for NetSuite?
                  </h3>
                  <p className="text-gray-600">
                    Discover why Celigo is the leading integration platform for
                    NetSuite businesses and when it makes sense vs custom
                    development.
                  </p>
                </Link>
                <Link
                  href="/resources/articles/shopify-netsuite-integration-guide"
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <h3 className={`text-xl font-bold ${lexend.className} mb-2`}>
                    Shopify NetSuite Integration Guide
                  </h3>
                  <p className="text-gray-600">
                    Complete guide to integrating Shopify with NetSuite using
                    Celigo, including implementation timeline and cost
                    estimates.
                  </p>
                </Link>
                <Link
                  href="/resources/articles/netsuite-suitescript-custom-vs-native"
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <h3 className={`text-xl font-bold ${lexend.className} mb-2`}>
                    NetSuite Custom vs Native Features
                  </h3>
                  <p className="text-gray-600">
                    Understand when to use Celigo vs SuiteScript customization
                    vs NetSuite native features for your integration needs.
                  </p>
                </Link>
              </div>
            </div>

            {/* Local Coverage */}
            <div className="mb-20 bg-gray-50 rounded-lg p-8">
              <h2
                className={`text-3xl md:text-4xl font-bold ${lexend.className} mb-6 text-center`}
              >
                Celigo Integration Services Across Essex & The UK
              </h2>
              <p className="text-center text-lg mb-8 max-w-3xl mx-auto">
                Based in Essex, we provide Celigo integration services to
                businesses across the UK. From initial setup to ongoing managed
                support, we&apos;re your local Celigo experts.
              </p>
              <div className="text-center">
                <span className="inline-block bg-white px-6 py-3 rounded-full shadow-sm font-bold text-lg">
                  Celigo Technical Partner • Essex • London • UK Wide
                </span>
              </div>
            </div>
          </section>
          <SecondaryCTA title="Ready to Optimize Your Celigo Integrations?" />
        </Container>
      </Section>
    </div>
  );
}

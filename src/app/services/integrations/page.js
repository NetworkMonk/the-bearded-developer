import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import { lexend } from "../../fonts";
import Link from "next/link";
import SecondaryCTA from "@/components/common/SecondaryCTA";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAws,
  faShopify,
  faMicrosoft,
  faGoogle,
  faCloudflare,
} from "@fortawesome/free-brands-svg-icons";
import {
  faDownLeftAndUpRightToCenter,
  faRocket,
  faChartLine,
  faDatabase,
  faCode,
  faUsers,
  faMapMarkerAlt,
  faCloudUploadAlt,
  faGears,
  faSync,
  faFileInvoice,
  faWarehouse,
  faUserTie,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

export const metadata = {
  title:
    "System Integration Services | API Development | Essex & UK | The Bearded Developer",
  description:
    "Expert system integration services in Essex and across the UK. Connect your business systems, automate workflows, and eliminate data silos with custom integrations.",
  keywords:
    "system integration, api integration, workflow automation, data integration, system connectivity, integration essex, api development uk",
  openGraph: {
    title: "Professional System Integration Services | Essex & UK",
    description:
      "Connect your business systems seamlessly. Expert integration services to automate workflows and eliminate manual data entry.",
    type: "website",
  },
};

const services = [
  {
    title: "E-commerce Integrations",
    icon: faShoppingCart,
    description:
      "Connect your online stores with inventory, accounting, CRM, and fulfillment systems for seamless order processing and management.",
    features: [
      "Shopify to ERP integration",
      "Inventory synchronization",
      "Order management automation",
      "Payment system connections",
      "Multi-channel inventory sync",
    ],
  },
  {
    title: "CRM & Marketing Automation",
    icon: faUserTie,
    description:
      "Integrate your CRM with marketing tools, email platforms, and sales systems to create unified customer experiences and automated workflows.",
    features: [
      "CRM to marketing platform sync",
      "Lead scoring automation",
      "Customer journey tracking",
      "Email marketing integration",
      "Sales pipeline automation",
    ],
  },
  {
    title: "Financial System Integration",
    icon: faFileInvoice,
    description:
      "Connect accounting software, payment processors, and financial tools to automate invoicing, reconciliation, and financial reporting.",
    features: [
      "Accounting software integration",
      "Payment processor connections",
      "Automated invoicing",
      "Financial reporting automation",
      "Bank reconciliation systems",
    ],
  },
  {
    title: "Inventory & Warehouse Management",
    icon: faWarehouse,
    description:
      "Synchronize inventory across multiple channels, warehouses, and fulfillment centers with real-time updates and automated reordering.",
    features: [
      "Multi-warehouse synchronization",
      "Real-time inventory updates",
      "Automated reorder points",
      "Supplier system integration",
      "Fulfillment center connections",
    ],
  },
  {
    title: "API Development & Management",
    icon: faCode,
    description:
      "Custom API development, third-party API integrations, and API management solutions to connect any systems or services.",
    features: [
      "RESTful API development",
      "GraphQL API implementation",
      "Third-party API integration",
      "API security & authentication",
      "Rate limiting & monitoring",
    ],
  },
  {
    title: "Workflow Automation",
    icon: faGears,
    description:
      "Automate repetitive business processes and create intelligent workflows that trigger actions across multiple systems.",
    features: [
      "Process automation design",
      "Trigger-based workflows",
      "Approval process automation",
      "Document workflow systems",
      "Custom business logic",
    ],
  },
  {
    title: "Data Synchronization",
    icon: faSync,
    description:
      "Keep your data consistent across all systems with real-time or scheduled synchronization between databases and applications.",
    features: [
      "Real-time data sync",
      "Scheduled data updates",
      "Data transformation & mapping",
      "Conflict resolution",
      "Data validation & cleansing",
    ],
  },
  {
    title: "Cloud Service Integration",
    icon: faCloudUploadAlt,
    description:
      "Connect cloud services, SaaS applications, and on-premise systems to create unified business ecosystems.",
    features: [
      "SaaS application integration",
      "Cloud-to-cloud connections",
      "Hybrid cloud integration",
      "Service orchestration",
      "Multi-tenant support",
    ],
  },
];

const platforms = [
  {
    category: "E-commerce Platforms",
    systems: [
      { name: "Shopify", icon: faShopify, color: "text-green-600" },
      { name: "BigCommerce", icon: faShoppingCart, color: "text-teal-600" },
      { name: "WooCommerce", icon: faCode, color: "text-blue-500" },
      { name: "Magento", icon: faShoppingCart, color: "text-orange-500" },
    ],
  },
  {
    category: "Cloud Services",
    systems: [
      { name: "AWS Services", icon: faAws, color: "text-orange-500" },
      { name: "Microsoft 365", icon: faMicrosoft, color: "text-blue-500" },
      { name: "Google Workspace", icon: faGoogle, color: "text-red-500" },
      { name: "Cloudflare", icon: faCloudflare, color: "text-orange-400" },
    ],
  },
];

const integrationTypes = [
  {
    title: "Real-time Integration",
    description:
      "Instant data synchronization using webhooks, APIs, and event-driven architecture for immediate updates across systems.",
    icon: faRocket,
    benefits: [
      "Instant updates",
      "Reduced latency",
      "Real-time reporting",
      "Immediate notifications",
    ],
  },
  {
    title: "Batch Processing",
    description:
      "Scheduled data processing for large volumes of information, perfect for reporting, analytics, and bulk operations.",
    icon: faDatabase,
    benefits: [
      "High volume handling",
      "Scheduled processing",
      "Data validation",
      "Error handling",
    ],
  },
  {
    title: "Event-Driven Architecture",
    description:
      "Responsive systems that trigger actions based on specific events, creating intelligent automated workflows.",
    icon: faGears,
    benefits: [
      "Automatic triggers",
      "Scalable processing",
      "Flexible workflows",
      "Error recovery",
    ],
  },
];

export default function IntegrationsServicesPage() {
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
                System Integration Services
              </h1>
              <p className="text-xl md:text-2xl font-semibold mb-8 max-w-4xl mx-auto">
                Connect your business systems seamlessly. Expert integration
                services across Essex and the UK to automate workflows,
                eliminate data silos, and boost operational efficiency.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold">
                  <FontAwesomeIcon
                    icon={faDownLeftAndUpRightToCenter}
                    className="mr-2 w-4 h-4 m-0 inline"
                  />
                  Integration Experts
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

            {/* Why Integration Matters */}
            <div className="mb-20">
              <h2
                className={`text-4xl md:text-5xl font-bold ${lexend.className} mb-8 text-center`}
              >
                Why System Integration Matters
              </h2>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <FontAwesomeIcon
                        icon={faRocket}
                        className="text-blue-600 text-2xl w-4 h-4 mt-1"
                      />
                      <div>
                        <h3 className="text-xl font-bold mb-2">
                          Eliminate Manual Work
                        </h3>
                        <p>
                          Stop wasting time on manual data entry and duplicate
                          work. Automation saves hours and reduces human error.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <FontAwesomeIcon
                        icon={faChartLine}
                        className="text-green-600 text-2xl w-4 h-4 mt-1"
                      />
                      <div>
                        <h3 className="text-xl font-bold mb-2">
                          Improve Data Accuracy
                        </h3>
                        <p>
                          Synchronized systems mean consistent data across your
                          business, leading to better decisions and fewer
                          mistakes.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <FontAwesomeIcon
                        icon={faGears}
                        className="text-purple-600 text-2xl w-4 h-4 mt-1"
                      />
                      <div>
                        <h3 className="text-xl font-bold mb-2">
                          Scale Your Operations
                        </h3>
                        <p>
                          Integrated systems grow with your business, handling
                          increased volume without proportional staff increases.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg p-8 text-white">
                    <h3 className="text-2xl font-bold mb-4">
                      Ready to Connect Your Systems?
                    </h3>
                    <p className="mb-6">
                      Let&apos;s discuss how system integration can streamline
                      your business operations and save you time.
                    </p>
                    <Link
                      href="/contact"
                      className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-block"
                    >
                      Get Integration Quote
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Integration Types */}
            <div className="mb-20">
              <h2
                className={`text-4xl md:text-5xl font-bold ${lexend.className} mb-12 text-center`}
              >
                Integration Approaches
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {integrationTypes.map((type, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
                  >
                    <div className="text-center mb-6">
                      <FontAwesomeIcon
                        icon={type.icon}
                        className="text-4xl text-blue-600 mb-4"
                      />
                      <h3 className={`text-2xl font-bold ${lexend.className}`}>
                        {type.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-6 text-center">
                      {type.description}
                    </p>
                    <ul className="space-y-2">
                      {type.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center">
                          <span className="text-green-500 mr-2">✓</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Services Grid */}
            <div className="mb-20">
              <h2
                className={`text-4xl md:text-5xl font-bold ${lexend.className} mb-12 text-center`}
              >
                Our Integration Services
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

            {/* Platforms We Integrate */}
            <div className="mb-20">
              <h2
                className={`text-4xl md:text-5xl font-bold ${lexend.className} mb-12 text-center`}
              >
                Platforms We Integrate
              </h2>
              {platforms.map((platform, platformIndex) => (
                <div key={platformIndex} className="mb-12">
                  <h3
                    className={`text-2xl font-bold ${lexend.className} mb-6 text-center`}
                  >
                    {platform.category}
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {platform.systems.map((system, index) => (
                      <div
                        key={index}
                        className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                      >
                        <FontAwesomeIcon
                          icon={system.icon}
                          className={`text-4xl ${system.color} mb-4`}
                        />
                        <h4 className="font-bold">{system.name}</h4>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              <div className="text-center mt-8">
                <p className="text-lg text-gray-600">
                  Don&apos;t see your platform? We integrate with hundreds of
                  systems.
                  <Link
                    href="/contact"
                    className="text-blue-600 hover:underline font-semibold ml-1"
                  >
                    Contact us to discuss your specific needs.
                  </Link>
                </p>
              </div>
            </div>

            {/* Process Section */}
            <div className="mb-20">
              <h2
                className={`text-4xl md:text-5xl font-bold ${lexend.className} mb-12 text-center`}
              >
                Our Integration Process
              </h2>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">1</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">System Analysis</h3>
                  <p className="text-gray-600">
                    We analyze your current systems, data flows, and identify
                    integration opportunities.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-green-600">2</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Integration Design</h3>
                  <p className="text-gray-600">
                    We design the integration architecture, data mapping, and
                    workflow automation.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-purple-600">
                      3
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Development & Testing
                  </h3>
                  <p className="text-gray-600">
                    Build and thoroughly test the integration in a safe
                    environment before going live.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-orange-600">
                      4
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Deployment & Support
                  </h3>
                  <p className="text-gray-600">
                    Deploy the integration with monitoring, documentation, and
                    ongoing support.
                  </p>
                </div>
              </div>
            </div>

            {/* Local Coverage */}
            <div className="mb-20 bg-gray-50 rounded-lg p-8">
              <h2
                className={`text-3xl md:text-4xl font-bold ${lexend.className} mb-6 text-center`}
              >
                Integration Services Across Essex & The UK
              </h2>
              <p className="text-center text-lg mb-8 max-w-3xl mx-auto">
                Based in Essex, we provide system integration services to
                businesses across the UK. From simple two-system connections to
                complex enterprise integrations.
              </p>
              <div className="text-center">
                <span className="inline-block bg-white px-6 py-3 rounded-full shadow-sm font-bold text-lg">
                  System Integration Services • Essex • London • UK Wide
                </span>
              </div>
            </div>
          </section>
          <SecondaryCTA title="Ready to Connect Your Business Systems?" />
        </Container>
      </Section>
    </div>
  );
}

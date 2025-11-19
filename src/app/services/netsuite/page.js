import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import { lexend } from "../../fonts";
import Link from "next/link";
import SecondaryCTA from "@/components/common/SecondaryCTA";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJava,
  faJs,
  faPython,
  faAws,
} from "@fortawesome/free-brands-svg-icons";
import {
  faDatabase,
  faRocket,
  faChartLine,
  faCog,
  faCode,
  faShield,
  faUsers,
  faMapMarkerAlt,
  faCloudUploadAlt,
  faPuzzlePiece,
  faGears,
  faFileInvoice,
  faWarehouse,
  faUserTie,
  faShoppingCart,
  faDesktop,
  faAutomobile,
  faMobileAlt,
  faServer,
  faSync,
  faBug,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

export const metadata = {
  title:
    "NetSuite Development & Customization | Essex & UK | The Bearded Developer",
  description:
    "Expert NetSuite development and customization services in Essex and across the UK. SuiteScript development, workflows, forms, and integrations for optimized business processes.",
  keywords:
    "netsuite development, netsuite customization, suitescript, netsuite essex, netsuite consultant, erp customization uk, netsuite integration",
  openGraph: {
    title: "Professional NetSuite Development & Customization | Essex & UK",
    description:
      "Optimize your NetSuite ERP with custom development, workflows, and integrations. Expert SuiteScript developers in Essex.",
    type: "website",
  },
};

const services = [
  {
    title: "SuiteScript Development",
    icon: faCode,
    description:
      "Custom SuiteScript development to extend NetSuite functionality. Client scripts, user event scripts, scheduled scripts, and RESTlets.",
    features: [
      "SuiteScript 2.0 development",
      "Client-side scripting",
      "Server-side automation",
      "RESTlet API development",
      "Script debugging & optimization",
    ],
  },
  {
    title: "Workflow Automation",
    icon: faGears,
    description:
      "Design and implement custom workflows to automate business processes, approvals, and data management within NetSuite.",
    features: [
      "Approval workflow design",
      "Business process automation",
      "Custom workflow states",
      "Email notifications",
      "Workflow monitoring & reporting",
    ],
  },
  {
    title: "Custom Forms & Fields",
    icon: faDesktop,
    description:
      "Create custom forms, fields, and records tailored to your specific business requirements and industry needs.",
    features: [
      "Custom transaction forms",
      "Entity form customization",
      "Custom fields & records",
      "Sublists & subforms",
      "Form validation & logic",
    ],
  },
  {
    title: "Advanced Reports & Dashboards",
    icon: faChartLine,
    description:
      "Build sophisticated reporting solutions and executive dashboards that provide real-time insights into your business performance.",
    features: [
      "Saved search optimization",
      "Custom report development",
      "Executive dashboards",
      "KPI monitoring",
      "Automated report distribution",
    ],
  },
  {
    title: "NetSuite Integrations",
    icon: faPuzzlePiece,
    description:
      "Connect NetSuite with external systems, e-commerce platforms, and third-party applications for seamless data flow.",
    features: [
      "E-commerce integrations",
      "CRM system connections",
      "API development & management",
      "Data synchronization",
      "Real-time integration monitoring",
    ],
  },
  {
    title: "SuiteCommerce Customization",
    icon: faShoppingCart,
    description:
      "Customize SuiteCommerce websites and portals to create unique customer experiences and improve online sales performance.",
    features: [
      "Website customization",
      "Custom checkout processes",
      "B2B portal development",
      "Mobile optimization",
      "Payment gateway integration",
    ],
  },
  {
    title: "Data Migration & Cleanup",
    icon: faDatabase,
    description:
      "Clean, migrate, and optimize your NetSuite data. Remove duplicates, standardize formats, and ensure data integrity.",
    features: [
      "Data migration from legacy systems",
      "Duplicate record cleanup",
      "Data standardization",
      "Import automation",
      "Data validation & verification",
    ],
  },
  {
    title: "Performance Optimization",
    icon: faRocket,
    description:
      "Optimize NetSuite performance through script optimization, database tuning, and workflow improvements for faster operations.",
    features: [
      "Script performance tuning",
      "Search optimization",
      "Workflow efficiency improvements",
      "System performance monitoring",
      "User experience enhancements",
    ],
  },
];

const customizationAreas = [
  {
    title: "Financial Management",
    description:
      "Custom GL coding, automated journal entries, advanced financial reporting, and multi-subsidiary configurations.",
    icon: faFileInvoice,
  },
  {
    title: "Inventory & Warehouse",
    description:
      "Custom inventory tracking, lot/serial number management, warehouse optimization, and automated reorder points.",
    icon: faWarehouse,
  },
  {
    title: "CRM & Sales",
    description:
      "Sales process automation, lead scoring, customer portal customization, and territory management systems.",
    icon: faUserTie,
  },
  {
    title: "Manufacturing",
    description:
      "Work order customization, BOM management, capacity planning, and production scheduling automation.",
    icon: faGears,
  },
];

const scriptTypes = [
  {
    type: "Client Scripts",
    description:
      "User interface enhancements, field validation, and real-time form behavior modifications.",
    useCase:
      "Form validation, dynamic field updates, user experience improvements",
  },
  {
    type: "User Event Scripts",
    description:
      "Triggered by record operations like create, update, or delete to automate business logic.",
    useCase: "Automated calculations, record updates, approval processes",
  },
  {
    type: "Scheduled Scripts",
    description:
      "Background processing for large data operations, integrations, and automated maintenance tasks.",
    useCase: "Data cleanup, bulk updates, integration synchronization",
  },
  {
    type: "RESTlets",
    description:
      "Custom web services and APIs to enable external system integration and data exchange.",
    useCase:
      "Third-party integrations, mobile app connections, external reporting",
  },
];

export default function NetSuiteServicesPage() {
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
                NetSuite Development & Customization
              </h1>
              <p className="text-xl md:text-2xl font-semibold mb-8 max-w-4xl mx-auto">
                Expert NetSuite customization and development services across
                Essex and the UK. Optimize your ERP with custom scripts,
                workflows, and integrations tailored to your business needs.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full font-semibold">
                  <FontAwesomeIcon
                    icon={faDatabase}
                    className="mr-2 w-4 h-4 m-0 inline"
                  />
                  NetSuite Experts
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

            {/* Why NetSuite Customization */}
            <div className="mb-20">
              <h2
                className={`text-4xl md:text-5xl font-bold ${lexend.className} mb-8 text-center`}
              >
                Why Customize NetSuite?
              </h2>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <FontAwesomeIcon
                        icon={faRocket}
                        className="text-orange-600 text-2xl w-4 h-4 mt-1"
                      />
                      <div>
                        <h3 className="text-xl font-bold mb-2">
                          Optimize Business Processes
                        </h3>
                        <p>
                          NetSuite is powerful out-of-the-box, but customization
                          makes it work exactly how your business operates, not
                          the other way around.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <FontAwesomeIcon
                        icon={faGears}
                        className="text-blue-600 text-2xl w-4 h-4 mt-1"
                      />
                      <div>
                        <h3 className="text-xl font-bold mb-2">
                          Automate Complex Workflows
                        </h3>
                        <p>
                          Custom scripts and workflows can automate your unique
                          business rules, approvals, and data processing
                          requirements.
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
                          Enhanced Reporting & Insights
                        </h3>
                        <p>
                          Custom reports and dashboards provide the exact
                          metrics and insights your leadership team needs to
                          make informed decisions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="bg-gradient-to-br from-orange-400 to-red-500 rounded-lg p-8 text-white">
                    <h3 className="text-2xl font-bold mb-4">
                      Ready to Optimize NetSuite?
                    </h3>
                    <p className="mb-6">
                      Let&apos;s discuss how custom development can make
                      NetSuite work perfectly for your unique business
                      requirements.
                    </p>
                    <Link
                      href="/contact"
                      className="bg-white text-orange-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-block"
                    >
                      Get NetSuite Consultation
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* SuiteScript Types */}
            <div className="mb-20">
              <h2
                className={`text-4xl md:text-5xl font-bold ${lexend.className} mb-12 text-center`}
              >
                SuiteScript Development Types
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {scriptTypes.map((script, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
                  >
                    <h3
                      className={`text-2xl font-bold ${lexend.className} mb-4 text-orange-600`}
                    >
                      {script.type}
                    </h3>
                    <p className="text-gray-600 mb-4">{script.description}</p>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Common Use Cases:</h4>
                      <p className="text-sm text-gray-700">{script.useCase}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Services Grid */}
            <div className="mb-20">
              <h2
                className={`text-4xl md:text-5xl font-bold ${lexend.className} mb-12 text-center`}
              >
                Our NetSuite Services
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
                        className="text-3xl text-orange-600 mr-4 w-8 h-8"
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

            {/* Customization Areas */}
            <div className="mb-20">
              <h2
                className={`text-4xl md:text-5xl font-bold ${lexend.className} mb-12 text-center`}
              >
                NetSuite Customization Areas
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {customizationAreas.map((area, index) => (
                  <div
                    key={index}
                    className="text-center p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <FontAwesomeIcon
                      icon={area.icon}
                      className="text-4xl text-orange-600 mb-4 w-8 h-8"
                    />
                    <h3 className="text-xl font-bold mb-3">{area.title}</h3>
                    <p className="text-gray-600">{area.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Process Section */}
            <div className="mb-20">
              <h2
                className={`text-4xl md:text-5xl font-bold ${lexend.className} mb-12 text-center`}
              >
                Our NetSuite Development Process
              </h2>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-orange-600">
                      1
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Requirements Analysis
                  </h3>
                  <p className="text-gray-600">
                    We analyze your current NetSuite setup and identify
                    customization opportunities.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">2</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Solution Design</h3>
                  <p className="text-gray-600">
                    We design the custom solution, scripts, and workflows to
                    meet your specific needs.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-green-600">3</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Development & Testing
                  </h3>
                  <p className="text-gray-600">
                    Custom development in a sandbox environment with thorough
                    testing before deployment.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-purple-600">
                      4
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Deployment & Training
                  </h3>
                  <p className="text-gray-600">
                    Production deployment with user training and comprehensive
                    documentation.
                  </p>
                </div>
              </div>
            </div>

            {/* Technologies */}
            <div className="mb-20">
              <h2
                className={`text-3xl md:text-4xl font-bold ${lexend.className} mb-8 text-center`}
              >
                NetSuite Technologies We Use
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div className="p-6">
                  <FontAwesomeIcon
                    icon={faJs}
                    className="text-4xl text-yellow-500 mb-4 w-8 h-8"
                  />
                  <h3 className="font-bold">SuiteScript 2.0</h3>
                </div>
                <div className="p-6">
                  <FontAwesomeIcon
                    icon={faCode}
                    className="text-4xl text-orange-600 mb-4 w-8 h-8"
                  />
                  <h3 className="font-bold">SuiteFlow Workflows</h3>
                </div>
                <div className="p-6">
                  <FontAwesomeIcon
                    icon={faSearch}
                    className="text-4xl text-blue-600 mb-4 w-8 h-8"
                  />
                  <h3 className="font-bold">SuiteAnalytics</h3>
                </div>
                <div className="p-6">
                  <FontAwesomeIcon
                    icon={faShoppingCart}
                    className="text-4xl text-green-600 mb-4 w-8 h-8"
                  />
                  <h3 className="font-bold">SuiteCommerce</h3>
                </div>
              </div>
            </div>

            {/* Local Coverage */}
            <div className="mb-20 bg-gray-50 rounded-lg p-8">
              <h2
                className={`text-3xl md:text-4xl font-bold ${lexend.className} mb-6 text-center`}
              >
                NetSuite Development Across Essex & The UK
              </h2>
              <p className="text-center text-lg mb-8 max-w-3xl mx-auto">
                Based in Essex, we provide NetSuite development and
                customization services to businesses across the UK. From small
                customizations to complex enterprise implementations.
              </p>
              <div className="text-center">
                <span className="inline-block bg-white px-6 py-3 rounded-full shadow-sm font-bold text-lg">
                  NetSuite Development • Essex • London • UK Wide
                </span>
              </div>
            </div>
          </section>
          <SecondaryCTA title="Ready to Optimize Your NetSuite System?" />
        </Container>
      </Section>
    </div>
  );
}

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
  title: "Shopify Developer & Partner | Essex & UK | The Bearded Developer",
  description:
    "Expert Shopify developers in Essex and across the UK. Shopify Plus, custom themes, app development, migrations, and POS solutions. Certified Shopify partners with proven results.",
  keywords:
    "shopify developer, shopify partner, shopify plus, shopify essex, shopify developer uk, ecommerce development, shopify themes, shopify apps",
  openGraph: {
    title: "Professional Shopify Development Services | Essex & UK",
    description:
      "Transform your business with expert Shopify development. Custom stores, Shopify Plus solutions, and ongoing support from certified partners.",
    type: "website",
  },
};

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
                Expert Shopify Development Services
              </h1>
              <p className="text-xl md:text-2xl font-semibold mb-8 max-w-4xl mx-auto">
                Certified Shopify Partners delivering custom e-commerce
                solutions across Essex and the UK. From startup stores to
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
                      Get Free Consultation
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
          <SecondaryCTA title="Ready to Transform Your E-commerce Business?" />
        </Container>
      </Section>
    </div>
  );
}

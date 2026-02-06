import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import { lexend } from "../../fonts";
import Link from "next/link";
import SecondaryCTA from "@/components/common/SecondaryCTA";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faNodeJs,
  faAws,
  faPython,
  faDocker,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCode,
  faRocket,
  faChartLine,
  faCog,
  faLightbulb,
  faShield,
  faUsers,
  faMapMarkerAlt,
  faDesktop,
  faMobile,
  faDatabase,
  faCloudUploadAlt,
  faPuzzlePiece,
  faGears,
  faLayerGroup,
  faBug,
} from "@fortawesome/free-solid-svg-icons";

export const metadata = {
  title: "Bespoke Software Developer Essex | Laravel & React Specialist",
  description:
    "Custom software development in Essex. Laravel, React & Python specialist. Business automation, web apps & API integration. 15+ years experience. Free consultation.",
  keywords:
    "bespoke software development essex, custom software essex, web app development essex, software developer essex, laravel developer, react developer",
  openGraph: {
    title: "Bespoke Software Developer Essex | Laravel & React Specialist",
    description:
      "Custom software development in Essex. Business automation, web apps & API integration. 15+ years proven experience.",
    type: "website",
    url: "https://www.thebeardeddeveloper.co.uk/services/bespoke",
    images: [
      {
        url: "https://www.thebeardeddeveloper.co.uk/img/the-bearded-developer.png",
        width: 1200,
        height: 630,
        alt: "Bespoke Software Development Essex",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bespoke Software Developer Essex | Laravel & React Specialist",
    description:
      "Custom software development in Essex. Business automation, web apps & API integration.",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Bespoke Software Development",
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
  areaServed: [
    {
      "@type": "State",
      name: "Essex",
    },
    {
      "@type": "Country",
      name: "United Kingdom",
    },
  ],
  description:
    "Professional bespoke software development services including custom web applications, business automation, and API integration for businesses in Essex and across the UK.",
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
      name: "What is bespoke software development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bespoke software development is creating custom software applications tailored specifically to your business requirements, rather than using off-the-shelf solutions. It provides a perfect fit for your unique processes and workflows.",
      },
    },
    {
      "@type": "Question",
      name: "How much does bespoke software development cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bespoke software costs vary based on complexity and scope. Simple web applications start from £5,000, while complex enterprise systems can range from £20,000-£100,000+. Contact us for a detailed quote based on your specific requirements.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to develop bespoke software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Development timelines depend on project scope. Simple applications typically take 2-3 months, while larger enterprise systems may take 6-12 months. We use agile methodology with regular milestones and demonstrations throughout the process.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide support after the software is built?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we provide ongoing support and maintenance packages to ensure your software continues to run smoothly, stays secure, and evolves with your business needs.",
      },
    },
  ],
};

const services = [
  {
    title: "Custom Web Applications",
    icon: faDesktop,
    description:
      "Fully bespoke web applications built from the ground up to meet your exact business requirements. Scalable, secure, and user-friendly solutions.",
    features: [
      "Custom UI/UX design",
      "Full-stack development",
      "Database design & optimization",
      "API development & integration",
      "Responsive & mobile-friendly",
    ],
  },
  {
    title: "Enterprise Software Solutions",
    icon: faLayerGroup,
    description:
      "Large-scale enterprise applications designed to handle complex business processes, high user loads, and mission-critical operations.",
    features: [
      "Scalable architecture design",
      "Multi-user role management",
      "Advanced security features",
      "Integration capabilities",
      "Performance optimization",
    ],
  },
  {
    title: "Business Process Automation",
    icon: faGears,
    description:
      "Custom software to automate your unique business processes, reduce manual work, and improve efficiency across your organization.",
    features: [
      "Workflow automation",
      "Document management systems",
      "Approval process automation",
      "Reporting & analytics",
      "Integration with existing tools",
    ],
  },
  {
    title: "Data Management Systems",
    icon: faDatabase,
    description:
      "Sophisticated data management and analytics platforms tailored to your specific data requirements and reporting needs.",
    features: [
      "Custom database design",
      "Data migration services",
      "Advanced reporting dashboards",
      "Real-time analytics",
      "Data visualization tools",
    ],
  },
  {
    title: "API Development & Integration",
    icon: faPuzzlePiece,
    description:
      "Custom APIs and integration solutions to connect your systems, third-party services, and create seamless data flow across platforms.",
    features: [
      "RESTful API development",
      "Third-party integrations",
      "Microservices architecture",
      "API documentation",
      "Security & authentication",
    ],
  },
  {
    title: "Mobile-First Solutions",
    icon: faMobile,
    description:
      "Progressive web applications and mobile-responsive solutions that work perfectly across all devices and platforms.",
    features: [
      "Progressive Web Apps (PWA)",
      "Mobile-responsive design",
      "Offline functionality",
      "Push notifications",
      "App store deployment",
    ],
  },
  {
    title: "Cloud-Native Development",
    icon: faCloudUploadAlt,
    description:
      "Modern cloud-native applications built for scalability, reliability, and cost-effectiveness using leading cloud platforms.",
    features: [
      "AWS/Azure cloud deployment",
      "Serverless architecture",
      "Auto-scaling capabilities",
      "High availability design",
      "Cost optimization",
    ],
  },
  {
    title: "Legacy System Modernization",
    icon: faRocket,
    description:
      "Transform outdated systems into modern, efficient applications while preserving your valuable business logic and data.",
    features: [
      "Legacy system analysis",
      "Gradual migration strategies",
      "Data preservation",
      "Modern technology stack",
      "Training & support",
    ],
  },
];

const technologies = [
  { name: "React & Next.js", icon: faReact, color: "text-blue-500" },
  { name: "Node.js", icon: faNodeJs, color: "text-green-600" },
  { name: "Python & Django", icon: faPython, color: "text-yellow-500" },
  { name: "AWS Cloud", icon: faAws, color: "text-orange-500" },
  { name: "Docker", icon: faDocker, color: "text-blue-600" },
];

const industries = [
  {
    title: "Healthcare & Medical",
    description:
      "HIPAA-compliant systems, patient management, appointment booking, and medical record systems.",
    icon: faShield,
  },
  {
    title: "Financial Services",
    description:
      "Secure financial applications, payment processing, compliance reporting, and risk management systems.",
    icon: faChartLine,
  },
  {
    title: "Manufacturing & Logistics",
    description:
      "Inventory management, supply chain optimization, quality control, and production planning systems.",
    icon: faGears,
  },
  {
    title: "Education & Training",
    description:
      "Learning management systems, student portals, assessment tools, and educational resource platforms.",
    icon: faUsers,
  },
];

const developmentProcess = [
  {
    step: 1,
    title: "Discovery & Analysis",
    description:
      "Deep dive into your business requirements, existing systems, and objectives to create a comprehensive project roadmap.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    step: 2,
    title: "Design & Architecture",
    description:
      "Create detailed system architecture, user interface designs, and technical specifications before development begins.",
    color: "bg-purple-100 text-purple-600",
  },
  {
    step: 3,
    title: "Agile Development",
    description:
      "Iterative development with regular check-ins, demonstrations, and feedback incorporation throughout the build process.",
    color: "bg-green-100 text-green-600",
  },
  {
    step: 4,
    title: "Testing & Quality Assurance",
    description:
      "Comprehensive testing including unit tests, integration tests, security testing, and user acceptance testing.",
    color: "bg-orange-100 text-orange-600",
  },
  {
    step: 5,
    title: "Deployment & Launch",
    description:
      "Secure deployment to production environments with monitoring, documentation, and team training.",
    color: "bg-red-100 text-red-600",
  },
  {
    step: 6,
    title: "Support & Maintenance",
    description:
      "Ongoing support, updates, monitoring, and enhancements to ensure your system continues to deliver value.",
    color: "bg-indigo-100 text-indigo-600",
  },
];

export default function BespokeServicesPage() {
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
                Bespoke Software Development
              </h1>
              <p className="text-xl md:text-2xl font-semibold mb-8 max-w-4xl mx-auto">
                Custom-built software solutions designed specifically for your
                business. From concept to deployment, we create powerful
                applications that solve your unique challenges across Essex and
                the UK.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold">
                  <FontAwesomeIcon
                    icon={faCode}
                    className="mr-2 w-4 h-4 m-0 inline"
                  />
                  Custom Development
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

            {/* Why Choose Bespoke */}
            <div className="mb-20">
              <h2
                className={`text-4xl md:text-5xl font-bold ${lexend.className} mb-8 text-center`}
              >
                Why Choose Bespoke Development?
              </h2>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <FontAwesomeIcon
                        icon={faCode}
                        className="text-blue-600 text-2xl mt-1"
                      />
                      <div>
                        <h3 className="text-xl font-bold mb-2">
                          Perfect Fit Solution
                        </h3>
                        <p>
                          Unlike off-the-shelf software, bespoke solutions are
                          built exactly to your requirements with no unnecessary
                          features or limitations.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <FontAwesomeIcon
                        icon={faRocket}
                        className="text-green-600 text-2xl mt-1"
                      />
                      <div>
                        <h3 className="text-xl font-bold mb-2">
                          Competitive Advantage
                        </h3>
                        <p>
                          Custom software gives you unique capabilities that
                          your competitors don&apos;t have, helping you stand
                          out in your market.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <FontAwesomeIcon
                        icon={faChartLine}
                        className="text-purple-600 text-2xl mt-1"
                      />
                      <div>
                        <h3 className="text-xl font-bold mb-2">
                          Scalable Investment
                        </h3>
                        <p>
                          Bespoke software grows with your business, adapting to
                          new requirements without costly platform changes.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg p-8 text-white">
                    <h3 className="text-2xl font-bold mb-4">
                      Ready to Build Something Amazing?
                    </h3>
                    <p className="mb-6">
                      Let&apos;s discuss your unique requirements and create a
                      solution that&apos;s perfectly tailored to your business.
                    </p>
                    <Link
                      href="/contact"
                      className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-block"
                    >
                      Start Your Project
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
                Our Bespoke Development Services
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

            {/* Industries We Serve */}
            <div className="mb-20">
              <h2
                className={`text-4xl md:text-5xl font-bold ${lexend.className} mb-12 text-center`}
              >
                Industries We Serve
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {industries.map((industry, index) => (
                  <div
                    key={index}
                    className="text-center p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <FontAwesomeIcon
                      icon={industry.icon}
                      className="text-4xl text-blue-600 mb-4"
                    />
                    <h3 className="text-xl font-bold mb-3">{industry.title}</h3>
                    <p className="text-gray-600">{industry.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Development Process */}
            <div className="mb-20">
              <h2
                className={`text-4xl md:text-5xl font-bold ${lexend.className} mb-12 text-center`}
              >
                Our Development Process
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {developmentProcess.map((phase, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
                  >
                    <div
                      className={`rounded-full w-12 h-12 flex items-center justify-center mb-4 ${phase.color}`}
                    >
                      <span className="text-xl font-bold">{phase.step}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{phase.title}</h3>
                    <p className="text-gray-600">{phase.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className="mb-20">
              <h2
                className={`text-3xl md:text-4xl font-bold ${lexend.className} mb-8 text-center`}
              >
                Technologies We Use
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
                {technologies.map((tech, index) => (
                  <div key={index} className="p-6">
                    <FontAwesomeIcon
                      icon={tech.icon}
                      className={`text-4xl ${tech.color} mb-4`}
                    />
                    <h3 className="font-bold">{tech.name}</h3>
                  </div>
                ))}
              </div>
            </div>

            {/* Local Coverage */}
            <div className="mb-20 bg-gray-50 rounded-lg p-8">
              <h2
                className={`text-3xl md:text-4xl font-bold ${lexend.className} mb-6 text-center`}
              >
                Bespoke Development Across Essex & The UK
              </h2>
              <p className="text-center text-lg mb-8 max-w-3xl mx-auto">
                Based in Braintree, we provide bespoke software development
                services throughout Essex, including Chelmsford, Colchester,
                Basildon, and across the wider region. Our team specializes in
                Laravel and React development, creating custom web applications
                that streamline your business processes and drive growth.
              </p>
              <div className="text-center">
                <span className="inline-block bg-white px-6 py-3 rounded-full shadow-sm font-bold text-lg">
                  Custom Software Development • Essex • London • UK Wide
                </span>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-20">
              <h2
                className={`text-4xl md:text-5xl font-bold ${lexend.className} mb-12 text-center`}
              >
                Frequently Asked Questions
              </h2>
              <div className="max-w-3xl mx-auto space-y-6">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-bold mb-3">
                    What is bespoke software development?
                  </h3>
                  <p className="text-gray-600">
                    Bespoke software development is creating custom software
                    applications tailored specifically to your business
                    requirements, rather than using off-the-shelf solutions. It
                    provides a perfect fit for your unique processes and
                    workflows.
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-bold mb-3">
                    How much does bespoke software development cost?
                  </h3>
                  <p className="text-gray-600">
                    Bespoke software costs vary based on complexity and scope.
                    Simple web applications start from £5,000, while complex
                    enterprise systems can range from £20,000-£100,000+. Contact
                    us for a detailed quote based on your specific requirements.
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-bold mb-3">
                    How long does it take to develop bespoke software?
                  </h3>
                  <p className="text-gray-600">
                    Development timelines depend on project scope. Simple
                    applications typically take 2-3 months, while larger
                    enterprise systems may take 6-12 months. We use agile
                    methodology with regular milestones and demonstrations
                    throughout the process.
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-bold mb-3">
                    Do you provide support after the software is built?
                  </h3>
                  <p className="text-gray-600">
                    Yes, we provide ongoing support and maintenance packages to
                    ensure your software continues to run smoothly, stays
                    secure, and evolves with your business needs.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <SecondaryCTA title="Ready to Build Your Perfect Solution?" />
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

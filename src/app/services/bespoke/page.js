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
  faShield,
  faUsers,
  faMapMarkerAlt,
  faDesktop,
  faDatabase,
  faPuzzlePiece,
  faGears,
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";

export const metadata = {
  title: "Bespoke Software Essex | Custom Tools, Portals & Automation",
  description:
    "We build custom software for Essex and UK businesses — internal tools, workflow automation, client portals and integrations. 20 years of development experience. No jargon.",
  keywords:
    "bespoke software development essex, custom software essex, web app development essex, software developer essex, laravel developer essex, react developer essex",
  openGraph: {
    title: "Bespoke Software Essex | Custom Tools, Portals & Automation",
    description:
      "We build custom software for Essex and UK businesses — internal tools, workflow automation, client portals and integrations. 20 years of development experience. No jargon.",
    type: "website",
    url: "https://www.thebeardeddeveloper.co.uk/services/bespoke",
    images: [
      {
        url: "https://www.thebeardeddeveloper.co.uk/img/the-bearded-developer.png",
        width: 1200,
        height: 630,
        alt: "Bespoke Software Development Essex - The Bearded Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bespoke Software Essex | Custom Tools, Portals & Automation",
    description:
      "We build custom software for Essex and UK businesses — internal tools, workflow automation, client portals and integrations. 20 years of development experience. No jargon.",
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
    telephone: "+44 (0) 330 043 5977",
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
      name: "How much does bespoke software development cost in Essex?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bespoke software development in Essex typically ranges from £5,000 for simple applications to £50,000+ for complex enterprise systems. Projects are quoted based on specific requirements, timeline, and technical complexity. Free initial consultation available to discuss your needs and provide accurate estimates.",
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
      name: "Why choose a local Essex software developer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Working with a local Essex developer offers face-to-face meetings when needed, understanding of the local business landscape, same timezone collaboration, and ongoing support you can rely on. We serve businesses throughout Essex from our Braintree base.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide support after the software is built?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we provide ongoing support and maintenance packages to ensure your software continues to run smoothly, stays secure, and evolves with your business needs. Support includes bug fixes, updates, enhancements, and technical assistance.",
      },
    },
    {
      "@type": "Question",
      name: "What technologies do you use for bespoke development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We specialize in Laravel (PHP) for robust backend systems, React and Next.js for modern user interfaces, Python for data processing and automation, and AWS for scalable cloud infrastructure. Technology choices are always tailored to your specific needs and long-term goals.",
      },
    },
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "The Bearded Developer",
  image: "https://www.thebeardeddeveloper.co.uk/img/the-bearded-developer.png",
  "@id": "https://www.thebeardeddeveloper.co.uk",
  url: "https://www.thebeardeddeveloper.co.uk",
  telephone: "+44 (0) 330 043 5977",
  email: "james@thebeardeddeveloper.co.uk",
  priceRange: "£££",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Braintree",
    addressLocality: "Braintree",
    addressRegion: "Essex",
    postalCode: "CM7 9NF",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.8767,
    longitude: 0.5516,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "17:00",
  },
  sameAs: [
    "https://www.linkedin.com/in/james-plant-7ab317b/",
    "https://github.com/NetworkMonk/",
  ],
};

const services = [
  {
    title: "Internal Business Systems & Dashboards",
    icon: faDesktop,
    description:
      "Custom dashboards and internal tools built around how your business actually works. Whether you need a live view of operations, role-based access to business data, or a replacement for a tangle of spreadsheets, we build it to your exact requirements.",
    features: [
      "Custom data dashboards",
      "Role-based access and user management",
      "Reporting and analytics",
      "Spreadsheet replacement systems",
      "Integration with existing data sources",
    ],
  },
  {
    title: "Shipping & Logistics Applications",
    icon: faGears,
    description:
      "Custom shipping tools and calculators for businesses with complex fulfilment requirements. We have built bespoke shipping applications for e-commerce and wholesale businesses that go well beyond what standard platforms offer out of the box.",
    features: [
      "Custom shipping calculators and rate logic",
      "Carrier and fulfilment integrations",
      "Dispatch and picking workflows",
      "Order management automation",
      "Multi-warehouse and multi-carrier support",
    ],
  },
  {
    title: "ERP Integrations & Custom Portals",
    icon: faPuzzlePiece,
    description:
      "Custom portals and internal tools that connect to your ERP, CRM, or support platform. We have built integrations with NetSuite, Zendesk, and other business systems, giving your team the data they need without switching between tools.",
    features: [
      "NetSuite and ERP-connected portals",
      "Zendesk and CRM integrations",
      "Custom data views from multiple systems",
      "Staff-facing internal portals",
      "API development and data bridging",
    ],
  },
  {
    title: "Booking & Calendar Systems",
    icon: faCog,
    description:
      "Custom booking views and scheduling tools built on top of your existing data. Useful for businesses whose booking data lives in an ERP or external platform but needs a cleaner interface for staff or customers to work with.",
    features: [
      "Custom booking and calendar views",
      "ERP-sourced scheduling data",
      "Staff and customer-facing interfaces",
      "Availability and capacity management",
      "Integration with existing booking platforms",
    ],
  },
  {
    title: "Custom Intranets & Internal Portals",
    icon: faLayerGroup,
    description:
      "Bespoke intranet platforms that bring together data from multiple systems in one place. Built for businesses that have outgrown generic tools or need an internal portal that genuinely reflects how their teams work.",
    features: [
      "Multi-system data consolidation",
      "Team and department-specific views",
      "Document and resource management",
      "Integration with NetSuite, Zendesk and others",
      "Custom access controls and permissions",
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
    title: "D2C Retail",
    description:
      "Custom tools for direct-to-consumer brands: order management, fulfilment workflows, and customer portals built around your specific operations.",
    icon: faRocket,
  },
  {
    title: "B2B Wholesale",
    description:
      "Bespoke portals and order management tools for wholesale businesses, including trade customer access, pricing rules, and ERP-connected ordering workflows.",
    icon: faUsers,
  },
  {
    title: "E-commerce Operations",
    description:
      "Internal tooling for e-commerce teams: shipping calculators, warehouse dashboards, returns management, and custom integrations between your platforms.",
    icon: faChartLine,
  },
  {
    title: "Multi-channel Retail",
    description:
      "Custom systems that bring inventory, order, and fulfilment data together across multiple sales channels in one place.",
    icon: faLayerGroup,
  },
];

const developmentProcess = [
  {
    step: 1,
    title: "Discovery & Analysis",
    description:
      "We work through your requirements, existing systems, and goals before writing a line of code. The result is a clear project plan both sides can work from.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    step: 2,
    title: "Design & Architecture",
    description:
      "We design the system architecture, interfaces, and technical specifications before development begins. Decisions made here save time later.",
    color: "bg-purple-100 text-purple-600",
  },
  {
    step: 3,
    title: "Agile Development",
    description:
      "We build in iterations with regular check-ins and demos. You see progress throughout and can shape what comes next.",
    color: "bg-green-100 text-green-600",
  },
  {
    step: 4,
    title: "Testing & Quality Assurance",
    description:
      "Before anything goes live, we run unit tests, integration tests, security checks, and user acceptance testing.",
    color: "bg-orange-100 text-orange-600",
  },
  {
    step: 5,
    title: "Deployment & Launch",
    description:
      "We handle deployment to production, set up monitoring, write documentation, and train your team on the new system.",
    color: "bg-red-100 text-red-600",
  },
  {
    step: 6,
    title: "Support & Maintenance",
    description:
      "After launch, we stay involved. That means bug fixes, updates, monitoring, and changes as your business grows.",
    color: "bg-indigo-100 text-indigo-600",
  },
];

const useCases = [
  {
    title: "Replacing spreadsheet-based operations",
    description:
      "Many businesses we work with are running on spreadsheets that have grown beyond what spreadsheets should do. We build secure, role-based systems that centralise the data and remove the manual work.",
    icon: faDatabase,
  },
  {
    title: "Custom tools for e-commerce fulfilment",
    description:
      "Shipping calculators, dispatch workflows, and fulfilment tooling built for the specific carriers, rules, and edge cases your business runs on, not the ones a standard platform assumes.",
    icon: faGears,
  },
  {
    title: "ERP data surfaced in a better interface",
    description:
      "When the data is in NetSuite or another ERP but the interface is not working for your team, we build the portal or dashboard that makes it usable day to day.",
    icon: faPuzzlePiece,
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
                Bespoke Software Development, Essex
              </h1>
              <p className="text-xl md:text-2xl font-semibold mb-8 max-w-4xl mx-auto">
                Custom business applications for e-commerce and retail. Internal
                tools, shipping systems, ERP integrations, bespoke portals.
                20 years of development experience.
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

              <div className="flex flex-wrap justify-center gap-6 mb-12 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-2xl text-green-600">✓</span>
                  <span className="font-semibold">20 Years Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl text-green-600">✓</span>
                  <span className="font-semibold">E-commerce & Retail Specialists</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl text-green-600">✓</span>
                  <span className="font-semibold">Free Consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl text-green-600">✓</span>
                  <span className="font-semibold">
                    Based in Braintree, Essex
                  </span>
                </div>
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
                        className="text-blue-600 text-2xl mt-1 shrink-0"
                      />
                      <div>
                        <h3 className="text-xl font-bold mb-2">
                          Built around your processes
                        </h3>
                        <p>
                          Off-the-shelf software makes you adapt to it. Bespoke
                          software works the other way. Built to your
                          requirements, without features you do not need or
                          limitations you did not agree to.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <FontAwesomeIcon
                        icon={faRocket}
                        className="text-green-600 text-2xl mt-1 shrink-0"
                      />
                      <div>
                        <h3 className="text-xl font-bold mb-2">
                          Grows with your business
                        </h3>
                        <p>
                          Your software should change as your business changes.
                          Bespoke systems can be extended and adapted without
                          the constraints of a third-party platform.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <FontAwesomeIcon
                        icon={faChartLine}
                        className="text-purple-600 text-2xl mt-1 shrink-0"
                      />
                      <div>
                        <h3 className="text-xl font-bold mb-2">
                          20 years of experience behind it
                        </h3>
                        <p>
                          We have been building custom software for businesses
                          since before most current platforms existed. That
                          experience informs every recommendation we make.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg p-8 text-white">
                    <h3 className="text-2xl font-bold mb-4">
                      Not Sure if Bespoke is Right for You?
                    </h3>
                    <p className="mb-6">
                      A free consultation is where most projects start. We ask
                      about your current setup, what is not working, and give
                      you an honest view on whether bespoke is the right answer.
                      Sometimes it is not, and we will tell you that.
                    </p>
                    <Link
                      href="/contact"
                      className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-block"
                    >
                      Book a Free Consultation
                    </Link>
                    <div className="mt-4">
                      <Link
                        href="/projects"
                        className="text-white font-semibold underline hover:text-blue-100 transition-colors"
                      >
                        See how we have helped businesses like yours
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Local Coverage */}
            <div className="mb-20 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8">
              <h2
                className={`text-3xl md:text-4xl font-bold ${lexend.className} mb-6 text-center`}
              >
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="mr-3 text-green-600"
                />
                Serving Essex & The UK
              </h2>
              <p className="text-center text-lg mb-6 max-w-3xl mx-auto">
                Based in <strong>Braintree, Essex</strong>, we work with
                businesses throughout{" "}
                <strong>Chelmsford, Colchester, Basildon, Southend</strong>, and
                across the UK. Most of our bespoke work is with e-commerce and
                retail businesses: D2C brands and B2B wholesalers who need
                software that fits how they work, not the other way round.
              </p>
              <div className="text-center">
                <Link
                  href="/contact"
                  className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition-colors"
                >
                  Free Consultation — No Obligation
                </Link>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-20 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 md:p-12">
              <h2
                className={`text-4xl md:text-5xl font-bold ${lexend.className} mb-4 text-center`}
              >
                Frequently Asked Questions
              </h2>
              <p className="text-center text-lg mb-12 max-w-2xl mx-auto">
                Common questions about bespoke software development in Essex
              </p>

              <div className="max-w-3xl mx-auto space-y-6">
                <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold mb-3 flex items-start">
                    <span className="text-blue-600 mr-3">Q:</span>
                    What is bespoke software development?
                  </h3>
                  <p className="text-gray-600 pl-8">
                    <span className="text-green-600 font-bold mr-2">A:</span>
                    Bespoke software development means building software
                    specifically for your business, rather than adapting to an
                    off-the-shelf product. The result is something that fits how
                    your business actually works.
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold mb-3 flex items-start">
                    <span className="text-blue-600 mr-3">Q:</span>
                    How much does bespoke software development cost in Essex?
                  </h3>
                  <p className="text-gray-600 pl-8">
                    <span className="text-green-600 font-bold mr-2">A:</span>
                    Bespoke software development in Essex typically ranges from
                    £5,000 for simple applications to £50,000+ for complex
                    systems. Most projects fall in the £10,000–£30,000 range.
                    We quote based on your specific requirements, timeline, and
                    technical complexity. A free initial consultation is the
                    right starting point for an accurate estimate.
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold mb-3 flex items-start">
                    <span className="text-blue-600 mr-3">Q:</span>
                    How long does it take to develop bespoke software?
                  </h3>
                  <p className="text-gray-600 pl-8">
                    <span className="text-green-600 font-bold mr-2">A:</span>
                    Timelines depend on scope. Simpler tools take 2-3 months;
                    larger systems take 6-12 months. We work in iterations with
                    regular check-ins and demos throughout, so you can see
                    progress and adjust as we go.
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold mb-3 flex items-start">
                    <span className="text-blue-600 mr-3">Q:</span>
                    Why choose a local Essex software developer?
                  </h3>
                  <p className="text-gray-600 pl-8">
                    <span className="text-green-600 font-bold mr-2">A:</span>
                    Working locally means face-to-face meetings when they are
                    useful, the same timezone, and a real ongoing relationship
                    rather than a support ticket queue. We are based in
                    Braintree and work with businesses across Essex.
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold mb-3 flex items-start">
                    <span className="text-blue-600 mr-3">Q:</span>
                    Do you provide support after the software is built?
                  </h3>
                  <p className="text-gray-600 pl-8">
                    <span className="text-green-600 font-bold mr-2">A:</span>
                    Yes. We offer ongoing support and maintenance including bug
                    fixes, updates, and enhancements. Good software needs
                    attention over time, and we stay involved after launch.
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold mb-3 flex items-start">
                    <span className="text-blue-600 mr-3">Q:</span>
                    What technologies do you use for bespoke development?
                  </h3>
                  <p className="text-gray-600 pl-8">
                    <span className="text-green-600 font-bold mr-2">A:</span>
                    We work primarily in Laravel (PHP) for backend systems,
                    React and Next.js for interfaces, Python for data and
                    automation, and AWS for hosting. The right choice depends on
                    what you are building and how it needs to be maintained.
                  </p>
                </div>
              </div>
            </div>

            {/* Services Grid */}
            <div className="mb-20">
              <h2
                className={`text-4xl md:text-5xl font-bold ${lexend.className} mb-12 text-center`}
              >
                What We Build
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
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
              <p className="text-center text-gray-600 mt-8">
                Need standalone integration work?{" "}
                <Link
                  href="/services/integrations"
                  className="text-blue-600 hover:underline font-semibold"
                >
                  See our integrations service
                </Link>
                .
              </p>
            </div>

            {/* Common Use Cases */}
            <div className="mb-20">
              <h2
                className={`text-4xl md:text-5xl font-bold ${lexend.className} mb-12 text-center`}
              >
                Common Starting Points
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {useCases.map((useCase, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
                  >
                    <FontAwesomeIcon
                      icon={useCase.icon}
                      className="text-3xl text-blue-600 mb-4"
                    />
                    <h3 className="text-xl font-bold mb-3">{useCase.title}</h3>
                    <p className="text-gray-600">{useCase.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Industries */}
            <div className="mb-20">
              <h2
                className={`text-4xl md:text-5xl font-bold ${lexend.className} mb-12 text-center`}
              >
                Who We Work With
              </h2>
              <p className="text-center text-lg mb-8 max-w-3xl mx-auto">
                Most of our bespoke work is with e-commerce and retail
                businesses. The problems vary, but the pattern is usually the
                same: standard platforms have taken them as far as they can go.
              </p>
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
                How It Works
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
          </section>
          <SecondaryCTA title="Ready to Discuss Your Project?" />
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
    </div>
  );
}

import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import { lexend } from "../../fonts";
import Link from "next/link";
import SecondaryCTA from "@/components/common/SecondaryCTA";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPython,
  faAws,
  faMicrosoft,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBrain,
  faRobot,
  faChartLine,
  faLightbulb,
  faShield,
  faCode,
  faUsers,
  faMapMarkerAlt,
  faLanguage,
  faImage,
  faCloudUploadAlt,
  faDesktop,
} from "@fortawesome/free-solid-svg-icons";

export const metadata = {
  title:
    "AI Development & Integration Services | Essex & UK | The Bearded Developer",
  description:
    "Expert AI development and integration services in Essex and across the UK. Custom AI solutions, automation workflows, ChatGPT integrations, and machine learning implementations.",
  keywords:
    "ai development, ai integration, chatgpt integration, machine learning, automation, ai essex, ai developer uk, custom ai solutions",
  openGraph: {
    title: "Professional AI Development & Integration Services | Essex & UK",
    description:
      "Transform your business with custom AI solutions. Expert development, integrations, and automation workflows from experienced developers.",
    type: "website",
  },
};

const services = [
  {
    title: "Custom AI Integration",
    icon: faBrain,
    description:
      "Seamlessly integrate AI capabilities into your existing systems. From ChatGPT API integrations to custom machine learning models tailored to your business needs.",
    features: [
      "ChatGPT & OpenAI API integration",
      "Custom AI model development",
      "Existing system integration",
      "API development & management",
      "Performance optimization",
    ],
  },
  {
    title: "Intelligent Automation",
    icon: faRobot,
    description:
      "Reduce manual tasks and improve efficiency with AI-powered automation workflows. Smart document processing, data analysis, and decision-making systems.",
    features: [
      "Workflow automation",
      "Document processing",
      "Data analysis automation",
      "Email & communication automation",
      "Business process optimization",
    ],
  },
  {
    title: "Natural Language Processing",
    icon: faLanguage,
    description:
      "Advanced text analysis, sentiment analysis, and language processing solutions. Perfect for customer service, content analysis, and communication systems.",
    features: [
      "Sentiment analysis",
      "Text classification",
      "Language translation",
      "Chatbot development",
      "Content generation",
    ],
  },
  {
    title: "Computer Vision Solutions",
    icon: faImage,
    description:
      "Image recognition, analysis, and processing systems. From quality control to automated tagging and visual search capabilities.",
    features: [
      "Image recognition & classification",
      "Object detection",
      "Quality control automation",
      "Visual search systems",
      "Automated image tagging",
    ],
  },
  {
    title: "Data Analytics & ML",
    icon: faChartLine,
    description:
      "Transform your data into actionable insights with machine learning models. Predictive analytics, customer behavior analysis, and business intelligence.",
    features: [
      "Predictive analytics",
      "Customer behavior analysis",
      "Sales forecasting",
      "Business intelligence dashboards",
      "Custom ML model training",
    ],
  },
  {
    title: "AI-Powered Web Applications",
    icon: faDesktop,
    description:
      "Complete web applications with built-in AI capabilities. Smart forms, intelligent search, recommendation engines, and personalized user experiences.",
    features: [
      "Intelligent web applications",
      "Recommendation systems",
      "Smart search functionality",
      "Personalization engines",
      "AI-enhanced user interfaces",
    ],
  },
  {
    title: "Cloud AI Solutions",
    icon: faCloudUploadAlt,
    description:
      "Scalable cloud-based AI solutions using AWS, Azure, and Google Cloud. Serverless AI functions and enterprise-grade deployments.",
    features: [
      "AWS AI services integration",
      "Azure Cognitive Services",
      "Google Cloud AI Platform",
      "Serverless AI functions",
      "Enterprise cloud deployment",
    ],
  },
  {
    title: "AI Consulting & Strategy",
    icon: faLightbulb,
    description:
      "Strategic AI consultation to identify opportunities and create implementation roadmaps. We help you understand how AI can transform your business.",
    features: [
      "AI opportunity assessment",
      "Implementation roadmaps",
      "Technology selection",
      "ROI analysis",
      "Team training & support",
    ],
  },
];

const technologies = [
  { name: "OpenAI GPT", icon: faBrain, color: "text-green-600" },
  { name: "Python & TensorFlow", icon: faPython, color: "text-blue-600" },
  { name: "AWS AI Services", icon: faAws, color: "text-orange-600" },
  { name: "Azure Cognitive", icon: faMicrosoft, color: "text-blue-500" },
];

const useCases = [
  {
    title: "Customer Service Automation",
    description:
      "AI chatbots and automated response systems that handle common queries and escalate complex issues to human agents.",
    icon: faUsers,
  },
  {
    title: "Content Generation",
    description:
      "Automated content creation for marketing, product descriptions, and social media posts using advanced language models.",
    icon: faCode,
  },
  {
    title: "Quality Assurance",
    description:
      "Computer vision systems for automated quality control, defect detection, and compliance monitoring in manufacturing.",
    icon: faShield,
  },
  {
    title: "Business Intelligence",
    description:
      "Advanced analytics and reporting systems that provide insights into customer behavior, sales trends, and operational efficiency.",
    icon: faChartLine,
  },
];

export default function AIServicesPage() {
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
                AI Development & Integration Services
              </h1>
              <p className="text-xl md:text-2xl font-semibold mb-8 max-w-4xl mx-auto">
                Transform your business with cutting-edge AI solutions. Custom
                integrations, intelligent automation, and machine learning
                implementations across Essex and the UK.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-semibold">
                  <FontAwesomeIcon
                    icon={faBrain}
                    className="mr-2 w-4 h-4 m-0 inline"
                  />
                  AI Specialists
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

            {/* Why Choose Us Section */}
            <div className="mb-20">
              <h2
                className={`text-4xl md:text-5xl font-bold ${lexend.className} mb-8 text-center`}
              >
                Why Choose Our AI Services?
              </h2>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <FontAwesomeIcon
                        icon={faBrain}
                        className="text-purple-600 text-2xl mt-1"
                      />
                      <div>
                        <h3 className="text-xl font-bold mb-2">
                          Practical AI Implementation
                        </h3>
                        <p>
                          We focus on AI solutions that solve real business
                          problems and deliver measurable ROI, not just buzzword
                          implementations.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <FontAwesomeIcon
                        icon={faShield}
                        className="text-blue-600 text-2xl mt-1"
                      />
                      <div>
                        <h3 className="text-xl font-bold mb-2">
                          Secure & Compliant
                        </h3>
                        <p>
                          All AI implementations follow best practices for data
                          security, privacy, and compliance with UK and EU
                          regulations.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <FontAwesomeIcon
                        icon={faChartLine}
                        className="text-green-600 text-2xl mt-1"
                      />
                      <div>
                        <h3 className="text-xl font-bold mb-2">
                          Proven Results
                        </h3>
                        <p>
                          Our AI solutions have helped businesses reduce costs
                          by 40% and improve efficiency by up to 300%.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="bg-gradient-to-br from-purple-400 to-blue-500 rounded-lg p-8 text-white">
                    <h3 className="text-2xl font-bold mb-4">
                      Ready to Explore AI?
                    </h3>
                    <p className="mb-6">
                      Let&apos;s discuss how AI can transform your business
                      processes and drive growth.
                    </p>
                    <Link
                      href="/contact"
                      className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-block"
                    >
                      Get AI Consultation
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
                Our AI Development Services
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
                        className="text-3xl text-purple-600 mr-4"
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

            {/* Use Cases */}
            <div className="mb-20">
              <h2
                className={`text-4xl md:text-5xl font-bold ${lexend.className} mb-12 text-center`}
              >
                AI Use Cases & Applications
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {useCases.map((useCase, index) => (
                  <div
                    key={index}
                    className="text-center p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <FontAwesomeIcon
                      icon={useCase.icon}
                      className="text-4xl text-purple-600 mb-4"
                    />
                    <h3 className="text-xl font-bold mb-3">{useCase.title}</h3>
                    <p className="text-gray-600">{useCase.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className="mb-20">
              <h2
                className={`text-3xl md:text-4xl font-bold ${lexend.className} mb-8 text-center`}
              >
                AI Technologies We Work With
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
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

            {/* Process Section */}
            <div className="mb-20">
              <h2
                className={`text-4xl md:text-5xl font-bold ${lexend.className} mb-12 text-center`}
              >
                Our AI Development Process
              </h2>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-purple-600">
                      1
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">AI Assessment</h3>
                  <p className="text-gray-600">
                    We analyze your business processes to identify AI
                    opportunities and potential ROI.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">2</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Proof of Concept</h3>
                  <p className="text-gray-600">
                    We build a working prototype to validate the AI solution and
                    demonstrate value.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-green-600">3</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Development & Training
                  </h3>
                  <p className="text-gray-600">
                    Full development of the AI solution with model training and
                    system integration.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-orange-600">
                      4
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Deployment & Monitoring
                  </h3>
                  <p className="text-gray-600">
                    Secure deployment with ongoing monitoring, optimization, and
                    support.
                  </p>
                </div>
              </div>
            </div>

            {/* Local Coverage */}
            <div className="mb-20 bg-gray-50 rounded-lg p-8">
              <h2
                className={`text-3xl md:text-4xl font-bold ${lexend.className} mb-6 text-center`}
              >
                AI Development Across Essex & The UK
              </h2>
              <p className="text-center text-lg mb-8 max-w-3xl mx-auto">
                Based in Essex, we provide AI development and integration
                services to businesses across the UK. From startups exploring AI
                opportunities to enterprises implementing large-scale AI
                solutions.
              </p>
              <div className="text-center">
                <span className="inline-block bg-white px-6 py-3 rounded-full shadow-sm font-bold text-lg">
                  AI Development Services • Essex • London • UK Wide
                </span>
              </div>
            </div>
          </section>
          <SecondaryCTA title="Ready to Harness the Power of AI?" />
        </Container>
      </Section>
    </div>
  );
}

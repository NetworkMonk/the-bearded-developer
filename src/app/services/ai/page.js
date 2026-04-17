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
  faPuzzlePiece,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";

export const metadata = {
  title:
    "Agentic AI Consultants Essex | AI Development & Automation | Free Consultation",
  description:
    "AI consultants based in Essex helping UK businesses implement agentic AI, automation workflows and custom AI solutions. Real experience, practical outcomes. Free consultation.",
  keywords:
    "agentic ai essex, ai consultant essex, ai consultants essex, ai training essex, ai development essex, ai automation uk, custom ai solutions uk, anthropic claude integration",
  openGraph: {
    title: "Agentic AI Consultants Essex | AI Development & Automation",
    description:
      "AI consultants based in Essex helping UK businesses implement agentic AI, automation workflows and custom AI solutions. Real experience, practical outcomes. Free consultation.",
    type: "website",
  },
};

const services = [
  {
    title: "AI Consultancy & Strategy",
    icon: faLightbulb,
    description:
      "Not sure where AI fits in your business, or worried about getting it wrong? This is where most businesses should start. We work with you to understand your processes, identify where AI can genuinely add value, and give you an honest picture of the risks and rewards before you spend anything.",
    features: [
      "AI opportunity assessment",
      "Honest risk and reward analysis",
      "Technology selection and recommendations",
      "Implementation roadmap",
      "Plain English throughout",
    ],
  },
  {
    title: "Agentic AI & Workflow Automation",
    icon: faRobot,
    description:
      "Agentic AI refers to AI systems that can take actions, make decisions and complete tasks autonomously — rather than just answering questions. We build practical agentic workflows that reduce manual effort and free your team up for the work that actually needs a human.",
    features: [
      "Agentic workflow design and build",
      "Development workflow automation",
      "Internal tooling with AI capabilities",
      "Process automation with Claude and OpenAI",
      "Ongoing refinement and support",
    ],
  },
  {
    title: "AI-Powered Integrations",
    icon: faPuzzlePiece,
    description:
      "We connect AI to the tools your business already uses: Slack bots that pull from Google Sheets or Microsoft 365, AI-assisted content management for your website, and custom data connections that sit quietly in the background and just work.",
    features: [
      "Slack bot development with AI capabilities",
      "Microsoft 365 and Google Workspace integration",
      "Website and CMS automation",
      "API development and management",
      "Custom data connections",
    ],
  },
  {
    title: "Staff AI Training",
    icon: faGraduationCap,
    description:
      "Most businesses have staff who know they should be using AI tools but aren't confident enough to get started. We offer tailored 1-1 and small group sessions focused on the tools your team actually uses — practical, hands-on, and designed around your business rather than a generic curriculum.",
    features: [
      "1-1 and small group sessions",
      "Tailored to your team's actual tools",
      "Hands-on, interactive format",
      "Claude, ChatGPT and general AI tooling",
      "Follow-up support included",
    ],
  },
  {
    title: "Custom AI Development",
    icon: faCode,
    description:
      "For businesses that need something built from scratch. We design and develop custom AI-powered applications, whether that is an internal tool, a client-facing product, or an automated process that runs in the background. We have 20 years of software development behind this work.",
    features: [
      "Custom AI-powered web applications",
      "AI-assisted lead generation and analysis tools",
      "Bespoke automation and reporting systems",
      "Integration with existing platforms",
      "Long-term support and development",
    ],
  },
];

const technologies = [
  { name: "Anthropic Claude", icon: faBrain, color: "text-purple-600" },
  { name: "OpenAI GPT", icon: faBrain, color: "text-green-600" },
  { name: "Python", icon: faPython, color: "text-blue-600" },
  { name: "AWS AI Services", icon: faAws, color: "text-orange-600" },
  { name: "Azure Cognitive", icon: faMicrosoft, color: "text-blue-500" },
];

const recentWork = [
  {
    title: "AI Website Assessment Tool",
    description:
      "Built an internal AI tool that analyses business websites and produces a structured assessment report covering SEO, content, technical health and conversion opportunities. It runs reliably and produces something you can actually act on.",
    icon: faChartLine,
  },
  {
    title: "WordPress Management via AI",
    description:
      "Built MCP server integrations that allow AI-assisted content and theme management across client WordPress sites. Fast, accurate changes without logging into each site manually. It saves a meaningful amount of time across ongoing client work.",
    icon: faRobot,
  },
  {
    title: "Slack Bots with Live Data Access",
    description:
      "Developed AI-powered Slack bots that let teams ask questions and retrieve information directly from Microsoft and Google data sources. Teams spend less time switching between tools looking for answers.",
    icon: faUsers,
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
                Agentic AI Consultants, Essex
              </h1>
              <p className="text-xl md:text-2xl font-semibold mb-8 max-w-4xl mx-auto">
                Practical AI consultancy for UK businesses. We help you work out
                where AI genuinely fits, then implement something that actually
                does the job.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-semibold">
                  <FontAwesomeIcon
                    icon={faBrain}
                    className="mr-2 w-4 h-4 m-0 inline"
                  />
                  AI Consultants
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
                  UK Wide
                </span>
              </div>
            </div>

            {/* Honest intro section */}
            <div className="mb-20">
              <h2
                className={`text-4xl md:text-5xl font-bold ${lexend.className} mb-8 text-center`}
              >
                AI Without the Hype
              </h2>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-lg mb-6">
                    Most businesses know they should be doing something with AI.
                    Very few know what.
                  </p>
                  <p className="text-lg mb-6">
                    We work with a small number of clients closely. We help them
                    work out where AI can genuinely save time, then build or
                    implement the right solution for their situation. We are not
                    here to sell you a platform or talk you into a project you
                    do not need.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <FontAwesomeIcon
                        icon={faShield}
                        className="text-purple-600 text-xl mt-1 shrink-0"
                      />
                      <p>
                        <strong>Honest assessment first.</strong> If AI is not
                        the right answer for a particular problem, we will tell
                        you.
                      </p>
                    </div>
                    <div className="flex items-start space-x-4">
                      <FontAwesomeIcon
                        icon={faCode}
                        className="text-purple-600 text-xl mt-1 shrink-0"
                      />
                      <p>
                        <strong>20 years of development experience</strong>{" "}
                        behind every recommendation. We are not new to this
                        industry, just applying new tools.
                      </p>
                    </div>
                    <div className="flex items-start space-x-4">
                      <FontAwesomeIcon
                        icon={faBrain}
                        className="text-purple-600 text-xl mt-1 shrink-0"
                      />
                      <p>
                        <strong>Anthropic Claude specialists.</strong> We work
                        with multiple platforms but Claude is our preference.
                        The quality and tooling are consistently better in our
                        experience.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="bg-gradient-to-br from-purple-400 to-blue-500 rounded-lg p-8 text-white">
                    <h3 className="text-2xl font-bold mb-4">
                      Not Sure Where to Start?
                    </h3>
                    <p className="mb-6">
                      A free consultation is the right first step. We will ask
                      about your business, your processes, and what you are
                      hoping AI might help with — and give you an honest view on
                      what is realistic.
                    </p>
                    <Link
                      href="/contact"
                      className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-block"
                    >
                      Book a Free Consultation
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
                How We Work With You
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

            {/* Recent Work */}
            <div className="mb-20">
              <h2
                className={`text-4xl md:text-5xl font-bold ${lexend.className} mb-4 text-center`}
              >
                Recent Work
              </h2>
              <p className="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
                A few examples of AI tools and integrations we have built —
                practical work, not demos.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                {recentWork.map((item, index) => (
                  <div
                    key={index}
                    className="text-center p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <FontAwesomeIcon
                      icon={item.icon}
                      className="text-4xl text-purple-600 mb-4"
                    />
                    <h3
                      className={`text-xl font-bold mb-3 ${lexend.className}`}
                    >
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className="mb-20">
              <h2
                className={`text-3xl md:text-4xl font-bold ${lexend.className} mb-4 text-center`}
              >
                AI Platforms We Work With
              </h2>
              <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
                We work across multiple AI platforms. Our preference is
                Anthropic Claude. The outputs are consistently better and the
                tooling is genuinely good.
              </p>
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

            {/* Process Section */}
            <div className="mb-20">
              <h2
                className={`text-4xl md:text-5xl font-bold ${lexend.className} mb-12 text-center`}
              >
                How It Typically Works
              </h2>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-purple-600">
                      1
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Free Consultation</h3>
                  <p className="text-gray-600">
                    We talk through your business, your processes, and what you
                    are hoping AI might help with.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">2</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Honest Assessment</h3>
                  <p className="text-gray-600">
                    We identify where AI can genuinely add value and where it
                    probably cannot. If it is not the right answer, we will say
                    so.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-green-600">3</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Build or Implement</h3>
                  <p className="text-gray-600">
                    We build the solution, set up the tools, or run the training
                    — depending on what the situation calls for.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-orange-600">
                      4
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Ongoing Support</h3>
                  <p className="text-gray-600">
                    AI moves fast. We stay involved to help you adapt as the
                    tools and your needs evolve.
                  </p>
                </div>
              </div>
            </div>

            {/* Local Coverage */}
            <div className="mb-20 bg-gray-50 rounded-lg p-8">
              <h2
                className={`text-3xl md:text-4xl font-bold ${lexend.className} mb-6 text-center`}
              >
                AI Consultants Based in Essex, Working UK-Wide
              </h2>
              <p className="text-center text-lg mb-8 max-w-3xl mx-auto">
                Based in Essex, we work with businesses across the UK, whether
                you are just starting to look at AI or already know what you
                want to build. Most of our work is sector-agnostic, though we
                have particular experience with e-commerce businesses.
              </p>
              <div className="text-center">
                <span className="inline-block bg-white px-6 py-3 rounded-full shadow-sm font-bold text-lg">
                  AI Consultancy • Essex • London • UK Wide
                </span>
              </div>
            </div>
          </section>
          <SecondaryCTA title="Ready to Have an Honest Conversation About AI?" />
        </Container>
      </Section>
    </div>
  );
}

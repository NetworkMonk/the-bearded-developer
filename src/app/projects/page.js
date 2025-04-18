import Link from "next/link";

export const metadata = {
  title: "Projects | The Bearded Developer",
  description:
    "Explore our portfolio of Shopify stores, bespoke web applications, and web consultancy projects, built with Next.js and Celigo for UK e-commerce businesses.",
};

export default function ProjectsPage() {
  return (
    <page className="max-w-6xl mx-auto py-12 px-4 bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Projects</h1>
        <p className="text-lg mb-6">
          Discover how The Bearded Developer delivers high-performance web
          solutions for UK businesses. From Shopify stores to bespoke Next.js
          applications, our projects drive results.
        </p>
        <Link
          as="a"
          href="/#lets-talk"
          className="inline-block bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition"
        >
          Get in Touch
        </Link>
      </section>

      {/* Case Studies */}
      <section className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        {/* Project 1: Shopify Store */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <img
            src="/images/shopify-project-placeholder.jpg"
            alt="Shopify Store for UK Retailer"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h2 className="text-2xl font-semibold mb-2">
            Shopify Store for UK Retailer
          </h2>
          <p className="text-sm mb-2">
            <strong>Client</strong>: UK-based e-commerce retailer
          </p>
          <p className="text-sm mb-2">
            <strong>Challenge</strong>: Needed a scalable, user-friendly online
            store with seamless inventory management.
          </p>
          <p className="text-sm mb-2">
            <strong>Solution</strong>: Built a custom Shopify store with Celigo
            integrations for real-time inventory sync, optimized for mobile and
            SEO.
          </p>
          <p className="text-sm mb-2">
            <strong>Technologies</strong>: Shopify, Celigo, Next.js, Tailwind
            CSS
          </p>
          <p className="text-sm mb-4">
            <strong>Results</strong>: Reduced cart abandonment by 15% and
            improved page load time by 30%.
          </p>
          <p className="text-sm italic">
            “James delivered a flawless store that transformed our online
            presence.” - [Client Name, replace with real testimonial]
          </p>
        </div>

        {/* Project 2: Next.js E-commerce App */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <img
            src="/images/nextjs-project-placeholder.jpg"
            alt="Next.js E-commerce Application"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h2 className="text-2xl font-semibold mb-2">
            Next.js E-commerce Application
          </h2>
          <p className="text-sm mb-2">
            <strong>Client</strong>: UK startup
          </p>
          <p className="text-sm mb-2">
            <strong>Challenge</strong>: Required a fast, headless e-commerce
            platform to compete with larger retailers.
          </p>
          <p className="text-sm mb-2">
            <strong>Solution</strong>: Developed a headless Next.js application
            with Shopify API integration, featuring server-side rendering and
            dynamic product pages.
          </p>
          <p className="text-sm mb-2">
            <strong>Technologies</strong>: Next.js, Shopify API, Node.js, Vercel
          </p>
          <p className="text-sm mb-4">
            <strong>Results</strong>: Achieved 2-second load times and increased
            conversions by 20%.
          </p>
          <p className="text-sm italic">
            “The Bearded Developer exceeded our expectations with a
            lightning-fast app.” – [Client Name, replace with real testimonial]
          </p>
        </div>

        {/* Project 3: Web Consultancy */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <img
            src="/images/consultancy-project-placeholder.jpg"
            alt="Web Consultancy for SME"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h2 className="text-2xl font-semibold mb-2">
            Web Consultancy for SME
          </h2>
          <p className="text-sm mb-2">
            <strong>Client</strong>: UK small business
          </p>
          <p className="text-sm mb-2">
            <strong>Challenge</strong>: Struggled with outdated website and poor
            user engagement.
          </p>
          <p className="text-sm mb-2">
            <strong>Solution</strong>: Conducted a website audit, implemented
            performance optimizations, and provided a roadmap for digital
            transformation using modern frameworks.
          </p>
          <p className="text-sm mb-2">
            <strong>Technologies</strong>: Next.js, Google Analytics, Hotjar
          </p>
          <p className="text-sm mb-4">
            <strong>Results</strong>: Improved user retention by 25% and reduced
            bounce rate by 10%.
          </p>
          <p className="text-sm italic">
            “James’ expertise turned our website into a powerful tool.” –
            [Client Name, replace with real testimonial]
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center mt-12">
        <h2 className="text-2xl font-semibold mb-4">
          Ready to Start Your Project?
        </h2>
        <p className="text-lg mb-6">
          Let&apos;s build a web solution that drives your business forward.
          Contact us today.
        </p>
        <Link
          as="a"
          href="/#lets-talk"
          className="inline-block bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition"
        >
          Contact Us
        </Link>
      </section>
    </page>
  );
}

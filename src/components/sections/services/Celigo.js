import { lexend } from "@/app/fonts";

export default function Celigo() {
  return (
    <div id="celigo" className="my-12">
      <div className="grid md:grid-cols-2 gap-4 w-full">
        <div className="md:order-1">
          <h3 className={`text-3xl font-bold uppercase ${lexend.className}`}>
            Celigo Integration Platform
          </h3>
          <p className="text-lg md:text-xl font-semibold my-5">
            Celigo Technical Partner specializing in NetSuite integrations
          </p>
          <p className="my-2">
            As a <strong>Celigo Technical Partner</strong>, we specialize in
            building, optimizing, and maintaining Celigo integrations for
            NetSuite businesses. From Shopify to NetSuite connections to custom
            API integrations, we deliver scalable integration solutions.
          </p>
          <p className="my-2">
            Our managed Celigo support services provide 24/7 monitoring,
            proactive error prevention, and expert troubleshooting to keep your
            integrations running smoothly. Stop firefighting integration
            failures and let us handle the complexity.
          </p>
          <p className="my-2">
            <strong>Services include:</strong> NetSuite integrations, managed
            support retainers (from £800/month), error troubleshooting, flow
            development, data migration, and integration strategy consulting.
          </p>
        </div>
        <div className="md:order-2"></div>
      </div>
    </div>
  );
}

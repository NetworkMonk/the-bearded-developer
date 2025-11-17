import { lexend } from "@/app/fonts";

export default function Shopify() {
  return (
    <div id="shopify" className="my-12">
      <div className="grid md:grid-cols-2 gap-4 w-full">
        <div className="md:order-1">
          <h3 className={`text-3xl font-bold uppercase ${lexend.className}`}>
            Shopify Development
          </h3>
          <p className="text-lg md:text-xl font-semibold my-5">
            Certified Shopify Partner with deep platform expertise
          </p>
          <p className="my-2">
            As a Shopify Certified Partner, we specialize in building
            high-converting stores, custom themes, and powerful app
            integrations. From store setup to advanced customizations, we know
            Shopify inside and out.
          </p>
          <p className="my-2">
            Whether you need a complete store redesign, custom functionality, or
            performance optimization, we&apos;ll help you maximize your Shopify
            investment and boost your online sales.
          </p>
        </div>
        <div className="md:order-2"></div>
      </div>
    </div>
  );
}

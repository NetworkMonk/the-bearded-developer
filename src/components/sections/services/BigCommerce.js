import { lexend } from "@/app/fonts";

export default function BigCommerce() {
  return (
    <div id="bigcommerce" className="my-12">
      <div className="grid md:grid-cols-2 gap-4 w-full">
        <div className="md:order-2">
          <h3 className={`text-3xl font-bold uppercase ${lexend.className}`}>
            BigCommerce Solutions
          </h3>
          <p className="text-lg md:text-xl font-semibold my-5">
            Enterprise-grade e-commerce development and optimization
          </p>
          <p className="my-2">
            BigCommerce offers powerful built-in features perfect for growing
            businesses. We help you leverage its advanced capabilities including
            multi-channel selling, API-first architecture, and enterprise
            scalability.
          </p>
          <p className="my-2">
            From custom theme development to complex B2B configurations,
            we&apos;ll help you build a BigCommerce store that grows with your
            business and delivers exceptional customer experiences.
          </p>
        </div>
        <div className="md:order-1"></div>
      </div>
    </div>
  );
}

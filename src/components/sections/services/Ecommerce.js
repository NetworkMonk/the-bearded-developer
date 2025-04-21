import { lexend } from "@/app/fonts";

export default function Ecommerce() {
  return (
    <div id="ecommerce" className="my-12">
      <div className="grid md:grid-cols-2 gap-4 w-full">
        <div className="md:order-1">
          <h3 className={`text-3xl font-bold uppercase ${lexend.className}`}>
            Ecommerce
          </h3>
          <p className="text-lg md:text-xl font-semibold my-5">
            Helping you to manage your online stores
          </p>
          <p className="my-2">
            We are certified partners with Shopify and can work on many other
            platforms. If you have an existing online store or are looking to
            start selling online then we can help you with your e-commerce
            needs.
          </p>
          <p className="my-2">
            We can work with your internal and external teams to deliver the
            best solution for your business.
          </p>
        </div>
        <div className="md:order-2"></div>
      </div>
    </div>
  );
}

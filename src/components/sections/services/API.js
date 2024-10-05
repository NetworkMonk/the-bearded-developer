import { lexend } from "@/app/fonts";

export default function API() {
  return (
    <div id="api" className="my-12">
      <div className="grid md:grid-cols-2 gap-4 w-full">
        <div className="md:order-1">
          <h3 className={`text-3xl font-bold uppercase ${lexend.className}`}>
            API
          </h3>
          <p className="text-lg md:text-xl font-semibold my-5">
            Create custom endpoints for your systems
          </p>
          <p className="my-2">
            Custom APIs can be a powerful tool for your business. We can help
            create custom endpoints for your systems to talk to each other. This
            can be useful for integrating systems that don&apos;t have a native
            integration, or for creating a custom interface for your customers to
            interact with your systems.
          </p>
          <p className="my-2">
            We can help create APIs using REST, SOAP, or GraphQL, and can help
            with the security and documentation of your APIs to make sure they are
            secure and easy to use.
          </p>
        </div>
        <div className="md:order-2"></div>
      </div>
    </div>
  );
}

import { lexend } from "@/app/fonts";

export default function NetSuite() {
  return (
    <div id="netsuite" className="my-12">
      <div className="grid md:grid-cols-2 gap-4 w-full">
        <div className="md:order-2">
          <h3 className={`text-3xl font-bold uppercase ${lexend.className}`}>
            NetSuite
          </h3>
          <p className="text-lg md:text-xl font-semibold my-5">
            Customisations and integrations for your ERP
          </p>
          <p className="my-2">
            NetSuite is a powerful tool, but sometimes it needs a little help to
            do exactly what you need. We can help with customisation of forms,
            workflows, and scripts to make NetSuite work exactly how you want it
            to.
          </p>
          <p className="my-2">
            We can audit and improve your NetSuite setup to make sure you are
            getting the most out of your investment. We can also help with
            integrations to other systems to make sure you have a seamless
            experience.
          </p>
        </div>
        <div className="md:order-1">
          <p className="my-2"></p>
        </div>
      </div>
    </div>
  );
}

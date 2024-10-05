import { lexend } from "@/app/fonts";

export default function Integrations() {
  return (
    <div id="integrations" className="my-12">
      <div className="grid md:grid-cols-2 gap-4 w-full">
        <div className="md:order-1">
          <h3 className={`text-3xl font-bold uppercase ${lexend.className}`}>
            Integrations
          </h3>
          <p className="text-lg md:text-xl font-semibold my-5">
            We love getting technology talking
          </p>
          <p className="my-2">
            If you have a need to get two systems talking to each other, we can
            help. We have experience in integrating systems to save time and
            reduce errors.
          </p>
          <p className="my-2">
            We can help create or improve integrations in any number of iPaaS
            tools such as <strong>Celigo</strong>. Or we can create custom
            integrations using APIs and webhooks. Whatever you need to get one
            system talking to another, we can help.
          </p>
        </div>
        <div className="md:order-2"></div>
      </div>
    </div>
  );
}

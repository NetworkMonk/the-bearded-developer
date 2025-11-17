import { lexend } from "@/app/fonts";

export default function AI() {
  return (
    <div id="ai" className="my-12">
      <div className="grid md:grid-cols-2 gap-4 w-full">
        <div className="md:order-2">
          <h3 className={`text-3xl font-bold uppercase ${lexend.className}`}>
            AI & Automation
          </h3>
          <p className="text-lg md:text-xl font-semibold my-5">
            Smart solutions to streamline your business processes
          </p>
          <p className="my-2">
            From custom AI integrations to intelligent automation workflows, we
            help businesses leverage cutting-edge technology to improve
            efficiency and reduce manual tasks.
          </p>
          <p className="my-2">
            Whether it&apos;s prompt engineering for better AI outputs, building
            custom ChatGPT integrations, or automating your content workflows,
            we&apos;ll help you harness AI&apos;s power responsibly and
            effectively.
          </p>
        </div>
        <div className="md:order-1"></div>
      </div>
    </div>
  );
}

import { lexend } from "@/app/fonts";

export default function Agency() {
  return (
    <div id="agency" className="my-12">
      <div className="grid md:grid-cols-2 gap-4 w-full">
        <div className="md:order-2">
          <h3 className={`text-3xl font-bold uppercase ${lexend.className}`}>
            Agency Management
          </h3>
          <p className="text-lg md:text-xl font-semibold my-5">
            Helping you manage your external developers
          </p>
          <p className="my-2">
            If you have a team of developers working on your project, we can help
            you manage them. We can help with project management, code reviews,
            and mentoring to make sure your project is on track and on budget.
          </p>
          <p className="my-2">
            We can help with setting up CI/CD pipelines to make sure your code is
            tested and deployed automatically, and we can help with code quality
            tools to make sure your code is maintainable and scalable.
          </p>
        </div>
        <div className="md:order-1">
          <p className="my-2">TESTING</p>
        </div>
      </div>
    </div>
  );
}

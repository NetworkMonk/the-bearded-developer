import { lexend } from "@/app/fonts";

export default function Bespoke() {
  return (
    <div id="bespoke" className="my-12">
      <div className="grid md:grid-cols-2 gap-4 w-full">
        <div className="md:order-2">
          <h3 className={`text-3xl font-bold uppercase ${lexend.className}`}>
            Bespoke Web Applications
          </h3>
          <p className="text-lg md:text-xl font-semibold my-5">
            An application that is exactly what you need, no more, no less
          </p>
          <p className="my-2">
            Start with a blank canvas and build exactly what you need. We will
            work with you to understand your requirements and build a web
            application that is exactly what you need.
          </p>
          <p className="my-2">
            If you have a specific requirement that can&apos;t be met with an off the
            shelf solution then a bespoke web application is the way to go.
            We&apos;re happy to discuss specific needs with you and make the best
            recommendation we can.
          </p>
        </div>
        <div className="md:order-1">
          <p className="my-2">TESTING</p>
        </div>
      </div>
    </div>
  );
}

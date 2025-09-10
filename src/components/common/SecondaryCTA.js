import { lexend } from "@/app/fonts";

export default function SecondaryCTA({
  title,
  description,
  buttonText,
  buttonLink,
}) {
  const titleText = title || "Need Something Else?";
  const descriptionText =
    description ||
    "Let's work together to create a custom solution that meets your needs. Contact us today.";
  const buttonLabel = buttonText || "Let's talk";
  const buttonHref = buttonLink || "/contact";

  return (
    <section className="p-2 md:p-10 relative">
      <div className="bg-brand-blue bg-gradient-to-br from-brand-blue to-brand-light-blue rounded-xl shadow-xl p-10 rounded-lg text-white">
        <h2
          className={`text-3xl sm:text-5xl md:text-6xl font-bold ${lexend.className}`}
        >
          {titleText}
        </h2>
        <p
          className={`text-lg md:text-xl font-semibold mt-5 md:mt-10 max-w-xl`}
        >
          {descriptionText}
        </p>
        <p className="mt-10">
          <a
            href={buttonHref}
            className="w-48 outline outline-2 outline-white bg-transparent text-white hover:bg-white hover:text-brand-blue px-6 py-2 rounded-full transition-colors duration-500 uppercase font-semibold mx-auto md:ml-auto md:mr-0 text-center"
          >
            {buttonLabel}
          </a>
        </p>
      </div>
    </section>
  );
}

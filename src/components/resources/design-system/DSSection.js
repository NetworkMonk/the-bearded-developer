import { lexend } from "@/app/fonts";

export default function DSSection({ id, eyebrow, title, description, children }) {
  return (
    <section id={id} className="scroll-mt-28 py-16 border-t border-gray-200">
      {eyebrow && (
        <p
          className={`text-xs font-semibold uppercase tracking-[0.18em] text-brand-teal ${lexend.className}`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`mt-3 text-3xl md:text-4xl font-bold text-brand-black ${lexend.className}`}
      >
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base text-brand-black/60 leading-relaxed max-w-3xl">
          {description}
        </p>
      )}
      <div className="mt-10">{children}</div>
    </section>
  );
}

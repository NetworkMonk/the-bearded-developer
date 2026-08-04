import { lexend } from "@/app/fonts";

export function ClassList({ label = "Classes", value }) {
  return (
    <div className="mt-3 rounded-lg bg-brand-black/[0.04] border border-brand-black/10 px-4 py-3 overflow-x-auto">
      <p
        className={`text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-black/40 mb-1.5 ${lexend.className}`}
      >
        {label}
      </p>
      <code className="block text-xs text-brand-black/70 whitespace-pre leading-relaxed">
        {value}
      </code>
    </div>
  );
}

export function Meta({ items }) {
  return (
    <dl className="mt-4 grid sm:grid-cols-2 gap-x-8 gap-y-2">
      {items.map(({ label, value }) => (
        <div key={label} className="flex gap-3 text-xs">
          <dt
            className={`shrink-0 w-28 font-semibold uppercase tracking-[0.1em] text-brand-black/40 ${lexend.className}`}
          >
            {label}
          </dt>
          <dd className="text-brand-black/70 leading-relaxed">{value}</dd>
        </div>
      ))}
    </dl>
  );
}

export default function Spec({
  title,
  usage,
  surface = "light",
  code,
  meta,
  padding = "p-6 md:p-8",
  // Grid children pass "h-full flex flex-col" so side-by-side specs align and stretch.
  wrapperClass = "mt-10 first:mt-0",
  children,
}) {
  const surfaces = {
    light: "bg-white border-gray-200",
    dark: "bg-brand-black border-brand-black",
    platinum: "bg-brand-platinum border-brand-platinum",
    grid: "bg-white border-gray-200 border-dashed",
  };

  return (
    <div className={wrapperClass}>
      {title && (
        <h3
          className={`text-lg font-semibold text-brand-black ${lexend.className}`}
        >
          {title}
        </h3>
      )}
      {usage && (
        <p className="mt-2 text-sm text-brand-black/60 leading-relaxed max-w-2xl">
          {usage}
        </p>
      )}
      <div
        className={`mt-4 flex-1 rounded-xl border overflow-hidden ${surfaces[surface]} ${padding}`}
      >
        {children}
      </div>
      {code && <ClassList value={code} />}
      {meta && <Meta items={meta} />}
    </div>
  );
}

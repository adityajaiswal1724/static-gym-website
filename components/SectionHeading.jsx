export default function SectionHeading({ eyebrow, title, description, align = "center" }) {
  const alignClass = align === "left" ? "text-left" : "text-center";
  return (
    <div className={`${alignClass} mb-10`}>
      {eyebrow && (
        <span className="mb-2 inline-block text-sm font-bold uppercase tracking-widest text-brand-yellow">
          {eyebrow}
        </span>
      )}
      <h2 className="heading-uppercase text-3xl text-white sm:text-4xl">{title}</h2>
      {description && (
        <p className={`mt-3 max-w-2xl text-base leading-relaxed text-zinc-400 ${align === "center" ? "mx-auto" : ""}`}>
          {description}
        </p>
      )}
    </div>
  );
}

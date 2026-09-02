export default function PageHero({ title, subtitle, eyebrow }) {
  return (
    <section className="border-b border-white/10 bg-brand-charcoal">
      <div className="container-x py-16 text-center sm:py-20">
        {eyebrow && (
          <span className="mb-3 inline-block text-sm font-bold uppercase tracking-widest text-brand-yellow">
            {eyebrow}
          </span>
        )}
        <h1 className="heading-uppercase text-4xl text-white sm:text-5xl">{title}</h1>
        {subtitle && (
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}

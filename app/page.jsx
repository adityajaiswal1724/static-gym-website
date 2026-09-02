import Link from "next/link";
import { SITE } from "@/lib/site";
import SectionHeading from "@/components/SectionHeading";
import {
  ArrowRightIcon,
  AwardIcon,
  CheckIcon,
  DumbbellIcon,
  HeartPulseIcon,
  UsersIcon,
  WhatsAppIcon,
} from "@/components/Icons";

export const metadata = {
  title: "Home",
  description:
    "Future Fitness Gym — a professional training facility led by K11 certified trainer Bharat Singh. Start your transformation today.",
};

const FEATURES = [
  {
    icon: AwardIcon,
    title: "Certified Coaching",
    text: "Train under a K11 certified trainer who knows how to get real, lasting results.",
  },
  {
    icon: DumbbellIcon,
    title: "Modern Equipment",
    text: "A complete range of strength and conditioning equipment for every goal.",
  },
  {
    icon: UsersIcon,
    title: "Personalised Plans",
    text: "Customised workout and nutrition guidance built around your body and schedule.",
  },
  {
    icon: HeartPulseIcon,
    title: "Results Focused",
    text: "Structured, progressive training designed to build strength and confidence.",
  },
];

const GALLERY = [
  { src: "/images/gym-interior.jpg", alt: "Future Fitness Gym training floor with dumbbells" },
  { src: "/images/owner-biceps.jpg", alt: "Trainer performing a double biceps pose" },
  { src: "/images/owner-gym-pose.jpg", alt: "Training session inside the gym" },
  { src: "/images/owner-portrait.jpg", alt: "Bharat Singh, head trainer" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[88vh] items-center overflow-hidden bg-black">
        <img
          src="/images/owner-biceps.jpg"
          alt="Future Fitness Gym"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
        <div className="container-x relative z-10 py-20">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-yellow/40 bg-black/50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-yellow">
            <AwardIcon className="h-4 w-4" />
            K11 Certified Training
          </span>
          <h1 className="heading-uppercase max-w-3xl text-4xl leading-tight text-white text-balance sm:text-6xl">
            Build Your <span className="text-brand-yellow">Stronger</span> Future
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-300 sm:text-lg">
            Future Fitness Gym is a professional training facility led by{" "}
            {SITE.owner.name}, a K11 certified trainer. Train hard, get coached
            right, and transform the way you feel and perform.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={SITE.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-brand-yellow px-6 py-3 text-sm font-bold uppercase tracking-wide text-black transition-colors hover:bg-brand-yellow-dark"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Start Training
            </a>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:border-brand-yellow hover:text-brand-yellow"
            >
              Meet the Trainer
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-brand-black py-20">
        <div className="container-x">
          <SectionHeading
            eyebrow="Why Train With Us"
            title="A Gym Built For Progress"
            description="From your first session to your next personal best, everything here is designed to help you improve safely and consistently."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="group rounded-xl border border-white/10 bg-brand-charcoal p-6 transition-colors hover:border-brand-yellow/50"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-yellow/10 text-brand-yellow">
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-white">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Owner highlight */}
      <section className="border-y border-white/10 bg-brand-charcoal py-20">
        <div className="container-x grid items-center gap-10 lg:grid-cols-2">
          <div className="relative">
            <img
              src="/images/owner-portrait.jpg"
              alt={`${SITE.owner.name}, ${SITE.owner.certification}`}
              className="aspect-[3/4] w-full rounded-xl object-cover object-top"
            />
            <div className="absolute -bottom-5 left-5 right-5 rounded-xl border border-brand-yellow/30 bg-black/90 px-5 py-4 sm:left-8 sm:right-auto">
              <p className="text-sm font-bold uppercase tracking-wide text-brand-yellow">
                {SITE.owner.certification}
              </p>
              <p className="mt-1 text-lg font-extrabold text-white">{SITE.owner.name}</p>
            </div>
          </div>
          <div>
            <SectionHeading
              align="left"
              eyebrow="Meet Your Coach"
              title={SITE.owner.name}
              description="A dedicated, K11 certified trainer who combines disciplined programming with real mentorship to help every member reach their goal."
            />
            <ul className="space-y-3">
              {[
                "Certified, experienced coaching for all fitness levels",
                "Personalised strength and conditioning programs",
                "Nutrition and recovery guidance built into your plan",
                "A supportive, results-driven training environment",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-zinc-300">
                  <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-brand-yellow text-black">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-yellow px-6 py-3 text-sm font-bold uppercase tracking-wide text-black transition-colors hover:bg-brand-yellow-dark"
            >
              Learn More
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-brand-black py-20">
        <div className="container-x">
          <SectionHeading
            eyebrow="Inside The Gym"
            title="Where The Work Happens"
            description="A focused space built for strength, conditioning, and transformation."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {GALLERY.map((img) => (
              <div
                key={img.src}
                className="group overflow-hidden rounded-xl border border-white/10"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="aspect-[3/4] w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 bg-brand-charcoal py-16">
        <div className="container-x flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
          <div>
            <h2 className="heading-uppercase text-2xl text-white sm:text-3xl">
              Ready to start your transformation?
            </h2>
            <p className="mt-2 text-zinc-400">
              Message us today and book your first session.
            </p>
          </div>
          <a
            href={SITE.contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-green inline-flex flex-none items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-transform hover:scale-105"
          >
            <WhatsAppIcon className="h-5 w-5" />
            WhatsApp Us
          </a>
        </div>
      </section>
    </>
  );
}

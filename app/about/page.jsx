import { SITE } from "@/lib/site";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import {
  AwardIcon,
  CheckIcon,
  DumbbellIcon,
  HeartPulseIcon,
  InstagramIcon,
  UsersIcon,
} from "@/components/Icons";

export const metadata = {
  title: "About Us",
  description:
    "Meet Bharat Singh, the K11 certified trainer behind Future Fitness Gym, and learn about our approach to training.",
};

const HIGHLIGHTS = [
  {
    icon: AwardIcon,
    title: SITE.owner.certification,
    text: "Professionally certified in K11 fitness and training methodology.",
  },
  {
    icon: DumbbellIcon,
    title: "Strength & Conditioning",
    text: "Progressive programs for muscle, strength, and endurance.",
  },
  {
    icon: HeartPulseIcon,
    title: "Health First",
    text: "Training that respects your body and builds long-term wellbeing.",
  },
  {
    icon: UsersIcon,
    title: "Community",
    text: "A motivating space where every member is supported and accountable.",
  },
];

const OWNER_GALLERY = [
  { src: "/images/owner-red.jpg", alt: "Bharat Singh training portrait" },
  { src: "/images/owner-maroon.jpg", alt: "Bharat Singh studio portrait" },
  { src: "/images/owner-outdoor.jpg", alt: "Bharat Singh outdoor strength pose" },
  { src: "/images/owner-red-trousers.jpg", alt: "Bharat Singh themed fitness shoot" },
  { src: "/images/owner-camera.jpg", alt: "Bharat Singh behind-the-scenes" },
  { src: "/images/owner-gym-pose.jpg", alt: "Bharat Singh posing in the gym" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Future Fitness Gym"
        subtitle="A professional gym led by a certified trainer who believes real transformation starts with great coaching."
      />

      {/* Story + owner */}
      <section className="bg-brand-black py-20">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="The Trainer"
              title={SITE.owner.name}
              description={`${SITE.owner.name} is a ${SITE.owner.certification} with a passion for helping people build strength, confidence, and discipline. At Future Fitness Gym, he leads every session with the same focus: proper technique, smart programming, and consistent progress.`}
            />
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={SITE.owner.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-zinc-200 transition-colors hover:border-brand-yellow hover:text-brand-yellow"
              >
                <InstagramIcon className="h-4 w-4" />
                {SITE.owner.handle}
              </a>
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-yellow/10 px-5 py-2.5 text-sm font-semibold text-brand-yellow">
                <AwardIcon className="h-4 w-4" />
                {SITE.owner.certification}
              </span>
            </div>
            <ul className="mt-8 space-y-3">
              {[
                "Certified and experienced personal training",
                "Custom programs for fat loss, muscle gain, and strength",
                "Correct form and technique guidance",
                "Consistent support and accountability",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-zinc-300">
                  <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-brand-yellow text-black">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="/images/owner-portrait.jpg"
              alt={`${SITE.owner.name}, head trainer`}
              className="aspect-[3/4] w-full rounded-xl object-cover object-top"
            />
            <img
              src="/images/owner-red.jpg"
              alt={`${SITE.owner.name} training`}
              className="mt-8 aspect-[3/4] w-full rounded-xl object-cover object-top"
            />
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="border-y border-white/10 bg-brand-charcoal py-20">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our Approach"
            title="What Sets Us Apart"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {HIGHLIGHTS.map((h) => (
              <div key={h.title} className="rounded-xl border border-white/10 bg-brand-black p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-yellow/10 text-brand-yellow">
                  <h.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-white">{h.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{h.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Owner gallery */}
      <section className="bg-brand-black py-20">
        <div className="container-x">
          <SectionHeading
            eyebrow="The Coach"
            title="Bharat Singh In Action"
            description="A glimpse of the discipline, physique, and mindset behind the coaching."
          />
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {OWNER_GALLERY.map((img) => (
              <div key={img.src} className="overflow-hidden rounded-xl border border-white/10">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="aspect-[3/4] w-full object-cover object-center"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

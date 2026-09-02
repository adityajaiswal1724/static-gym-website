import { SITE } from "@/lib/site";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import {
  ClockIcon,
  InstagramIcon,
  MapPinIcon,
  PhoneIcon,
  WhatsAppIcon,
} from "@/components/Icons";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Future Fitness Gym on WhatsApp or Instagram. Reach trainer Bharat Singh directly.",
};

const HOURS = [
  { days: "Monday - Saturday", sessions: ["5:00 AM - 10:00 AM", "5:00 PM - 10:00 PM"] },
  { days: "Sunday", sessions: ["Closed"] },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Get In Touch"
        subtitle="Reach out on WhatsApp or follow us on Instagram. We're ready to help you start your fitness journey."
      />

      <section className="bg-brand-black py-20">
        <div className="container-x">
          <div className="grid gap-6 md:grid-cols-3">
            {/* WhatsApp */}
            <a
              href={SITE.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl border border-white/10 bg-brand-charcoal p-7 transition-colors hover:border-brand-yellow/60"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-brand-yellow/10 text-brand-yellow">
                <WhatsAppIcon className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-bold text-white">WhatsApp</h3>
              <p className="mt-1 text-sm text-zinc-400">Fastest way to reach us</p>
              <p className="mt-3 text-base font-semibold text-brand-yellow">
                {SITE.contact.whatsappDisplay}
              </p>
            </a>

            {/* Gym Instagram */}
            <a
              href={SITE.gym.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl border border-white/10 bg-brand-charcoal p-7 transition-colors hover:border-brand-yellow/60"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-brand-yellow/10 text-brand-yellow">
                <InstagramIcon className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-bold text-white">Gym Instagram</h3>
              <p className="mt-1 text-sm text-zinc-400">See the latest updates</p>
              <p className="mt-3 text-base font-semibold text-brand-yellow">
                {SITE.gym.handle}
              </p>
            </a>

            {/* Owner Instagram */}
            <a
              href={SITE.owner.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl border border-white/10 bg-brand-charcoal p-7 transition-colors hover:border-brand-yellow/60"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-brand-yellow/10 text-brand-yellow">
                <InstagramIcon className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-bold text-white">Trainer Instagram</h3>
              <p className="mt-1 text-sm text-zinc-400">{SITE.owner.name}</p>
              <p className="mt-3 text-base font-semibold text-brand-yellow">
                {SITE.owner.handle}
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="border-t border-white/10 bg-brand-charcoal py-20">
        <div className="container-x grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Information"
              title="Gym Details"
            />
            <div className="space-y-4">
              <div className="flex items-start gap-4 rounded-xl border border-white/10 bg-brand-black p-5">
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-brand-yellow/10 text-brand-yellow">
                  <MapPinIcon className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-bold text-white">Location</p>
                  <p className="mt-1 text-sm text-zinc-400">
                    Future Fitness Gym, New Delhi, India
                  </p>
                  <a
                    href={SITE.contact.mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1.5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-yellow transition-colors hover:text-brand-yellow-dark"
                  >
                    <MapPinIcon className="h-4 w-4" />
                    Get Directions
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-xl border border-white/10 bg-brand-black p-5">
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-brand-yellow/10 text-brand-yellow">
                  <PhoneIcon className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-bold text-white">Phone / WhatsApp</p>
                  <a
                    href={SITE.contact.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block text-sm text-zinc-400 transition-colors hover:text-brand-yellow"
                  >
                    {SITE.contact.whatsappDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-xl border border-white/10 bg-brand-black p-5">
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-brand-yellow/10 text-brand-yellow">
                  <InstagramIcon className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-bold text-white">Social</p>
                  <div className="mt-1 flex flex-col gap-1">
                    <a
                      href={SITE.gym.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-zinc-400 transition-colors hover:text-brand-yellow"
                    >
                      {SITE.gym.handle}
                    </a>
                    <a
                      href={SITE.owner.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-zinc-400 transition-colors hover:text-brand-yellow"
                    >
                      {SITE.owner.handle}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <SectionHeading
              align="left"
              eyebrow="When We're Open"
              title="Training Hours"
            />
            <div className="overflow-hidden rounded-xl border border-white/10">
              {HOURS.map((h) => (
                <div
                  key={h.days}
                  className="flex flex-col gap-3 border-b border-white/10 bg-brand-black px-5 py-4 last:border-b-0 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex items-center gap-3">
                    <ClockIcon className="h-5 w-5 text-brand-yellow" />
                    <span className="text-sm font-semibold text-white">{h.days}</span>
                  </div>
                  <div className="pl-8 text-left sm:pl-0 sm:text-right">
                    {h.sessions.map((session) => (
                      <p
                        key={session}
                        className={`whitespace-nowrap text-sm ${session === "Closed" ? "font-semibold text-zinc-500" : "text-zinc-400"}`}
                      >
                        {session}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm leading-relaxed text-zinc-500">
              Hours may vary on holidays. Message us on WhatsApp to confirm or
              book a session.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-black py-16">
        <div className="container-x flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
          <div>
            <h2 className="heading-uppercase text-2xl text-white sm:text-3xl">
              Have a question?
            </h2>
            <p className="mt-2 text-zinc-400">
              The quickest way to reach us is on WhatsApp.
            </p>
          </div>
          <a
            href={SITE.contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-green inline-flex flex-none items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-transform hover:scale-105"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Chat With Us
          </a>
        </div>
      </section>
    </>
  );
}

import Link from "next/link";
import { NAV_LINKS, SITE } from "@/lib/site";
import { InstagramIcon, WhatsAppIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="container-x grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <Link href="/" className="flex items-center gap-2.5">
            <img
              src="/images/logo.jpg"
              alt="Future Fitness Gym logo"
              className="h-10 w-auto rounded-sm"
            />
            <span className="heading-uppercase text-lg text-white">
              Future <span className="text-brand-yellow">Fitness</span>
            </span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-zinc-400">
            A professional training facility led by K11 certified trainer Bharat
            Singh. Build strength, confidence, and a stronger future.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={SITE.gym.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Future Fitness Gym on Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-zinc-300 transition-colors hover:border-brand-yellow hover:text-brand-yellow"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a
              href={SITE.owner.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Bharat Singh on Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-zinc-300 transition-colors hover:border-brand-yellow hover:text-brand-yellow"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a
              href={SITE.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-zinc-300 transition-colors hover:border-brand-yellow hover:text-brand-yellow"
            >
              <WhatsAppIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="heading-uppercase text-sm text-white">Quick Links</h3>
          <ul className="mt-4 space-y-2.5">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-zinc-400 transition-colors hover:text-brand-yellow"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="heading-uppercase text-sm text-white">Contact</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-zinc-400">
            <li>
              <a
                href={SITE.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-brand-yellow"
              >
                {SITE.contact.whatsappDisplay}
              </a>
            </li>
            <li>
              <a
                href={SITE.gym.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-brand-yellow"
              >
                {SITE.gym.handle}
              </a>
            </li>
            <li>
              <a
                href={SITE.owner.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-brand-yellow"
              >
                {SITE.owner.handle}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-5 text-center text-xs text-zinc-500 sm:flex-row sm:text-left">
          <p>
            &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p>
            Trainer: {SITE.owner.name} &middot; {SITE.owner.certification}
          </p>
        </div>
      </div>
    </footer>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV_LINKS, SITE } from "@/lib/site";
import { CloseIcon, MenuIcon, WhatsAppIcon } from "./Icons";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/85 backdrop-blur">
      <nav className="container-x flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <img
            src="/images/logo.jpg"
            alt="Future Fitness Gym logo"
            className="h-9 w-auto rounded-sm"
          />
          <span className="heading-uppercase hidden text-lg leading-none text-white lg:block">
            Future <span className="text-brand-yellow">Fitness</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-5 md:flex lg:gap-8">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-sm font-semibold uppercase tracking-wide transition-colors ${
                    active ? "text-brand-yellow" : "text-zinc-300 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={SITE.contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-brand-yellow px-4 py-2 text-sm font-bold text-black transition-colors hover:bg-brand-yellow-dark lg:flex"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Join Now
          </a>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-md text-white md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-black md:hidden">
          <ul className="container-x flex flex-col py-3">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-md px-3 py-3 text-base font-semibold uppercase tracking-wide ${
                      active ? "text-brand-yellow" : "text-zinc-200"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}

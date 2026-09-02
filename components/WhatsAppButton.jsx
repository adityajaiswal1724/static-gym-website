import { SITE } from "@/lib/site";
import { WhatsAppIcon } from "./Icons";

export default function WhatsAppButton() {
  return (
    <a
      href={SITE.contact.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="whatsapp-green group fixed bottom-5 right-5 z-50 flex items-center justify-center rounded-full p-3.5 text-white shadow-lg shadow-black/40 transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/60 sm:bottom-6 sm:right-6"
    >
      <WhatsAppIcon className="h-7 w-7" />
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-md bg-white px-3 py-1.5 text-sm font-semibold text-black opacity-0 shadow-md transition-opacity duration-200 group-hover:opacity-100 sm:block">
        Chat on WhatsApp
      </span>
    </a>
  );
}

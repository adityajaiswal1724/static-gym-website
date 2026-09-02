import { SITE } from "@/lib/site";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

export const metadata = {
  title: {
    default: `${SITE.name} | Professional Gym & Training`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "Future Fitness Gym is a professional training facility led by K11 certified trainer Bharat Singh. Train hard and transform stronger.",
  icons: {
    icon: "/images/logo.jpg",
  },
  keywords: [
    "Future Fitness Gym",
    "gym",
    "fitness",
    "personal training",
    "K11 certified trainer",
    "Bharat Singh",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

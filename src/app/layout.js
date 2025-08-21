import { montserrat } from "./fonts";
import "./globals.scss";
import { ConsentForm } from "@/components/cookie-consent/ConsentForm";
import { GoogleTagManager } from "@next/third-parties/google";
import Nav from "@/components/common/Nav";
import Footer from "@/components/sections/Footer";
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  title:
    "The Bearded Developer | Shopify, Web Development, and Technology Solutions",
  description:
    "Your friendly web development and technology partner. Offering Shopify solutions, web development services, and tech insights. Let's build something great together!",
};

export default function RootLayout({ children }) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

  return (
    <html lang="en">
      <body className={`${montserrat.className} min-h-screen`}>
        <ConsentForm />
        <Nav />
        {children}
        <Footer />
        {gtmId && <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />}
        <Analytics />
      </body>
    </html>
  );
}

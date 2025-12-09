import { montserrat } from "./fonts";
import "./globals.scss";
import { ConsentForm } from "@/components/cookie-consent/ConsentForm";
import { GoogleTagManager } from "@next/third-parties/google";
import Nav from "@/components/common/Nav";
import Footer from "@/components/sections/Footer";

export const metadata = {
  metadataBase: new URL("https://www.thebeardeddeveloper.co.uk"),
  title:
    "The Bearded Developer | Shopify, Web Development, and Technology Solutions",
  description:
    "Your friendly web development and technology partner. Offering Shopify solutions, web development services, and tech insights. Let's build something great together!",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title:
      "The Bearded Developer | Shopify, Web Development, and Technology Solutions",
    description:
      "Your friendly web development and technology partner. Offering Shopify solutions, web development services, and tech insights.",
    url: "https://www.thebeardeddeveloper.co.uk",
    siteName: "The Bearded Developer",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "The Bearded Developer - Shopify and Web Development Solutions",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Bearded Developer",
    description:
      "Your friendly web development and technology partner. Offering Shopify solutions, web development services, and tech insights.",
    images: ["/twitter-image.png"],
  },
};

export default function RootLayout({ children }) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

  return (
    <html lang="en">
      <body className={`${montserrat.className} min-h-screen`}>
        <ConsentForm />
        <Nav />
        <main>{children}</main>
        <Footer />
        {gtmId && <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />}
      </body>
    </html>
  );
}

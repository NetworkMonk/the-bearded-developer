import { montserrat } from "./fonts";
import "./globals.scss";
import { ConsentForm } from "@/components/cookie-consent/ConsentForm";
import { GoogleTagManager } from "@next/third-parties/google";
import Nav from "@/components/common/Nav";
import Footer from "@/components/sections/Footer";

export const metadata = {
  title: "The Bearded Developer",
  description: "Your friendly web development and technology partner.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} min-h-screen`}>
        <ConsentForm />
        <Nav />
        {children}
        <Footer />
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
      </body>
    </html>
  );
}

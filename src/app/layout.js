import { GoogleTagManager } from "@next/third-parties/google";
import { montserrat } from "./fonts";
import "./globals.scss";

export const metadata = {
  title: "The Bearded Developer",
  description:
    "Your friendly web development and technology partner.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} min-h-screen`}>{children}</body>
      <GoogleTagManager gtmId="" />
    </html>
  );
}

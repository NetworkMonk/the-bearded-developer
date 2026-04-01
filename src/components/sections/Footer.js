import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { lexend } from "@/app/fonts";
import Container from "../common/Container";
import ZohoNewsletterForm from "../ZohoNewsletterForm";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import Link from "next/link";
import wave1 from "@/components/waves/wave1.svg";
import blob1 from "@/components/blobs/blob1.svg";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const services = [
  { name: "Shopify", href: "/services/shopify" },
  { name: "BigCommerce", href: "/services/bigcommerce" },
  { name: "NetSuite", href: "/services/netsuite" },
  { name: "Celigo", href: "/services/celigo" },
  { name: "Integrations", href: "/services/integrations" },
  { name: "Bespoke Software", href: "/services/bespoke" },
  { name: "AI", href: "/services/ai" },
];

const company = [
  { name: "About", href: "/#about" },
  { name: "Projects", href: "/projects" },
  { name: "Apps", href: "/apps" },
  { name: "Contact Us", href: "/contact" },
];

const resources = [
  { name: "All Resources", href: "/resources" },
  { name: "Articles", href: "/resources/articles" },
  { name: "Components", href: "/resources/components" },
];

const social = [
  { icon: faLinkedin, href: "https://www.linkedin.com/company/the-bearded-developer-ltd", label: "LinkedIn" },
];

const columnHeading = `text-xs font-semibold uppercase tracking-[0.15em] text-brand-light-blue mb-5 ${lexend.className}`;
const footerLink = "text-sm text-white/60 hover:text-white transition-colors duration-200";

export default function Footer() {
  return (
    <div className="mt-10">
      <div className="pointer-events-none">
        <Image priority src={wave1} alt="" className="w-full" />
      </div>

      <section className="relative bg-brand-black">
        {/* Teal accent rule */}
        <div className="h-px bg-gradient-to-r from-transparent via-brand-teal to-transparent opacity-60" />

        <div className="text-white lg:-mt-10 xl:-mt-20 relative z-20">
          <Container>

            {/* Main sitemap grid */}
            <div className="pt-16 lg:pt-24 xl:pt-32 pb-12 md:px-10 grid grid-cols-2 md:grid-cols-[1.75fr_1fr_1fr_1fr] gap-10 md:gap-8">

              {/* Brand column */}
              <div className="col-span-2 md:col-span-1 pr-4">
                <h3 className={`text-base font-semibold ${lexend.className} text-white leading-snug`}>
                  The Bearded Developer
                </h3>
                <p className="mt-3 text-sm text-white/50 leading-relaxed">
                  Specialist digital services - Shopify, BigCommerce, NetSuite, Celigo, and bespoke web development.
                </p>

                {/* Social icons */}
                <div className="mt-6 flex gap-3">
                  {social.map(({ icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="w-8 h-8 flex items-center justify-center rounded-full border border-white/20 text-white/50 hover:border-brand-teal hover:text-brand-light-blue transition-all duration-300"
                    >
                      <FontAwesomeIcon icon={icon} className="w-3.5 h-3.5" />
                    </a>
                  ))}
                </div>

                {/* Contact */}
                <div className="mt-6 space-y-2.5">
                  <a
                    href="mailto:info@thebeardeddeveloper.co.uk"
                    className="flex items-center gap-2 text-sm text-white/50 hover:text-brand-light-blue transition-colors duration-200 min-w-0"
                  >
                    <FontAwesomeIcon icon={faEnvelope} className="w-3.5 h-3.5 shrink-0" />
                    <span className="break-all md:break-normal">info@thebeardeddeveloper.co.uk</span>
                  </a>
                  <a
                    href="tel:+443300435977"
                    className="flex items-center gap-2 text-sm text-white/50 hover:text-brand-light-blue transition-colors duration-200"
                    aria-label="Call us"
                  >
                    <FontAwesomeIcon icon={faPhone} className="w-3.5 h-3.5 shrink-0" />
                    +44 (0) 330 043 5977
                  </a>
                  <a
                    href="https://wa.me/443300435977"
                    className="flex items-center gap-2 text-sm text-white/50 hover:text-brand-light-blue transition-colors duration-200"
                    aria-label="WhatsApp"
                  >
                    <FontAwesomeIcon icon={faWhatsapp} className="w-3.5 h-3.5 shrink-0" />
                    WhatsApp
                  </a>
                </div>
              </div>

              {/* Services */}
              <div>
                <p className={columnHeading}>Services</p>
                <ul className="space-y-2.5">
                  {services.map(({ name, href }) => (
                    <li key={name}>
                      <Link href={href} className={footerLink}>{name}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div>
                <p className={columnHeading}>Company</p>
                <ul className="space-y-2.5">
                  {company.map(({ name, href }) => (
                    <li key={name}>
                      <Link href={href} className={footerLink}>{name}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources */}
              <div>
                <p className={columnHeading}>Resources</p>
                <ul className="space-y-2.5">
                  {resources.map(({ name, href }) => (
                    <li key={name}>
                      <Link href={href} className={footerLink}>{name}</Link>
                    </li>
                  ))}
                </ul>

                <p className={`${columnHeading} mt-8`}>Legal</p>
                <ul className="space-y-2.5">
                  <li><Link href="/privacy" className={footerLink}>Privacy Policy</Link></li>
                  <li><Link href="/cookies" className={footerLink}>Cookies</Link></li>
                </ul>
              </div>
            </div>

            {/* Divider */}
            <div className="mx-4 md:mx-10 h-px bg-white/10" />

            {/* Newsletter band */}
            <div className="md:px-10 py-10">
              <div className="bg-white/5 rounded-xl px-6 py-8 md:grid md:grid-cols-2 gap-10 items-center">
                <div className="mb-6 md:mb-0">
                  <h4 className={`text-base font-semibold ${lexend.className} text-white`}>
                    Stay in the loop
                  </h4>
                  <p className="mt-2 text-sm text-white/50 leading-relaxed">
                    Practical insights on integrations, e-commerce platforms, and bespoke development - no noise, no fluff.
                  </p>
                </div>
                <div>
                  <ZohoNewsletterForm />
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="mx-4 md:mx-10 h-px bg-white/10" />

            {/* Bottom bar */}
            <div className="md:px-10 py-6 flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs text-white/35">
              <div>© 2026 The Bearded Developer Ltd.</div>
              <div className="text-white/30">
                Company No. 15975190 &nbsp;·&nbsp; Braintree, Essex
              </div>
            </div>

          </Container>
        </div>

        {/* Blob decoration */}
        <div className="absolute right-0 w-[300px] h-[300px] xl:w-[500px] xl:h-[500px] bottom-0 z-10 overflow-hidden pointer-events-none">
          <Image
            priority
            src={blob1}
            alt=""
            className="absolute min-h-[500px] min-w-[500px] xl:min-h-[800px] xl:min-w-[800px] transform rotate-180 opacity-40"
          />
        </div>
      </section>

    </div>
  );
}

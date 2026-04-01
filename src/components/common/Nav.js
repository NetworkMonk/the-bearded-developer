"use client";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faChevronDown,
  faX,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { lexend } from "@/app/fonts";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";

const services = [
  {
    name: "Shopify",
    href: "/services/shopify",
    desc: "Custom storefronts, theme development & app integrations",
  },
  {
    name: "BigCommerce",
    href: "/services/bigcommerce",
    desc: "Enterprise e-commerce builds and platform migrations",
  },
  {
    name: "NetSuite",
    href: "/services/netsuite",
    desc: "ERP configuration, customisation and data sync",
  },
  {
    name: "Celigo",
    href: "/services/celigo",
    desc: "iPaaS integration flows between your business systems",
  },
  {
    name: "Integrations",
    href: "/services/integrations",
    desc: "API-first connectors across platforms and ERPs",
  },
  {
    name: "Bespoke Software",
    href: "/services/bespoke",
    desc: "Custom-built applications tailored to your operations",
  },
  {
    name: "AI",
    href: "/services/ai",
    desc: "Practical AI tooling to automate and accelerate your business",
  },
];

const aboutItems = [
  { name: "About", href: "/#about" },
  { name: "Services", href: "/#services" },
  { name: "Clients", href: "/#clients" },
  { name: "Technology", href: "/#technology" },
  { name: "Reviews", href: "/#reviews" },
];

const resourceItems = [
  { name: "All Resources", href: "/resources" },
  { name: "Components", href: "/resources/components" },
  { name: "Articles", href: "/resources/articles" },
];

const mobileMenu = [
  { name: "Home", href: "/" },
  { name: "About Us", children: aboutItems },
  { name: "Services", children: services },
  { name: "Projects", href: "/projects" },
  { name: "Apps", href: "/apps" },
  { name: "Resources", children: resourceItems },
  { name: "Contact Us", href: "/contact" },
];

function useScrollDirection() {
  const [scrollingDown, setScrollingDown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY === lastScrollY.current) return;
      setScrolled(currentScrollY > 10);
      setScrollingDown(
        currentScrollY >= lastScrollY.current && currentScrollY > 20
      );
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { scrollingDown, scrolled };
}

const navLinkClass = `text-sm font-medium text-brand-black/70 hover:text-brand-teal transition-colors duration-200 ${lexend.className}`;

// Simple popover dropdown (About Us, Resources)
function SimpleDropdown({ item }) {
  const { scrollingDown } = useScrollDirection();

  return (
    <Popover className="flex">
      <PopoverButton
        className={`outline-none inline-flex items-center gap-1.5 px-1 pt-1 ${navLinkClass} cursor-pointer`}
      >
        {item.name}
        <FontAwesomeIcon
          icon={faChevronDown}
          className="w-2.5 h-2.5 mt-0.5 transition-transform duration-200 ui-open:rotate-180"
        />
      </PopoverButton>
      <PopoverPanel
        transition
        anchor="bottom"
        className="mt-2 min-w-[180px] rounded-xl bg-white border border-gray-100 shadow-xl text-sm transition duration-200 ease-in-out [--anchor-gap:8px] data-[closed]:-translate-y-2 data-[closed]:opacity-0 z-50"
      >
        {({ close }) => {
          if (scrollingDown) close();
          return (
            <div className="py-2">
              {item.children.map((child) => (
                <a
                  key={child.name}
                  href={child.href}
                  onClick={close}
                  className={`block px-4 py-2.5 text-sm text-brand-black/70 hover:text-brand-teal hover:bg-brand-platinum transition-colors duration-150 cursor-pointer ${lexend.className}`}
                >
                  {child.name}
                </a>
              ))}
            </div>
          );
        }}
      </PopoverPanel>
    </Popover>
  );
}

// Hover-triggered mega menu for Services
function ServicesMegaMenu() {
  const [open, setOpen] = useState(false);
  const { scrollingDown } = useScrollDirection();
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (scrollingDown) setOpen(false);
  }, [scrollingDown]);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 120);
  };

  return (
    <div
      className="relative flex items-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className={`outline-none inline-flex items-center gap-1.5 px-1 pt-1 cursor-pointer transition-colors duration-200 text-sm font-medium ${lexend.className} ${
          open ? "text-brand-teal" : "text-brand-black/70 hover:text-brand-teal"
        }`}
      >
        Services
        <FontAwesomeIcon
          icon={faChevronDown}
          className={`w-2.5 h-2.5 mt-0.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Mega panel */}
      <div
        className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[580px] rounded-2xl bg-white border border-gray-100 shadow-2xl z-50 transition-all duration-200 origin-top ${
          open
            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
            : "opacity-0 scale-[0.97] -translate-y-1 pointer-events-none"
        }`}
      >
        {/* Panel header */}
        <div className="px-5 pt-4 pb-3 border-b border-gray-100 flex items-center justify-between">
          <p
            className={`text-xs font-semibold uppercase tracking-[0.15em] text-brand-teal ${lexend.className}`}
          >
            What we do
          </p>
        </div>

        {/* Service grid */}
        <div className="p-3 grid grid-cols-2 gap-1">
          {services.map((service) => (
            <a
              key={service.name}
              href={service.href}
              onClick={() => setOpen(false)}
              className="group flex flex-col px-4 py-3.5 rounded-xl hover:bg-brand-platinum transition-colors duration-150"
            >
              <span
                className={`text-sm font-semibold text-brand-black group-hover:text-brand-teal transition-colors duration-150 ${lexend.className}`}
              >
                {service.name}
              </span>
              <span className="text-xs text-brand-black/45 mt-1 leading-snug">
                {service.desc}
              </span>
            </a>
          ))}
        </div>

        {/* Panel footer CTA */}
        <div className="px-5 py-3.5 border-t border-gray-100 bg-brand-platinum/40 rounded-b-2xl">
          <a
            href="/contact"
            onClick={() => setOpen(false)}
            className={`inline-flex items-center gap-2 text-xs font-semibold text-brand-teal hover:text-brand-blue transition-colors duration-150 ${lexend.className}`}
          >
            Free consultation - let&apos;s discuss your project
            <FontAwesomeIcon icon={faArrowRight} className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
}

// Mobile accordion dropdown
function MobileDropDownMenu({ item }) {
  return (
    <Disclosure as="div" className="px-3 pb-1">
      <DisclosureButton
        className={`flex w-full items-center justify-between outline-none py-2.5 text-sm font-medium text-brand-black/70 hover:text-brand-teal transition-colors duration-200 cursor-pointer ${lexend.className}`}
      >
        {item.name}
        <FontAwesomeIcon
          icon={faChevronDown}
          className="w-3 h-3 transition-transform duration-200 ui-open:rotate-180"
        />
      </DisclosureButton>
      <DisclosurePanel className="pb-2 pl-3 space-y-0.5">
        {item.children.map((child) => (
          <a
            key={child.name}
            href={child.href}
            className={`block py-2 text-sm text-brand-black/55 hover:text-brand-teal transition-colors duration-150 ${lexend.className}`}
          >
            {child.name}
          </a>
        ))}
      </DisclosurePanel>
    </Disclosure>
  );
}

export default function Nav() {
  const { scrollingDown, scrolled } = useScrollDirection();

  return (
    <Disclosure
      as="nav"
      className={`bg-white fixed w-screen top-0 z-50 transition-all duration-500 ${
        scrolled ? "shadow-md" : "border-b border-gray-100"
      } ${scrollingDown ? "-mt-32" : "mt-0"}`}
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-20 items-center justify-between">

              {/* Mobile: hamburger + wordmark */}
              <div className="flex items-center gap-3 lg:hidden">
                <DisclosureButton className="p-2 rounded-lg text-brand-black/50 hover:text-brand-teal hover:bg-brand-platinum transition-all duration-200">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <FontAwesomeIcon icon={faX} className="w-5 h-5" aria-hidden="true" />
                  ) : (
                    <FontAwesomeIcon icon={faBars} className="w-5 h-5" aria-hidden="true" />
                  )}
                </DisclosureButton>
                <a
                  href="/"
                  className={`text-sm font-semibold text-brand-black ${lexend.className}`}
                >
                  The Bearded Developer
                </a>
              </div>

              {/* Desktop: logo + nav links */}
              <div className="hidden lg:flex items-center gap-8">
                <a href="/" className="shrink-0">
                  <Image
                    src="/img/beard-black.png"
                    alt="The Bearded Developer"
                    width={36}
                    height={36}
                    priority
                  />
                </a>

                <div className="flex items-center gap-6">
                  <a href="/" className={`px-1 pt-1 ${navLinkClass}`}>
                    Home
                  </a>
                  <SimpleDropdown item={{ name: "About Us", children: aboutItems }} />
                  <ServicesMegaMenu />
                  <a href="/projects" className={`px-1 pt-1 ${navLinkClass}`}>
                    Projects
                  </a>
                  <a href="/apps" className={`px-1 pt-1 ${navLinkClass}`}>
                    Apps
                  </a>
                  <SimpleDropdown item={{ name: "Resources", children: resourceItems }} />
                </div>
              </div>

              {/* CTA — both breakpoints */}
              <div className="shrink-0">
                <a
                  href="/contact"
                  className="animated-button animated-button-fill animated-button-small min-w-36 text-brand-black hover:text-brand-platinum font-semibold transition-all duration-500 flex items-center"
                >
                  Let&apos;s talk
                </a>
              </div>
            </div>
          </div>

          {/* Mobile panel */}
          <DisclosurePanel className="lg:hidden border-t border-gray-100">
            {({ close }) => {
              if (scrollingDown && open) close();
              return (
                <div className="pb-4 pt-2 px-2">
                  <div className="px-3 py-3 flex items-center gap-3 border-b border-gray-100 mb-2">
                    <Image
                      src="/img/beard-black.png"
                      alt="The Bearded Developer"
                      width={24}
                      height={24}
                      priority
                    />
                    <span
                      className={`text-sm font-semibold text-brand-black ${lexend.className}`}
                    >
                      The Bearded Developer
                    </span>
                  </div>

                  {mobileMenu.map((item) => {
                    if (item.children) {
                      return <MobileDropDownMenu key={item.name} item={item} />;
                    }
                    return (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className={`block px-3 py-2.5 text-sm font-medium text-brand-black/70 hover:text-brand-teal transition-colors duration-150 ${lexend.className}`}
                      >
                        {item.name}
                      </DisclosureButton>
                    );
                  })}
                </div>
              );
            }}
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}

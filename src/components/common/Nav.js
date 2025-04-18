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
  faArrowDown,
  faBars,
  faChevronDown,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { lexend } from "@/app/fonts";
import { useEffect, useState } from "react";
import Image from "next/image";

const desktopMenu = [
  { name: "Home", href: "/" },
  {
    name: "About Us",
    children: [
      { name: "About", href: "/#about" },
      { name: "Services", href: "/#services" },
      { name: "Clients", href: "/#clients" },
      { name: "Technology", href: "/#technology" },
      { name: "Reviews", href: "/#reviews" },
    ],
  },
  { name: "Projects", href: "/projects" },
  // { name: "Resources", href: "/resources" },
  { name: "Blog", href: "/blog" },
];

const mobileMenu = [
  { name: "Home", href: "/" },
  {
    name: "About Us",
    children: [
      { name: "About", href: "/#about" },
      { name: "Services", href: "/#services" },
      { name: "Clients", href: "/#clients" },
      { name: "Technology", href: "/#technology" },
      { name: "Reviews", href: "/#reviews" },
    ],
  },
  { name: "Projects", href: "/projects" },
  // { name: "Resources", href: "/resources" },
  { name: "Blog", href: "/blog" },
  { name: "Contact Us", href: "/#lets-talk" },
];

function DropDownMenu({ item }) {
  const [scrollingDown, setScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY === lastScrollY) {
        return;
      }
      if (currentScrollY >= lastScrollY && currentScrollY > 20) {
        if (!scrollingDown) {
          setScrollingDown(true);
        }
      } else {
        if (scrollingDown) {
          setScrollingDown(false);
        }
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, scrollingDown]);

  return (
    <Popover className="flex">
      <PopoverButton className="outline-0 text-base inline-flex items-center border-b-2 border-transparent px-1 pt-1 font-medium text-band-black opacity-75 hover:opacity-100 hover:text-brand-light-blue uppercase transition-all duration-300 cursor-pointer">
        {item.name}
        <FontAwesomeIcon
          icon={faChevronDown}
          className="w-3 h-3 ml-2 -mt-0.5"
        />
      </PopoverButton>
      <PopoverPanel
        transition
        anchor="bottom"
        className=" mt-1 rounded-xl bg-white text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0 z-50 shadow-lg"
      >
        {({ close }) => {
          if (scrollingDown && close) {
            close();
          }
          return (
            <div className="p-3">
              {item.children.map((child) => (
                <a
                  key={child.name}
                  className={`text-base block my-3 mr-5 items-center border-b-2 border-transparent px-1 pt-1 font-medium text-band-black opacity-75 hover:opacity-100 hover:text-brand-light-blue uppercase transition-all duration-300 cursor-pointer`}
                  href={child.href}
                  onClick={close}
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

function MobileDropDownMenu({ item }) {
  const [scrollingDown, setScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY === lastScrollY) {
        return;
      }
      if (currentScrollY >= lastScrollY && currentScrollY > 20) {
        if (!scrollingDown) {
          setScrollingDown(true);
        }
      } else {
        if (scrollingDown) {
          setScrollingDown(false);
        }
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, scrollingDown]);

  return (
    <Disclosure as="div" className="px-3 pb-2">
      <DisclosureButton className="flex w-full items-center justify-between outline-0 text-base border-b-2 border-transparent px-1 pt-1 font-medium text-band-black opacity-75 hover:opacity-100 hover:text-brand-light-blue uppercase transition-all duration-300 cursor-pointer">
        <span className="flex items-center">
          {item.name}
          <FontAwesomeIcon
            icon={faChevronDown}
            className="w-3 h-3 ml-2 -mt-0.5"
          />
        </span>
      </DisclosureButton>
      <DisclosurePanel className="mt-2 pl-3 py-1">
        {item.children.map((child) => (
          <a
            key={child.name}
            className={`text-base block my-3 mr-5 items-center border-b-2 border-transparent px-1 pt-1 font-medium text-band-black opacity-75 hover:opacity-100 hover:text-brand-light-blue uppercase transition-all duration-300 cursor-pointer`}
            href={child.href}
            onClick={close}
          >
            {child.name}
          </a>
        ))}
      </DisclosurePanel>
    </Disclosure>
  );
}

export default function Nav() {
  const [scrollingDown, setScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY === lastScrollY) {
        return;
      }
      if (currentScrollY >= lastScrollY && currentScrollY > 20) {
        if (!scrollingDown) {
          setScrollingDown(true);
        }
      } else {
        if (scrollingDown) {
          setScrollingDown(false);
        }
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, scrollingDown]);

  return (
    <Disclosure
      as="nav"
      className={`bg-white fixed w-screen top-0 backdrop-blur-lg z-50 shadow-md overflow-hidden ${
        scrollingDown ? "-mt-32" : ""
      }`}
      style={{ transition: "margin-top 0.5s" }}
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-20 justify-between">
              <div className="flex">
                <div className="-ml-2 mr-2 flex items-center md:hidden">
                  {/* Mobile menu button */}
                  <DisclosureButton className="relative inline-flex ml-2 items-center justify-center rounded-md p-2 mr-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none transition-all duration-300">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <FontAwesomeIcon
                        icon={faX}
                        className="block h-6 w-6"
                        aria-hidden="true"
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon={faBars}
                        className="block h-6 w-6"
                        aria-hidden="true"
                      />
                    )}
                  </DisclosureButton>
                </div>
                <div
                  className={`hidden md:flex flex-shrink-0 text-xl mt-1 mr-5 items-center text-white ${lexend.className}`}
                >
                  <a className="cursor-pointer" href="/">
                    <Image
                      src="/img/beard-black.png"
                      alt="The Bearded Developer"
                      width={40}
                      height={40}
                    />
                  </a>
                </div>
                <div className="hidden md:ml-6 md:flex md:space-x-8">
                  {desktopMenu.map((item) => {
                    if (item.children) {
                      return <DropDownMenu key={item.name} item={item} />;
                    }
                    return (
                      <a
                        key={item.name}
                        className={`text-base inline-flex items-center border-b-2 border-transparent px-1 pt-1 font-medium text-band-black opacity-75 hover:opacity-100 hover:text-brand-light-blue uppercase transition-all duration-300 cursor-pointer`}
                        href={item.href}
                      >
                        {item.name}
                      </a>
                    );
                  })}
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <a href="/#lets-talk">
                    <button
                      className="animated-button animated-button-fill animated-button-small min-w-36 text-brand-black hover:text-brand-platinum uppercase font-semibold transition-all duration-500"
                      href="/#contact"
                    >
                      Let&apos;s talk
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <DisclosurePanel className="md:hidden">
            {({ close }) => {
              if (scrollingDown && open) {
                close();
              }
              return (
                <div className="space-y-1 pb-3 pt-2 mx-3">
                  <DisclosureButton
                    as="a"
                    href="/"
                    className={`block border-l-4 border-transparent py-2 pl-3 pr-4 text-base items-center border-b-2 px-1 pt-1 font-bold text-band-black hover:text-brand-light-blue uppercase transition-all duration-300 cursor-pointer`}
                  >
                    <Image
                      src="/img/beard-black.png"
                      alt="The Bearded Developer"
                      width={24}
                      height={24}
                      className="inline-block mr-2"
                    />
                    The Bearded Developer
                  </DisclosureButton>
                  {mobileMenu.map((item) => {
                    if (item.children) {
                      return <MobileDropDownMenu key={item.name} item={item} />;
                    }
                    return (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className={`block border-l-4 border-transparent py-2 pl-3 pr-4 text-base items-center border-b-2 px-1 pt-1 font-medium text-band-black opacity-75 hover:opacity-100 hover:text-brand-light-blue uppercase transition-all duration-300 cursor-pointer`}
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

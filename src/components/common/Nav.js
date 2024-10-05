"use client";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { lexend } from "@/app/fonts";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Nav() {
  const [scrollingDown, setScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY === lastScrollY) {
        return;
      }
      if (currentScrollY >= lastScrollY) {
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
      className={`bg-white fixed w-full top-0 backdrop-blur-lg z-50 shadow-md overflow-hidden transition-all duration-500 ${
        scrollingDown ? "-mt-32" : ""
      }`}
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
                  <a
                    className="cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById("home")
                        .scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    <Image
                      src="/img/beard-black.png"
                      alt="The Bearded Developer"
                      width={40}
                      height={40}
                    />
                  </a>
                </div>
                <div className="hidden md:ml-6 md:flex md:space-x-8">
                  <a
                    className={`text-base inline-flex items-center border-b-2 border-transparent px-1 pt-1 font-bold text-band-black hover:text-brand-light-blue uppercase transition-all duration-300 cursor-pointer`}
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById("services")
                        .scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Services
                  </a>

                  <a
                    className={`text-base inline-flex items-center border-b-2 border-transparent px-1 pt-1 font-bold text-band-black hover:text-brand-light-blue uppercase transition-all duration-300 cursor-pointer`}
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById("clients")
                        .scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Clients
                  </a>
                  <a
                    className={`text-base inline-flex items-center border-b-2 border-transparent px-1 pt-1 font-bold text-band-black hover:text-brand-light-blue uppercase transition-all duration-300 cursor-pointer`}
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById("technology")
                        .scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Technology
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <button
                    className="animated-button animated-button-fill animated-button-small min-w-36 text-brand-black hover:text-brand-platinum uppercase font-semibold transition-all duration-500"
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById("lets-talk")
                        .scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Let&apos;s talk
                  </button>
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
                <div className="space-y-1 pb-3 pt-2">
                  <DisclosureButton
                    as="a"
                    href="#"
                    className={`block border-l-4 border-transparent py-2 pl-3 pr-4 text-base items-center border-b-2 px-1 pt-1 font-bold text-band-black hover:text-brand-light-blue uppercase transition-all duration-300 cursor-pointer`}
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById("home")
                        .scrollIntoView({ behavior: "smooth" });
                      close();
                    }}
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
                  <DisclosureButton
                    as="a"
                    href="#"
                    className={`block border-l-4 border-transparent py-2 pl-3 pr-4 text-base items-center border-b-2 px-1 pt-1 font-bold text-band-black hover:text-brand-light-blue uppercase transition-all duration-300 cursor-pointer`}
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById("services")
                        .scrollIntoView({ behavior: "smooth" });
                      close();
                    }}
                  >
                    Services
                  </DisclosureButton>
                  <DisclosureButton
                    as="a"
                    href="#"
                    className={`block border-l-4 border-transparent py-2 pl-3 pr-4 text-base items-center border-b-2 px-1 pt-1 font-bold text-band-black hover:text-brand-light-blue uppercase transition-all duration-300 cursor-pointer`}
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById("clients")
                        .scrollIntoView({ behavior: "smooth" });
                      close();
                    }}
                  >
                    Clients
                  </DisclosureButton>
                  <DisclosureButton
                    as="a"
                    className={`block border-l-4 border-transparent py-2 pl-3 pr-4 text-base items-center border-b-2 px-1 pt-1 font-bold text-band-black hover:text-brand-light-blue uppercase transition-all duration-300 cursor-pointer`}
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById("technology")
                        .scrollIntoView({ behavior: "smooth" });
                      close();
                    }}
                  >
                    Technology
                  </DisclosureButton>
                </div>
              );
            }}
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}

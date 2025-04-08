import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { lexend } from "@/app/fonts";
import Container from "../common/Container";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import wave1 from "@/components/waves/wave1.svg";
import blob1 from "@/components/blobs/blob1.svg";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <div className="mt-10">
      <div className="pointer-events-none">
        <Image priority src={wave1} alt="A Wave" className="w-full" />
      </div>
      <section className="relative bg-brand-black">
        <div className="text-white lg:-mt-10 xl:-mt-20 relative z-20">
          <Container>
            <div className="grid md:grid-cols-2 gap-10 md:gap-5 md:px-10 z-20">
              <div>
                <h3
                  className={`text-xl xl:text-3xl font-semibold mb-2 ${lexend.className}`}
                >
                  The Bearded Developer
                </h3>
                <h4
                  className={`text-sm sm:text-base xl:text-lg text-brand-white mb-2`}
                >
                  Your Web Application Development and Technology Partner.
                </h4>
              </div>
              <div className="md:text-right">
                <h3 className={`text-xl font-semibold ${lexend.className}`}>
                  Connect With Us
                </h3>
                <div className="py-2">
                  <a
                    href="mailto:info@thebeardeddeveloper.co.uk"
                    className="hover:text-brand-light-blue transition-all duration-300"
                  >
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="w-4 h-4 inline-block mr-2"
                    />
                    info@thebeardeddeveloper.co.uk
                  </a>
                </div>
                <div className="py-1">
                  <a
                    href="tel:447545960983"
                    className="hover:text-brand-light-blue transition-all duration-300"
                  >
                    <FontAwesomeIcon
                      icon={faPhone}
                      className="w-4 h-4 inline-block mr-2"
                    />
                    +44 7545 960 983
                  </a>
                </div>
                <div className="py-1">
                  <a
                    href="https://wa.me/447545960983"
                    className="hover:text-brand-light-blue transition-all duration-300"
                  >
                    <FontAwesomeIcon
                      icon={faWhatsapp}
                      className="w-4 h-4 inline-block mr-2"
                    />
                    +44 7545 960 983
                  </a>
                </div>
              </div>
            </div>
            <div className="md:px-10 md:grid grid-cols-2 py-3 mt-10 z-20 mb-10 md:mb-auto">
              <div className="text-xs mt-auto">
                © 2025 The Bearded Developer Ltd
              </div>
              <div className="md:text-right mt-5 md:mt-0 text-xs">
                <p>Company Registration No. 15975190</p>
                <p>
                  Registered Address: 47 York Gardens, Braintree, Essex, CM7 9NF
                </p>
              </div>
              {/* <div className="ml-auto flex gap-4">
              <a
                href="https://www.linkedin.com/in/james-plant-7ab317b/"
                rel="noreferrer"
                title="Linkedin"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="inline-block w-6 h-6"
                />
              </a>
              <a
                href="https://www.github.com/NetworkMonk/"
                rel="noreferrer"
                title="Linkedin"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="inline-block w-6 h-6"
                />
              </a>
              <a
                href="https://www.instagram.com/networkmonkey/"
                rel="noreferrer"
                title="Linkedin"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="inline-block w-6 h-6"
                />
              </a>
              <a
                href="https://www.facebook.com/james.plant.31/"
                rel="noreferrer"
                title="Linkedin"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="inline-block w-6 h-6"
                />
              </a>
            </div> */}
            </div>
          </Container>
        </div>
        <div className="absolute right-0 w-[300px] h-[300px] xl:w-[500px] xl:h-[500px] bottom-0 z-10 overflow-hidden pointer-events-none">
          <Image
            priority
            src={blob1}
            alt="A Blob"
            className="absolute min-h-[500px] min-w-[500px] xl:min-h-[800px] xl:min-w-[800px] transform rotate-180 opacity-60"
          />
        </div>
      </section>
    </div>
  );
}

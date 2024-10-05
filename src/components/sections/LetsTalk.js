import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import { lexend } from "@/app/fonts";
import InView from "../animated/InView";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export default function LetsTalk() {
  return (
    <Section>
      <Container>
        <div id="lets-talk" className="my-20">
          <InView>
            <div className="grid md:grid-cols-2 gap-5 mt-5">
              <div className="md:p-10">
                <h2
                  className={`text-5xl md:text-6xl font-bold in-up ${lexend.className}`}
                  style={{ animationDelay: "0.25s" }}
                >
                  Let&apos;s Talk
                </h2>
                <p
                  className={`text-lg md:text-xl font-semibold mt-5 md:mt-10 in-up`}
                  style={{ animationDelay: ".5s" }}
                >
                  Arrange a free no-commitment consultation.
                </p>
                <p className={`mt-5 in-up`} style={{ animationDelay: ".75s" }}>
                  We are always happy to discuss whatever project you have in
                  mind. Let&apos;s discuss your requirements, what you want to
                  achieve for your business, and how we can help you get there.
                </p>
                <p className={`mt-5 in-up`} style={{ animationDelay: "1s" }}>
                  There is no commitment to proceed with us, if you are an
                  established business experienced in working with development
                  and technology partners, or if you are completely new to the
                  process and have no idea where to start, we are here to help.
                </p>
                <p
                  className={`mt-5 in-up font-semibold`}
                  style={{ animationDelay: "1.25s" }}
                >
                  Fill in this form and we will get back you, or use any of the
                  contact methods listed to talk to us.
                </p>
                <div className="mt-10 in-up" style={{ animationDelay: "1.5s" }}>
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
              <div>
                <div
                  className="p-5 py-8 mt-5 md:mt-10 md:p-10 bg-gradient-to-br from-brand-blue to-brand-light-blue text-white rounded-xl shadow-xl in-up"
                  style={{ animationDelay: "0.25s" }}
                >
                  <p className="font-bold text-sm">Name</p>
                  <input
                    type="text"
                    className="w-full rounded mb-5 text-black p-2"
                    placeholder="Your name"
                  />
                  <p className="font-bold text-sm">Email Address</p>
                  <input
                    type="email"
                    className="w-full rounded mb-5 text-black p-2"
                    placeholder="Your email address"
                  />
                  <p className="font-bold text-sm">Phone Number</p>
                  <input
                    type="tel"
                    className="w-full rounded mb-5 text-black p-2"
                    placeholder="Your phone number"
                  />
                  <p className="font-bold text-sm">
                    What would you like to talk about?
                  </p>
                  <textarea
                    className="w-full min-h-48 rounded mb-5 text-black p-2"
                    placeholder="Write about your requirements, anything you might need help with or "
                  ></textarea>
                  <button className="outline outline-2 outline-white bg-transparent text-white hover:bg-white hover:text-brand-blue px-6 py-2 rounded-full transition-colors duration-500 uppercase font-semibold block mx-auto">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </InView>
        </div>
      </Container>
    </Section>
  );
}
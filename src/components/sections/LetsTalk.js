"use client";

import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import { lexend } from "@/app/fonts";
import InView from "../animated/InView";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";

export default function LetsTalk() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    status: "idle",
  });

  const submitForm = async () => {
    setFormData({ ...formData, status: "pending" });
    const result = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (!result.ok) {
      const errorData = await result.json();
      console.error("Error sending email:", errorData);
      setFormData({ ...formData, status: "error" });
      return;
    }
    setFormData({ ...formData, status: "success" });
  };

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
                  {formData.status !== "success" && formData.status !== "error" && (
                    <>
                      <p className="font-bold text-sm">Name</p>
                      <input
                        type="text"
                        className="w-full rounded mb-5 text-black p-2"
                        placeholder="Your name"
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        disabled={formData.status === "pending"}
                      />
                      <p className="font-bold text-sm">Email Address</p>
                      <input
                        type="email"
                        className="w-full rounded mb-5 text-black p-2"
                        placeholder="Your email address"
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                      />
                      <p className="font-bold text-sm">Phone Number</p>
                      <input
                        type="tel"
                        className="w-full rounded mb-5 text-black p-2"
                        placeholder="Your phone number"
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                      />
                      <p className="font-bold text-sm">
                        What would you like to talk about?
                      </p>
                      <textarea
                        className="w-full min-h-48 rounded mb-5 text-black p-2"
                        placeholder="Write about your requirements, anything you might need help with or what your favourite sandwich filling is..."
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                      ></textarea>
                      {formData.status === "idle" && (
                        <button
                          className="outline outline-2 outline-white bg-transparent text-white hover:bg-white hover:text-brand-blue px-6 py-2 rounded-full transition-colors duration-500 uppercase font-semibold block mx-auto"
                          onClick={() => submitForm()}
                        >
                          Send Message
                        </button>
                      )}
                      {formData.status === "pending" && (
                        <button className="animate-pulse outline outline-2 outline-white bg-white text-brand-blue px-6 py-2 rounded-full transition-colors duration-500 uppercase font-semibold block mx-auto cursor-default">
                          Sending Message...
                        </button>
                      )}
                    </>
                  )}
                  {formData.status === "success" && (
                    <p className="text-center font-semibold text-lg my-20">
                      Thanks, your message has been sent, we will get back to
                      you as soon as possible.
                    </p>
                  )}
                  {formData.status === "error" && (
                    <p className="text-center font-semibold text-lg my-20">
                      Oops! Something went wrong. Please try again later.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </InView>
        </div>
      </Container>
    </Section>
  );
}

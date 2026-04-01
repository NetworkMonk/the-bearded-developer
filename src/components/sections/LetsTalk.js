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

const contactMethods = [
  {
    icon: faEnvelope,
    label: "info@thebeardeddeveloper.co.uk",
    href: "mailto:info@thebeardeddeveloper.co.uk",
    ariaLabel: "Email us",
  },
  {
    icon: faPhone,
    label: "+44 (0) 330 043 5977",
    href: "tel:+443300435977",
    ariaLabel: "Call us on +44 (0) 330 043 5977",
  },
  {
    icon: faWhatsapp,
    label: "+44 (0) 330 043 5977",
    href: "https://wa.me/443300435977",
    ariaLabel: "Chat with us on WhatsApp",
  },
];

const inputClass =
  "w-full rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/50 px-4 py-3 text-sm focus:outline-none focus:border-white focus:ring-1 focus:ring-white/50 transition-colors duration-200 mb-5";

const labelClass = `block text-xs font-semibold uppercase tracking-[0.14em] text-white/80 mb-1.5`;

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
            <div className="grid md:grid-cols-2 gap-8 mt-5 items-start">

              {/* Left: copy + contact methods */}
              <div className="md:p-10">
                <h2
                  className={`text-5xl md:text-6xl font-bold in-up ${lexend.className}`}
                  style={{ animationDelay: "0.25s" }}
                >
                  Let&apos;s Talk
                </h2>
                <p
                  className="text-lg md:text-xl font-semibold mt-5 md:mt-10 in-up"
                  style={{ animationDelay: ".5s" }}
                >
                  Arrange a free no-commitment consultation.
                </p>
                <p
                  className="mt-5 in-up text-brand-black/70 leading-relaxed"
                  style={{ animationDelay: ".75s" }}
                >
                  We are always happy to discuss whatever project you have in
                  mind. Let&apos;s discuss your requirements, what you want to
                  achieve for your business, and how we can help you get there.
                </p>
                <p
                  className="mt-4 in-up text-brand-black/70 leading-relaxed"
                  style={{ animationDelay: "1s" }}
                >
                  There is no commitment to proceed with us - whether you are an
                  established business or completely new to working with a
                  development partner, we are here to help.
                </p>
                <p
                  className="mt-4 in-up font-semibold text-brand-black/80"
                  style={{ animationDelay: "1.25s" }}
                >
                  Fill in the form and we will get back to you, or use any of
                  the contact methods below.
                </p>

                {/* Divider */}
                <div
                  className="mt-8 mb-6 h-px bg-brand-black/10 in-up"
                  style={{ animationDelay: "1.35s" }}
                />

                {/* Contact method pills */}
                <div
                  className="in-up space-y-3"
                  style={{ animationDelay: "1.5s" }}
                >
                  {contactMethods.map(({ icon, label, href, ariaLabel }) => (
                    <a
                      key={href}
                      href={href}
                      aria-label={ariaLabel}
                      className="flex items-center gap-3 group w-fit"
                    >
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-teal/10 text-brand-teal group-hover:bg-brand-teal group-hover:text-white transition-all duration-200 shrink-0">
                        <FontAwesomeIcon icon={icon} className="w-3.5 h-3.5" />
                      </span>
                      <span className="text-sm text-brand-black/70 group-hover:text-brand-teal transition-colors duration-200 group-hover:underline underline-offset-2">
                        {label}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Right: dark card form */}
              <div
                className="in-up"
                style={{ animationDelay: "0.25s" }}
              >
                <div className="bg-gradient-to-br from-brand-blue to-brand-light-blue rounded-2xl p-8 shadow-xl text-white">
                  {formData.status !== "success" &&
                    formData.status !== "error" && (
                      <>
                        <label className={`${labelClass} ${lexend.className}`}>
                          Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          className={inputClass}
                          placeholder="Your name"
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          disabled={formData.status === "pending"}
                        />

                        <label className={`${labelClass} ${lexend.className}`}>
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          className={inputClass}
                          placeholder="Your email address"
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          disabled={formData.status === "pending"}
                        />

                        <label className={`${labelClass} ${lexend.className}`}>
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          className={inputClass}
                          placeholder="Your phone number"
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          disabled={formData.status === "pending"}
                        />

                        <label className={`${labelClass} ${lexend.className}`}>
                          What would you like to talk about?
                        </label>
                        <textarea
                          name="message"
                          className={`${inputClass} min-h-36 resize-none`}
                          placeholder="Write about your requirements, anything you might need help with or what your favourite sandwich filling is..."
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              message: e.target.value,
                            })
                          }
                          disabled={formData.status === "pending"}
                        />

                        {formData.status === "idle" && (
                          <div className="flex justify-center mt-2">
                            <button
                              onClick={() => submitForm()}
                              className="outline outline-2 outline-white bg-transparent text-white hover:bg-white hover:text-brand-blue px-6 py-2 rounded-full transition-colors duration-500 uppercase font-semibold block mx-auto"
                            >
                              Send Message
                            </button>
                          </div>
                        )}
                        {formData.status === "pending" && (
                          <div className="flex justify-center mt-2">
                            <button
                              disabled
                              className="animate-pulse outline outline-2 outline-white bg-white text-brand-blue px-6 py-2 rounded-full uppercase font-semibold block mx-auto cursor-default"
                            >
                              Sending Message...
                            </button>
                          </div>
                        )}
                      </>
                    )}

                  {formData.status === "success" && (
                    <div className="py-16 text-center">
                      <div className="w-12 h-12 rounded-full bg-brand-teal/20 flex items-center justify-center mx-auto mb-4">
                        <svg
                          className="w-6 h-6 text-brand-light-blue"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <p
                        className={`text-lg font-semibold text-white ${lexend.className}`}
                      >
                        Message sent
                      </p>
                      <p className="mt-2 text-sm text-white/70">
                        We&apos;ll get back to you as soon as possible.
                      </p>
                    </div>
                  )}

                  {formData.status === "error" && (
                    <div className="py-16 text-center">
                      <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center mx-auto mb-4">
                        <svg
                          className="w-6 h-6 text-red-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </div>
                      <p
                        className={`text-lg font-semibold text-white ${lexend.className}`}
                      >
                        Something went wrong
                      </p>
                      <p className="mt-2 text-sm text-white/70">
                        Please try again or contact us directly.
                      </p>
                    </div>
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

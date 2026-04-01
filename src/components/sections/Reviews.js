import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import { lexend } from "@/app/fonts";
import InView from "../animated/InView";

export default async function Reviews() {
  const reviews = [
    {
      author: "Leanne P",
      company: "Love Leo",
      rating: 5,
      content:
        "James is a tech angel!! James has worked with me to create an amazing website for my registered non profit organisation. As someone that is not tech savvy at all I can honestly say James has been an absolute angel to work with. Thank you James, for everything - we love our new website!",
    },
    {
      author: "Robyn P",
      company: "Fluffs and Files",
      rating: 5,
      content:
        "Since James helped me with my website I've had brilliant results. My SEO is excellent and I get regular business via links from the website be it calls or WhatsApp. Also this has boosted my social media. James is an easy going person and really understood my needs for my business. Will definitely use him again.",
    },
    {
      author: "Jackie T",
      company: "Cotton and Twigg",
      rating: 5,
      content:
        "One word - AMAZING! I had several problems with my website & James sorted hem out for me in the space of 2 days, highly recommend! He will be my go to now for any further help.",
    },
    {
      author: "Jake E",
      company: "RC Boat Engines Ltd.",
      rating: 5,
      content:
        "James was very attentive to my project needs and asked the right questions along with bringing his tenure with Shopify and eCommerce stores we are absolutely thrilled at what James has built for us. I have another project in the future and will be coming back to him and I am already looking forward to it.",
    },
    {
      author: "Misba M",
      company: "Lightwork Electrical Services Ltd",
      rating: 5,
      content:
        "Absolute legend the work rate is second to none also the price is definitely a bargain for what you get thank you James 👍🏽",
    },
  ];

  return (
    <div id="reviews" className="my-20">
      <Section>
        <Container>
          <InView>
            <div className="md:p-10 relative z-20">
              <h2
                className={`text-5xl md:text-6xl font-bold in-up ${lexend.className}`}
                style={{ animationDelay: "0.25s" }}
              >
                Kind Words From Our Clients
              </h2>
              <p
                className="text-lg md:text-xl font-semibold mt-5 md:mt-10 in-up max-w-xl"
                style={{ animationDelay: ".5s" }}
              >
                Some of our reviews and testimonials from our clients.
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                {reviews.map((review, rIndex) => (
                  <div
                    key={rIndex}
                    className="in-up relative flex flex-col bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-brand-teal/30 transition-all duration-300"
                    style={{ animationDelay: `${0.5 + rIndex * 0.15}s` }}
                  >
                    {/* Decorative quotation mark */}
                    <span
                      className="block text-5xl leading-none text-brand-teal/25 select-none pointer-events-none font-serif mb-3"
                      aria-hidden="true"
                    >
                      &ldquo;
                    </span>

                    {/* Stars */}
                    <div className="flex gap-0.5 mb-3">
                      {[...Array(review.rating)].map((_, i) => (
                        <span key={i} className="text-amber-400 text-sm">★</span>
                      ))}
                    </div>

                    {/* Review text */}
                    <p className="text-sm leading-relaxed text-brand-black/70 flex-1">
                      {review.content}
                    </p>

                    {/* Author */}
                    <div className="mt-5 pt-4 border-t border-gray-100">
                      <p className={`text-sm font-semibold text-brand-black ${lexend.className}`}>
                        {review.author}
                      </p>
                      <p className={`text-xs font-semibold uppercase tracking-[0.12em] text-brand-teal mt-0.5 ${lexend.className}`}>
                        {review.company}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </InView>
        </Container>
      </Section>
    </div>
  );
}

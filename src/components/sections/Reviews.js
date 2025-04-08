import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import { lexend } from "@/app/fonts";
import InView from "../animated/InView";
import Image from "next/image";
import blob1 from "@/components/blobs/blob1.svg";

export default async function Reviews() {
  const reviews = [
    {
      author: "Jacqui T",
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
                className={`text-lg md:text-xl font-semibold mt-5 md:mt-10 in-up max-w-xl`}
                style={{ animationDelay: ".5s" }}
              >
                Some of our reviews and testimonials from our clients.
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14 mt-10">
                {reviews.map((review, rIndex) => {
                  return (
                    <div className="bg-gray-50 p-5 rounded-lg" key={rIndex}>
                      <div className="my-2">
                        {[...Array(review.rating)].map((_, index) => (
                          <span key={index} className="text-yellow-500">
                            ★
                          </span>
                        ))}
                      </div>{" "}
                      <p className="text-lg font-semibold">{review.author}</p>
                      <p className="text-sm font-bold uppercase text-gray-500">{review.company}</p>
                      <p className="mt-2">{review.content}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </InView>
        </Container>
        <div className="max-w-7xl mx-auto relative">
          <div className="absolute right-0 bottom-32 max-w-full w-[500px] h-[500px] xl:w-[600px] xl:h-[600px] z-10 overflow-y-visible pointer-events-none">
            <Image
              priority
              src={blob1}
              alt="A Blob"
              className="absolute h-[500px] w-[500px] xl:h-[600px] xl:w-[600px] transform rotate-90 opacity-15 pointer-events-none"
            />
          </div>
        </div>
      </Section>
    </div>
  );
}

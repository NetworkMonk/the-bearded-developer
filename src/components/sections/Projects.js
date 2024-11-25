import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import { lexend } from "@/app/fonts";
import InView from "../animated/InView";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function Projects() {
  const projects = [
    {
      client: "036 Group Company Limited",
      title: "Advanced Shipping Estimates",
      subTitle: "Bespoke Business Software Development",
      image: "/img/projects/warehouse-001.jpg",
      content: [
        {
          header: "Requirements",
          detail:
            "Extend existing API to generate accurate shipping costs for orders. This is complicated due to the broad stock profile and large number of carriers.",
        },
        {
          header: "Solution",
          detail:
            "Created new API endpoints to handle complex shipping rate card logic, integrated with shipping system and ERP to log all data so that we can report on accuracy of data and any anomalies",
        },
      ],
      technologies: ["NetSuite", "SuiteScript", "PHP", "Laravel", "Next.js"],
      reviewAuthor: "James Oxley",
      reviewJobTitle: "CIO",
      reviewContent: "",
      reviewRating: 5,
    },
  ];

  return (
    <div id="projects" className="my-20">
      <Section>
        <Container>
          <InView>
            <div className="md:p-10">
              <h2
                className={`text-5xl md:text-6xl font-bold in-up ${lexend.className}`}
                style={{ animationDelay: "0.25s" }}
              >
                Projects
              </h2>
              <p
                className={`text-lg md:text-xl font-semibold mt-5 md:mt-10 in-up max-w-xl`}
                style={{ animationDelay: ".5s" }}
              >
                A small selection of projects we have completed for our clients.
              </p>
              <div
                className="flex flex-col gap-10 mt-10 in-up"
                style={{ animationDelay: ".75s" }}
              >
                {projects.map((project, projectIndex) => {
                  return (
                    <div key={projectIndex} className="">
                      <h4
                        className={`text-2xl font-semibold ${lexend.className}`}
                      >
                        {project.title}
                      </h4>
                      <h5 className="text-sm font-semibold opacity-60 mt-1 mb-2">
                        {project.subTitle}
                      </h5>
                      <div className="grid md:grid-cols-2 gap-5">
                        <div className="h-48 md:h-auto flex justify-center items-center overflow-hidden my-3 rounded-lg">
                          <Image
                            src={project.image}
                            alt={project.title}
                            className="object-cover h-full"
                            width={1000}
                            height={1000}
                          />
                        </div>
                        <div className="flex flex-col my-3">
                          <div>
                            {project.technologies.map((tech, techIndex) => {
                              return (
                                <div
                                  key={techIndex}
                                  className="inline-block bg-gray-200 px-3 py-1 rounded-lg text-sm mr-2 mb-2"
                                >
                                  {tech}
                                </div>
                              );
                            })}
                          </div>
                          <div>
                            {project.content.map((content, contentIndex) => {
                              return (
                                <div key={contentIndex} className="mt-5">
                                  <h5 className="text-xl font-semibold my-3">
                                    {content.header}
                                  </h5>
                                  <p className="my-3 opacity-70">
                                    {content.detail}
                                  </p>
                                  <hr className="my-10 border-t border-gray-200" />
                                </div>
                              );
                            })}
                          </div>
                          <div className="mt-auto">
                            {Array.from({ length: project.reviewRating }).map(
                              (_, i) => (
                                <FontAwesomeIcon
                                  icon={faStar}
                                  key={i}
                                  className="text-yellow-300 h-5 w-5 mr-1"
                                />
                              )
                            )}
                            <p className="opacity-70 my-3">
                              We are incredibly pleased with the outcome of this
                              project. This enables our business to save on
                              shipping costs potentially massively over the
                              coming years. Thank you!
                            </p>
                            <p className="mt-3 font-semibold">James Oxley</p>
                            <p className="uppercase text-sm">CIO</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </InView>
        </Container>
      </Section>
    </div>
  );
}

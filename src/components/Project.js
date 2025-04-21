"use client";

import { lexend } from "@/app/fonts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import Gallery from "./Gallery";

export default function Project({ project }) {
  return (
    <div
      className={`py-16 ${
        project.images.length > 0 ? "grid md:grid-cols-5 gap-10 " : ""
      }`}
    >
      <div className="text-black md:col-span-3">
        <h2 className={`text-3xl font-semibold ${lexend.className}`}>
          {project.title}
        </h2>
        <h3
          className={`text-lg opacity-80 font-medium mb-2 ${lexend.className}`}
        >
          {project.subtitle}
        </h3>
        {project.technologies && (
          <p className="text-sm opacity-80 my-3">
            {project.technologies.map((tech, techIndex) => {
              return (
                <span
                  key={techIndex}
                  className="bg-gray-200 text-gray-800 rounded-full px-2 py-1 text-xs font-semibold mr-2 mb-2"
                >
                  {tech}
                </span>
              );
            })}
          </p>
        )}
        {project.description.map((desc, descIndex) => {
          return (
            <p key={descIndex} className="text-sm mb-2 opacity-80">
              {desc}
            </p>
          );
        })}
        {project.review && (
          <p className="mt-8 mb-2 opacity-80 flex items-start font-medium">
            <FontAwesomeIcon
              icon={faQuoteLeft}
              className="opacity-50 mr-3 w-6 h-6 -mt-1.5"
            />
            {project.review}
          </p>
        )}
      </div>
      {project.images.length > 0 && (
        <div className="md:col-span-2">
          <Gallery images={project.images} />
        </div>
      )}
    </div>
  );
}

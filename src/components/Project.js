"use client";

import { lexend } from "@/app/fonts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Gallery from "./Gallery";
import Image from "next/image";
import Link from "next/link";

export default function Project({ project }) {
  const hasImages = project.images && project.images.length > 0;

  return (
    <div className="py-16">

      {/* Header */}
      <div className="flex items-center gap-5 mb-6">
        {project.logo && (
          <div
            className="flex-shrink-0 rounded-lg p-3 shadow-sm"
            style={{ backgroundColor: project.logoBg || "#ffffff", border: project.logoBg ? "none" : "1px solid #f3f4f6" }}
          >
            <Image
              src={project.logo}
              alt={`${project.title} logo`}
              width={80}
              height={40}
              className="object-contain h-8 w-auto"
            />
          </div>
        )}
        <div>
          <h2 className={`text-3xl font-semibold ${lexend.className}`}>
            {project.title}
          </h2>
          <h3 className={`text-lg opacity-70 font-medium ${lexend.className}`}>
            {project.subtitle}
          </h3>
        </div>
      </div>

      {/* Technology tags */}
      {project.technologies && (
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="bg-gray-100 text-gray-700 rounded-full px-3 py-1 text-xs font-semibold"
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      {/* Main content */}
      <div className={hasImages || project.facts ? "grid md:grid-cols-5 gap-10" : ""}>
        <div className={hasImages || project.facts ? "md:col-span-3" : "max-w-2xl"}>

          {/* Description */}
          {project.description.map((desc, descIndex) => (
            <p key={descIndex} className="text-base text-gray-700 mb-4 leading-relaxed">
              {desc}
            </p>
          ))}

          {/* Outcome callout */}
          {project.outcome && (
            <div className="mt-6 bg-green-50 p-5 rounded-lg border-l-4 border-green-500">
              <h4 className={`font-semibold text-green-900 text-sm uppercase tracking-wide mb-2 ${lexend.className}`}>
                What we delivered
              </h4>
              <p className="text-green-800 text-sm leading-relaxed">
                {project.outcome}
              </p>
            </div>
          )}

          {/* Review */}
          {project.review && (
            <p className="mt-8 text-gray-600 flex items-start font-medium italic">
              <FontAwesomeIcon
                icon={faQuoteLeft}
                className="opacity-40 mr-3 w-5 h-5 flex-shrink-0 mt-0.5"
              />
              <span>{project.review}</span>
            </p>
          )}

          {/* Visit site */}
          {project.url && (
            <div className="mt-6">
              <Link
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-teal hover:text-brand-blue transition-colors"
              >
                Visit {project.title}
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="w-3 h-3" />
              </Link>
            </div>
          )}

        </div>

        {hasImages && (
          <div className="md:col-span-2">
            <Gallery images={project.images} />
          </div>
        )}

        {!hasImages && project.facts && (
          <div className="md:col-span-2 mt-6 md:mt-0">
            <div className="bg-gray-50 rounded-xl p-6 divide-y divide-gray-200">
              {project.facts.map((fact, factIndex) => (
                <div key={factIndex} className="py-4 first:pt-0 last:pb-0">
                  <p className={`text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1 ${lexend.className}`}>
                    {fact.label}
                  </p>
                  <p className={`text-lg font-semibold text-gray-800 ${lexend.className}`}>
                    {fact.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

    </div>
  );
}

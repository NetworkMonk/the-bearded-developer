"use client";

import { lexend } from "@/app/fonts";
import Link from "next/link";
import Thumbnail from "./Thumbnail";

export default function Article({ article }) {
  return (
    <div
      className={`py-16 ${
        article.image
          ? "grid md:grid-cols-5 gap-10 content-stretch justify-between"
          : ""
      }`}
    >
      <div className="text-black md:col-span-3">
        <h2 className={`text-3xl font-semibold ${lexend.className}`}>
          <a href={article.path}>{article.title}</a>
        </h2>
        <h3
          className={`text-lg opacity-80 font-medium mb-2 ${lexend.className}`}
        >
          {article.subtitle}
        </h3>
        {article.tags && (
          <p className="text-sm opacity-80 my-3">
            {article.tags.map((tag, tagIndex) => {
              return (
                <span
                  key={tagIndex}
                  className="bg-gray-200 text-gray-800 rounded-full px-2 py-1 text-xs font-semibold mr-2 mb-2 whitespace-nowrap inline-block"
                >
                  {tag}
                </span>
              );
            })}
          </p>
        )}
        {article.description && (
          <p className="text-sm mb-2 opacity-80">{article.description}</p>
        )}
        {article.image && (
          <div className="md:hidden block max-w-sm">
            <a href={article.path}>
              <Thumbnail image={article.image} />
            </a>
          </div>
        )}
        <div className="mt-8">
          <Link
            href={article.path}
            className="outline outline-2 outline-white hover:outline-brand-blue bg-brand-blue text-white hover:bg-white hover:text-brand-blue px-6 py-2 rounded-full transition-colors duration-500 uppercase font-semibold cursor-pointer"
          >
            Read
          </Link>
        </div>
      </div>
      {article.image && (
        <div className="md:col-span-2 hidden md:block align-items-right">
          <a href={article.path}>
            <Thumbnail image={article.image} />
          </a>
        </div>
      )}
    </div>
  );
}

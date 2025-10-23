"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Article from "./Article";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import articleIndex from "@/data/article-index.json";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import Pagination from "./Pagination";

const articles = articleIndex.articles.sort((a, b) => {
  return new Date(b.date) - new Date(a.date);
});

const popularSearches = [
  "Automation",
  "Cloud",
  "Infrastructure",
  "Integration",
  "Performance",
  "Security",
  "Shopify",
];

export default function ArticleList() {
  const searchParams = useSearchParams();
  const page = searchParams.get("page") ?? false;
  const searchQuery = searchParams.get("search") ?? false;

  const filteredArticles = searchQuery
    ? articles.filter(
        (article) =>
          article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          article.subTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
          article.description
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          article.tags.some((keyword) =>
            keyword.toLowerCase().includes(searchQuery.toLowerCase())
          )
      )
    : articles;

  const pages = Math.ceil(filteredArticles.length / 10);
  const currentPage = page ? parseInt(page) : 1;

  const paginatedArticles = filteredArticles.slice(
    (currentPage - 1) * 10,
    currentPage * 10
  );

  const [searchInputValue, setSearchInputValue] = useState(
    searchQuery ? searchQuery : ""
  );

  // Handler to navigate based on search input
  const handleSearch = () => {
    if (searchInputValue.trim() === "") {
      window.location.href = `/resources/articles`;
    } else {
      window.location.href = `/resources/articles?search=${encodeURIComponent(
        searchInputValue.trim()
      )}`;
    }
  };

  // Handler for Enter key press in search input
  const handleInputKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      <section className="md:px-12 flex">
        <input
          type="text"
          placeholder="Search articles..."
          className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-light-blue flex-grow"
          value={searchInputValue}
          onChange={(e) => setSearchInputValue(e.target.value)}
          onKeyDown={handleInputKeyDown}
        />
        <div>
          <button
            onClick={handleSearch}
            className="cursor-pointer ml-4 outline outline-2 outline-white hover:outline-brand-blue bg-brand-blue text-white hover:bg-white hover:text-brand-blue w-10 h-10 rounded-full transition-colors duration-500 uppercase font-semibold"
            aria-label="Search Articles"
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
      </section>

      <section className="md:px-12 mt-10">
        <h3 className="text-xl font-bold">Popular Searches</h3>
        <p className="mt-2">
          {popularSearches.map((term, index) => (
            <button
              key={index}
              onClick={() => {
                window.location.href = `/resources/articles?search=${encodeURIComponent(
                  term.trim()
                )}`;
              }}
              className="mr-2 mb-2 cursor-pointer outline outline-2 outline-gray-300 hover:outline-brand-blue bg-white text-brand-black hover:bg-brand-blue hover:text-white transition-colors duration-500 px-3 py-1 rounded-full"
            >
              {term}
            </button>
          ))}
        </p>
      </section>

      <section className="flex flex-col md:px-12 my-10 divide-slate-200 divide-y-2">
        {paginatedArticles.map((article, index) => (
          <Article key={index} article={article} />
        ))}
      </section>

      <Pagination
        pages={pages}
        currentPage={currentPage}
        searchQuery={searchQuery}
      />
    </>
  );
}

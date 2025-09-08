import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export default function Pagination({ pages, currentPage, searchQuery }) {
  const maxPaginationSpread = 2;

  return (
    <>
      {pages > 1 && (
        <section className="md:px-12 my-10 flex gap-2">
          {currentPage > 1 && (
            <a
              href={`/resources/articles?page=${currentPage - 1}${
                searchQuery ? `&search=${searchQuery}` : ""
              }`}
              className="w-8 h-8 flex items-center justify-center border rounded-md bg-white text-brand-black cursor-pointer transition-colors duration-500 hover:bg-brand-blue hover:text-white hover:outline hover:outline-brand-blue"
            >
              <FontAwesomeIcon icon={faChevronLeft} className="w-2 h-2" />
            </a>
          )}
          {Array.from({ length: pages })
            .map((_, i) => i + 1)
            .filter(
              (pageNum) =>
                pageNum >= currentPage - maxPaginationSpread &&
                pageNum <= currentPage + maxPaginationSpread
            )
            .map((pageNum) => (
              <a
                key={pageNum}
                href={`/resources/articles?page=${pageNum}${
                  searchQuery ? `&search=${searchQuery}` : ""
                }`}
                className={`w-8 h-8 flex items-center justify-center border rounded-md cursor-pointer transition-colors duration-500
                ${
                  currentPage === pageNum
                    ? "bg-brand-blue text-white border-brand-blue"
                    : "bg-white text-brand-black hover:bg-brand-blue hover:text-white hover:outline hover:outline-brand-blue"
                }`}
                aria-current={currentPage === pageNum ? "page" : undefined}
              >
                {pageNum}
              </a>
            ))}
          {currentPage < pages && (
            <a
              href={`/resources/articles?page=${currentPage + 1}${
                searchQuery ? `&search=${searchQuery}` : ""
              }`}
              className="w-8 h-8 flex items-center justify-center border rounded-md bg-white text-brand-black cursor-pointer transition-colors duration-500 hover:bg-brand-blue hover:text-white hover:outline hover:outline-brand-blue"
            >
              <FontAwesomeIcon icon={faChevronRight} className="w-2 h-2" />
            </a>
          )}
        </section>
      )}
    </>
  );
}

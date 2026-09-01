import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function getPageNumbers(currentPage, totalPages) {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  const pages = [1];

  if (currentPage > 3) {
    pages.push("ellipsis-start");
  }

  const start = Math.max(2, currentPage - 1);
  const end = Math.min(totalPages - 1, currentPage + 1);

  for (let page = start; page <= end; page += 1) {
    pages.push(page);
  }

  if (currentPage < totalPages - 2) {
    pages.push("ellipsis-end");
  }

  pages.push(totalPages);
  return pages;
}

function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) {
    return null;
  }

  const pageNumbers = getPageNumbers(currentPage, totalPages);

  const buttonClass = (isActive) =>
    `flex h-10 min-w-10 items-center justify-center rounded-full border px-3 text-sm font-medium transition duration-300 cursor-pointer ${
      isActive
        ? "border-clementine bg-clementine text-cream shadow-lg"
        : "border-border bg-surface/40 text-foreground hover:bg-sage/40 dark:border-olive dark:bg-olive/40 dark:text-cream dark:hover:bg-olive"
    }`;

  return (
    <nav
      className="mt-10 flex flex-wrap items-center justify-center gap-2"
      aria-label="صفحه‌بندی محصولات"
    >
      <button
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`${buttonClass(false)} disabled:cursor-not-allowed disabled:opacity-40`}
        aria-label="صفحه قبل"
      >
        <FiChevronRight className="text-lg" />
      </button>

      {pageNumbers.map((page) => {
        if (typeof page === "string") {
          return (
            <span
              key={page}
              className="flex h-10 min-w-10 items-center justify-center text-muted dark:text-oat"
            >
              ...
            </span>
          );
        }

        return (
          <button
            key={page}
            type="button"
            onClick={() => onPageChange(page)}
            className={buttonClass(page === currentPage)}
            aria-label={`صفحه ${page}`}
            aria-current={page === currentPage ? "page" : undefined}
          >
            {page}
          </button>
        );
      })}

      <button
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`${buttonClass(false)} disabled:cursor-not-allowed disabled:opacity-40`}
        aria-label="صفحه بعد"
      >
        <FiChevronLeft className="text-lg" />
      </button>
    </nav>
  );
}

export default Pagination;

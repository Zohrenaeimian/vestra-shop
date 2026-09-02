import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectFavorites } from "../../store/slices/favoritesSlice";
import ProductGrid from "../product/ProductGrid/ProductGrid";
import Pagination from "../common/Pagination/Pagination";

const ITEMS_PER_PAGE = 8;

function FavoritesContent() {
  const favorites = useSelector(selectFavorites);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.max(1, Math.ceil(favorites.length / ITEMS_PER_PAGE));
  const safePage = Math.min(Math.max(currentPage, 1), totalPages);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const paginatedFavorites = useMemo(() => {
    const startIndex = (safePage - 1) * ITEMS_PER_PAGE;
    return favorites.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [favorites, safePage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (favorites.length === 0) {
    return (
      <div className="mx-auto max-w-lg rounded-3xl border border-border bg-surface p-6 text-center sm:p-10 dark:border-olive dark:bg-olive/40">
        <h1 className="text-2xl font-bold">علاقه‌مندی‌های من</h1>
        <p className="mt-3 text-sm text-muted">
          هنوز محصولی به علاقه‌مندی‌ها اضافه نکرده‌اید.
        </p>
        <Link
          to="/products"
          className="mt-6 inline-flex rounded-full bg-clementine px-6 py-3 text-sm font-bold text-cream transition hover:bg-terracotta"
        >
          مشاهده محصولات
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold">علاقه‌مندی‌های من</h1>
          <p className="mt-1 text-sm text-muted">
            {favorites.length} محصول در لیست علاقه‌مندی شما
          </p>
        </div>
      </div>

      <ProductGrid products={paginatedFavorites} />

      <Pagination
        currentPage={safePage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default FavoritesContent;

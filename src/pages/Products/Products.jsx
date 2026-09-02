import { useEffect, useMemo, useRef, useState } from "react";
import { getProducts } from "../../services/productService";
import ProductGrid from "../../components/product/ProductGrid/ProductGrid";
import FilterSidebar from "../../components/filter/FilterSidebar/FilterSidebar";
import { useSearchParams } from "react-router-dom";
import SortBar from "../../components/sortBar/sortBar";
import Pagination from "../../components/common/Pagination/Pagination";

const ITEMS_PER_PAGE = 8;

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category");
  const gender = searchParams.get("gender");
  const minPrice = Number(searchParams.get("minPrice") || 0);
  const maxPrice = Number(searchParams.get("maxPrice") || Infinity);
  const sort = searchParams.get("sort");
  const search = searchParams.get("search");
  const brand = searchParams.get("brand");

  const sortFilteredProducts = useMemo(() => {
    const categoryFilteredProducts = category
      ? products.filter((product) => product.category === category)
      : products;

    const genderFilteredProducts = gender
      ? categoryFilteredProducts.filter((product) => product.gender === gender)
      : categoryFilteredProducts;

    const brandFilteredProducts = brand
      ? genderFilteredProducts.filter((product) => product.brand === brand)
      : genderFilteredProducts;

    const priceFilteredProducts = brandFilteredProducts.filter((product) => {
      return product.price >= minPrice && product.price <= maxPrice;
    });

    const searchFilteredProducts = search
      ? priceFilteredProducts.filter((product) => {
          const normalizedSearch = search.toLowerCase();
          const searchWords = normalizedSearch.split(" ");
          return searchWords.every((word) => {
            return product.title.toLowerCase().includes(word);
          });
        })
      : priceFilteredProducts;

    if (!sort) {
      return searchFilteredProducts;
    }

    return [...searchFilteredProducts].sort((a, b) => {
      switch (sort) {
        case "cheapest":
          return a.price - b.price;
        case "priciest":
          return b.price - a.price;
        case "newest":
          return b.isNew - a.isNew;
        case "bestselling":
          return b.isBestSeller - a.isBestSeller;
        default:
          return 0;
      }
    });
  }, [products, category, gender, brand, minPrice, maxPrice, search, sort]);

  const totalPages = Math.max(
    1,
    Math.ceil(sortFilteredProducts.length / ITEMS_PER_PAGE)
  );

  const requestedPage = Number(searchParams.get("page")) || 1;
  const currentPage = Math.min(Math.max(requestedPage, 1), totalPages);

  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return sortFilteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [sortFilteredProducts, currentPage]);

  const filterKey = `${category}-${gender}-${brand}-${minPrice}-${maxPrice}-${sort}-${search}`;
  const previousFilterKey = useRef(filterKey);

  useEffect(() => {
    if (previousFilterKey.current !== filterKey && searchParams.get("page")) {
      const params = new URLSearchParams(searchParams);
      params.delete("page");
      setSearchParams(params, { replace: true });
    }

    previousFilterKey.current = filterKey;
  }, [filterKey, searchParams, setSearchParams]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProducts();
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (requestedPage !== currentPage) {
      const params = new URLSearchParams(searchParams);

      if (currentPage === 1) {
        params.delete("page");
      } else {
        params.set("page", String(currentPage));
      }

      setSearchParams(params, { replace: true });
    }
  }, [requestedPage, currentPage, searchParams, setSearchParams]);

  const handlePageChange = (page) => {
    const params = new URLSearchParams(searchParams);

    if (page === 1) {
      params.delete("page");
    } else {
      params.set("page", String(page));
    }

    setSearchParams(params);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (loading) {
    return (
      <div className="py-12">
        <p className="dark:text-cream">در حال بارگذاری...</p>
      </div>
    );
  }

  return (
    <div className="py-4">
      <div className="grid grid-cols-12 gap-8">
        <aside className="col-span-12 lg:col-span-3">
          <FilterSidebar />
        </aside>

        <section className="col-span-12 lg:col-span-9">
          <SortBar />

          {sortFilteredProducts.length > 0 ? (
            <>
              <div className="mb-4 text-sm text-muted dark:text-oat">
                نمایش {(currentPage - 1) * ITEMS_PER_PAGE + 1} تا{" "}
                {Math.min(currentPage * ITEMS_PER_PAGE, sortFilteredProducts.length)}{" "}
                از {sortFilteredProducts.length} محصول
              </div>

              <ProductGrid products={paginatedProducts} />

              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </>
          ) : (
            <div className="rounded-2xl border p-10 text-center">
              <p className="text-muted dark:text-oat">محصولی یافت نشد.</p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

export default Products;

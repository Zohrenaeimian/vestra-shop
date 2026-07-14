import { useEffect, useState } from "react";
import { getProducts } from "../../services/productService";
import ProductGrid from "../../components/product/ProductGrid/ProductGrid";
import FilterSidebar from "../../components/filter/FilterSidebar/FilterSidebar";
import { useSearchParams } from "react-router-dom";
import SortBar from "../../components/sortBar/sortBar";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  const gender = searchParams.get("gender");
  const price = searchParams.get("price");
  const sort = searchParams.get("sort");
  const categoryFilteredProducts = category
    ? products.filter((product) => product.category === category)
    : products;

  const genderFilteredProducts = gender
    ? categoryFilteredProducts.filter((product) => product.gender === gender)
    : categoryFilteredProducts;

  const priceFilteredProducts = price
    ? genderFilteredProducts.filter((product) => {
        if (price === "under1000") {
          return product.price < 1000000;
        }
        if (price === "over2000") {
          return product.price > 2000000;
        }
        if (price === "1000to2000") {
          return product.price >= 1000000 && product.price <= 2000000;
        }
        return true;
      })
    : genderFilteredProducts;

  const copiedProducts = [...priceFilteredProducts];

  const sortFilteredProducts = sort
    ? copiedProducts.sort((a, b) => {
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
      })
    : priceFilteredProducts;

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

  if (loading) {
    return (
      <div className="container mx-auto py-20">
        <p className="dark:text-white">در حال بارگذاری...</p>
      </div>
    );
  }

  return (
    <div className=" container mx-auto px-8 py-12">
      <div className="grid grid-cols-12 gap-8">
        <aside
          className="
    col-span-12
  
    lg:col-span-3
   
  "
        >
          <FilterSidebar />
        </aside>

        <section className="col-span-12 lg:col-span-9">
          <SortBar />
          {sortFilteredProducts.length > 0 ? (
            <ProductGrid products={sortFilteredProducts} />
          ) : (
            <div className="rounded-2xl border p-10 text-center">
              <p className="text-slate-500 dark:text-slate-300">
                محصولی یافت نشد.
              </p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

export default Products;

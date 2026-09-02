import { useEffect, useState } from "react";
import { getProducts } from "../../../services/productService";
import { Link } from "react-router-dom";
import ProductSlider from "../../product/ProductSlider/ProductSlider";
import { FiTrendingUp } from "react-icons/fi";

function BestSellerProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProducts();
        const bestSellerProducts = response.data.filter(
          (product) => product.isBestSeller
        );
        setProducts(bestSellerProducts);
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
      <section className="rounded-3xl border border-terracotta/30 bg-terracotta/10 px-5 py-6">
        <p className="text-olive dark:text-cream">در حال بارگذاری...</p>
      </section>
    );
  }

  return (
    <section className="overflow-hidden rounded-3xl border border-terracotta/25 bg-gradient-to-l from-terracotta/15 via-oat/30 to-sage/25 px-4 py-5 md:px-6">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-terracotta text-cream">
            <FiTrendingUp size={18} />
          </span>
          <div>
            <h2 className="text-xl font-bold text-olive dark:text-cream">
              پرفروش‌ترین‌ها
            </h2>
            <p className="text-xs text-muted">محبوب‌ترین انتخاب‌های این ماه</p>
          </div>
        </div>

        <Link
          to="/products?sort=bestselling"
          className="rounded-full bg-terracotta px-4 py-1.5 text-xs font-bold text-cream transition hover:bg-clementine"
        >
          مشاهده همه
        </Link>
      </div>

      <ProductSlider products={products} />
    </section>
  );
}

export default BestSellerProducts;

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProducts } from "../../../services/productService";
import ProductSlider from "../../product/ProductSlider/ProductSlider";

function DiscountProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProducts();
        const discountProducts = response.data.filter(
          (product) => product.discount > 0
        );
        setProducts(discountProducts);
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
      <section className="rounded-3xl bg-clementine px-5 py-6 text-cream">
        <h2 className="mb-3 text-xl font-bold text-cream">تخفیف‌های شگفت‌انگیز</h2>
        <p className="text-cream">در حال بارگذاری...</p>
      </section>
    );
  }

  return (
    <section className="rounded-3xl bg-clementine px-4 py-5 text-cream md:px-6">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-bold text-cream">تخفیف‌های شگفت‌انگیز</h2>

        <Link
          to="/products"
          className="rounded-full bg-olive px-4 py-1.5 text-xs font-medium text-cream transition hover:bg-terracotta"
        >
          مشاهده همه
        </Link>
      </div>

      <ProductSlider products={products} lightNav />
    </section>
  );
}

export default DiscountProducts;

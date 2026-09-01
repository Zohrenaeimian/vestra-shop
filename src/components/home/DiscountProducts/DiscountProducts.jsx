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
      <section className="rounded-3xl bg-clementine px-5 py-8 text-cream">
        <h2 className="mb-4 text-2xl font-bold">تخفیف‌های شگفت‌انگیز</h2>
        <p>در حال بارگذاری...</p>
      </section>
    );
  }

  return (
    <section className="rounded-3xl bg-clementine px-5 py-8 text-cream md:px-8">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-2xl font-bold">تخفیف‌های شگفت‌انگیز</h2>

        <Link
          to="/products"
          className="text-sm font-medium text-cream/90 transition hover:text-olive"
        >
          مشاهده همه
        </Link>
      </div>

      <ProductSlider products={products} />
    </section>
  );
}

export default DiscountProducts;

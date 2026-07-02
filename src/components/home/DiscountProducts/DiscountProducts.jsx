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
      <section className="mt-20 bg-yellow-300 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-3xl font-bold">
            تخفیف‌های شگفت‌انگیز
          </h2>

          <p>در حال بارگذاری...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="mt-20 bg-yellow-300 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-bold">
            تخفیف‌های شگفت‌انگیز
          </h2>

          <Link
            to="/products"
            className="text-sm font-medium hover:text-slate-700"
          >
            مشاهده همه
          </Link>
        </div>

        <ProductSlider products={products} />
      </div>
    </section>
  );
}

export default DiscountProducts;
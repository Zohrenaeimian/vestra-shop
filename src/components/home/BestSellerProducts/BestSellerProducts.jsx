import { useEffect, useState } from "react";
import { getProducts } from "../../../services/productService";
import { Link } from "react-router-dom";
import ProductSlider from "../../product/ProductSlider/ProductSlider";

function BestSellerProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProducts();
        const bestSellerProducts = response.data.filter(
          (product) => product.isBestSeller,
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
      <section className="mt-16">
        <h2 className="mb-8 text-3xl font-bold dark:text-cream">
          پرفروش ترین ها
        </h2>

        <p className="dark:text-cream">در حال بارگذاری...</p>
      </section>
    );
  }

  return (
    <section className="mt-16">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-2xl font-bold"> پرفروش ترین ها</h2>

        <Link
          to="/products"
          className="text-sm text-muted hover:text-clementine"
        >
          مشاهده همه
        </Link>
      </div>

      <ProductSlider products={products} />
    </section>
  );
}

export default BestSellerProducts;

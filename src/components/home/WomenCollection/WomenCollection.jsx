import { useEffect, useState } from "react";
import { getProducts } from "../../../services/productService";
import ProductSlider from "../../product/ProductSlider/ProductSlider";
import { Link } from "react-router-dom";

function WomenCollection() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProducts();

        const womenCollection = response.data.filter(
          (product) => product.gender === "women"
        );

        setProducts(womenCollection);
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
      <section className="rounded-3xl bg-sage/40 px-5 py-8 md:px-8">
        <h2 className="mb-4 text-2xl font-bold text-olive">کالکشن زنانه</h2>
        <p className="text-muted">در حال بارگذاری...</p>
      </section>
    );
  }

  return (
    <section className="rounded-3xl bg-sage/40 px-5 py-8 md:px-8">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-olive">کالکشن زنانه</h2>

        <Link
          to="/products?gender=women"
          className="rounded-full bg-olive px-4 py-2 text-sm font-medium text-cream transition hover:bg-clementine"
        >
          مشاهده همه
        </Link>
      </div>

      <ProductSlider products={products} />
    </section>
  );
}

export default WomenCollection;

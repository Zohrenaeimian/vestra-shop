import { useEffect, useState } from "react";
import { getProducts } from "../../../services/productService";
import ProductSlider from "../../product/ProductSlider/ProductSlider";
import { Link } from "react-router-dom";

function NewestProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProducts();

        const newestProducts = response.data.filter(
          (product) => product.isNew
        );

        setProducts(newestProducts);
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
        <h2 className="mb-8 text-3xl font-bold dark:text-white">
          جدیدترین محصولات
        </h2>

        <p className="dark:text-white">
          در حال بارگذاری...
        </p>
      </section>
    );
  }

  return (
    <section className="mt-16">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-2xl font-bold"> جدیدترین محصولات</h2>

        <Link
          to="/products"
          className="text-sm text-slate-500 hover:text-yellow-500"
        >
          مشاهده همه
        </Link>
      </div>
        


      <ProductSlider products={products} />
    </section>
  );
}

export default NewestProducts;
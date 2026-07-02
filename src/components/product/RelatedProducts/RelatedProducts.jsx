import { useEffect, useState } from "react";
import { getProductsByCategory } from "../../../services/productService";
import ProductSlider from "../ProductSlider/ProductSlider";

function RelatedProducts({ product }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response =
          await getProductsByCategory(
            product.category
          );

        const filtered =
          response.data.filter(
            (item) => item.id !== product.id
          );

        setProducts(filtered);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, [product]);

  if (!products.length) {
    return null;
  }

  return (
    <section className="mt-24">
      <h2 className="mb-8 text-3xl font-bold dark:text-white">
        محصولات مشابه
      </h2>

      <ProductSlider products={products} />
    
    </section>
  );
}

export default RelatedProducts;
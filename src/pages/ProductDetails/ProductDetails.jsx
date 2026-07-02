import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../services/productService";
import ProductGallery from "../../components/product/ProductGallery/ProductGallery";
import ProductInfo from "../../components/product/ProductInfo/ProductInfo";
import RelatedProducts from "../../components/product/RelatedProducts/RelatedProducts";
import ProductTabs from "../../components/product/ProductTabs/ProductTabs";


function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await getProductById(id);

        setProduct(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div className="container mx-auto py-20">در حال بارگذاری...</div>;
  }

  if (!product) {
    return <div className="container mx-auto py-20">محصول پیدا نشد.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="grid gap-20 lg:grid-cols-[1.1fr_0.9fr]">
        <ProductGallery product={product} />

        <ProductInfo product={product} />
      </div>

      <div className="mt-24">
        <RelatedProducts product={product} />
        <ProductTabs product={product} />
      </div>
    </div>
  );
}

export default ProductDetails;

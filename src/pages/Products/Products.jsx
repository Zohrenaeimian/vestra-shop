import { useEffect, useState } from "react";
import { getProducts } from "../../services/productService";
import ProductGrid from "../../components/product/ProductGrid/ProductGrid";
import FilterSidebar from "../../components/filter/FilterSidebar/FilterSidebar";
import { useSearchParams } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedGender, setSelectedGender] = useState("");
  console.log(selectedGender);

  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  const filteredProducts = category
    ? products.filter((product) => product.category === category)
    : products;
  const genderFilteredProducts = selectedGender != ""
    ? filteredProducts.filter ((filteredProduct)=> filteredProduct.gender === selectedGender)
    :filteredProducts
    console.log(genderFilteredProducts);

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
    <div className="container mx-auto py-12">
      <div className="grid grid-cols-12 gap-8">
        <aside
          className="
    col-span-12
    rounded-2xl
    border
    p-6
    lg:col-span-3
    dark:border-slate-700
  "
        >
          <FilterSidebar setSelectedGender={setSelectedGender} />
        </aside>

        <section className="col-span-12 lg:col-span-9">
          {filteredProducts.length > 0 ? (
            <ProductGrid products={genderFilteredProducts} />
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

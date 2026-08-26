import { useState } from "react";
import ProductSpecification from "../ProductSpecification/ProductSpecification";
import ProductReview from "../ProductReview/ProductReview";

function ProductTabs({ product }) {
  const [activeTab, setActiveTab] =
    useState("description");

  return (
    <section className="mt-24">
      <div className="mb-8 flex gap-4 border-b">
        <button
          onClick={() =>
            setActiveTab("description")
          }
          className={`pb-4 ${
            activeTab === "description"
              ? "border-b-2 border-clementine font-bold"
              : ""
          }`}
        >
          توضیحات
        </button>

        <button
          onClick={() =>
            setActiveTab("specification")
          }
          className={`pb-4 ${
            activeTab === "specification"
              ? "border-b-2 border-clementine font-bold"
              : ""
          }`}
        >
          مشخصات
        </button>

        <button
          onClick={() => setActiveTab("review")}
          className={`pb-4 ${
            activeTab === "review"
              ? "border-b-2 border-clementine font-bold"
              : ""
          }`}
        >
          نظرات
        </button>
      </div>

      {activeTab === "description" && (
        <p className="leading-8 text-muted dark:text-oat">
          {product.description}
        </p>
      )}

      {activeTab === "specification" && (
        <ProductSpecification
          product={product}
        />
      )}

      {activeTab === "review" && (
        <ProductReview product={product} />
      )}
    </section>
  );
}

export default ProductTabs;
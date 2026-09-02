import { useState } from "react";
import ProductSpecification from "../ProductSpecification/ProductSpecification";
import ProductReview from "../ProductReview/ProductReview";

function ProductTabs({ product }) {
  const [activeTab, setActiveTab] =
    useState("description");

  return (
    <section className="mt-12 sm:mt-16 lg:mt-24">
      <div className="mb-6 flex gap-2 overflow-x-auto border-b sm:mb-8 sm:gap-4">
        <button
          onClick={() =>
            setActiveTab("description")
          }
          className={`shrink-0 pb-3 text-sm sm:pb-4 sm:text-base ${
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
          className={`shrink-0 pb-3 text-sm sm:pb-4 sm:text-base ${
            activeTab === "specification"
              ? "border-b-2 border-clementine font-bold"
              : ""
          }`}
        >
          مشخصات
        </button>

        <button
          onClick={() => setActiveTab("review")}
          className={`shrink-0 pb-3 text-sm sm:pb-4 sm:text-base ${
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
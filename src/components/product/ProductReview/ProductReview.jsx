function ProductReview({ product }) {
  return (
    <div>
      <h3 className="mb-4 text-xl font-bold">
        نظرات کاربران
      </h3>

      <p className="text-slate-500">
        {product.reviewCount} نظر برای این محصول ثبت شده است.
      </p>
    </div>
  );
}

export default ProductReview;
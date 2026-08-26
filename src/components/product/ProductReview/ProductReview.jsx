function ProductReview({ product }) {
  return (
    <div>
      <h3 className="mb-4 text-xl font-bold">
        نظرات کاربران
      </h3>

      <p className="text-muted">
        {product.reviewCount} نظر برای این محصول ثبت شده است.
      </p>
    </div>
  );
}

export default ProductReview;
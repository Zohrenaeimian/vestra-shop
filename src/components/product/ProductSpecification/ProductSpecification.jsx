function ProductSpecification({ product }) {
  return (
    <div className="space-y-4">
      <div className="flex justify-between border-b pb-4">
        <span>دسته‌بندی</span>
        <span>{product.category}</span>
      </div>

      <div className="flex justify-between border-b pb-4">
        <span>جنسیت</span>
        <span>{product.gender}</span>
      </div>

      <div className="flex justify-between border-b pb-4">
        <span>موجودی</span>
        <span>{product.stock}</span>
      </div>

      <div className="flex justify-between border-b pb-4">
        <span>امتیاز</span>
        <span>{product.rating}</span>
      </div>
    </div>
  );
}

export default ProductSpecification;
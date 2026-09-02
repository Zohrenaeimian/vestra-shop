function ProductSpecification({ product }) {
  const rowClass =
    "flex flex-col gap-1 border-b pb-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4";

  return (
    <div className="space-y-4">
      <div className={rowClass}>
        <span>دسته‌بندی</span>
        <span>{product.category}</span>
      </div>

      <div className={rowClass}>
        <span>جنسیت</span>
        <span>{product.gender}</span>
      </div>

      <div className={rowClass}>
        <span>موجودی</span>
        <span>{product.stock}</span>
      </div>

      <div className={rowClass}>
        <span>امتیاز</span>
        <span>{product.rating}</span>
      </div>
    </div>
  );
}

export default ProductSpecification;

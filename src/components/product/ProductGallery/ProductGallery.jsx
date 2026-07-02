function ProductGallery({ product }) {
  return (
    <div>
      <img
        src={product.image}
        alt={product.title}
        className="
          h-[500px]
          w-full
          rounded-3xl
          object-cover
        "
      />
    </div>
  );
}

export default ProductGallery;
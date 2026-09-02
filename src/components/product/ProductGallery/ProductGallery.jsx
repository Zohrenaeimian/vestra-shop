function ProductGallery({ product }) {
  return (
    <div>
      <img
        src={product.image}
        alt={product.title}
        className="h-[clamp(220px,55vw,500px)] w-full rounded-2xl object-cover sm:rounded-3xl"
      />
    </div>
  );
}

export default ProductGallery;
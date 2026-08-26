import { Link } from "react-router-dom";

function ProductCard({ product }) {
  const hasDiscount = product.discount > 0;

  const finalPrice = hasDiscount
    ? product.price - (product.price * product.discount) / 100
    : product.price;

  return (
    <Link to={`/products/${product.id}`}>
      <div
        className="relative overflow-hidden rounded-t-3xl
        rounded-3xl  bg-surface shadow  transition  duration-300  hover:-translate-y-2    hover:shadow-xl dark:bg-olive "
      >
        {hasDiscount && (
          <span
            className="
        absolute
        left-3
        top-3
        z-10
        rounded-full
        bg-terracotta
        px-3
        py-1
        text-sm
        font-bold
        text-cream
      "
          >
            %{product.discount}
          </span>
        )}

        <img
          src={product.image}
          alt={product.title}
          className="h-80 w-full object-cover"
        />

        <div className="space-y-3 p-5">
          <h3 className="font-bold dark:text-cream">{product.title}</h3>

          <p className="text-clementine">⭐ {product.rating}</p>

          <div className="mt-3  min-h-15 ">
            {hasDiscount ? (
              <>
                <p className="text-sm text-muted line-through">
                  {product.price.toLocaleString()} تومان
                </p>

                <p className="font-bold text-terracotta">
                  {finalPrice.toLocaleString()} تومان
                </p>
              </>
            ) : (
              <p className="font-bold dark:text-cream">
                {product.price.toLocaleString()} تومان
              </p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;

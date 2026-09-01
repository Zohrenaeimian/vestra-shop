import { Link } from "react-router-dom";

function ProductCard({ product }) {
  const hasDiscount = product.discount > 0;

  const finalPrice = hasDiscount
    ? product.price - (product.price * product.discount) / 100
    : product.price;

  return (
    <Link to={`/products/${product.id}`}>
      <div className="relative overflow-hidden rounded-2xl bg-surface shadow transition duration-300 hover:-translate-y-1 hover:shadow-lg dark:bg-olive">
        {hasDiscount && (
          <span className="absolute left-2 top-2 z-10 rounded-full bg-terracotta px-2.5 py-0.5 text-xs font-bold text-cream">
            %{product.discount}
          </span>
        )}

        <img
          src={product.image}
          alt={product.title}
          className="h-52 w-full object-cover"
        />

        <div className="space-y-1.5 p-3">
          <h3 className="line-clamp-2 text-sm font-bold dark:text-cream">
            {product.title}
          </h3>

          <p className="text-xs text-clementine">⭐ {product.rating}</p>

          <div className="min-h-10">
            {hasDiscount ? (
              <>
                <p className="text-xs text-muted line-through">
                  {product.price.toLocaleString()} تومان
                </p>
                <p className="text-sm font-bold text-terracotta">
                  {finalPrice.toLocaleString()} تومان
                </p>
              </>
            ) : (
              <p className="text-sm font-bold dark:text-cream">
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

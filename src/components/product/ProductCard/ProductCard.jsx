import { Link } from "react-router-dom";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

function ProductCard({ product }) {
  const hasDiscount = product.discount > 0;

  const finalPrice = hasDiscount
    ? product.price - (product.price * product.discount) / 100
    : product.price;

  return (
    <div className="group relative">
      <FavoriteButton product={product} />

      <Link to={`/products/${product.id}`}>
        <div className="relative overflow-hidden rounded-xl bg-surface shadow transition duration-300 group-hover:-translate-y-1 group-hover:shadow-md">
          {hasDiscount && (
            <span className="absolute right-2 top-2 z-10 rounded-full bg-terracotta px-2 py-0.5 text-[10px] font-bold text-cream">
              %{product.discount}
            </span>
          )}

          <img
            src={product.image}
            alt={product.title}
            className="h-40 w-full object-cover"
          />

          <div className="space-y-1 p-2.5">
            <h3 className="line-clamp-2 text-xs font-bold text-foreground">
              {product.title}
            </h3>

            <p className="text-[10px] text-clementine">⭐ {product.rating}</p>

            <div className="min-h-8">
              {hasDiscount ? (
                <>
                  <p className="text-[10px] text-muted line-through">
                    {product.price.toLocaleString()} تومان
                  </p>
                  <p className="text-xs font-bold text-terracotta">
                    {finalPrice.toLocaleString()} تومان
                  </p>
                </>
              ) : (
                <p className="text-xs font-bold text-foreground">
                  {product.price.toLocaleString()} تومان
                </p>
              )}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;

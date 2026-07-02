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
        rounded-3xl  bg-white shadow  transition  duration-300  hover:-translate-y-2    hover:shadow-xl dark:bg-slate-800 "
      >
        {hasDiscount && (
          <span
            className="
        absolute
        left-3
        top-3
        z-10
        rounded-full
        bg-red-500
        px-3
        py-1
        text-sm
        font-bold
        text-white
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
          <h3 className="font-bold dark:text-white">{product.title}</h3>

          <p className="text-yellow-500">⭐ {product.rating}</p>

          <p className="font-bold dark:text-white">
            <div className="mt-3">
              {hasDiscount ? (
                <>
                  <p className="text-sm text-slate-500 line-through">
                    {product.price.toLocaleString()} تومان
                  </p>

                  <p className="font-bold text-red-500">
                    {finalPrice.toLocaleString()} تومان
                  </p>
                </>
              ) : (
                <p className="font-bold dark:text-white">
                  {product.price.toLocaleString()} تومان
                </p>
              )}
            </div>
          </p>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;

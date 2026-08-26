import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../store/slices/cartSlice";

function ProductInfo({ product }) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const hasDiscount = product.discount > 0;

  const finalPrice = hasDiscount
    ? product.price - (product.price * product.discount) / 100
    : product.price;
  const dispatch = useDispatch();

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold dark:text-cream">{product.title}</h1>

      <div className="flex items-center gap-2">
        <span className="text-clementine">⭐ {product.rating}</span>

        <span className="text-muted">({product.reviewCount} نظر)</span>
      </div>

      <p className="text-muted dark:text-oat">
        {product.description}
      </p>

      <div>
        {hasDiscount ? (
          <>
            <p className="text-lg text-muted line-through">
              {product.oldPrice.toLocaleString()} تومان
            </p>

            <p className="text-3xl font-bold text-terracotta">
              {product.price.toLocaleString()} تومان
            </p>
          </>
        ) : (
          <p className="text-3xl font-bold dark:text-cream">
            {product.price.toLocaleString()} تومان
          </p>
        )}
      </div>

      <div className="space-y-3">
        <h3 className="font-bold dark:text-cream">رنگ:</h3>

        <div className="flex gap-3">
          {product.colors.map((color) => (
            <button
              key={color}
              onClick={() => setSelectedColor(color)}
              className={`
          h-10
          w-10
          rounded-full
          border-4
          transition
          ${
            selectedColor === color
              ? "border-olive dark:border-cream"
              : "border-transparent"
          }
        `}
              style={{
                backgroundColor: color,
              }}
            />
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="font-bold dark:text-cream">سایز:</h3>

        <div className="flex gap-3">
          {product.sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`
          rounded-lg
          border
          px-4
          py-2
          transition
          ${
            selectedSize === size
              ? "bg-olive text-cream dark:bg-cream dark:text-olive"
              : "dark:border-olive dark:text-cream"
          }
        `}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <p className="text-muted dark:text-oat">
        موجودی:
        <span className="mr-2 font-bold">{product.stock} عدد</span>
      </p>

      <button
        onClick={() =>
          dispatch(
            addToCart({
              ...product,
              color: selectedColor,
              size: selectedSize,
            }),
          )
        }
        className="
    w-full
    rounded-xl
    bg-clementine
    py-4
    font-bold
    text-cream
    transition
    hover:bg-terracotta
  "
      >
        افزودن به سبد خرید
      </button>
    </div>
  );
}

export default ProductInfo;

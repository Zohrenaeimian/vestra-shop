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
      <h1 className="text-4xl font-bold dark:text-white">{product.title}</h1>

      <div className="flex items-center gap-2">
        <span className="text-yellow-500">⭐ {product.rating}</span>

        <span className="text-slate-500">({product.reviewCount} نظر)</span>
      </div>

      <p className="text-slate-600 dark:text-slate-300">
        {product.description}
      </p>

      <div>
        {hasDiscount ? (
          <>
            <p className="text-lg text-slate-400 line-through">
              {product.oldPrice.toLocaleString()} تومان
            </p>

            <p className="text-3xl font-bold text-red-500">
              {product.price.toLocaleString()} تومان
            </p>
          </>
        ) : (
          <p className="text-3xl font-bold dark:text-white">
            {product.price.toLocaleString()} تومان
          </p>
        )}
      </div>

      <div className="space-y-3">
        <h3 className="font-bold dark:text-white">رنگ:</h3>

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
              ? "border-black dark:border-white"
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
        <h3 className="font-bold dark:text-white">سایز:</h3>

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
              ? "bg-black text-white dark:bg-white dark:text-black"
              : "dark:border-slate-700 dark:text-white"
          }
        `}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <p className="text-slate-500 dark:text-slate-300">
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
    bg-yellow-400
    py-4
    font-bold
    transition
    hover:bg-yellow-500
  "
      >
        افزودن به سبد خرید
      </button>
    </div>
  );
}

export default ProductInfo;

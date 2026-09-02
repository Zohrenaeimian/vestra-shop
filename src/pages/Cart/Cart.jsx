import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../../store/slices/cartSlice";

function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="py-8 sm:py-12">
        <h1 className="text-2xl font-bold sm:text-3xl dark:text-cream">سبد خرید</h1>
        <p className="mt-6 text-muted sm:mt-8 dark:text-oat">
          سبد خرید شما خالی است.
        </p>
      </div>
    );
  }

  return (
    <div className="py-6 sm:py-8">
      <h1 className="mb-6 text-2xl font-bold sm:mb-10 sm:text-3xl dark:text-cream">
        سبد خرید
      </h1>

      <div className="space-y-4 sm:space-y-6">
        {cartItems.map((item) => (
          <div
            key={`${item.id}-${item.color}-${item.size}`}
            className="flex flex-col gap-4 rounded-2xl border border-border p-4 sm:flex-row sm:items-center sm:gap-6 sm:p-5 dark:border-olive"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-24 w-24 shrink-0 rounded-xl object-cover sm:h-32 sm:w-32"
            />

            <div className="min-w-0 flex-1">
              <h2 className="text-lg font-bold sm:text-xl dark:text-cream">
                {item.title}
              </h2>
              <p className="mt-2 text-sm text-muted">رنگ: {item.color}</p>
              <p className="text-sm text-muted">سایز: {item.size}</p>
              <p className="mt-3 font-bold dark:text-cream">
                {(item.price * item.quantity).toLocaleString()} تومان
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 sm:shrink-0">
              <button
                onClick={() =>
                  dispatch(
                    decreaseQuantity({
                      id: item.id,
                      color: item.color,
                      size: item.size,
                    })
                  )
                }
                className="flex h-10 w-10 items-center justify-center rounded-lg border text-xl dark:border-olive dark:text-cream"
              >
                -
              </button>

              <span className="text-lg font-bold dark:text-cream">
                {item.quantity}
              </span>

              <button
                onClick={() =>
                  dispatch(
                    increaseQuantity({
                      id: item.id,
                      color: item.color,
                      size: item.size,
                    })
                  )
                }
                className="flex h-10 w-10 items-center justify-center rounded-lg border text-xl dark:border-olive dark:text-cream"
              >
                +
              </button>

              <button
                onClick={() =>
                  dispatch(
                    removeFromCart({
                      id: item.id,
                      color: item.color,
                      size: item.size,
                    })
                  )
                }
                className="rounded-lg bg-terracotta px-4 py-2 text-sm text-cream transition hover:bg-terracotta/90"
              >
                حذف
              </button>
            </div>
          </div>
        ))}

        <div className="rounded-2xl border border-border p-4 sm:p-6 dark:border-olive">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <h3 className="text-lg font-bold sm:text-xl dark:text-cream">جمع کل</h3>
            <span className="text-xl font-bold text-clementine sm:text-2xl">
              {totalPrice.toLocaleString()} تومان
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;

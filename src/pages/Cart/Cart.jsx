import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../../store/slices/cartSlice";

function Cart() {
  const cartItems = useSelector(
    (state) => state.cart.cartItems
  );

  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="py-12">
        <h1 className="text-3xl font-bold dark:text-cream">
          سبد خرید
        </h1>

        <p className="mt-8 text-muted dark:text-oat">
          سبد خرید شما خالی است.
        </p>
      </div>
    );
  }

  return (
    <div className="py-8">
      <h1 className="mb-10 text-3xl font-bold dark:text-cream">
        سبد خرید
      </h1>

      <div className="space-y-6">
        {cartItems.map((item) => (
          <div
            key={`${item.id}-${item.color}-${item.size}`}
            className="
              flex
              items-center
              gap-6
              rounded-2xl
              border
              border-border
              p-5
              dark:border-olive
            "
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-32 w-32 rounded-xl object-cover"
            />

            <div className="flex-1">
              <h2 className="text-xl font-bold dark:text-cream">
                {item.title}
              </h2>

              <p className="mt-2 text-muted">
                رنگ: {item.color}
              </p>

              <p className="text-muted">
                سایز: {item.size}
              </p>

              <p className="mt-3 font-bold dark:text-cream">
                {(item.price * item.quantity).toLocaleString()} تومان
              </p>
            </div>

            <div className="flex items-center gap-3">
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
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-lg
                  border
                  text-xl
                  dark:border-olive
                  dark:text-cream
                "
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
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-lg
                  border
                  text-xl
                  dark:border-olive
                  dark:text-cream
                "
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
                className="
                  rounded-lg
                  bg-terracotta
                  px-4
                  py-2
                  text-cream
                  transition
                  hover:bg-terracotta/90
                "
              >
                حذف
              </button>
            </div>
          </div>
        ))}

        <div
          className="
            rounded-2xl
            border
            border-border
            p-6
            dark:border-olive
          "
        >
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold dark:text-cream">
              جمع کل
            </h3>

            <span className="text-2xl font-bold text-clementine">
              {totalPrice.toLocaleString()} تومان
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
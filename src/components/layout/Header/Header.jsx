import { Link } from "react-router-dom";
import { FiPackage } from "react-icons/fi";

function Header() {
  const isLoggedIn = Boolean(localStorage.getItem("currentUser"));
  const orderTrackingLink = isLoggedIn ? "/profile" : "/login";

  return (
    <header className="bg-olive text-cream">
      <div className="site-container flex flex-col items-center gap-2 py-2.5 text-center text-xs sm:flex-row sm:justify-between sm:gap-4 sm:text-sm md:py-3 md:text-base">
        <Link
          to={orderTrackingLink}
          className="flex items-center gap-2 transition hover:text-oat sm:shrink-0"
        >
          <FiPackage size={16} />
          پیگیری سفارش
        </Link>

        <p className="font-medium sm:flex-1 sm:px-2 sm:text-center">
          ارسال رایگان برای خریدهای بالای ۲ میلیون تومان
        </p>

        <Link to="/about" className="transition hover:text-oat sm:shrink-0">
          درباره وسترا
        </Link>
      </div>
    </header>
  );
}

export default Header;

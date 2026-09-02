import { Link } from "react-router-dom";
import { FiPackage } from "react-icons/fi";

function Header() {
  const isLoggedIn = Boolean(localStorage.getItem("currentUser"));
  const orderTrackingLink = isLoggedIn ? "/profile" : "/login";

  return (
    <header className="bg-olive text-cream">
      <div className="site-container flex items-center justify-between gap-4 py-2.5 text-sm md:py-3 md:text-base">
        <Link
          to={orderTrackingLink}
          className="flex items-center gap-2 transition hover:text-oat"
        >
          <FiPackage size={16} />
          پیگیری سفارش
        </Link>

        <p className="text-center font-medium">
          ارسال رایگان برای خریدهای بالای ۲ میلیون تومان
        </p>

        <Link to="/about" className="transition hover:text-oat">
          درباره وسترا
        </Link>
      </div>
    </header>
  );
}

export default Header;

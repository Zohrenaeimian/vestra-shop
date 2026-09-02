import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiHeart, FiShoppingCart, FiMenu } from "react-icons/fi";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import MobileMenu from "../MobileMenu/MobileMenu";
import { useSelector } from "react-redux";
import UserMenu from "./UserMenu/UserMenu";

const iconButtonClass =
  "flex h-10 w-10 items-center justify-center rounded-full text-xl transition hover:bg-oat/40 md:h-11 md:w-11 md:text-2xl";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const getNavLinkClass = ({ isActive }) =>
    `relative text-sm font-medium transition hover:text-clementine md:text-base after:absolute after:-bottom-1 after:right-0 after:h-0.5 after:bg-clementine after:transition-all ${
      isActive
        ? "text-clementine after:w-full"
        : "after:w-0 hover:after:w-full"
    }`;

  const isProductsActive = ({ isActive, location }) =>
    isActive || location.pathname.startsWith("/products");

  return (
    <nav className="border-b border-border/60 bg-surface pb-7 dark:border-border md:pb-8">
      <div className="mx-4 flex h-16 items-center justify-between sm:mx-6 sm:h-[4.5rem] md:h-20 md:mx-10 lg:mx-16">
        <div className="flex min-w-0 items-center gap-1 sm:gap-2">
          <button
            onClick={() => setIsMenuOpen(true)}
            className={`${iconButtonClass} md:hidden`}
            aria-label="منو"
          >
            <FiMenu />
          </button>

          <Link
            to="/"
            className="flex items-center bg-gradient-to-l from-olive to-clementine bg-clip-text text-2xl leading-none font-bold text-transparent sm:text-3xl md:text-4xl"
          >
            VESTRA
          </Link>
        </div>

        <ul className="hidden items-center gap-8 md:flex lg:gap-10">
          <li>
            <NavLink to="/" end className={getNavLinkClass}>
              خانه
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={getNavLinkClass}
              isActive={isProductsActive}
            >
              محصولات
            </NavLink>
          </li>
          <li>
            <NavLink to="/faq" className={getNavLinkClass}>
              سوالات متداول
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={getNavLinkClass}>
              درباره ما
            </NavLink>
          </li>
        </ul>

        <div className="flex shrink-0 items-center gap-0.5 sm:gap-1 md:gap-2">
          <ThemeToggle className={iconButtonClass} />
          <Link to="/favorites" className={iconButtonClass}>
            <FiHeart />
          </Link>
          <Link to="/cart" className={`${iconButtonClass} relative`}>
            <FiShoppingCart />
            {cartCount > 0 && (
              <span className="absolute top-0.5 right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-terracotta text-[10px] text-cream">
                {cartCount}
              </span>
            )}
          </Link>
          <UserMenu buttonClassName={iconButtonClass} />
        </div>

        <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </div>
    </nav>
  );
}

export default Navbar;

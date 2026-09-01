import { Link } from "react-router-dom";
import {
  FiHeart,
  FiShoppingCart,
  FiMenu,
} from "react-icons/fi";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { useState } from "react";
import MobileMenu from "../MobileMenu/MobileMenu";
import { useSelector } from "react-redux";
import SearchModal from "../SearchModal/SearchModal";
import UserMenu from "./UserMenu/UserMenu";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

   const menuButtonClass = `p-2
rounded-full
transition
hover:bg-oat/40
dark:hover:bg-olive`


  return (
    <nav
      className="
      border-b
      border-border
     bg-surface
     dark:bg-olive
     dark:border-olive
  "
    >
      <div className="site-container">
        <div className="flex h-20 items-center justify-between">
          {/* Mobile Menu */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="text-2xl md:hidden"
          >
            <FiMenu />
          </button>

          <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

          {/* Logo */}
          <div className="flex gap-7 items-center">
            <Link to="/" className="bg-gradient-to-l from-olive to-clementine bg-clip-text text-transparent font-bold text-3xl ">
            VESTRA
          </Link>
          <SearchModal/>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden items-center gap-8 md:flex">
            <li>
              <Link to="/" className="transition hover:text-clementine">
                خانه
              </Link>
            </li>

            <li>
              <Link to="/products" className="transition hover:text-clementine">
                محصولات
              </Link>
            </li>

            <li>
              <Link
                to="/products?gender=women"
                className="transition hover:text-clementine"
              >
                زنانه
              </Link>
            </li>

            <li>
              <Link
                to="/products?gender=men"
                className="transition hover:text-clementine"
              >
                مردانه
              </Link>
            </li>
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-4 text-2xl">
            

            <ThemeToggle />

            <Link to="/favorites">
              <FiHeart />
            </Link>

            <Link to="/cart" className="relative">
              <FiShoppingCart />

              {cartCount > 0 && (
                <span
                  className="
        absolute
        -right-2
        -top-2
        flex
        h-5
        w-5
        items-center
        justify-center
        rounded-full
        bg-terracotta
        text-xs
        text-cream
      "
                >
                  {cartCount}
                </span>
              )}
            </Link>
            <UserMenu />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

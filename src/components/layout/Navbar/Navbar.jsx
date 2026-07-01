import { Link } from "react-router-dom";
import {
  FiHeart,
  FiShoppingCart,
  FiUser,
  FiSearch,
  FiMenu,
} from "react-icons/fi";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { useState } from "react";
import MobileMenu from "../MobileMenu/MobileMenu";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      className="
      border-b
     bg-white
     dark:bg-slate-900
     dark:border-slate-700
  "
    >
      <div className="container mx-auto">
        <div className="flex h-20 items-center justify-between px-4">
          {/* Mobile Menu */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="text-2xl md:hidden"
          >
            <FiMenu />
          </button>

          <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

          {/* Logo */}
          <Link to="/" className="text-3xl font-bold text-slate-900">
            VESTRA
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden items-center gap-8 md:flex">
            <li>
              <Link to="/" className="transition hover:text-yellow-500">
                خانه
              </Link>
            </li>

            <li>
              <Link to="/products" className="transition hover:text-yellow-500">
                محصولات
              </Link>
            </li>

            <li>
              <Link
                to="/products?gender=women"
                className="transition hover:text-yellow-500"
              >
                زنانه
              </Link>
            </li>

            <li>
              <Link
                to="/products?gender=men"
                className="transition hover:text-yellow-500"
              >
                مردانه
              </Link>
            </li>
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-4 text-2xl">
            <button>
              <FiSearch />
            </button>

            <ThemeToggle />

            <Link to="/wishlist">
              <FiHeart />
            </Link>

            <Link to="/cart">
              <FiShoppingCart />
            </Link>

            <Link to="/login">
              <FiUser />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

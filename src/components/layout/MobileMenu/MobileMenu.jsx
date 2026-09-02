import { Link, NavLink } from "react-router-dom";
import { FiX } from "react-icons/fi";

function MobileMenu({ isMenuOpen, setIsMenuOpen }) {
  if (!isMenuOpen) return null;

  const getLinkClass = ({ isActive }) =>
    `block rounded-xl px-3 py-2 transition ${
      isActive
        ? "bg-sage/40 font-bold text-clementine"
        : "hover:bg-sage/30 hover:text-clementine"
    }`;

  const isProductsActive = ({ isActive, location }) =>
    isActive || location.pathname.startsWith("/products");

  return (
    <>
      <div
        onClick={() => setIsMenuOpen(false)}
        className="fixed inset-0 z-40 bg-olive/50"
      />

      <div className="fixed top-0 right-0 z-50 h-screen w-72 bg-surface p-6 text-foreground shadow-xl dark:bg-olive">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-olive dark:text-cream">
            VESTRA
          </h2>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-3xl"
            aria-label="بستن منو"
          >
            <FiX />
          </button>
        </div>

        <ul className="space-y-2 text-lg">
          <li>
            <NavLink
              to="/"
              end
              className={getLinkClass}
              onClick={() => setIsMenuOpen(false)}
            >
              خانه
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={getLinkClass}
              isActive={isProductsActive}
              onClick={() => setIsMenuOpen(false)}
            >
              محصولات
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/faq"
              className={getLinkClass}
              onClick={() => setIsMenuOpen(false)}
            >
              سوالات متداول
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={getLinkClass}
              onClick={() => setIsMenuOpen(false)}
            >
              درباره ما
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default MobileMenu;

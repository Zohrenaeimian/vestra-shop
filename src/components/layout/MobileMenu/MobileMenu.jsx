import { Link } from "react-router-dom";
import { FiX } from "react-icons/fi";

function MobileMenu({
  isMenuOpen,
  setIsMenuOpen,
}) {
  if (!isMenuOpen) return null;

  return (
    <>
      <div
        onClick={() => setIsMenuOpen(false)}
        className="fixed inset-0 z-40 bg-black/50"
      />

      <div
        className="
          fixed
          right-0
          top-0
          z-50
          h-screen
          w-72
          bg-white
          p-6
          shadow-xl
        "
      >
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold">
            VESTRA
          </h2>

          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-3xl"
          >
            <FiX />
          </button>
        </div>

        <ul className="space-y-6 text-lg">
          <li>
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
            >
              خانه
            </Link>
          </li>

          <li>
            <Link
              to="/products"
              onClick={() => setIsMenuOpen(false)}
            >
              محصولات
            </Link>
          </li>

          <li>
            <Link
              to="/products?gender=women"
              onClick={() => setIsMenuOpen(false)}
            >
              زنانه
            </Link>
          </li>

          <li>
            <Link
              to="/products?gender=men"
              onClick={() => setIsMenuOpen(false)}
            >
              مردانه
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default MobileMenu;
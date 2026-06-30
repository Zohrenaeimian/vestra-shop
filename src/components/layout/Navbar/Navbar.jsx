import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link
          to="/"
          className="text-2xl font-bold text-slate-900"
        >
          VESTRA
        </Link>

        <ul className="hidden gap-8 md:flex">
          <li>
            <Link to="/">خانه</Link>
          </li>

          <li>
            <Link to="/products">محصولات</Link>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <Link to="/login">ورود</Link>

          <Link to="/cart">سبد خرید</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
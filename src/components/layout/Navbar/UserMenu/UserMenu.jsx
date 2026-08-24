import { useEffect, useRef, useState } from "react";
import { FiUser } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { CiLogin, CiLogout } from "react-icons/ci";
import { Link } from "react-router-dom";

function UserMenu() {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const currentUserString = localStorage.getItem("currentUser");

  const currentUser = currentUserString ? JSON.parse(currentUserString) : null;

  const menuButtonClass = `
w-full
rounded-xl

px-3
py-2.5

text-right
text-sm
font-medium

flex
items-center
gap-2

transition-all
duration-200

hover:bg-slate-100
hover:text-amber-500
hover:-translate-x-0.5

dark:hover:bg-slate-700
`;

  const showMenu = () => {
    setIsUserMenuOpen((prev) => !prev);
  };

  const logoutHandler = () => {
    localStorage.removeItem("currentUser");
    window.location.reload();
  };

  const handleClickOutside = (e) => {
    if (!menuRef.current.contains(e.target)) {
      setIsUserMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div ref={menuRef} className="relative">
      <button onClick={showMenu}>
        <FiUser />
      </button>

      <div>
        {isUserMenuOpen && (
          <div
            className="
absolute
top-full
left-0
mt-3
w-44

rounded-2xl
border border-slate-200
bg-white/90
backdrop-blur-xl

shadow-xl
shadow-slate-200/40

p-2
flex flex-col
gap-1
 
z-50
"
          >
            {currentUser ? (
              <>
                <Link to={"/Profile"} className={menuButtonClass}>
                  <FaUser size={15} />
                  <span>پنل کاربری</span>
                </Link>
                <button className={menuButtonClass} onClick={logoutHandler}>
                  <CiLogout size={20} />
                  <span>خروج</span>
                </button>
              </>
            ) : (
              <Link to={"/login"} className={menuButtonClass}>
                <CiLogin size={20} />
                <span>ورود یا ثبت نام</span>
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default UserMenu;

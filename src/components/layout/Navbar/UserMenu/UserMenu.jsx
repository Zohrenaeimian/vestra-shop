import { useEffect, useRef, useState } from "react";
import { FiUser } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { CiLogin, CiLogout } from "react-icons/ci";
import { Link } from "react-router-dom";

function UserMenu({ buttonClassName = "" }) {
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

hover:bg-oat/40
hover:text-clementine
hover:-translate-x-0.5

dark:hover:bg-sage/20
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
      <button onClick={showMenu} className={buttonClassName} aria-label="منوی کاربر">
        <FiUser />
      </button>

      <div>
        {isUserMenuOpen && (
          <div
            className="
absolute
top-full
end-0
start-auto
mt-3
w-44

rounded-2xl
border border-border
bg-surface/90
backdrop-blur-xl

shadow-xl
shadow-oat/40

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

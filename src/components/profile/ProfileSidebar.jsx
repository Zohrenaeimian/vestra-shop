import { LuShoppingBag } from "react-icons/lu";
import { LiaComment } from "react-icons/lia";
import { IoLocationOutline } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";
import { FiLogOut } from "react-icons/fi";
import {
  MdOutlineSpaceDashboard,
  MdFavoriteBorder,
  MdOutlineSupportAgent,
} from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

function ProfileSidebar() {
  const currentUserString = localStorage.getItem("currentUser");

  const currentUser = currentUserString ? JSON.parse(currentUserString) : null;

  const menuItems = [
    {
      title: "داشبورد",
      icon: MdOutlineSpaceDashboard,
      path: "/profile/dashboard",
    },
    {
      title: "سفارش‌های من",
      icon: LuShoppingBag,
      path: "/profile/orders",
    },
    {
      title: "علاقه‌مندی‌ها",
      icon: MdFavoriteBorder,
      path: "/profile/favorites",
    },
    {
      title: "آدرس‌های من",
      icon: IoLocationOutline,
      path: "/profile/addresses",
    },
    {
      title: "نظرات من",
      icon: LiaComment,
      path: "/profile/reviews",
    },
    {
      title: "ویرایش اطلاعات",
      icon: CiEdit,
      path: "/profile/edit",
    },
    {
      title: "پشتیبانی",
      icon: MdOutlineSupportAgent,
      path: "/profile/support",
    },
  ];


  const navigate = useNavigate();
  const logoutHandler = () => {
    localStorage.removeItem("currentUser");
    navigate("/");
  };

  

  const menuItemClass = `
group

w-full

flex
items-center
gap-3

px-4
py-3

rounded-2xl

text-slate-700
font-medium

transition-all
duration-300

hover:bg-slate-50
hover:text-[#D4AF37]
`;

  const sectionTitleClass = `
mb-3

text-lg

font-bold

text-slate-400
`;

  const iconClass = `
  text-xl

  text-slate-500

  transition-all
  duration-300

  group-hover:text-[#D4AF37]
  `;

  const activeClass = `
bg-[#FFF8DC]

text-[#D4AF37]

border
border-[#F4E4A6]
`;

  const logoutClass = `
group

w-full

flex
items-center
gap-3

px-4
py-3

rounded-2xl

text-red-500

transition-all
duration-300

hover:bg-red-50
`;

  return (
    <>
      <aside className="w-72 shrink-0">
        <div
          className="
    sticky
    top-6

    h-[calc(100vh-48px)]

    rounded-3xl
    border
    border-slate-200
    bg-white
    shadow-lg

    p-6
"
        >
          <div
            className="flex
gap-3

pb-5

border-b
border-slate-100"
          >
            <div
              className="
  flex
  items-center
  gap-4

  pb-6

  border-b
  border-slate-100
"
            ></div>
            <div className="">
              <p className={sectionTitleClass}>
                {" "}
                خوش آمدید {currentUser.name}{" "}
              </p>
            </div>
          </div>
          <div className="flex-1">
            <section>
              <ul className="space-y-1">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.title}>
                      <button className={menuItemClass}>
                        <Icon className={iconClass} />
                        <span>{item.title}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </section>
          </div>

          <Link className={logoutClass} onClick={logoutHandler}>
            <FiLogOut />
            <span>خروج از حساب کاربری</span>
          </Link>
        </div>
      </aside>
    </>
  );
}

export default ProfileSidebar;

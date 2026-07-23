import { useState } from "react";
import { PiEyeLight, PiEyeSlash } from "react-icons/pi";
import { getUsersByPhoneAndPass } from "../../../services/authService";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function LoginForm() {
  const [isVisible, setIsVisible] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const EyeIcon = isVisible ? PiEyeLight : PiEyeSlash;
  const togglePasswordVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  const loginHandler = async (e) => {
    e.preventDefault();

    const response = await getUsersByPhoneAndPass(phoneNumber, password);

    const users = response.data;

    if (users.length > 0) {
      const user = users[0];
      const userInfo = {
        id: user.id,
        name: user.name,
        phoneNumber: user.phoneNumber,
        role: user.role,
      };
      const result = JSON.stringify(userInfo);
      localStorage.setItem("currentUser", result);
      
      Swal.fire({
        title: "ورود موفق",
        text: "خوش آمدید، ورود شما با موفقیت انجام شد",
        icon: "success",
        showConfirmButton: false,
        animation: true,
        timer: 1000,
        timerProgressBar: true,
      }).then(() => {
        navigate("/");
      })
    } else {
      Swal.fire({
        title: "ورود ناموفق",
        text: "شماره موبایل یا رمز عبور اشتباه است",
        icon: "error",
        confirmButtonText: "تلاش مجدد",
      });
    }
  };

  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 py-12 lg:px-8">
      <div
        className="
  mt-10
  w-full
  max-w-md

  rounded-3xl

  border
  border-slate-200/70

  bg-white/70
  backdrop-blur-xl

  p-8

  shadow-xl
  shadow-amber-200/20

  dark:border-slate-700
  dark:bg-slate-800/60
"
      >
        <h2 className="text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          ورود به حساب کاربری
        </h2>

        <form onSubmit={loginHandler} className="space-y-6">
          <div>
            <label
              htmlFor="phoneNumber"
              className="block text-sm/6 font-medium text-gray-900"
            >
              شماره موبایل :
            </label>
            <div className="mt-2">
              <input
                id="phoneNumber"
                type="tel"
                name="phoneNumber"
                required
                autoComplete="tel"
                placeholder="شماره موبایل خود را وارد کنید"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-right text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm/6 font-medium text-gray-900"
              >
                رمز عبور :
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-[#001845] hover:text-[#001845]/60"
                >
                  رمز عبور خود را فراموش کردید؟
                </a>
              </div>
            </div>
            <div className="mt-2 flex  items-center">
              <input
                id="password"
                type={isVisible ? "text" : "password"}
                name="password"
                required
                autoComplete="current-password"
                placeholder="رمز عبور خود را وارد کنید"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />

              <EyeIcon
                onClick={togglePasswordVisibility}
                className="-mr-8 cursor-pointer"
                size={20}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-[#ffe747] px-3 py-1.5 text-sm/6 font-semibold text-black shadow-xs hover:bg-[#ffe747]/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              ورود
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm/6 text-gray-500">
          حساب کاربری ندارید؟
          <Link to={"/register"}
            href="#"
            className="pr-1 font-semibold text-indigo-600 hover:text-indigo-500"
          >
            ثبت نام
          </Link>
        </p>
      </div>
    </section>
  );
}

export default LoginForm;

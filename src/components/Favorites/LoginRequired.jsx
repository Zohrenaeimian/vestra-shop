import { Link } from "react-router-dom";
import { FiHeart } from "react-icons/fi";

function LoginRequired() {
  return (
    <div className="mx-auto max-w-md rounded-3xl border border-border bg-surface p-10 text-center dark:border-olive dark:bg-olive/40">
      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-sage/40 text-terracotta">
        <FiHeart size={28} />
      </div>
      <h1 className="text-2xl font-bold">علاقه‌مندی‌های من</h1>
      <p className="mt-3 text-sm leading-7 text-muted">
        برای مشاهده و مدیریت علاقه‌مندی‌ها ابتدا وارد حساب کاربری خود شوید.
      </p>
      <Link
        to="/login"
        className="mt-6 inline-flex rounded-full bg-clementine px-6 py-3 text-sm font-bold text-cream transition hover:bg-terracotta"
      >
        ورود به حساب
      </Link>
    </div>
  );
}

export default LoginRequired;

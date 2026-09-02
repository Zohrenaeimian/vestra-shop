import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center px-4 py-12 text-center">
      <p className="text-6xl font-bold text-clementine sm:text-8xl">۴۰۴</p>
      <h1 className="mt-4 text-2xl font-bold sm:text-3xl dark:text-cream">
        صفحه پیدا نشد
      </h1>
      <p className="mt-3 max-w-md text-sm text-muted sm:text-base dark:text-oat">
        صفحه‌ای که دنبالش هستید وجود ندارد یا جابه‌جا شده است.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex rounded-full bg-clementine px-6 py-3 text-sm font-bold text-cream transition hover:bg-terracotta"
      >
        بازگشت به خانه
      </Link>
    </div>
  );
}

export default NotFound;

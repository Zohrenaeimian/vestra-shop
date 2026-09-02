import { Link } from "react-router-dom";
import { FiAward, FiHeart, FiShield, FiTruck } from "react-icons/fi";

function About() {
  const values = [
    {
      icon: FiHeart,
      title: "طراحی با حس",
      text: "پوشاکی که هم راحت باشد هم شیک.",
    },
    {
      icon: FiShield,
      title: "کیفیت تضمینی",
      text: "انتخاب مواد اولیه باکیفیت و دوخت دقیق.",
    },
    {
      icon: FiTruck,
      title: "ارسال مطمئن",
      text: "بسته‌بندی ایمن و تحویل به‌موقع.",
    },
    {
      icon: FiAward,
      title: "تجربه خرید آسان",
      text: "فرآیند ساده از انتخاب تا دریافت.",
    },
  ];

  return (
    <div className="mx-auto max-w-4xl">
      <div className="mb-10 text-center">
        <p className="text-sm font-bold text-clementine">داستان ما</p>
        <h1 className="mt-2 text-2xl font-bold sm:text-3xl">درباره وسترا</h1>
        <p className="mt-4 text-sm leading-8 text-muted">
          وسترا با هدف ارائه پوشاک روزمره با ترکیب رنگ‌های گرم و طبیعی شکل
          گرفت. ما معتقدیم استایل خوب باید ساده، باکیفیت و در دسترس باشد.
        </p>
      </div>

      <div className="mb-10 rounded-3xl bg-olive p-6 text-cream sm:p-8 md:p-10">
        <h2 className="text-xl font-bold">ماموریت ما</h2>
        <p className="mt-4 leading-8 text-oat">
          ساختن فضایی برای خرید لباس‌هایی که هم برای استفاده روزانه مناسب‌اند و
          هم حس مدرن و آرامش‌بخش دارند. از انتخاب پارچه تا ارسال، کیفیت
          تجربه مشتری برای ما اولویت است.
        </p>
      </div>

      <div className="mb-10 grid gap-4 sm:grid-cols-2">
        {values.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="rounded-2xl border border-border bg-surface p-6 dark:border-border"
            >
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-sage/40 text-olive">
                <Icon size={20} />
              </div>
              <h3 className="font-bold">{item.title}</h3>
              <p className="mt-2 text-sm text-muted">{item.text}</p>
            </div>
          );
        })}
      </div>

      <div className="text-center">
        <p className="mb-4 text-sm text-muted">
          سوالی دارید؟ بخش سوالات متداول را ببینید.
        </p>
        <Link
          to="/faq"
          className="inline-flex rounded-full bg-clementine px-6 py-3 text-sm font-bold text-cream transition hover:bg-terracotta"
        >
          رفتن به سوالات متداول
        </Link>
      </div>
    </div>
  );
}

export default About;

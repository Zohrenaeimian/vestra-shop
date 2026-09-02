import { FiHeadphones, FiTruck, FiShield, FiLock } from "react-icons/fi";

function WhyUs() {
  const items = [
    {
      icon: FiHeadphones,
      title: "پشتیبانی ۲۴ ساعته",
      text: "هر زمان که لازم داشتی کنار تو هستیم",
    },
    {
      icon: FiTruck,
      title: "ارسال سریع",
      text: "تحویل به‌موقع در سراسر کشور",
    },
    {
      icon: FiShield,
      title: "ضمانت اصالت",
      text: "کیفیت واقعی با تضمین برگشت",
    },
    {
      icon: FiLock,
      title: "پرداخت امن",
      text: "خرید مطمئن با درگاه امن",
    },
  ];

  return (
    <section>
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-bold">چرا وسترا؟</h2>
        <p className="mt-2 text-sm text-muted">
          تجربه‌ای گرم و مطمئن از خرید پوشاک
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="rounded-2xl border border-border bg-surface px-4 py-6 text-center transition hover:border-clementine hover:shadow-md dark:border-border"
            >
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-sage/40 text-olive">
                <Icon size={22} />
              </div>
              <h3 className="font-bold">{item.title}</h3>
              <p className="mt-2 text-sm text-muted">{item.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default WhyUs;

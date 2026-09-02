import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const faqItems = [
  {
    question: "چقدر طول می‌کشد تا بسته به دستم برسد؟",
    answer:
      "سفارش‌های تهران معمولاً ۱ تا ۳ روز کاری و سفارش‌های شهرستان ۳ تا ۷ روز کاری زمان می‌برد. بعد از ارسال، کد رهگیری برای شما پیامک می‌شود.",
  },
  {
    question: "پشتیبانی چطور است؟",
    answer:
      "تیم پشتیبانی وسترا به صورت ۲۴ ساعته از طریق تلفن، ایمیل و چت آنلاین پاسخگوی شماست. برای پیگیری سفارش هم می‌توانید از بخش پروفایل استفاده کنید.",
  },
  {
    question: "آیا امکان تعویض یا مرجوعی وجود دارد؟",
    answer:
      "بله، تا ۷ روز پس از دریافت محصول می‌توانید درخواست مرجوعی یا تعویض ثبت کنید. محصول باید سالم و بدون استفاده باشد.",
  },
  {
    question: "هزینه ارسال چقدر است؟",
    answer:
      "برای خریدهای بالای ۲ میلیون تومان ارسال رایگان است. برای مبالغ کمتر، هزینه ارسال بر اساس شهر مقصد محاسبه می‌شود.",
  },
  {
    question: "آیا محصولات اصل هستند؟",
    answer:
      "تمام محصولات وسترا با ضمانت اصالت عرضه می‌شوند. در صورت مغایرت، وجه پرداختی بدون قید و شرط بازگردانده می‌شود.",
  },
  {
    question: "چطور می‌توانم سفارش را پیگیری کنم؟",
    answer:
      "بعد از ورود به حساب کاربری، در بخش سفارش‌ها وضعیت سفارش و کد رهگیری پستی قابل مشاهده است.",
  },
];

function FaqItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-surface dark:border-olive dark:bg-olive/40">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-3 p-4 text-right text-sm transition hover:bg-sage/20 sm:gap-4 sm:p-5 sm:text-base"
      >
        <span className="font-bold text-olive dark:text-cream">{question}</span>
        <FiChevronDown
          className={`shrink-0 text-clementine transition ${isOpen ? "rotate-180" : ""}`}
          size={20}
        />
      </button>

      {isOpen && (
        <div className="border-t border-border px-5 py-4 text-sm leading-7 text-muted dark:border-olive dark:text-oat">
          {answer}
        </div>
      )}
    </div>
  );
}

function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="mx-auto max-w-3xl">
      <div className="mb-10 text-center">
        <p className="text-sm font-bold text-clementine">پشتیبانی</p>
        <h1 className="mt-2 text-2xl font-bold sm:text-3xl">سوالات متداول</h1>
        <p className="mt-3 text-sm text-muted">
          پاسخ سوالات رایج درباره ارسال، پشتیبانی و مرجوعی
        </p>
      </div>

      <div className="space-y-3">
        {faqItems.map((item, index) => (
          <FaqItem
            key={item.question}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            onToggle={() =>
              setOpenIndex((current) => (current === index ? -1 : index))
            }
          />
        ))}
      </div>
    </div>
  );
}

export default Faq;

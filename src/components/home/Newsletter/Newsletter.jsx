function Newsletter() {
  return (
    <section className="overflow-hidden rounded-3xl bg-olive px-6 py-10 text-cream md:px-10">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div className="max-w-md">
          <h2 className="text-2xl font-bold">از تخفیف‌ها جا نمون</h2>
          <p className="mt-2 text-sm text-oat">
            با عضویت در خبرنامه، از کالکشن‌ها و پیشنهادهای ویژه باخبر شو.
          </p>
        </div>

        <div className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
          <input
            type="tel"
            placeholder="شماره موبایل"
            className="flex-1 rounded-full border-0 bg-cream px-5 py-3 text-foreground outline-none placeholder:text-muted"
          />
          <button
            type="button"
            className="rounded-full bg-clementine px-6 py-3 font-bold text-cream transition hover:bg-terracotta"
          >
            عضویت
          </button>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;

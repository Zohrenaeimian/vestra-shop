import { MdOutlineWavingHand } from "react-icons/md";

function Dashboard() {
  return (
    <section className="flex-1">
      <div className="rounded-3xl border border-border bg-background p-4 sm:p-6 lg:p-8">
        <div className="mb-6 sm:mb-8">
          <h1 className="flex gap-1 text-2xl font-bold sm:text-3xl">
            خوش آمدید <MdOutlineWavingHand />
          </h1>
          <p className="mt-2 text-sm text-muted sm:text-base">
            خلاصه‌ای از حساب کاربری شما
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          <div className="rounded-3xl bg-surface p-4 text-sm shadow sm:p-6 sm:text-base">
            سفارش‌ها
          </div>
          <div className="rounded-3xl bg-surface p-4 text-sm shadow sm:p-6 sm:text-base">
            علاقه‌مندی‌ها
          </div>
          <div className="rounded-3xl bg-surface p-4 text-sm shadow sm:p-6 sm:text-base">
            آدرس‌ها
          </div>
          <div className="rounded-3xl bg-surface p-4 text-sm shadow sm:p-6 sm:text-base">
            نظرات
          </div>
        </div>

        <div className="mt-6 rounded-3xl bg-surface p-4 shadow sm:mt-8 sm:p-6">
          <h2 className="mb-4 text-lg font-bold sm:text-xl">آخرین سفارش</h2>
          <div className="text-sm text-muted sm:text-base">
            هنوز سفارشی ثبت نشده است.
          </div>
        </div>

        <div className="mt-6 rounded-3xl bg-surface p-4 shadow sm:mt-8 sm:p-6">
          <h2 className="mb-4 text-lg font-bold sm:text-xl">علاقه‌مندی‌های اخیر</h2>
          <div className="text-sm text-muted sm:text-base">
            محصولی در علاقه‌مندی‌ها وجود ندارد.
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;

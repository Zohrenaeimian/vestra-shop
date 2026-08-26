import { MdOutlineWavingHand } from "react-icons/md";

function Dashboard() {
  return (
    <section className="flex-1 ">

     <div className="rounded-3xl border border-border bg-background p-8">
         {/* Header */}
      <div className=" mb-8">
        <h1 className="flex gap-1 text-3xl font-bold">
          خوش آمدید <MdOutlineWavingHand />
        </h1>

        <p className="mt-2 text-muted">
          خلاصه‌ای از حساب کاربری شما
        </p>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-4 gap-6">

        <div className="rounded-3xl bg-surface p-6 shadow">
          سفارش‌ها
        </div>

        <div className="rounded-3xl bg-surface p-6 shadow">
          علاقه‌مندی‌ها
        </div>

        <div className="rounded-3xl bg-surface p-6 shadow">
          آدرس‌ها
        </div>

        <div className="rounded-3xl bg-surface p-6 shadow">
          نظرات
        </div>

      </div>

      {/* Last Order */}
      <div className="mt-8 rounded-3xl bg-surface p-6 shadow">

        <h2 className="text-xl font-bold mb-4">
          آخرین سفارش
        </h2>

        <div className="text-muted">
          هنوز سفارشی ثبت نشده است.
        </div>

      </div>

      {/* Favorites */}
      <div className="mt-8 rounded-3xl bg-surface p-6 shadow">

        <h2 className="text-xl font-bold mb-4">
          علاقه‌مندی‌های اخیر
        </h2>

        <div className="text-muted">
          محصولی در علاقه‌مندی‌ها وجود ندارد.
        </div>

      </div>
     </div>

    </section>
  );
}

export default Dashboard;
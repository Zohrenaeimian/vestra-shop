import { useState } from "react";
import FilterAccordion from "../FilterAccordion/FilterAccordion";
import PriceRangeFilter from "../PriceRangeFilter/PriceRangeFilter";
import { FiFilter } from "react-icons/fi";

function FilterSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const categories = [
    { label: "همه", value: "" },
    { label: "تیشرت ", value: "tshirt" },
    { label: "شومیز", value: "blouse" },
    { label: "پیراهن  زنانه", value: "dress" },
    { label: "پیراهن مردانه", value: "shirt" },
    { label: "شلوار", value: "pants" },
    { label: "شلوار جین", value: "jeans" },
    { label: " دامن ", value: "skirt" },
    { label: "کیف", value: "bag" },
    { label: "جوراب", value: "socks" },
  ];

  const genders = [
    { label: "همه", value: "" },
    { label: "زنانه", value: "women" },
    { label: "مردانه", value: "men" },
  ];

  return (
    <div>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="mb-4 flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-surface px-4 py-3 text-sm font-bold transition hover:bg-sage/20 lg:hidden dark:border-border"
      >
        <FiFilter />
        {isOpen ? "بستن فیلترها" : "نمایش فیلترها"}
      </button>

      <div className={`${isOpen ? "block" : "hidden"} lg:block`}>
        <h3 className="mb-6 text-lg font-bold sm:text-xl dark:text-cream">فیلترها</h3>

        <div className="space-y-4">
          <FilterAccordion
            title="دسته بندی"
            param="category"
            options={categories}
            defaultOpen
          />
          <FilterAccordion
            title="جنسیت"
            param="gender"
            options={genders}
            defaultOpen={false}
          />
          <PriceRangeFilter defaultOpen={false} />
        </div>
      </div>
    </div>
  );
}

export default FilterSidebar;

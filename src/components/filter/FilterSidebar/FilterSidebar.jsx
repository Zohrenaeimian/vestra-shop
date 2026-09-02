import FilterAccordion from "../FilterAccordion/FilterAccordion";
import PriceRangeFilter from "../PriceRangeFilter/PriceRangeFilter";

function FilterSidebar() {
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
      <h3 className="mb-6 text-xl font-bold dark:text-cream">فیلترها</h3>

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
  );
}

export default FilterSidebar;

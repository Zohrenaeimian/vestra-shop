import FilterAccordion from "../FilterAccordion/FilterAccordion";

function FilterSidebar() {
  const categories = [
    {
      label: "همه",
      value: "",
    },
    {
      label: "تیشرت ",
      value: "tshirt",
    },
    {
      label: "شومیز",
      value: "blouse",
    },
    {
      label: "پیراهن  زنانه",
      value: "dress",
    },
    {
      label: "پیراهن مردانه",
      value: "shirt",
    },
    {
      label: "شلوار",
      value: "pants",
    },
    {
      label: "شلوار جین",
      value: "jeans",
    },
    {
      label: " دامن ",
      value: "skirt",
    },
    {
      label: "کیف",
      value: "bag",
    },
    {
      label: "جوراب",
      value: "socks",
    },
  ];
  const genders = [
    {
      label: "همه",
      value: "",
    },
    {
      label: "زنانه",
      value: "women",
    },
    {
      label: "مردانه",
      value: "men",
    },
  ];
  const prices = [
    {
      label: "همه",
      value: "",
    },
    {
      label: "زیر 1 میلیون تومان",
      value: "under1000",
    },
    {
      label: "1 میلیون تا 2 میلیون",
      value: "1000to2000",
    },
    {
      label: "بالای 2 میلیون",
      value: "over2000",
    },
  ];
  return (
    <div>
      <h3 className="mb-6 text-xl font-bold dark:text-cream ">فیلترها</h3>

      <div className="space-y-4 ">
        <FilterAccordion
          title="دسته بندی"
          param="category"
          options={categories}
        />
        <FilterAccordion title=" جنسیت" param="gender" options={genders} />
        <FilterAccordion title=" قیمت" param="price" options={prices} />
      </div>
    </div>
  );
}

export default FilterSidebar;

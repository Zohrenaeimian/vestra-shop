import FilterAccordion from "../FilterAccordion/FilterAccordion";

function CategoryFilter() {


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

  

  return (
    <div>
      <h4 className="mb-4 font-bold dark:text-white">دسته‌بندی</h4>

      <div className="space-y-3">
        
          <FilterAccordion categories ={categories} />
            
        
      </div>
    </div>
  );
}

export default CategoryFilter;

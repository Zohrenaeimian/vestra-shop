import { useSearchParams } from "react-router-dom";

function SortBar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentSort = searchParams.get("sort");

  const sorts = [
    {
      label: " کمترین قیمت",
      value: "cheapest",
    },
    {
      label: " بیشترین قیمت",
      value: "priciest",
    },
    {
      label: " جدیدترین ",
      value: "newest",
    },
    {
      label: " بیشترین فروش ",
      value: "bestselling",
    },
  ];

  const changeSort = (value) => {
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set("sort", value);
    } else {
      params.delete("sort");
    }

    setSearchParams(params);
  };

  return (
    <div>
      <h4 className="mb-4 font-bold dark:text-cream">مرتب سازی :</h4>

      <div className="flex flex-wrap gap-3 mb-8 ">
        {sorts.map((sort) => (
          <button
            key={sort.value}
            onClick={() => changeSort(sort.value)}
            className={` 
                rounded-full
  border
  px-5
  py-2
  text-sm
  font-medium
  cursor-pointer
  transition
  duration-300
  backdrop-blur-sm
              
     ${
       currentSort === sort.value
         ? "bg-clementine text-cream border-clementine shadow-lg"
         : "bg-surface/40 dark:bg-olive/40 border-border dark:border-olive hover:bg-sage/40 dark:hover:bg-olive"
     }
     `}
          >
            {sort.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SortBar;

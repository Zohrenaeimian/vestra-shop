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
      <h4 className="mb-4 font-bold dark:text-white">مرتب سازی :</h4>

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
         ? "bg-yellow-400 text-black border-yellow-400 shadow-lg"
         : "bg-white/40 dark:bg-slate-800/40 border-slate-300 dark:border-slate-700 hover:bg-yellow-100 dark:hover:bg-slate-700"
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

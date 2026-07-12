import { useSearchParams } from "react-router-dom";

function CategoryFilter() {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentCategory = searchParams.get("category");

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

  const changeCategory = (value) => {
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set("category", value);
    } else {
      params.delete("category");
    }

    setSearchParams(params);
  };

  return (
    <div>
      <h4 className="mb-4 font-bold dark:text-white">دسته‌بندی</h4>

      <div className="space-y-3">
        {categories.map((category) => (
          <button
            key={category.value}
            onClick={() => changeCategory(category.value)}
            className={`block cursor-pointer ${
              currentCategory === category.value
                ? "font-bold text-yellow-500"
                : "dark:text-white"
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CategoryFilter;

import { useSearchParams } from "react-router-dom";

function PriceFilter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPrice = searchParams.get("price");

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
  const changePrice = (value) => {
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set("price", value);
    } else {
      params.delete("price");
    }

    setSearchParams(params);
  };
  return (
    <div>
      <h4 className="mb-4 font-bold dark:text-white">قیمت</h4>

      <div className="space-y-3">
        {prices.map((price) => (
          <button
            key={price.value}
            onClick={() => changePrice(price.value)}
            className={`block cursor-pointer ${
              currentPrice === price.value
                ? "font-bold text-yellow-500"
                : "dark:text-white"
            }`}
          >
            {price.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default PriceFilter;

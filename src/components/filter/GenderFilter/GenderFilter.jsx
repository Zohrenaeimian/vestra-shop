import { useSearchParams } from "react-router-dom";

function GenderFilter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentGender = searchParams.get("gender");

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

  const changeGender = (value) => {
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set("gender", value);
    } else {
      params.delete("gender");
    }

    setSearchParams(params);
  };

  return (
    <div>
      <h4 className="mb-4 font-bold dark:text-white"> جنسیت</h4>
      <div className="space-y-3">
        {genders.map((gender) => (
          <button
            key={gender.value}
            onClick={() => changeGender(gender.value)}
            className={`block cursor-pointer ${
              currentGender === gender.value
                ? "font-bold text-yellow-500"
                : "dark:text-white"
            }`}
          >
            {gender.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default GenderFilter;

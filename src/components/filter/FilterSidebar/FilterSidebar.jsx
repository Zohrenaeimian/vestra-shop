import CategoryFilter from "../CategoryFilter/CategoryFilter";
import GenderFilter from "../GenderFilter/GenderFilter";


function FilterSidebar({setSelectedGender}) {
  return (
    <div>
      <h3 className="mb-6 text-xl font-bold dark:text-white">
        فیلترها
      </h3>

      <div className="space-y-4">
        
        <CategoryFilter/>
        

        <GenderFilter setSelectedGender={setSelectedGender} />

        <p className="font-semibold dark:text-white">
          قیمت
        </p>

        <p className="font-semibold dark:text-white">
          مرتب سازی
        </p>
      </div>
    </div>
  );
}

export default FilterSidebar;
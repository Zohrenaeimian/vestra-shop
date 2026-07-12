import SortBar from "../../sortBar/sortBar";
import CategoryFilter from "../CategoryFilter/CategoryFilter";
import GenderFilter from "../GenderFilter/GenderFilter";
import PriceFilter from "../PriceFilter/PriceFilter";


function FilterSidebar() {
  return (
    <div>
      <h3 className="mb-6 text-xl font-bold dark:text-white">
        فیلترها
      </h3>

      <div className="space-y-4">
        
        <CategoryFilter/>
        

        <GenderFilter/>

        <PriceFilter/>

        
      </div>
    </div>
  );
}

export default FilterSidebar;
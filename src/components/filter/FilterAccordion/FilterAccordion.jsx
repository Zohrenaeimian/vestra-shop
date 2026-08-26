import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

function FilterAccordion({ title, param, options }) {
  const [isOpen, setIsOpen] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const currentValue = searchParams.get(param);

  const changeValue = (value) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set(param, value);
    } else {
      params.delete(param);
    }
    setSearchParams(params);
  };
  return (
    <div   className="
    overflow-hidden
    rounded-2xl
    border
    border-border/70
    bg-surface/60
    backdrop-blur-md
    shadow-lg
    transition-all
    duration-300
    dark:border-olive
    dark:bg-olive/50
  ">
      <div className="
flex
items-center
justify-between
p-4
cursor-pointer
transition-colors
duration-300
hover:bg-sage/30
dark:hover:bg-olive/40
"
      onClick={()=> setIsOpen(!isOpen)}
      >
        <h4 className="font-bold dark:text-cream">{title}</h4>
        <span>{isOpen? <FaAngleUp />: <FaAngleDown />} </span>
      </div>
      {isOpen && (
        <div className=" border-t-2 border-border/50 p-4 space-y-3 ">
      {options?.map ((option)=>(
        <button key={option.value}
        onClick={()=> changeValue (option.value) }
        className={`block w-full rounded-lg px-3 py-2 text-right transition-all duration-200 cursor-pointer ${
              currentValue === option.value
                ? " bg-sage/70 font-bold text-olive shadow-[0_0_30px_rgba(224,122,31,0.12)]" 
                : "hover:bg-oat/40 dark:hover:bg-olive dark:text-cream "
            }`}
        >
      {option.label}
        </button>

      ))}

        </div>
      )}
    </div>
  );
}
export default FilterAccordion;

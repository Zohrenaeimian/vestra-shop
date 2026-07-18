import { FiSearch } from "react-icons/fi";

function SearchInput({ value, onChange, onFocus, onBlur, isOpen, onToggle }) {
  return (
    <div
      className={` flex
  items-center
  h-11
  rounded-full
  overflow-hidden
  border
  border-slate-300
  bg-white
  transition-all
  duration-300
  focus-within:border-yellow-400
  focus-within:ring-4
  focus-within:ring-yellow-300/20
  dark:bg-slate-800
  dark:border-slate-700 
  ${ isOpen ? "w-64 " : "w-12"}
  `}
 

    >
      <button
        type="button"
        onClick={onToggle}
        className="
  h-full
  px-4
  flex
  items-center
  justify-center

  bg-yellow-200
  text-slate-900

  transition
  hover:bg-yellow-300
  cursor-pointer
"
      >
        <FiSearch size={22} />
      </button>

      <input
        className={`
 flex-1
 h-full
 bg-transparent
 px-4
 outline-none
 transition-all
 duration-300
 placeholder:text-slate-400
 dark:placeholder:text-slate-500
 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
`}
        type="text"
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        placeholder="جستجو در وسترا"
      />
    </div>
  );
}

export default SearchInput;

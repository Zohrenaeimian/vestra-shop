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
  border-border
  bg-surface
  transition-all
  duration-300
  focus-within:border-clementine
  focus-within:ring-4
  focus-within:ring-clementine/20
 
  dark:border-border 
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

  bg-sage
  text-olive

  transition
  hover:bg-clementine
  hover:text-cream
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
 placeholder:text-muted
 dark:placeholder:text-oat
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

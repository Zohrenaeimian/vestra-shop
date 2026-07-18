import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import SearchInput from "./SearchInput";

function SearchModal() {
  const [search, setSearch] = useState("");

  const [isOpen, setIsOpen] = useState(false); // Mobile State

  const [isFocused, setIsFocused] = useState(false); // Desktop State

  const [searchParams, setSearchParams] = useSearchParams();

  const searchInputHandler = () => {
    setIsOpen(!isOpen);
  };

  const searchChangeHandler = (e) => {
    const value = e.target.value;
    setSearch(value);

    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }
    setSearchParams(params);
  };

  const deleteSearchInput = () => {
    setSearch("");
    setIsOpen(false);
    setIsFocused(false);
    const params = new URLSearchParams(searchParams);

    params.delete("search");

    setSearchParams(params);
  };

  return (
    <div>
      <SearchInput
        value={search}
        onChange={searchChangeHandler}
        onFocus={() => setIsFocused(true)}
        onBlur={deleteSearchInput}
        isOpen={isOpen}
        onToggle={searchInputHandler}
      />
    </div>
  );
}

export default SearchModal;

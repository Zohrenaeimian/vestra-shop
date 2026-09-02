import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

function SearchBar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const query = search.trim();

    if (!query) {
      navigate("/products");
      return;
    }

    navigate(`/products?search=${encodeURIComponent(query)}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full items-center gap-1.5 rounded-[2rem] bg-sage/75 p-1.5 shadow-[0_8px_28px_rgba(67,95,58,0.2)] dark:bg-sage/50"
    >
      <div className="flex flex-1 items-center gap-2 rounded-[1.5rem] bg-cream px-3 py-2 sm:px-4 dark:bg-surface">
        <FiSearch className="shrink-0 text-muted" size={17} />
        <input
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="جستجو در محصولات وسترا..."
          className="w-full bg-transparent text-right text-sm text-foreground outline-none placeholder:text-right placeholder:text-muted dark:text-cream dark:placeholder:text-oat"
        />
      </div>

      <button
        type="submit"
        className="shrink-0 rounded-[1.5rem] bg-olive px-4 py-2 text-xs font-bold text-cream transition hover:bg-clementine sm:px-5 sm:text-sm"
      >
        جستجو
      </button>
    </form>
  );
}

export default SearchBar;

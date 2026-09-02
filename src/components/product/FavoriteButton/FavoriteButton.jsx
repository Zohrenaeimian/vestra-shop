import { FiHeart } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  selectIsFavorite,
  toggleFavorite,
} from "../../../store/slices/favoritesSlice";

function FavoriteButton({ product }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isFavorite = useSelector((state) => selectIsFavorite(state, product.id));

  const handleClick = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const currentUser = localStorage.getItem("currentUser");
    if (!currentUser) {
      navigate("/login");
      return;
    }

    dispatch(toggleFavorite(product));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={isFavorite ? "حذف از علاقه‌مندی‌ها" : "افزودن به علاقه‌مندی‌ها"}
      className={`absolute left-2 top-2 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-cream/90 shadow transition hover:scale-110 ${
        isFavorite ? "text-terracotta" : "text-muted hover:text-terracotta"
      }`}
    >
      <FiHeart size={16} className={isFavorite ? "fill-terracotta" : ""} />
    </button>
  );
}

export default FavoriteButton;

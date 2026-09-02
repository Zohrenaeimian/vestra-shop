import FavoritesContent from "../../components/Favorites/FavoritesContent";
import LoginRequired from "../../components/Favorites/LoginRequired";

function Favorites() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser") || "null");

  return currentUser ? <FavoritesContent /> : <LoginRequired />;
}

export default Favorites;

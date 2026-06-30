import { FiMoon, FiSun } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../../store/slices/themeSlice";
import { useEffect } from "react";

function ThemeToggle() {
  const dispatch = useDispatch();

  const darkMode = useSelector((state) => state.theme.darkMode);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);

    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <button onClick={() => dispatch(toggleTheme())} className="text-2xl">
      {darkMode ? <FiSun /> : <FiMoon />}
    </button>
  );
}

export default ThemeToggle;

import { FiMoon, FiSun } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../../store/slices/themeSlice";
import { useEffect } from "react";
import { applyTheme } from "../../../utils/theme";

function ThemeToggle({ className = "" }) {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);

  useEffect(() => {
    applyTheme(darkMode);
  }, [darkMode]);

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className={className}
      aria-label="تغییر تم"
    >
      {darkMode ? <FiSun /> : <FiMoon />}
    </button>
  );
}

export default ThemeToggle;

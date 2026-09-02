const THEME_STORAGE_KEY = "theme";

export function getInitialDarkMode() {
  try {
    return localStorage.getItem(THEME_STORAGE_KEY) === "dark";
  } catch {
    return false;
  }
}

export function applyTheme(isDark) {
  const root = document.documentElement;

  root.classList.toggle("dark", isDark);
  root.style.colorScheme = isDark ? "only dark" : "only light";

  document.body.style.backgroundColor = isDark ? "#1a2418" : "#f6f2e8";
  document.body.style.color = isDark ? "#f6f2e8" : "#435f3a";

  try {
    localStorage.setItem(THEME_STORAGE_KEY, isDark ? "dark" : "light");
  } catch {
    // ignore storage errors (private mode, etc.)
  }

  const colorSchemeMeta = document.querySelector('meta[name="color-scheme"]');
  if (colorSchemeMeta) {
    colorSchemeMeta.setAttribute("content", isDark ? "dark" : "light");
  }

  const themeColorMeta = document.querySelector('meta[name="theme-color"]');
  if (themeColorMeta) {
    themeColorMeta.setAttribute("content", isDark ? "#1a2418" : "#f6f2e8");
  }
}

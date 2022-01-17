import * as React from "preact/compat";

const themeLocalStorageKey = "color-theme";

const getInitialTheme = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedPrefs = window.localStorage.getItem(themeLocalStorageKey);
    if (typeof storedPrefs === "string") {
      return storedPrefs;
    }

    const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
    if (userMedia.matches) {
      return "dark";
    }
  }

  // default theme
  return "light";
};

const rawSetTheme = (theme: string) => {
  const root = window.document.documentElement;
  const isDark = theme === "dark";

  root.classList.remove(isDark ? "light" : "dark");
  root.classList.add(theme);

  localStorage.setItem(themeLocalStorageKey, theme);
};

const useTheme = () => {
  const [theme, setTheme] = React.useState(getInitialTheme);

  React.useEffect(() => {
    rawSetTheme(theme);
  }, [theme]);

  return {
    theme,
    setTheme,
  };
};

type ThemeContextInterface = ReturnType<typeof useTheme>;

const ThemeContext = React.createContext<ThemeContextInterface | null>(null);

export const useThemeContext = () => {
  const ctx = React.useContext(ThemeContext);
  if (!ctx) {
    throw new Error("ThemeContext not initialised");
  }
  return ctx;
};

export const ThemeContextProvider = ({ children }) => {
  const state = useTheme();
  return (
    <ThemeContext.Provider value={state}>{children}</ThemeContext.Provider>
  );
};

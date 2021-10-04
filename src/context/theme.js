import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
  useEffect,
} from "react";
import { theme as DEFAULT_THEME } from "../utils/theme";
import { ThemeProvider as EmotionProvider } from "@emotion/react";
import merge from "lodash.merge";
export const ThemeContext = createContext(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme was called outside ThemeContext.Provider");
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(DEFAULT_THEME);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    const parsedTheme = JSON.parse(theme);
    setTheme(parsedTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  const updateTheme = useCallback((changes) => {
    setTheme((currentTheme) => merge({}, currentTheme, changes));
  }, []);

  const resetTheme = useCallback(() => {
    setTheme(DEFAULT_THEME);
  }, []);

  const contextValue = useMemo(
    () => ({ theme, updateTheme, resetTheme }),
    [resetTheme, theme, updateTheme]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      <EmotionProvider theme={theme}>{children}</EmotionProvider>
    </ThemeContext.Provider>
  );
};

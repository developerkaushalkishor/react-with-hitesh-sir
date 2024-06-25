import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  themeMode: "light",
  darkMode: () => {},
  lightMode: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

/**
 * Custom hook that provides access to the current theme using the useContext hook.
 * @returns {Object} The current theme object.
 */
export default function useTheme() {
  return useContext(ThemeContext);
}

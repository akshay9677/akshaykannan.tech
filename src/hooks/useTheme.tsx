import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

type ThemeContextType = {
  isDark: boolean;
  setTheme: (v: boolean) => void;
};

export const ThemeContext = createContext<ThemeContextType>(
  {} as ThemeContextType
);

const useThemeProvide = () => {
  const [isDark, setIsDark] = useState(true);

  const setTheme = useCallback((val: boolean) => {
    setIsDark(val);
  }, []);

  return { isDark, setTheme };
};

export const ThemeProvider = ({
  children,
}: {
  children: React.ReactElement[] | React.ReactElement;
}) => {
  const theme = useThemeProvide();

  return useMemo(
    () => (
      <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [theme.isDark, theme.setTheme]
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};

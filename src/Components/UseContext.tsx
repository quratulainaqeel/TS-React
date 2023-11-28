import { ReactNode, createContext, useState } from "react";

type ThemeType = "light" | "Dark";

interface ThemeContextType {
  theme: ThemeType;
  ToggleTheme: () => void;
}

const ContextTheme = createContext<ThemeContextType | null>({
  theme: "light",
  ToggleTheme: () => {},
});

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, settheme] = useState<ThemeType>("light");
  const ToggleTheme = () => {
    settheme((prev) => (prev === "light" ? "Dark" : "light"));
  };

  return (
    <ContextTheme.Provider value={{ theme, ToggleTheme }}>
      {children}
    </ContextTheme.Provider>
  );
};
export default function UseContext() {
  return (
    <>
      <ThemeProvider>
        <div>hello</div>
      </ThemeProvider>
    </>
  );
}

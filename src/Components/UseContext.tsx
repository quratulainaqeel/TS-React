import { ReactNode, createContext, useState } from "react";
import Box from "./Box";
 
type ThemeType = "light" | "Dark";

interface ThemeContextType {
  theme: ThemeType;
  ToggleTheme: () => void;
}

export const ContextTheme = createContext<ThemeContextType>({
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
        <Box />
      </ThemeProvider>
    </>
  );
}

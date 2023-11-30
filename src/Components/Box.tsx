import { ContextTheme } from "./UseContext";
import { useContext } from "react";
import "../index.css";

const Box = () => {
  const { theme, ToggleTheme } = useContext(ContextTheme);
  return (
    <div
      className="boxContainer"
      style={{
        backgroundColor: theme === "Dark" ? "black" : "white",
        color: theme === "Dark" ? "white" : "black",
      }}
    >
      <h1>Box 1</h1>
      <button onClick={ToggleTheme}>Change Theme</button>
    </div>
  );
};

export default Box;

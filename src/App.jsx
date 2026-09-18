import { useState } from "react";
import "./App.css";
import Counter from "./Components/Counter";
import ThemeToggle from "./Components/ThemeToggle";

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <div className={`App ${theme}`}>
      <Counter />
      <ThemeToggle tema={theme} setTema={setTheme} />
    </div>
  );
}

export default App;

import { useState } from "react";
import ClickCounter from "../ClickCounter/ClickCounter";
import css from "./App.module.css";

export default function App() {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };
  return (
    <div className={css.container}>
      <h1>State in React</h1>
      <hr />
      <ClickCounter onUpdate={handleClick} value={clicks} />
      <ClickCounter onUpdate={handleClick} value={clicks} />
      <ClickCounter onUpdate={handleClick} value={clicks} />
    </div>
  );
}

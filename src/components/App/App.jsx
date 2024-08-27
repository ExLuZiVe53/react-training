import { useState } from "react";

import Reader from "../Reader/Reader";
import ClickCounter from "../ClickCounter/ClickCounter";
import Toogler from "../Toogler/Toogler";
import articles from "../../articles.json";
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
      <Reader items={articles} />
      <hr />
      <ClickCounter onUpdate={handleClick} value={clicks} />
      <ClickCounter onUpdate={handleClick} value={clicks} />
      <ClickCounter onUpdate={handleClick} value={clicks} />
      <hr />
      <Toogler />
      <Toogler />
      <Toogler />
    </div>
  );
}

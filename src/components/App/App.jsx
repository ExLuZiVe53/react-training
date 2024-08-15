import { useState } from "react";
// import ClickCounter from "../ClickCounter/ClickCounter";
import css from "./App.module.css";

export default function App() {
  // const [clicks, setClicks] = useState(0);

  const [obj, setObj] = useState({ a: 0, b: 0, c: { x: 5, y: 10 } });

  const handleChangeObj = () => {
    setObj({ ...obj, c: { ...obj.c, x: 50 } });
  };

  // const handleClick = () => {
  //   setClicks(clicks + 1);
  // };
  return (
    <div className={css.container}>
      <h1>State in React</h1>
      <hr />
      <button onClick={handleChangeObj}>Change obj state</button>
      {/* <ClickCounter onUpdate={handleClick} value={clicks} />
      <ClickCounter onUpdate={handleClick} value={clicks} />
      <ClickCounter onUpdate={handleClick} value={clicks} /> */}
    </div>
  );
}

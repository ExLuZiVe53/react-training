import { useState } from "react";
import css from "./App.module.css";

export default function App() {
  const [clicks, setClicks] = useState(0);
  // const [text, setText] = useState("Hello");
  const [a, setA] = useState(0);

  const handleA = () => {
    setA(a + 1);
  };

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  // const handleChange = (event) => {
  //   setText(event.target.value);
  // };

  return (
    <div className={css.container}>
      <h1>State in React</h1>
      <hr />
      <button onClick={handleClick}>Number of clicks: {clicks}</button>
      <button onClick={handleA}>{a}</button>
      {/* <input type="text" onChange={handleChange} />
      <p>{text}</p> */}
    </div>
  );
}

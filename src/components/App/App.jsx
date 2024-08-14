import { useState } from "react";
import css from "./App.module.css";

const ClickCounter = () => {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };
  // const [clicksA, setClicksA] = useState(0);
  // const [clicksB, setClicksB] = useState(0);
  // const [clicksC, setClicksC] = useState(0);
  return <button onClick={handleClick}>CLicks: {clicks}</button>;
};

export default function App() {
  // const [clicksA, setClicksA] = useState(0);
  // const [clicksB, setClicksB] = useState(0);
  // const [clicksC, setClicksC] = useState(0);
  // const [text, setText] = useState("Hello");

  // const handleClickA = () => {
  //   setClicksA(clicksA + 1);
  // };

  // const handleClickB = () => {
  //   setClicksB(clicksB + 1);
  // };

  // const handleClickC = () => {
  //   setClicksC(clicksC + 1);
  // };

  // const handleChange = (event) => {
  //   setText(event.target.value);
  // };

  return (
    <div className={css.container}>
      <h1>State in React</h1>
      <hr />
      <ClickCounter />
      <ClickCounter />
      <ClickCounter />
      {/* <button onClick={handleClickA}>A: {clicksA}</button>
      <button onClick={handleClickB}>B: {clicksB}</button>
      <button onClick={handleClickC}>C: {clicksC}</button> */}
      {/* <input type="text" onChange={handleChange} />
      <p>{text}</p> */}
    </div>
  );
}

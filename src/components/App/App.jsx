import ClickCounter from "../ClickCounter/ClickCounter";
import css from "./App.module.css";
// import Reader from "../Reader/Reader";
// import Toogler from "../Toogler/Toogler";
// import articles from "../../articles.json";

export default function App() {
  return (
    <div className={css.container}>
      <h1>Effects in React</h1>
      <ClickCounter />
      {/* <hr />
      <Reader items={articles} />
      <hr /> */}
      {/* <hr />
      <Toogler />
      <Toogler />
      <Toogler /> */}
    </div>
  );
}

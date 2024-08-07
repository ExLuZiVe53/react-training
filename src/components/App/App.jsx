import css from "./App.module.css";

export default function App() {
  const handleClick = () => {
    console.log("Hello");
  };

  return (
    <div className={css.container}>
      <h1>State in React</h1>
      <hr />
      <button onClick={handleClick}>Click me!</button>
    </div>
  );
}

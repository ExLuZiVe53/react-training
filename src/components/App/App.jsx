import css from "./App.module.css";

export default function App() {
  const handleClick = (message) => {
    console.log(message);
    console.log("Hello");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("You submit form");
  };

  return (
    <div className={css.container}>
      <h1>State in React</h1>
      <hr />
      <button onClick={() => handleClick("this is Arg")}>Click me!</button>
      <button onClick={handleClick}>Click me!</button>

      <form onSubmit={handleSubmit}>
        <button>Submit</button>
      </form>
    </div>
  );
}

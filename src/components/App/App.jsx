import Reader from "../Reader/Reader";
import articles from "../../articles.json";

export default function App() {
  // console.log(data);
  return (
    <>
      <Reader items={articles} />
    </>
  );
}

// import { useState } from "react";
// import ClickCounter from "../ClickCounter/ClickCounter";
// import Toogler from "../Toogler/Toogler";
// import css from "./App.module.css";

// export default function App() {
//   const [clicks, setClicks] = useState(0);

//   const [obj, setObj] = useState({ a: 0, b: 0, c: { x: 5, y: 10 } });

//   const handleChangeObj = () => {
//     setObj({ ...obj, c: { ...obj.c, x: 50 } });
//   };

//   const handleClick = () => {
//     setClicks(clicks + 1);
//   };
//   return (
//     <div className={css.container}>
//       <h1>State in React</h1>
//       <hr />
//       {/* <button onClick={handleChangeObj}>Change obj state</button> */}
//       <ClickCounter onUpdate={handleClick} value={clicks} />
//       <ClickCounter onUpdate={handleClick} value={clicks} />
//       <ClickCounter onUpdate={handleClick} value={clicks} />
//       <hr />
//       <Toogler />
//       <Toogler />
//       <Toogler />
//     </div>
//   );
// }

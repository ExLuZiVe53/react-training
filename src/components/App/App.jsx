// import { FaBeer } from "react-icons/fa";
import PaymentList from "../PaymentList/PaymentList";
import PageTitle from "../PageTitle/PageTitle";
import initialPayments from "../../payments.json";
import css from "./App.module.css";
import Button from "../Button/Button";
// import catPhoto from "../../assets/cat-photo.jpg";

export default function App() {
  return (
    <div className={css.container}>
      {/* <FaBeer size="40" /> */}

      {/* <PageTitle text="Styling React Components" /> */}
      <PageTitle>Styling React Components</PageTitle>
      {/* <img src={catPhoto} alt="cat" width="400" />
      <img
        src="https://images2.fanpop.com/images/photos/3800000/Beautiful-Cat-cats-3878544-1024-931.jpg"
        alt="cat1"
        width="300"
      /> */}
      <Button variant="primary">First</Button>
      <Button variant="secondary" type="submit">
        Second
      </Button>
      <PaymentList payments={initialPayments} />
    </div>
  );
}

// const Panel = ({ title, children }) => {
//   return (
//     <section>
//       <h2>{title}</h2>
//       {children}
//     </section>
//   );
// };

//  <Panel title="Рейтинг">
//         <div>First panel content</div>
//       </Panel>
//       <Panel title="Що це за очки досвіду та рівні?">
//         <p>Second panel content</p>
//       </Panel>
//       <Panel title="Як отримати більше очків досвіду?">
//         <button>Third panel content</button>
//       </Panel>

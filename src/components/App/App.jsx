import PaymentList from "../PaymentList/PaymentList";
import PageTitle from "../PageTitle/PageTitle";
import initialPayments from "../../payments.json";
import css from "./App.module.css";

export default function App() {
  return (
    <div className={css.container}>
      {/* <PageTitle text="Styling React Components" /> */}
      <PageTitle>Styling React Components</PageTitle>
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

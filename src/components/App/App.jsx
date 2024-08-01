import PaymentList from "../PaymentList";
import PageTitle from "../PageTitle/PageTitle";
import initialPayments from "../../payments.json";
import css from "./App.module.css";

export default function App() {
  console.log(css);
  return (
    <div className={css.container}>
      <p className={css.text}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis,
        omnis reprehenderit neque obcaecati excepturi magnam unde rem
        repellendus inventore dolor suscipit alias blanditiis nobis incidunt hic
        ut, delectus, expedita eius.
      </p>
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

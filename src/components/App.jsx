import initialPayments from "../payments.json";
import PageTitle from "./PageTitle";
import PaymentList from "./PaymentList";

export default function App() {
  // console.log([1, 2, 3].map((el) => <li>{el}</li>));
  return (
    <>
      <PageTitle text="Payments" />
      <PaymentList payments={initialPayments} />
      {/* <ul>{[<li>1</li>, <li>2</li>, <li>3</li>]}</ul> */}
      {/* <ul>
        {[1, 2, 3, 4, 5].map((el, idx) => {
          return <li key={idx}>{el}</li>;
        })}
      </ul> */}
      {/* {5 < 10 ? <div>Hello A</div> : <p>Hello B</p>} */}
      {/* <p>{5 > 10 ? "Hello A" : "Hello B"}</p> */}
      {/* <p>Hello {5 > 10 ? "A" : "B"}</p> */}
      {/* {a && b} */}
      {/* {a ? b : c} */}
      {/* <PaymentCard payment={data1} /> */}
      {/* <PaymentCard payment={data2} /> */}
    </>
  );
}

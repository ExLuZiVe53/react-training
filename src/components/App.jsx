import payments from "../payments.json";
import PageTitle from "./PageTitle";
import PaymentCard from "./PaymentCard";

console.log(payments);

export default function App() {
  // console.log([1, 2, 3].map((el) => <li>{el}</li>));
  return (
    <>
      <PageTitle text="Payments" />
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
      <ul>
        {payments.map((item) => {
          return (
            <li key={item.id}>
              <PaymentCard payment={item} />
            </li>
          );
        })}
      </ul>
      {/* <PaymentCard payment={data1} /> */}
      {/* <PaymentCard payment={data2} /> */}
    </>
  );
}

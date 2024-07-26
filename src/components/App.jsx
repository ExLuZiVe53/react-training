import PaymentCard from "./PaymentCard";

// const payment = {
//   id: "1",
//   cardNumber: "1234 5678 9012 3456",
//   cardType: "Visa",
//   cardOwner: "John Doe",
//   date: "2024-01-01",
//   amount: 100,
//   description: "Payment for groceries",
//   isPaid: true,
// };

export default function App() {
  return (
    <>
      <h1>Payments</h1>
      <PaymentCard amount={100} />
      <PaymentCard amount={200} />
    </>
  );
}

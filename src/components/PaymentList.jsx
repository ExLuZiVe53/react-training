import PaymentCard from "./PaymentCard";

export default function PaymentList({ payments }) {
  return (
    <ul>
      {payments.map((item) => {
        return (
          <li key={item.id}>
            <PaymentCard payment={item} />
          </li>
        );
      })}
    </ul>
  );
}

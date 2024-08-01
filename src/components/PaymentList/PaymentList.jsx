import PaymentCard from "../PaymentCard/PaymentCard";
import css from "./PaymentList.module.css";

export default function PaymentList({ payments }) {
  return (
    <ul className={css.list}>
      {payments.map((item) => {
        return (
          <li key={item.id} className={css.listItem}>
            <PaymentCard payment={item} />
          </li>
        );
      })}
    </ul>
  );
}

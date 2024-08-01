import css from "./PaymentCard.module.css";

export default function PaymentCard({
  payment: {
    // id,
    cardNumber,
    cardType,
    cardOwner,
    date,
    amount,
    description,
    isPaid,
  },
}) {
  return (
    <div className={css.container}>
      <p className={css.text}>Amount: {amount}</p>
      {/* {isPaid ? <p>Status: Paid</p> : <p>Status: Pending</p>} */}
      {/* <p>{isPaid ? "Status: Paid" : "Status: Pending"}</p> */}
      <p className={css.text}>Status: {isPaid ? "Paid" : "Pending"}</p>
      <p className={css.text}>Description: {description}</p>
      <p className={css.text}>Card Number: {cardNumber}</p>
      <p className={css.text}>Card Type: {cardType}</p>
      <p className={css.text}>Card Holder Name: {cardOwner}</p>
      <p className={css.text}>Payment Date: {date}</p>
    </div>
  );
}

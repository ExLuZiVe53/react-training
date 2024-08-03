import clsx from "clsx";
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
  // console.log(clsx(css.text, isPaid ? css.isPaid : css.isPending));
  // console.log(clsx("a", null && "b", false && "c"));
  // console.log(
  //   clsx("a", "x", {
  //     b: null,
  //     c: true,
  //     d: false,
  //   })
  // );
  // console.log(
  //   clsx("text", {
  //     isPaid: isPaid,
  //     isPending: !isPaid,
  //   })
  // );
  // console.log(
  //   clsx(css.text, {
  //     [css.isPaid]: isPaid,
  //     [css.isPending]: !isPaid,
  //   })
  // );
  // const textClasses = [css.text];
  // if (isPaid) {
  //   textClasses.push(css.isPaid);
  // } else {
  //   textClasses.push(css.isPending);
  // }
  // console.log(textClasses.join(" "));

  const amountClassNames = clsx(css.text, isPaid ? css.isPaid : css.isPending);

  return (
    <div className={css.container}>
      <p className={css.text}>Amount: {amount}</p>
      {/* {isPaid ? <p>Status: Paid</p> : <p>Status: Pending</p>} */}
      {/* <p>{isPaid ? "Status: Paid" : "Status: Pending"}</p> */}
      {/* <p className={textClasses.join(" ")}>
        Status: {isPaid ? "Paid" : "Pending"}
      </p> */}
      <p className={amountClassNames}>Status: {isPaid ? "Paid" : "Pending"}</p>
      <p className={css.text}>Description: {description}</p>
      <p className={css.text}>Card Number: {cardNumber}</p>
      <p className={css.text}>Card Type: {cardType}</p>
      <p className={css.text}>Card Holder Name: {cardOwner}</p>
      <p className={css.text}>Payment Date: {date}</p>
    </div>
  );
}

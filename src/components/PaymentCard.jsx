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
    <div>
      <p>Amount: {amount}</p>
      {/* {isPaid ? <p>Status: Paid</p> : <p>Status: Pending</p>} */}
      {/* <p>{isPaid ? "Status: Paid" : "Status: Pending"}</p> */}
      <p>Status: {isPaid ? "Paid" : "Pending"}</p>
      <p>Description: {description}</p>
      <p>Card Number: {cardNumber}</p>
      <p>Card Type: {cardType}</p>
      <p>Card Holder Name: {cardOwner}</p>
      <p>Payment Date: {date}</p>
      <hr />
    </div>
  );
}

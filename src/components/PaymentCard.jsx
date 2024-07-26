export default function PaymentCard(props) {
  console.log(props);
  return (
    <div>
      <p>Amount: {props.amount}</p>
      {/* <p>Status: Paid or Pending</p>
      <p>Description: </p>
      <p>Card Number: </p>
      <p>Card Type: </p>
      <p>Card Holder Name: </p>
      <p>Payment Date: </p> */}
      <hr />
    </div>
  );
}

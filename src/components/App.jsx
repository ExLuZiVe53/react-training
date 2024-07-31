import initialPayments from "../payments.json";
import PageTitle from "./PageTitle";
import PaymentList from "./PaymentList";

const Box = ({ children }) => {
  return (
    <div>
      <p>Before</p>
      <p>After</p>
      {children}
    </div>
  );
};

export default function App() {
  return (
    <>
      <PageTitle text="Payments" />
      <PaymentList payments={initialPayments} />
      <Box>
        <p>Super</p>
        <a href=""></a>
        <span></span>
      </Box>
      <p>
        Hello
        <a href=""></a>
        <span></span>
      </p>
    </>
  );
}

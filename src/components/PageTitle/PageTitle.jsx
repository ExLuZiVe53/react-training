import css from "./PageTitle.module.css";
import { HiAcademicCap } from "react-icons/hi";

export default function PageTitle({ children }) {
  return (
    <h1 className={css.text}>
      <HiAcademicCap className={css.icon} />
      {children}
    </h1>
  );
}

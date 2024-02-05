import { FunctionComponent } from "react";
import RegisterForm from "../components/RegisterForm";
import styles from "./Register.module.css";

const Register: FunctionComponent = () => {
  return (
    <div className={styles.register}>
      <div className={styles.wrapperImage200}>
        <img className={styles.image200Icon} alt="" src="/image-200@2x.png" />
      </div>
      <RegisterForm />
    </div>
  );
};

export default Register;
